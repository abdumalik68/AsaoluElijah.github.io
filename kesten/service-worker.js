const cacheName = 'cache-v1';
const precacheResources = [
    '/',
    'index.html',
    'css/kesten.css',
    'css/style.css',
    'js/jquery-3.4.1.min.js',
    'js/kesten.js',
    'fonts/Helvetica-Regular.otf',
    'fonts/Montserrat-Light.otf',
    'fonts/Montserrat-Regular.ttf',
    'fonts/Montserrat-SemiBold.otf',
    'img/angry.png',
    'img/cool.png',
    'img/kes.png',
    'img/mic-icon.png',
    'img/welcome.png'
];

self.addEventListener('install', event => {
    console.log('Service worker install event :)');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(precacheResources);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});