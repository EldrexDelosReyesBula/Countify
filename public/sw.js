const APP_VERSION = '2.0.1.27';
const CACHE_NAME = `countify-plus-v${APP_VERSION}`;
const RUNTIME_CACHE = 'runtime-cache';

// Core assets that should be cached during installation
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/lans.html',
  '/fonts/language.js',
  '/css/main.css',
  '/css/mdui.css',
  '/css/mdui.min.css',
  '/logo/countify.svg',
  '/manifest.json',
  '/docs/privacy.html',
  '/functions/donation.html',
  '/docs/license.html',
  '/docs/terms.html',
  '/offline.html',
  '/js/app.js'
];

// External resources to cache
const EXTERNAL_RESOURCES = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://cdn.jsdelivr.net/npm/mdui@1.0.2/dist/css/mdui.min.css'
];

// Install event - cache core assets and external resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        
        // Cache core assets
        await cache.addAll(CORE_ASSETS);
        
        // Cache external resources with network-first approach
        const externalPromises = EXTERNAL_RESOURCES.map(url => 
          fetch(url)
            .then(response => {
              if (response.ok) {
                return cache.put(url, response);
              }
              return Promise.reject(`Failed to fetch ${url}: ${response.status}`);
            })
            .catch(err => {
              console.warn(`Couldn't cache ${url}:`, err);
              // Don't fail the whole installation if external resources fail
              return Promise.resolve();
            })
        );
        
        await Promise.all(externalPromises);
        
        // Skip waiting to activate the new service worker immediately
        self.skipWaiting();
        console.log(`Service Worker v${APP_VERSION} installed successfully`);
      } catch (error) {
        console.error('Service Worker installation failed:', error);
        throw error;
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
        
        // Optional: Send a message to all clients about the update
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
    if (CORE_ASSETS.some(asset => url.pathname === asset)) {
      event.respondWith(cacheFirstWithUpdate(request));
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
    // Try to get from cache first
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    // Always make a network request in the background to update the cache
    const networkPromise = fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      })
      .catch(() => {}); // Silent fail is okay here
    
    // Return cached response if available, otherwise wait for network
    return cachedResponse || (await networkPromise);
  } catch (error) {
    console.error('CacheFirstWithUpdate failed:', error);
    return fetch(request); // Fallback to network
  }
}

// Network First strategy
async function networkFirst(request) {
  try {
    // Try to fetch from network first
    const networkResponse = await fetch(request);
    
    // Cache the successful response
    if (networkResponse.ok) {
      const runtimeCache = await caches.open(RUNTIME_CACHE);
      await runtimeCache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn(`Network failed for ${request.url}, falling back to cache`);
    
    // Try to get from cache
    const cache = await caches.open(RUNTIME_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // For HTML requests, return offline page
    if (request.headers.get('accept').includes('text/html')) {
      const coreCache = await caches.open(CACHE_NAME);
      return coreCache.match('/offline.html');
    }
    
    // Generic offline response
    return new Response('You appear to be offline. Please check your connection.', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({ 'Content-Type': 'text/plain' })
    });
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
      .catch(() => {}); // Silent fail is okay here
    
    // Return cached response if available, otherwise wait for network
    return cachedResponse || (await networkPromise);
  } catch (error) {
    console.error('StaleWhileRevalidate failed:', error);
    return fetch(request); // Fallback to network
  }
}

// Background sync registration
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    console.log('Background sync triggered');
    // Implement your background sync logic here
  }
});

// Periodic sync registration (for periodic background updates)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-content') {
    console.log('Periodic sync triggered');
    // Implement your periodic update logic here
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  const data = event.data?.json();
  const title = data?.title || 'Countify Plus';
  const options = {
    body: data?.body || 'You have a new notification',
    icon: '/logo/countify-192.png',
    badge: '/logo/countify-72.png',
    data: data?.data || { url: '/' }
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
          if (client.url === urlToOpen && 'focus' in client) {
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
      event.ports[0]?.postMessage({ version: APP_VERSION });
      break;
      
    case 'TRIM_CACHE':
      trimCache();
      break;
      
    case 'CHECK_UPDATE':
      checkForUpdates();
      break;
  }
});

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
        timestamp: new Date().toISOString()
      });
    });
  });
});

// Optional: Cache trimming function
async function trimCache() {
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    const keys = await cache.keys();
    const now = Date.now();
    
    // Remove entries older than 30 days
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const dateHeader = response.headers.get('date');
        if (dateHeader) {
          const fetchedDate = new Date(dateHeader).getTime();
          if (now - fetchedDate > 30 * 24 * 60 * 60 * 1000) {
            await cache.delete(request);
          }
        }
      }
    }
  } catch (error) {
    console.error('Cache trimming failed:', error);
  }
}

// Optional: Check for updates function
async function checkForUpdates() {
  try {
    const response = await fetch('/version.json', { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      if (data.version !== APP_VERSION) {
        // Notify clients about available update
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'UPDATE_AVAILABLE',
            currentVersion: APP_VERSION,
            newVersion: data.version
          });
        });
      }
    }
  } catch (error) {
    console.error('Update check failed:', error);
  }
}