/* Service worker de Padel Matchs : garde l'application disponible hors ligne.
   Stratégie « cache d'abord » : les fichiers ci-dessous sont copiés à la première visite,
   puis servis depuis le cache. Après toute modification d'un de ces fichiers,
   changez le numéro de VERSION pour que les appareils reprennent la nouvelle version. */
const VERSION = 1;
const PREFIX = 'padel-matchs-';
const CACHE = `${PREFIX}v${VERSION}`;
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/jspdf.umd.min.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(ASSETS.map(async url => {
      const res = await fetch(new Request(url, { cache: 'reload' }));
      if (!res.ok) throw new Error(`${url} : ${res.status}`);
      // une réponse issue d'une redirection ne peut pas servir une navigation : on la recopie
      await cache.put(url, res.redirected
        ? new Response(await res.blob(), { status: res.status, statusText: res.statusText, headers: res.headers })
        : res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // seulement nos anciens caches : d'autres sites peuvent partager la même origine (GitHub Pages)
    for (const key of await caches.keys()) {
      if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;   // polices Google : réseau, avec repli
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true, ignoreVary: true });
    if (hit) return hit;
    try {
      return await fetch(req);
    } catch (e) {
      if (req.mode === 'navigate') {
        const page = await cache.match('./index.html');
        if (page) return page;
      }
      throw e;
    }
  })());
});
