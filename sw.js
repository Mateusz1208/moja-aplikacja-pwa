self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/moja-aplikacja-pwa/', 
                '/moja-aplikacja-pwa/index.html', 
                '/moja-aplikacja-pwa/script.js', 
                '/moja-aplikacja-pwa/style.css' 
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
