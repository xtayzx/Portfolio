//this was the original (slightly modified) code found to just hide/unhide
// function openMenu() {
//         var x = document.getElementById("menu");
//         // x.style.height === 0
//         if (x.style.display === "block") {
//         x.style.display = "none";
        
//         } else {
//         x.style.display = "block";
//         }
//     }
var menu = 0;
//this is mine that implements the css transistion to grow and to shrink
function openMenu() {
    var x = document.getElementById("menu");
    //var h = document.getElementById("hello");
    //var pr = document.getElementById("projects");
    //var ph = document.getElementById("photography");
    var pr = document.querySelector("#projects");
    var ph = document.querySelector("#photography");
    var h = document.querySelector("#about");
    
    // var r = document.getElementById("resume");
    
    if (
        //x.style.maxHeight === "0px" && 
        menu === 0) {
        menu = 1;
        x.style.maxHeight = "410px";
        pr.style.cssText = "opacity: 100%;"
        ph.style.cssText = "opacity: 100%;"
        h.style.cssText = "opacity: 100%;"
    }

    //x.style.height === 0
    else if (
        //x.style.maxHeight === "408px" && 
        menu === 1) {
        menu = 0;
    x.style.maxHeight = "0px";
    pr.style.cssText = "opacity: 0%;"
    ph.style.cssText = "opacity: 0%;"
    h.style.cssText = "opacity: 0%;"
    // pr.style.cssText = "display: none;"
    // ph.style.cssText = "display: none;"
    // h.style.cssText = "display: none;"

    // a.style.display = "none";
    // a.style.transition = "display 0.8s ease-out";
    // pr.style.display = "none";
    // pr.style.transition = "display 0.7s ease-out";
    // ph.style.display = "none";
    // ph.style.transition = "display 0.6s ease-out";
    // r.style.display = "none";
    // r.style.transition = "display 0.5s ease-out";
    // alert(x.style.maxHeight);
    }
    // else 
    // x.style.maxHeight = "408px";
    // pr.style.cssText = "display: block;"
    // ph.style.cssText = "display: block;"
    // h.style.cssText = "display: block;"
    // a.style.transition = "display 0.5s ease-out";
    // pr.style.transition = "display 0.6s ease-out";
    // ph.style.transition = "display 0.7s ease-out";
    // r.style.transition = "display 0.8s ease-out";
}