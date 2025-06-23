const CACHE_NAME = "to-do-v1";
const URLS_TO_CACHE = [
  "/pwa-tarefas/",
  "/pwa-tarefas/index.html",
  "/pwa-tarefas/style.css",
  "/pwa-tarefas/script.js",
  "/pwa-tarefas/icons/icon-192.png",
  "/pwa-tarefas/icons/icon-512.png",
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
