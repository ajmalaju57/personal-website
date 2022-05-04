if("serviceWorker" in navigator){
    navigator.serviceWorker.register("assets/js/sworker.js").then(registration=>{
        console.log("Service Worker registered")
        console.log(registration);
    }).catch(error=>{
        console.log("Service worker error")
        console.log(error);
    })

}
else{
    alert("Service worker not working")
}