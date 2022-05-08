self.onfetch = onFetch

function onFetch(event) {
  const {request: req} = event
  if (shouldCache(req.url)) {
    event.respondWith(fetchWithCache(req))
  }
}

async function fetchWithCache(req) {
  const cache = await caches.open('main')

  let res = await cache.match(req)
  if (!res) {
    res = await fetch(req)
    if (res.ok) cache.put(req, res.clone())
  }

  return res
}

function shouldCache(url) {
  return /[@/]v?\d+[.]\d+[.]\d+/.test(url)
}
