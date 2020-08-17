self.addEventListener("install",e=>{
    
    e.waitUntil(
        caches.open("static").then(caches=>{
            return caches.addAll(["./","./images/logo 64.png","./images/logo 512.png","style1/style.css","style1/bootstrap.css"]);
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
