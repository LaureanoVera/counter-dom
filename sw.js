const CACHE_NAME = "v1_cache_counter_pwa",
  urlsToCache = [
    "./",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    "./assets",
    "./assets/images",
    "./assets/images/logo48.png",
    "./assets/js",
    "./assets/style",
  ];

// Install counter
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Error:", err))
  );
});

// Activates and searches for resources to make them work without connection
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Remove what we don't need from the cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      // Tells the sw to activate the current cache
      .then(() => self.clients.claim())
  );
});

// When the browser retrieves a url (online)
self.addEventListener('fetch', e => {
  // Reply with cached object or go ahead and find the actual url
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
        // Retrieve from cache
        return res
      }
      // Retrieve the request to the url
      return fetch(e.request);
    })
  );
});
