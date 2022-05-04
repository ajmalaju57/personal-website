self.addEventListener("install",e=>{
    
    e.waitUntil(
        caches.open("static").then(caches=>{
            return caches.addAll(["./",".assets/img/logo/logo 64.png",".assets/img/logo/logo 512.png",".assets/css/logo/style.css",".assets/js/main.js,",".assets/js/scrollreveal.min.js","assets/img/favicon.png","assets/img/profile.png","assets/img/project1.jpg","assets/img/project2.jpg","assets/img/project3.png","assets/img/project4.png","assets/img/project5.png"]);
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
