let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

if(galleryImages) {
    galleryImages.forEach(function(image, index){
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/thumbs/"); 
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            
            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class","img-window");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src","img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode(">");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class","img-btn-next");
                newNextBtn.setAttribute("onclick","changeImg(1)");
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("<");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class","img-btn-prev");
                newPrevBtn.setAttribute("onclick","changeImg(0)");

                let newExitBtn = document.createElement("a");
                let btnExitText = document.createTextNode("X");
                newExitBtn.appendChild(btnExitText);
                container.appendChild(newExitBtn);
                newExitBtn.setAttribute("class","img-btn-exit");
                newExitBtn.setAttribute("onclick","closeImg()");

                newNextBtn.style.opacity = "0%";
                newPrevBtn.style.opacity = "0%";
                newExitBtn.style.cssText = "opacity: 0%;";
                loadButtons();
            }

            if(windowWidth < 991) {
            newImgWindow.setAttribute("onclick","closeImg()");
            }

            setTimeout(() => {
            newImgWindow.style.cssText = "opacity: 100%;";
            newImg.style.cssText = "opacity: 100%;";
            }, 100);
        }
    });
}

function loadButtons() {
    setTimeout(() => {
        var bNext = document.querySelector(".img-btn-next");
        var bPrev = document.querySelector(".img-btn-prev");
        var bExit = document.querySelector(".img-btn-exit");

        bNext.style.cssText = "opacity: 100%;";
        bPrev.style.cssText = "opacity: 100%;";
        bExit.style.cssText = "opacity: 100%;";
        }, 100);
}

function closeImg() {
    var win = document.querySelector(".img-window");
    var img = document.querySelector("#current-img");
    var bExit = document.querySelector(".img-btn-exit");
    var bNext = document.querySelector(".img-btn-next");
    var bPrev = document.querySelector(".img-btn-prev");

    win.style.cssText = "opacity: 0%;";
    img.style.cssText = "opacity: 0%;";
    bExit.style.cssText = "opacity: 0%;";

    bNext.style.cssText = "opacity: 0%;";
    bPrev.style.cssText = "opacity: 0%;";

    setTimeout(() => {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-exit").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
    }, 800);
}


function changeImg (changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;

    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if (calcNewImg > galleryImages.length){
            calcNewImg = 1;
        }
    }

    else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < 1){
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");
    newImg.style.cssText = "opacity: 100%;";
    getLatestOpenedImg = calcNewImg;
}
