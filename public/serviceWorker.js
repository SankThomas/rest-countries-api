let CACHE_NAME = 'Rest Countries App'
let urlsToCache = ['/', '/countries']

// Install a service worker
self.addEventListener('install', (e) => {
  // install steps
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})

// Cache and return requests
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(e.request)
    })
  )
})

// Update a service worker
self.addEventListener('activate', (e) => {
  let cacheWhiteList = ['Rest Countries App']
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
