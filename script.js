function popUp(imgSrc) {
    var overlay = document.getElementById("overlay-container");
    var img = document.getElementById("overlay-img");
    overlay.style.display = "flex";
    img.src = imgSrc; 
}
        
function popDown() {
    var overlay = document.getElementById("overlay-container");
    overlay.style.display = "none";
}