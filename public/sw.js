if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/318-3f2404d67ce3967b.js",revision:"3f2404d67ce3967b"},{url:"/_next/static/chunks/803-e237de0617d673d4.js",revision:"e237de0617d673d4"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-b5caa67eaf0d1f05.js",revision:"b5caa67eaf0d1f05"},{url:"/_next/static/chunks/pages/_app-0df0d783676aeb6e.js",revision:"0df0d783676aeb6e"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/catalog-fa2de63d4af36f6d.js",revision:"fa2de63d4af36f6d"},{url:"/_next/static/chunks/pages/checkout-74e972fb4ab1d0a3.js",revision:"74e972fb4ab1d0a3"},{url:"/_next/static/chunks/pages/index-2c3782177e955502.js",revision:"2c3782177e955502"},{url:"/_next/static/chunks/pages/product/%5Bid%5D-94097b919ce04337.js",revision:"94097b919ce04337"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-d5c25fd331c4dadd.js",revision:"d5c25fd331c4dadd"},{url:"/_next/static/css/56542a213b5166f5.css",revision:"56542a213b5166f5"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/y3OgDRAXnvL1njOwam0ki/_buildManifest.js",revision:"2386de1419184e4800ab892fb89d271f"},{url:"/_next/static/y3OgDRAXnvL1njOwam0ki/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/y3OgDRAXnvL1njOwam0ki/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fonts/adigiana2.otf",revision:"5551e8480cb36d858971ca8dd2c768c9"},{url:"/fonts/adigiana2.ttf",revision:"abc687c79901caa853a3de35c52d3fc5"},{url:"/fonts/adigiana2.woff",revision:"b43a3687948005aad6258f366d2f7cbd"},{url:"/icon-192x192.png",revision:"bbb3749f9b0d47db5e320f29509dcdbe"},{url:"/icon-256x256.png",revision:"99471ce346cc384910561974e5ace34f"},{url:"/icon-384x384.png",revision:"6b595e12fca79af2fa26d1156197f511"},{url:"/icon-512x512.png",revision:"961e6c81829e4fdf05705d7f392ddd9a"},{url:"/icons/basket.svg",revision:"26707d20650a4834de84980a4d418ce1"},{url:"/icons/box.svg",revision:"a15e773009505cf9fbd223bcf9193cb0"},{url:"/icons/burger-menu.svg",revision:"ccf8f3f4e3183fdc790f13e81cc4ddaa"},{url:"/icons/close-modal.svg",revision:"8750405f35ec3c27f5d66fb1f1bd4cc4"},{url:"/icons/fb.svg",revision:"9b8aab0e7a6d05afb01175c89ff00027"},{url:"/icons/graphic-design.svg",revision:"1b900b2f7dbd1d8adb425bc5855a9946"},{url:"/icons/insta.svg",revision:"ce69203456b30fe7531f9fe5b7b1fb2e"},{url:"/icons/sewing-machine.svg",revision:"f5bebd96dca2fc7cd18685180f6d28a9"},{url:"/icons/tissue-roll-outline.svg",revision:"0713bf3319cbfb950149336f2fea3036"},{url:"/img/anna.png",revision:"fb24f975406cb601cd7300143f4a8b1a"},{url:"/img/goals-bg-mob.png",revision:"e2d30bb3c9a6587a631c4e3236ff0426"},{url:"/img/goals-bg.png",revision:"d5af4b34651150cae86832b2512035da"},{url:"/img/home_top_bg-mob.jpg",revision:"dc80d6f9d6aee677b328a21f69932134"},{url:"/img/home_top_bg-mob.svg",revision:"2fcba60a6cb7c1b20eaf7cf61e34d753"},{url:"/img/home_top_bg.jpg",revision:"b25e876c9ee9ac36c4616d4baa92b313"},{url:"/img/home_top_img-mob.svg",revision:"117059b0b6ab6722c6ae888eae12e475"},{url:"/img/home_top_img.svg",revision:"d82ccdffebb1510dd2a4b370fdc84936"},{url:"/img/lisa.png",revision:"612e1d2ef333cc47f6ef5aac02a1063d"},{url:"/img/logo.svg",revision:"4cff3d2275de4bd8d88f41ee55c2c1f9"},{url:"/img/product-img-basket.jpg",revision:"82649d9fc39024ffe72e2dc69be8b778"},{url:"/img/slider-arrow-left.svg",revision:"d1aec14954781ad17971ba7b81b8ccfd"},{url:"/img/slider-arrow-right.svg",revision:"28725f37c991cad999759c35fa423cd4"},{url:"/img/slider-item.png",revision:"b4c7d305853f3d3be2986a010bc98ce3"},{url:"/manifest.json",revision:"8c704856fbfd62009160bfb0114fa2bb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
