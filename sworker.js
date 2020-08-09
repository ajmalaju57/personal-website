self.addEventListener("install",e=>{
    
    e.waitUntil(
        caches.open("static").then(caches=>{
            return caches.addAll(["./","./style.css","./images/logo 64.png","./images/logo 512.png"]);
        })
    )

})

self.addEventListener("fetch" ,e=>{
    e.respondWith(
        caches.match(e.request).then(Response=>{
            return Response || fetch(e.request)
        })
    )
})