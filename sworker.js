self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "/",
                "/home.html",
                "/event.html",
                "/contact.html",
                "/blog.html",
                "/about.html",
                "/show.html",
                "/style.css",
                "/assets/audios/laughing.mp3",
                "/assets/audios/love.mp3",
                "/assets/css/bootstrap.min.css",
                "/assets/css/flaticon.css",
                "/assets/css/fontawesome-all.min.css",
                "/assets/css/fraudio.min.css",
                "/assets/css/index.css",
                "/assets/css/jquery.flex-images.css",
                "/assets/css/line-awesome.min.css",
                "/assets/css/magnific-popup.css",
                "/assets/css/nice-select.css",
                "/assets/css/odometer.css",
                "/assets/css/silck.css",
                "/assets/css/style.css",
                "/assets/flaticons/icomoon.eot",
                "/assets/flaticons/icomoon.svg",
                "/assets/flaticons/icomoon.ttf",
                "/assets/flaticons/icomoon.woff",
                "/assets/fonts",
                "/assets/images/icons/apple.png",
                "/assets/images/icons/play-icon.png",
                "/assets/images/logo/favicon1.png",
                "/assets/images/logo/favicondemo.png",
                "/assets/images/logo/footer-logo.png",
                "/assets/images/logo/logo.png",
                "/assets/images/logo/logo1.png",
                "/assets/images/logo/logos.png",
                "/assets/images/thumb",
                "/assets/images",
                "/assets/js/bootstrap.min.js",
                "/assets/js/fraudio.min.js",
                "/assets/js/jquery-3.6.0.min.js",
                "/assets/js/jquery.nice-select.min.js",
                "/assets/js/magnific-popup.min.js",
                "/assets/js/main.js",
                "/assets/js/odometer.min.js",
                "/assets/js/popper.min.js",
                "/assets/js/silck.min.js",
                "/assets/js/viewport.jquery.js",
                "/assets/scss/abstracts",
                "/assets/scss/base",
                "/assets/scss/components",
                "/assets/scss/layout",
                "/assets/scss/pages",
                "/assets/scss/about.html",
                "/assets/scss/abstracts",
                "/assets/webfonts",
                "/assets/cgi-bin/.htaccess",
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
