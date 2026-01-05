var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/poster-keisuke.github.io/',
];
self.addEventListener("install", () => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", () => {
  // 今は何もしなくてOK
});
