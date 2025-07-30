const CACHE_NAME = 'countify-plus-v3.0.0';
const ASSETS_TO_CACHE = [
  '/',
  '/lans.html',
  '/fonts/language.js',
  '/css/main.css',
  '/css/mdui.css',
  '/css/mdui.min.css',
  '/logo/countify.svg',
  '/manifest.json’,
'/docs/privacy.html',
'/docs/terms.html'
];

// Fonts to cache
const FONTS_TO_CACHE = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cache core assets
        const cacheCore = cache.addAll(ASSETS_TO_CACHE);
        // Cache fonts
        const cacheFonts = cache.addAll(FONTS_TO_CACHE);
        return Promise.all([cacheCore, cacheFonts]);
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.error('Failed to cache during install:', err);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
    .then(() => self.clients.claim())
    .catch((err) => {
      console.error('Failed during activation:', err);
    })
  );
});

// Fetch event - network first with cache fallback
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Skip non-GET requests and chrome-extension URLs
  if (request.method !== 'GET' || request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Handle API requests separately
  if (request.url.includes('/api/')) {
    return event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response for cache
          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(request, clone))
            .catch(() => {});
          return response;
        })
        .catch(() => {
          // Return cached API response if available
          return caches.match(request);
        })
    );
  }

  // For all other requests
  event.respondWith(
    fetch(request)
      .then((response) => {
        // If valid response, cache it
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(request, clone))
            .catch(() => {});
        }
        return response;
      })
      .catch(() => {
        // Return cached version or offline page
        return caches.match(request)
          .then((response) => {
            if (response) {
              return response;
            }
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            return new Response('Offline', { status: 503 });
          });
      })
  );
});

// Message handling for updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// App installation handling
let deferredPrompt;

self.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  
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
  
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'APP_INSTALLED'
      });
    });
  });
});