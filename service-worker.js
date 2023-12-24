/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0feac3f61a318b24a12ee6a258b7429f"
  },
  {
    "url": "assets/css/0.styles.275e0b56.css",
    "revision": "69bd52eae440a691b09c0e1d003d88b7"
  },
  {
    "url": "assets/img/aboba.9afd0d8a.png",
    "revision": "9afd0d8a856a1d456ca9093c518f9168"
  },
  {
    "url": "assets/img/Delete.Quiz.384de146.png",
    "revision": "384de1461f8b8747554796e079ca175a"
  },
  {
    "url": "assets/img/Delete.Role.07868bff.png",
    "revision": "07868bff791e0d1329abdc044a7669fe"
  },
  {
    "url": "assets/img/Delete.User.2094f5c8.png",
    "revision": "2094f5c86f8b802235ba54194858f622"
  },
  {
    "url": "assets/img/Get.Quiz.19d6adf1.png",
    "revision": "19d6adf1791be02c0f4b6b65c3130e00"
  },
  {
    "url": "assets/img/Get.Role.id.9ecd0da7.png",
    "revision": "9ecd0da7ef3dae906947385abe902c89"
  },
  {
    "url": "assets/img/Get.Role1.18fdc6cb.png",
    "revision": "18fdc6cbc48844eecb06129cb96b0e10"
  },
  {
    "url": "assets/img/Get.User.1.f8985c9a.png",
    "revision": "f8985c9ab88ff30dfdaf6fc7445a19e7"
  },
  {
    "url": "assets/img/Get.User.id.20face04.png",
    "revision": "20face04d9a6277ef4f2dd82e1b34be5"
  },
  {
    "url": "assets/img/Post.Quiz.b152c060.png",
    "revision": "b152c06049eac975431f0cf1e6b4ce4d"
  },
  {
    "url": "assets/img/Post.Role.1.fd3e20e8.png",
    "revision": "fd3e20e8765242158740ea730d1cc88d"
  },
  {
    "url": "assets/img/Post.User.81a874b0.png",
    "revision": "81a874b0182690bf887a5a778626a378"
  },
  {
    "url": "assets/img/Put.Quiz.0647ec73.png",
    "revision": "0647ec736b6fef3043c65a5e40ee00d1"
  },
  {
    "url": "assets/img/Put.Role.37e54bbd.png",
    "revision": "37e54bbd05bdcd562b1cafab9c346276"
  },
  {
    "url": "assets/img/Put.User.df59f643.png",
    "revision": "df59f643b129785a736fc791f3edec2d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Start.26b79755.png",
    "revision": "26b7975589774f0de20d92c12f0b87f5"
  },
  {
    "url": "assets/js/10.a04bc287.js",
    "revision": "b10a402ee1b7db8979f0efbecab952f3"
  },
  {
    "url": "assets/js/11.11d113d0.js",
    "revision": "3c54361829ec3dff5645f6526db75a9a"
  },
  {
    "url": "assets/js/12.a4efb6a6.js",
    "revision": "2bba033998d56f36b39f8b22900430b8"
  },
  {
    "url": "assets/js/13.94ea2391.js",
    "revision": "15cd3f543fbcf6cfe7f3db1a5efba2e8"
  },
  {
    "url": "assets/js/14.f14b77c2.js",
    "revision": "960a105cc5de926ff82b739525deb168"
  },
  {
    "url": "assets/js/15.7870d169.js",
    "revision": "41349aaded87daccbbab986f37d01acb"
  },
  {
    "url": "assets/js/16.f542c9a1.js",
    "revision": "ce50138e095d344054cd7f1493b91c0c"
  },
  {
    "url": "assets/js/17.90dd6e0a.js",
    "revision": "63e16e1a7681b21ecc0e5e40d1adf002"
  },
  {
    "url": "assets/js/18.b2c23747.js",
    "revision": "49a6ad7af883008a33e2bc7bb8446436"
  },
  {
    "url": "assets/js/19.d93eb6bc.js",
    "revision": "e48317bf8ce2fc4b54f6aafd12b59c21"
  },
  {
    "url": "assets/js/2.f95ceef5.js",
    "revision": "f068e624d20deaecce8b57b864613349"
  },
  {
    "url": "assets/js/20.e439569f.js",
    "revision": "5f98e42e2acfe3fc4b66b81b889bda4a"
  },
  {
    "url": "assets/js/21.14077113.js",
    "revision": "49438d58b0e7c98778c895942dbf6c5b"
  },
  {
    "url": "assets/js/22.624b802a.js",
    "revision": "12bb827bb8df1587c95979468af0efde"
  },
  {
    "url": "assets/js/23.2252bc3f.js",
    "revision": "b6fa4ca3364e31fbe1b48be661d08379"
  },
  {
    "url": "assets/js/24.126754e2.js",
    "revision": "bfd13a5c6b991d10acf6b1665de995a1"
  },
  {
    "url": "assets/js/26.a5d72282.js",
    "revision": "1f699572d420f274ae9ce6327b2f7ecd"
  },
  {
    "url": "assets/js/3.76534e48.js",
    "revision": "6d9090aeec160ea7912d2f4a88509653"
  },
  {
    "url": "assets/js/4.7d8580b6.js",
    "revision": "58fd7227b4422699211fbdddc91996e7"
  },
  {
    "url": "assets/js/5.88a4e8f3.js",
    "revision": "7cbad3ab221aa801f3ac816d57a3f4a1"
  },
  {
    "url": "assets/js/6.7b34d77d.js",
    "revision": "03e7998744880b7b3bdd80b0c261f2aa"
  },
  {
    "url": "assets/js/7.08680b7a.js",
    "revision": "6939a40af3f8ca6aaf0cc70a82de2a84"
  },
  {
    "url": "assets/js/8.af458eeb.js",
    "revision": "bfaac57b78d6b3a8d8bfabce5b7897be"
  },
  {
    "url": "assets/js/9.443e515e.js",
    "revision": "7e04b157d111da63225ad691183834df"
  },
  {
    "url": "assets/js/app.2e25a029.js",
    "revision": "25b0c787c75071e9e3dc9653a9029880"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b809cca5e55d0af9783f8f4c6105f61c"
  },
  {
    "url": "design/index.html",
    "revision": "919b75e04cba92cfdab4d2440c3c67df"
  },
  {
    "url": "index.html",
    "revision": "4284cfc977f083321efaae3c0d22d95f"
  },
  {
    "url": "intro/index.html",
    "revision": "7a0f6ee6d2b402704f196896052c201f"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "79c917b58213fd9d2e82c5a6cd403829"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5ee1406191d9155b1e93bd5fca3a168a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3661fdc248be49209fccd764eff3e3a5"
  },
  {
    "url": "software/index.html",
    "revision": "5ce5cd26237624dc2239ff7c80042d69"
  },
  {
    "url": "test/index.html",
    "revision": "f5776cb07d9fd97df4ddbb16d85962be"
  },
  {
    "url": "use cases/index.html",
    "revision": "99a30450f72f601802093fcc9f00814e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
