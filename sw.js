const APP_VERSION = '2.0.1.27';
const CACHE_NAME = `countify-plus-v${APP_VERSION}`;
const RUNTIME_CACHE = 'runtime-cache';

// Core assets that should be cached during installation
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/main.html',
  '/css/main.css',
  '/css/mdui.css',
  '/css/mdui.min.css',
  '/manifest.json',
  '/docs/privacy.html',
  '/docs/license.html',
  '/docs/terms.html',
  '/offline.html',
  '/js/app.js'
];

// Logo and icon assets
const LOGO_ASSETS = [
  '/logo/countify.svg',
  '/logo/countify_activity.svg',
  '/logo/countify_dashboard.svg',
  '/logo/new_activity.svg',
  '/logo/countify-72.png',
  '/logo/countify-96.png',
  '/logo/countify-192.png',
  '/logo/countify-512.png',
  '/logo/MOBILE INSTALL_20251103_115307_0000.png'
];

// Illustration assets
const ILLUSTRATION_ASSETS = [
  '/assets/illustrations/DESKTOP_INSTALL.svg',
  '/assets/illustrations/analyze.svg',
  '/assets/illustrations/count.svg',
  '/assets/illustrations/data.svg',
  '/assets/illustrations/export.svg',
  '/assets/illustrations/offline.svg',
  '/assets/illustrations/privacy.svg',
  '/assets/illustrations/realtime.svg',
  '/assets/illustrations/report.svg',
  '/assets/illustrations/speed.svg',
  '/assets/illustrations/sync.svg',
  '/assets/illustrations/team.svg'
];

// Image assets
const IMAGE_ASSETS = [
  '/assets/images/favicon.ico',
  '/assets/images/og-image.jpg',
  '/assets/images/twitter-card.jpg'
];

// External resources to cache
const EXTERNAL_RESOURCES = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://cdn.jsdelivr.net/npm/mdui@1.0.2/dist/css/mdui.min.css'
];

// Combine all assets for caching
const ALL_ASSETS = [
  ...CORE_ASSETS,
  ...LOGO_ASSETS,
  ...ILLUSTRATION_ASSETS,
  ...IMAGE_ASSETS
];

// Install event - cache all assets and external resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        
        // Cache all local assets with proper error handling
        const cachePromises = ALL_ASSETS.map(asset => 
          cache.add(asset).catch(err => {
            console.warn(`Failed to cache ${asset}:`, err);
            // Don't fail installation for individual asset failures
            return Promise.resolve();
          })
        );

        // Cache external resources with network-first approach
        const externalPromises = EXTERNAL_RESOURCES.map(url => 
          fetch(url)
            .then(response => {
              if (response.ok) {
                return cache.put(url, response);
              }
              throw new Error(`Failed to fetch ${url}: ${response.status}`);
            })
            .catch(err => {
              console.warn(`Couldn't cache ${url}:`, err);
              return Promise.resolve();
            })
        );

        // Wait for all caching operations
        await Promise.all([...cachePromises, ...externalPromises]);

        // Skip waiting to activate the new service worker immediately
        self.skipWaiting();
        console.log(`Service Worker v${APP_VERSION} installed successfully. Cached ${ALL_ASSETS.length} assets.`);
      } catch (error) {
        console.error('Service Worker installation failed:', error);
        // Even if installation fails partially, continue
        self.skipWaiting();
      }
    })()
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();

        await Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log(`Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );

        // Claim all clients to ensure the new SW controls the page immediately
        await self.clients.claim();
        console.log(`Service Worker v${APP_VERSION} activated`);

        // Notify all clients about the update
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_UPDATED',
            version: APP_VERSION
          });
        });
      } catch (error) {
        console.error('Service Worker activation failed:', error);
        throw error;
      }
    })()
  );
});

// Fetch event handler with sophisticated strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and browser-specific URLs
  if (request.method !== 'GET' || 
      request.url.startsWith('chrome-extension://') || 
      request.url.includes('browser-sync')) {
    return;
  }

  // Handle different types of requests with appropriate strategies
  if (url.origin === location.origin) {
    // Local assets - Cache First with Network Update
    if (ALL_ASSETS.some(asset => {
      // Handle both exact matches and path matches for illustrations
      return url.pathname === asset || 
             url.pathname.startsWith('/assets/illustrations/') ||
             url.pathname.startsWith('/logo/') ||
             url.pathname.startsWith('/assets/images/');
    })) {
      event.respondWith(cacheFirstWithUpdate(request));
      return;
    }

    // HTML pages - Network First with Cache Fallback
    if (request.headers.get('accept')?.includes('text/html')) {
      event.respondWith(networkFirst(request));
      return;
    }

    // API requests - Network First with Cache Fallback
    if (url.pathname.startsWith('/api/')) {
      event.respondWith(networkFirst(request));
      return;
    }
  }

  // External resources - Stale While Revalidate
  if (EXTERNAL_RESOURCES.includes(request.url)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default strategy for all other requests: Network First with Cache Fallback
  event.respondWith(networkFirst(request));
});

// Cache First with Network Update strategy
async function cacheFirstWithUpdate(request) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    // Always make a network request in the background to update the cache
    const networkPromise = fetch(request)
      .then(async networkResponse => {
        if (networkResponse.ok) {
          await cache.put(request, networkResponse.clone());
          console.log(`Updated cache for: ${request.url}`);
        }
        return networkResponse;
      })
      .catch(() => undefined);

    // Return cached response if available, otherwise wait for network
    if (cachedResponse) {
      // Start network request but don't wait for it
      networkPromise.catch(() => {});
      return cachedResponse;
    }

    // If no cache, wait for network
    const networkResponse = await networkPromise;
    if (networkResponse) {
      return networkResponse;
    }

    throw new Error('Both cache and network failed');
  } catch (error) {
    console.error('CacheFirstWithUpdate failed:', error);
    
    // For image assets, return a generic placeholder if available
    if (request.url.includes('/assets/') || request.url.includes('/logo/')) {
      const cache = await caches.open(CACHE_NAME);
      const placeholder = await cache.match('/logo/countify.svg');
      if (placeholder) {
        return placeholder;
      }
    }
    
    return fetch(request);
  }
}

// Network First strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);

    // Cache the successful response
    if (networkResponse.ok) {
      const runtimeCache = await caches.open(RUNTIME_CACHE);
      await runtimeCache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.warn(`Network failed for ${request.url}, falling back to cache`);

    // Try to get from runtime cache first
    const runtimeCache = await caches.open(RUNTIME_CACHE);
    let cachedResponse = await runtimeCache.match(request);

    if (!cachedResponse) {
      // Fall back to core cache
      const coreCache = await caches.open(CACHE_NAME);
      cachedResponse = await coreCache.match(request);
    }

    if (cachedResponse) {
      return cachedResponse;
    }

    // For HTML requests, return offline page
    if (request.headers.get('accept')?.includes('text/html')) {
      const coreCache = await caches.open(CACHE_NAME);
      const offlinePage = await coreCache.match('/offline.html');
      if (offlinePage) {
        return new Response(offlinePage.body, {
          status: 200,
          statusText: 'OK',
          headers: offlinePage.headers
        });
      }
    }

    // Generic offline response
    return new Response(
      JSON.stringify({
        error: 'offline',
        message: 'You appear to be offline. Please check your connection.'
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request) {
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    const cachedResponse = await cache.match(request);

    // Always make a network request to update the cache
    const networkPromise = fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      })
      .catch(() => undefined);

    // Return cached response if available, otherwise wait for network
    if (cachedResponse) {
      networkPromise.catch(() => {});
      return cachedResponse;
    }

    const networkResponse = await networkPromise;
    if (networkResponse) {
      return networkResponse;
    }

    throw new Error('Both cache and network failed');
  } catch (error) {
    console.error('StaleWhileRevalidate failed:', error);
    return fetch(request);
  }
}

// Preload critical assets for better performance
async function preloadCriticalAssets() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const criticalAssets = [
      '/',
      '/index.html',
      '/css/main.css',
      '/js/app.js',
      '/logo/countify.svg'
    ];

    await Promise.all(
      criticalAssets.map(asset => 
        cache.match(asset) || cache.add(asset).catch(() => {})
      )
    );
  } catch (error) {
    console.error('Preloading critical assets failed:', error);
  }
}

// Background sync registration
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    console.log('Background sync triggered');
    event.waitUntil(
      preloadCriticalAssets().catch(console.error)
    );
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data?.json() || {};
  } catch (e) {
    data = {
      title: 'Countify Plus',
      body: 'You have a new notification'
    };
  }

  const title = data?.title || 'Countify Plus';
  const options = {
    body: data?.body || 'You have a new notification',
    icon: '/logo/countify-192.png',
    badge: '/logo/countify-72.png',
    data: data?.data || { url: '/' },
    tag: data?.tag || 'countify-notification'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        // Focus on existing window if available
        for (const client of clientList) {
          if (client.url.includes(urlToOpen) && 'focus' in client) {
            return client.focus();
          }
        }

        // Otherwise open a new window
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Message handling for updates and other communications
self.addEventListener('message', (event) => {
  switch (event.data?.type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'GET_VERSION':
      event.ports[0]?.postMessage({ 
        version: APP_VERSION,
        cachedAssets: ALL_ASSETS.length
      });
      break;

    case 'TRIM_CACHE':
      trimCache();
      break;

    case 'CHECK_UPDATE':
      checkForUpdates();
      break;

    case 'PRELOAD_ASSETS':
      preloadCriticalAssets();
      break;

    case 'GET_CACHE_STATUS':
      getCacheStatus(event);
      break;
  }
});

// Get cache status for debugging
async function getCacheStatus(event) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    const cachedUrls = keys.map(req => req.url);
    
    event.ports[0]?.postMessage({
      totalCached: cachedUrls.length,
      cachedUrls: cachedUrls,
      expectedAssets: ALL_ASSETS.length
    });
  } catch (error) {
    event.ports[0]?.postMessage({
      error: error.message
    });
  }
}

// App installation handling
let deferredPrompt;

self.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;

  // Notify all clients that installation is available
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'CAN_INSTALL',
        promptAvailable: true
      });
    });
  });
});

self.addEventListener('appinstalled', (event) => {
  deferredPrompt = null;

  // Notify all clients that app was installed
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'APP_INSTALLED',
        timestamp: new Date().toISOString(),
        version: APP_VERSION
      });
    });
  });
});

// Cache trimming function
async function trimCache() {
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    const keys = await cache.keys();
    const now = Date.now();
    let trimmedCount = 0;

    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const dateHeader = response.headers.get('date');
        if (dateHeader) {
          const fetchedDate = new Date(dateHeader).getTime();
          if (now - fetchedDate > 30 * 24 * 60 * 60 * 1000) {
            await cache.delete(request);
            trimmedCount++;
          }
        }
      }
    }
    console.log(`Cache trimmed: ${trimmedCount} entries removed`);
  } catch (error) {
    console.error('Cache trimming failed:', error);
  }
}

// Check for updates function
async function checkForUpdates() {
  try {
    const response = await fetch('/version.json', { 
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.version && data.version !== APP_VERSION) {
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'UPDATE_AVAILABLE',
            currentVersion: APP_VERSION,
            newVersion: data.version
          });
        });
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Update check failed:', error);
    return false;
  }
}

// Periodic cache validation (runs every 24 hours)
async function validateCache() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    let validatedCount = 0;

    for (const request of keys) {
      // Skip external resources
      if (EXTERNAL_RESOURCES.includes(request.url)) continue;

      try {
        const networkResponse = await fetch(request.url, {
          headers: { 'Cache-Control': 'no-cache' }
        });
        
        if (networkResponse.ok) {
          await cache.put(request, networkResponse);
          validatedCount++;
        }
      } catch (error) {
        console.warn(`Cache validation failed for ${request.url}:`, error);
      }
    }

    console.log(`Cache validation completed: ${validatedCount} assets updated`);
  } catch (error) {
    console.error('Cache validation process failed:', error);
  }
}

// Handle service worker errors
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

// Initialize periodic tasks when service worker starts
self.addEventListener('activate', (event) => {
  // Run cache validation once per day
  setInterval(validateCache, 24 * 60 * 60 * 1000);
});