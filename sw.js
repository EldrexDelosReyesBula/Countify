const CACHE_NAME = 'countify-lite-v2';
const ASSETS_TO_CACHE = [
  '/',
  'https://eldrexdelosreyesbula.github.io/Counting-/index.html',
  'https://eldrexdelosreyesbula.github.io/Counting-/main.css',
  'https://eldrexdelosreyesbula.github.io/Counting-/main.js',
  'https://eldrexdelosreyesbula.github.io/Counting-/countify.svg',
  'https://eldrexdelosreyesbula.github.io/Counting-/manifest.json',

  'https://eldrexdelosreyesbula.github.io/Counting-/fonts/MaterialIcons-Regular.woff2',
  'https://eldrexdelosreyesbula.github.io/Counting-/fonts/MaterialIcons-Regular.woff'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
