"use strict";var precacheConfig=[["/index.html","b3d0c7b9ec62eb9691a425a5fc64d726"],["/static/css/main.cc935174.css","680b656ffc67851eb2543c52e60fa833"],["/static/js/main.289c2ba0.js","1d3c3411983ccddf0daf0c862568ee7a"],["/static/media/Roboto-Bold.39b2c303.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["/static/media/Roboto-Bold.dc81817d.woff","dc81817def276b4f21395f7ea5e88dcd"],["/static/media/Roboto-Bold.e31fcf18.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/static/media/Roboto-Bold.ecdd509c.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/static/media/Roboto-Light.3b813c2a.woff","3b813c2ae0d04909a33a18d792912ee7"],["/static/media/Roboto-Light.46e48ce0.ttf","46e48ce0628835f68a7369d0254e4283"],["/static/media/Roboto-Light.69f8a061.woff2","69f8a0617ac472f78e45841323a3df9e"],["/static/media/Roboto-Light.a990f611.eot","a990f611f2305dc12965f186c2ef2690"],["/static/media/Roboto-Medium.4d9f3f9e.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/static/media/Roboto-Medium.574fd0b5.woff2","574fd0b50367f886d359e8264938fc37"],["/static/media/Roboto-Medium.894a2ede.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/static/media/Roboto-Medium.fc78759e.woff","fc78759e93a6cac50458610e3d9d63a0"],["/static/media/Roboto-Regular.2751ee43.woff2","2751ee43015f9884c3642f103b7f70c9"],["/static/media/Roboto-Regular.30799efa.eot","30799efa5bf74129468ad4e257551dc3"],["/static/media/Roboto-Regular.ba3dcd89.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/static/media/Roboto-Regular.df7b648c.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/static/media/Roboto-Thin.7500519d.woff","7500519de3d82e33d1587f8042e2afcb"],["/static/media/Roboto-Thin.94998475.ttf","94998475f6aea65f558494802416c1cf"],["/static/media/Roboto-Thin.954bbdeb.woff2","954bbdeb86483e4ffea00c4591530ece"],["/static/media/Roboto-Thin.dfe56a87.eot","dfe56a876d0282555d1e2458e278060f"],["/static/media/arrow_left.11911410.svg","11911410dca2de148f30954eb2fd5eab"],["/static/media/arrow_right.8ef6a08c.svg","8ef6a08cdc1154920165680a4edde771"],["/static/media/ayushmaan.a6731e52.png","a6731e523d10fbd99a6140eb5ceb3948"],["/static/media/back.a806fb3b.png","a806fb3bdb165fe3699f1670bb6eab27"],["/static/media/background.b7305c5d.jpg","b7305c5d80bbfee327c6b06488fbd409"],["/static/media/bg1.961cf732.jpg","961cf732cc8814a89e4b4f3718b76101"],["/static/media/bg4.c70cb0c7.jpg","c70cb0c7f8fc2bcd13b6d32c1115f372"],["/static/media/bg5.fd0141e2.jpg","fd0141e27d8ce0fd82cb10562c4f70e6"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/gif1.121b4dc6.gif","121b4dc612cefd1ddc51522d2c0c6137"],["/static/media/gif2.022f170c.gif","022f170ca6ef2296834212416a1763e3"],["/static/media/helen.fa3f752f.jpg","fa3f752f1dd56e4f1d51de3e5f926a66"],["/static/media/kimia.8bc62b2e.png","8bc62b2ef950327c019d69cec497fb40"],["/static/media/konrad.fd717c17.png","fd717c17c06bf9689c1c197f6eba4b04"],["/static/media/ksenia.3c0e7a90.jpg","3c0e7a90b08253f42bf4ee1dc527432b"],["/static/media/pooja.fb083d5e.png","fb083d5e2b068cb5e3946c95c4afa29c"],["/static/media/porticode_image.4f58266a.svg","4f58266af5ce9949e6f6e668bddd1427"],["/static/media/porticodecover.9d20a60e.png","9d20a60eea407aaa36584fe7447b8b91"],["/static/media/shirin.82d95e15.jpg","82d95e15de7ccaabaeadbcd9c8f3c78a"],["/static/media/sidak.9e2b113a.jpg","9e2b113a3350d2d59417e1b4cb950536"],["/static/media/sonia.5a6a828d.png","5a6a828dd01b65941e5731a39a4a984a"],["/static/media/spideygif.681b6e7d.gif","681b6e7d4637b970d63234b715ecbe6f"],["/static/media/vikash.f7999483.png","f79994831937adcaf1b2756c7b96c33a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});