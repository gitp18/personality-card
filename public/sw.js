/**********************************************************************************************
 * @Purpose: To set the files into cache [Whatever you see under "Network" tab on Browser's Console]
 * @Input: type: "string", callback function
 * @Output: N/A
***********************************************************************************************/
let cacheName = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/',
            ])
        })
    )
})

/**********************************************************************************************
 * @Purpose: To read from cache
 * @Input: type: "string", callback function
 * @Output: response from the cache
***********************************************************************************************/
this.addEventListener("fetch", (event)=>{
    if(event.request.url === 'https://random-data-api.com/api/v2/users' || event.request.url === 'https://random-data-api.com/api/v2/appliances?size=5') {

        event.respondWith(caches.open(cacheName).then((cache) => {
            // Go to the cache first
            return cache.match(event.request.url)
            .then((cachedResponse) => {
              // Return a cached response if we have one
              if (cachedResponse) {
                return cachedResponse;
              }
              var communicate = new BroadcastChannel('communication');
              communicate.addEventListener('message', (e)=>{
                // If it's a page refresh then return the cache
                console.log(e.data.loadType, '----', typeof e.data.loadType)
                if(e.data.loadType === 'PageRefresh'){
                    return cachedResponse;
                } 
                // If it's a button click then i> hit the network & ii> write to the cache
                if(e.data.loadType === 'ButtonClicked'){
                    return fetch(event.request)
                    .then((fetchedResponse) => {
                        // Add the network response to the cache for later visits
                        cache.put(event.request, fetchedResponse.clone());
                        // Return the network response
                        return fetchedResponse;
                    }).catch((e)=>{

                    });
                }
              })
          
              // Otherwise, hit the network
              return fetch(event.request)
              .then((fetchedResponse) => {
                // Add the network response to the cache for later visits
                cache.put(event.request, fetchedResponse.clone());
                console.log('no cache')
                // Return the network response
                return fetchedResponse;
              }).catch((e)=>{

              });
            }).catch(e=>{

            });
          }));
      
    } else {   return;    }
})

