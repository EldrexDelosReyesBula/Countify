const CACHE_NAME = 'countify-plus-v2.0.1.25';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/main.js',
  '/main.css',
  '/mdui.css',
  '/mdui.min.css',
  '/countify.svg',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  '/manifest.json'
];

// Install event - cache all essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
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
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Skip caching for POST requests and external resources except fonts
  if (event.request.method !== 'GET' || 
      (event.request.url.startsWith('http') && 
       !event.request.url.includes(self.location.origin) &&
       !event.request.url.includes('fonts.googleapis.com'))) {
    return event.respondWith(fetch(event.request));
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network, then cache it
        return fetch(event.request).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // If both cache and network fail, show a fallback
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/offline.html');
          }
        });
      })
  );
});

// Listen for message events (triggered from your main app)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Handle the beforeinstallprompt event (triggered when PWA is installable)
self.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  
  // Store the event for later use
  self.deferredPrompt = event;
  
  // You can send a message to your app to show an install button
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'CAN_INSTALL',
        event: {
          prompt: () => event.prompt(),
          userChoice: event.userChoice
        }
      });
    });
  });
});

// Handle appinstalled event
self.addEventListener('appinstalled', (event) => {
  // Clear the deferredPrompt so it can be garbage collected
  self.deferredPrompt = null;
  
  // Optionally send analytics or other tracking
  console.log('PWA was installed');
  
  // Notify your app that installation was successful
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'APP_INSTALLED'
      });
    });
  });
});