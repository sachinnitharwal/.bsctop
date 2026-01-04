const CACHE_NAME = 'bsctop-v4';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/logo.png',
  '/about.html',
  '/privacy.html',
  '/terms.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
