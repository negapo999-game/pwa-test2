// self.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open("study-cache").then(cache =>
//       cache.addAll(["index.html"])
//     )
//   );
// });

// self.addEventListener("fetch", event => {
//   event.respondWith(
//     caches.match(event.request).then(response =>
//       response || fetch(event.request)
//     )
//   );
// });
// キャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/poster-keisuke.github.io/',
];

// // インストール処理
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches
//             .open(CACHE_NAME)
//             .then(function(cache) {
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// // リソースフェッチ時のキャッシュロード処理
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches
//             .match(event.request)
//             .then(function(response) {
//                 return response ? response : fetch(event.request);
//             })
//     );
// });
// self.addEventListener("install", e => {
//   e.waitUntil(
//     caches.open("habit-cache").then(cache =>
//       cache.addAll(["./", "./index.html"])
//     )
//   );
// });
// service-worker.js
self.addEventListener("install", () => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", () => {
  // 今は何もしなくてOK
});
