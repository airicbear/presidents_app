'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ab5672d836921b577b596e2dd2ba6884",
"index.html": "a70f6284ed86bc151a4bb18af123249a",
"/": "a70f6284ed86bc151a4bb18af123249a",
"main.dart.js": "b1244b208c17cd001e8d34e4e3367e34",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "02b23f959750a61717694cd76e94818a",
"assets/AssetManifest.json": "a8692c31cc5fd2158c7a5543733b81ab",
"assets/NOTICES": "c206c4e96e8d15d39759973b91f45a77",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/presidents/john_adams.jpg": "24e68938deefbc88178acfceb5deb123",
"assets/assets/images/presidents/gerald_r_ford.jpg": "be62ce5cab4179fbfe8c11434a5c17c0",
"assets/assets/images/presidents/rutherford_b_hayes.jpg": "d80efd32a2a97d88a34d016d61d82afa",
"assets/assets/images/presidents/andrew_jackson.jpg": "850f4c8361d40393fb35d5cdde36d0b1",
"assets/assets/images/presidents/benjamin_harrison.jpg": "b44b10c68366998463ea48a0900b5efb",
"assets/assets/images/presidents/grover_cleveland.jpg": "8d5e3e53b655b80a30ead72188eb056a",
"assets/assets/images/presidents/richard_nixon.jpg": "c074b5c7365c757cfae0086272501250",
"assets/assets/images/presidents/george_bush.jpg": "d58e6e9071295c63473894dc8b2e6fa4",
"assets/assets/images/presidents/james_madison.jpg": "b087684ecd9886d2f3514fbaf6fb1af7",
"assets/assets/images/presidents/william_mckinley.jpg": "ad1066bd71d8168d84e997f39db89ed3",
"assets/assets/images/presidents/george_washington.jpg": "11de0f9681ab17259cb7192ae0234efa",
"assets/assets/images/presidents/andrew_johnson.jpg": "4f1ef01bf5ccb6d1d2af8281daf48a0f",
"assets/assets/images/presidents/barack_obama.jpg": "e8e391a0ab32aebc4805666d331e5cdc",
"assets/assets/images/presidents/franklin_pierce.jpg": "3ff2a25e319fdcdbbaaa0b9351dbd3b7",
"assets/assets/images/presidents/woodrow_wilson.jpg": "37ad73f752011f511a7668ec30e37ccc",
"assets/assets/images/presidents/lyndon_b_johnson.jpg": "72d308fbe5604dc42aa2c56febaeeb52",
"assets/assets/images/presidents/franklin_d_roosevelt.jpg": "369de2ea62ee39e3272a3511eb61b2ed",
"assets/assets/images/presidents/john_f_kennedy.jpg": "97c22e11a5d2b27a0e286532ad7f84bd",
"assets/assets/images/presidents/jimmy_carter.jpg": "2598acebee3e3eaa7d2e4151f536a42e",
"assets/assets/images/presidents/theodore_roosevelt.jpg": "f3432d2d52bfa252ce8efa6593507cea",
"assets/assets/images/presidents/thomas_jefferson.jpg": "66a1e8bb7e8ab1079393208ba65e1b32",
"assets/assets/images/presidents/martin_van_buren.jpg": "9ca48d9c6c6e8e0032d3fdb73075fde1",
"assets/assets/images/presidents/william_henry_harrison.jpg": "1a8ec0f2a1087be05b68b24dcacbc30f",
"assets/assets/images/presidents/joseph_r_biden.jpg": "3bfbfc2cc9c53f5f9b709e6ee33c3f9a",
"assets/assets/images/presidents/dwight_d_eisenhower.jpg": "ce4f8c9ede74fb577dbfa4cad3abf82c",
"assets/assets/images/presidents/james_monroe.jpg": "c81f81b303559f05cfc14cc15c46585e",
"assets/assets/images/presidents/james_k_polk.jpg": "788cf9b11b6ced9ef0aab07b07d635a4",
"assets/assets/images/presidents/calvin_coolidge.jpg": "197b1e591106a95b6707585eb1f01cae",
"assets/assets/images/presidents/donald_j_trump.jpg": "b3476d47970773885bec3875a89086f1",
"assets/assets/images/presidents/george_w_bush.jpg": "34138a7f673df2105ba6ed57fd34d601",
"assets/assets/images/presidents/warren_g_harding.jpg": "371ff29332835c861c83cbafe66859b1",
"assets/assets/images/presidents/john_tyler.jpg": "c0cd69bad577b2295bd99ca842c0b4af",
"assets/assets/images/presidents/john_quincy_adams.jpg": "8db6e61b2443250e020223cf34417929",
"assets/assets/images/presidents/chester_a_arthur.jpg": "5679626090620f28390b7d8ad681a23f",
"assets/assets/images/presidents/zachary_taylor.jpg": "f25b13b9034e8d3f141112dac4f3ab1e",
"assets/assets/images/presidents/ulysses_s_grant.jpg": "fc2f16cc796500376adffde165b24a04",
"assets/assets/images/presidents/william_howard_taft.jpg": "6a7ed720add62b42c79a9bf4c9e5780e",
"assets/assets/images/presidents/james_buchanan.jpg": "2ad0fb3926815e1234b60449d78d229b",
"assets/assets/images/presidents/james_a_garfield.jpg": "5e8f8fcff120aefa9037a05c3f724325",
"assets/assets/images/presidents/harry_s_truman.jpg": "1f74e6486fb03eb67d00dd06d4a2d111",
"assets/assets/images/presidents/ronald_reagan.jpg": "9a228dc85e66acec1c03cd970485397d",
"assets/assets/images/presidents/william_j_clinton.jpg": "d027f858aa88a3495a4894276deb12ad",
"assets/assets/images/presidents/herbert_hoover.jpg": "04d9fb3fe4548b94131840f08556b34a",
"assets/assets/images/presidents/abraham_lincoln.jpg": "45f5d535d46e8a42063fa395b2ab3596",
"assets/assets/images/presidents/millard_fillmore.jpg": "782dbfc8592924d7cfa4d3ae307e556e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
