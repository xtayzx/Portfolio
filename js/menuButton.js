var menu = 0;

function openMenu() {
    var x = document.getElementById("menu");
    var pr = document.querySelector("#projects");
    var ph = document.querySelector("#photography");
    var h = document.querySelector("#about");
    
    if (
        menu === 0) {
        menu = 1;
        x.style.maxHeight = "410px";
        pr.style.cssText = "opacity: 100%;"
        ph.style.cssText = "opacity: 100%;"
        h.style.cssText = "opacity: 100%;"
    }

    else if (menu === 1) {
        menu = 0;
        x.style.maxHeight = "0px";
        pr.style.cssText = "opacity: 0%;"
        ph.style.cssText = "opacity: 0%;"
        h.style.cssText = "opacity: 0%;"
    }
}