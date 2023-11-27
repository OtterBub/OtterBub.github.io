'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "263549f6d1db25f9be8fa1130191d928",
"index.html": "083c970f234107270a46c04dc70476dc",
"/": "083c970f234107270a46c04dc70476dc",
"main.dart.js": "1ee1c3847a192780d879c75466c65ef7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f35f2df93d96d91baaca1939ae2803bd",
".git/ORIG_HEAD": "05ee0fe922902e1847792d8eb31d3e9e",
".git/config": "4f16b069d3a9b393cb5496195d372d1a",
".git/objects/0c/9f8996f5aee2087b6a5938b4158402c23672e6": "f77fb5506bec51c06e27921ff016066e",
".git/objects/6f/6f8f1e905c9bfaeece1954fea3c89ebac28610": "f844cd3ad2782f0e82c880100f0c1534",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/48e97fdcd74cad98b27874c1f6779d72c53b6c": "6024c2d62a189bae6dc00cd0ba1baa78",
".git/objects/69/59c880310603de36835e0f2e6cb2029406bc90": "73cc52aceae79b051b0dc1e062750395",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/f416951e89fcfe6980bf30461bdb61f6fde589": "40461ec6f3ca30e9f268189a5b4473ce",
".git/objects/0e/aba3c8f6766cb361c3dabc83b296620fd66505": "d803248787e56a12ad5eb239aa9788d1",
".git/objects/60/3e08f66b3f73b2af5c4c2179f7d49c0b5df5f2": "189e322fa9d88ff5b4c81a43679ee05c",
".git/objects/a4/616b43d24cb9cbc4c5879c8bb49f35c12a4e8f": "87df194537e5e27e4e9ef49b61b801d2",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/7964ca60b357442b8f536d1983605b112e2eda": "20fb30b51e744d75bf86493da01f6df0",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/88e19502a7a9d9a5b0380fa07951ee3f9b907a": "2e494032f6088c904cf355d0245f6049",
".git/objects/da/2a025e88b56c5476abe5d9bb0790e38f6cc921": "0f464a3e7eeb53921931f98b8c7564a5",
".git/objects/b4/9679787eef031d46ed58640fdb1ab6b1122016": "116bff2573628aa9893ad975660efd57",
".git/objects/b4/e74651f3845254395f445375a978d7b0a7cccd": "71e72a8704f46a9a09d36cb6367cf6d0",
".git/objects/d1/5a9b47113a870491cb419ea7c28b729f9d3131": "ba576050e3bad5464ad68e589ce4c445",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/0b470d79446449b4496b7ccf41ed6e8870c972": "99f42952d83fe0ffa28dbdffcfe74ac8",
".git/objects/f5/319e3f7997507e569d9c6156b4a26da734ff89": "d6f66d63bc88999df15f76fce0a9694c",
".git/objects/e4/3b0f988953ae3a84b00331d0ccf5f7d51cb3cf": "106f9f8f7e8a39d99259935974ba928a",
".git/objects/4e/f0d49b077e6241cb58921e329fa8e8d2667749": "a52a2eef8bae84ee82e916e6ed329cbe",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/11/77e7e042b08ba542816df37991820ff4bf96f8": "e498c1323c6dfb90d9c85676a7183346",
".git/objects/11/87158f6364aa6f06b80277315b79da004ef472": "159bf370acbfe186b06f397e609e7475",
".git/objects/16/46913a1ed7311d8518acaaf7b4fcd36f67f28c": "9bfd9bc7b17dae852deb0c4704cf09b9",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/7b/74933c858737fb6a91c3e466a590c28ced0b75": "8a461ab607f66262f1a8fefab423ef9a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/e955357537d6c4ea1c7b717aef68eb50bba8ba": "41d9546bfdc40b85aa72f1548f7115dd",
".git/objects/43/12a3e668afca620e9eca203f98a2ed6dcac846": "1c40e0abf3f8fd0f4404330e1c718c1d",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/27731b0e508686ec3bfba3f292e1c2dd46e08e": "9c9e18e5f82329dbd4d8dbf963dcdcf3",
".git/objects/5c/1aabe245285f94719ee0fbc4ff3555fcebdcb4": "df65288960b95bd736afd83d6aa91e41",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/91/78a2921e81fb5cb058e1da0576ab738b91e462": "1b303fc025a37222875464cea4e837d4",
".git/objects/98/e2e0a778c82310d5cb49ba883bf96aa0159d04": "3d97fe997fe484478b6f57331fc8a480",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/06/76d259dc48b64bd67050cc1759c1d18d42c26c": "fec16c1f308e030b4b3f5a5039bc1535",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/52/74f869664558ba1d833ddcd73fdb27917ded80": "e9c63fbd70ffb0e3b9c5e6fdcc3e9636",
".git/objects/55/c25736cb8e85ccb549a044a31604bf91a269ee": "131bf926a939ddddad4e08336cf75911",
".git/objects/97/30a62e4c8ce30a316de3da0ce7d0803e184f39": "73cfe5a12ff0959faf2be626add07e10",
".git/objects/0f/f1df8c5eb7e1fd62ff16b8ac289fca74a1e4e3": "fcf0c88dfc616d3d10d88aaea5e83989",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/ed132d076143fbd2d62737cbdae9e834ec6872": "438dffa9061d564e268969adbf37b7da",
".git/objects/0a/689dfce434ddacf68f2b6159876a51bf0b664d": "80e71ad07366085f7f8d00892eaaeb6e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dc/c5650e278f550372d8fc0f53870d500b70258c": "43ade104d98caff68391a159b66978a1",
".git/objects/b7/10d9a188cff8a6d1b1b293d7de11f5d37b5324": "819e73f023eea1f1cd1dce5bcd4f3593",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/fd61a626176b3e0f7d01f3bc7b7c90e767448a": "041fe8b7587a164577485eba74a36ed2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/6b8819fb2d1cecdb7ef88c7ef07cf3f84b956b": "a71a8ddabcbe95a7accb74f19e157ffb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/8743a2f3924f1b2ed3b9740fabecb32a076ed3": "b9c174b97e8e53294bc7d29a803b904c",
".git/objects/ff/5798baffadbc05391b5c13e71292aef2207ad2": "4541023f9fe670d02713c724ea4ec889",
".git/objects/e9/ddb2bd28aa43f36d591e31f706efeba909f1b7": "c5b9f718b4335b6ca2791a53798fef74",
".git/objects/f1/0fa80f36dc2a6af9e10c6e2e83cdf3bdc85fdc": "1244235a91ebb8534976f17c60d05543",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/23/dfe5f59ea1f000189eabb3e51e99f80b3be792": "a0e468908ee64fee72310b526ad8bb26",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/76/bc79caf04089e0e13f1ca3ce7482d814bb5080": "143873107e11b2df54517bbf9fb0aad5",
".git/objects/1c/0b22b497c67db78967dbcb1ce14cf0c22eb640": "453f1aadcb6fad9899d28a608a442397",
".git/objects/1c/4c860d4c4a56fda7156bd2623b13f4fe65d7f7": "849ba6b5c3dab61d42538ce588bcda1e",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/40/66ad802e4a0eac2213e9e69eb12deb502c7947": "a609cd20e7a5f17f53b2b4177451886f",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bcacfbcb7a71df97968064239127fa34",
".git/logs/refs/heads/master": "5c21d02aa7de0e6c6edd72a867ac0ee8",
".git/logs/refs/heads/main": "144ada81ffa8d5e0c31748017fd46b29",
".git/logs/refs/remotes/otterbub/master": "4a0c83e08b9152f196b74bc1b12c7b33",
".git/logs/refs/remotes/otterbub/main": "08e3b76b217630a147fc17fe3d5d822e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "262c8685da7cb8f9ba179b40c39a6299",
".git/refs/heads/main": "05ee0fe922902e1847792d8eb31d3e9e",
".git/refs/remotes/otterbub/master": "262c8685da7cb8f9ba179b40c39a6299",
".git/refs/remotes/otterbub/main": "05ee0fe922902e1847792d8eb31d3e9e",
".git/index": "70b3dd34bdb41e6affe81303e01d14eb",
".git/COMMIT_EDITMSG": "8be5c2729138befa2c1f2c67b24b2bd8",
".git/FETCH_HEAD": "9d643d3c35a361f22eec09d4af824052",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "7861d1c8d89b2e92d922d4b525d2afe6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
