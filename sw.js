const CACHE_NAME = 'countify-lite-v3';
const ASSETS_TO_CACHE = [
  '/Counting-/',
  '/index.html',
  '/main.css',
  '/main.js',
  '/countify.svg',
  '/manifest.json',
  '/fonts/MaterialIcons-Regular.woff2',
  '/fonts/MaterialIcons-Regular.woff'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => 
      Promise.all(keys.map((key) => 
        key !== CACHE_NAME && caches.delete(key)
      ))
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});