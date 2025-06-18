const CACHE_NAME = "to-do-v1";
const URLS_TO_CACHE = [
  "/to-do-pwa/",
  "/to-do-pwa/index.html",
  "/to-do-pwa/style.css",
  "/to-do-pwa/script.js",
  "/to-do-pwa/icons/icon-192.png",
  "/to-do-pwa/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
