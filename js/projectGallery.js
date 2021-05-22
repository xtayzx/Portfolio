//NOTES by taylen
//the base code for this gallery was following the tutorial at this youtube link, however i have modified it to add ui transitional elements in the css
//link to the tutorial: https://youtu.be/dkLpo4shS6c

//- let and var are item types in js (does taylen really know the difference, no cause she just knows java haha)

//- style.cssTest function can only be called once for each object. 
//  if the line is called again, it will override the prompt before, so different elements need to be listed in the same line

//- if you are inserting a square image, you have to change the if statement boolean to include "equal to" somewhere
//  and determine if you want the buttons below or if you want the buttons on the side

//- use the alert() function to create a pop-up to figure out errors

//- currently, if the window size is adjusted, the buttons will not totally adjust properly
//  unless the user has scrolled to the next image or has reloaded the page

//- keep all the elements as .jpg specifically. if you are using gifs or pngs, stick with one type but you cannot mix types

//- the number of images and the order of them is very important. 
//  otherwise the array will not work, so you cannot jump from image to image
//  you have to plan the order accordingly and rename the images (also it might take a little time to update, at least that's what happened the first time)

// i decided to change it last minute where the buttons are in a fixed place and if the screen is smaller than like a medium size, then there is no scroll function
// personally i think the ui of it was not great with bouncing between the button placements
// to make it go back then you need to uncomment a lot of stuff and change the fixed values in css

// uhhh look to see if you want buttons on the sides

let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

if(galleryImages) {
    galleryImages.forEach(function(image, index){ /*checks each image*/
        image.onclick = function() { /*if it is clicked, create the gallery*/

            //alert("you clicked the image yay!"); //test
            let getElementCss = window.getComputedStyle(image); /*grabs the css styling*/
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/thumbs/"); //takes the value and spilt the value apart
            let setNewImgUrl = getImgUrlPos[1].replace('")', ''); //removes the ") that would still be there, replace with nothing for new variable
            
            getLatestOpenedImg = index + 1; //don't want to deal with image 0 or image 1

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow); //div box inside the website when we click the image
            newImgWindow.setAttribute("class","img-window");

            //creating and pasting the image
            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg); //putting the image inside the window
            newImg.setAttribute("src","img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            //once image is loaded then to create the buttons
            newImg.onload = function() {
                // let imgWidth = this.width;
                // calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90; //calculate image to the border of the browser
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
                    newExitBtn.setAttribute("onclick","closeImg()"); //on the button click, activate close function
                    newExitBtn.style.cssText = "opacity: 0%;"; //intially the button is transparent

                    newNextBtn.style.cssText = "opacity: 0%;"; //intially the button is transparent
                    newPrevBtn.style.cssText = "opacity: 0%;"; //intially the button is transparent
                
                
                    setTimeout(() => {
                       var bExit = document.querySelector(".img-btn-exit");
                        var bNext = document.querySelector(".img-btn-next");
                        var bPrev = document.querySelector(".img-btn-prev");
            
                        bExit.style.cssText = "opacity: 100%;";
                        bNext.style.opacity = "100%";
                        bPrev.style.opacity = "100%";
                        
                        //because we are in the same function, we can use the same local variables that are created above
                        newImgWindow.style.cssText = "opacity: 100%;";
                        newImg.style.cssText = "opacity: 100%;";
                        }, 100); //100 is the delay time
                
            }
        }
    });
}

//closing the gallery
function closeImg() {
    //change opacity values to allow transitional effect
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

    //have to recall the values for placement on the screen otherwise they will reset as 0
    // if(windowWidth > 991){
    //     bNext.style.cssText = "right: " + calcImgToEdge + "px; opacity: 0%;";
    //     bPrev.style.cssText = "left: " + calcImgToEdge + "px; opacity: 0%;";
    // }

    // //smaller screens and pl
    // else if(windowWidth < 991) {
    //     if (selImgWidth > selImgHeight) {
    //         bNext.style.cssText = "right: " + calcImgToEdgeW + "px; top: " + calcImgToEdgeH + "px; opacity: 0%;";
    //         bPrev.style.cssText = "left: " + calcImgToEdgeW + "px; top: " + calcImgToEdgeH + "px; opacity: 0%;";
    //     }

    //     else if (selImgWidth < selImgHeight) {
    //         bNext.style.cssText = "right: " + calcImgToEdge + "px; top: 48vh; opacity: 0%;";
    //         bPrev.style.cssText = "left: " + calcImgToEdge + "px; top: 48vh; opacity: 0%;";
    //     }
    // }
    
    //after the elements have made the transition after the set time, then remove them
    setTimeout(() => {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-exit").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
    }, 800);
}

//changing images
function changeImg (changeDir) {
    //delete the image
    document.querySelector("#current-img").remove();

    //create the new image
    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;

    //scroll forward
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if (calcNewImg > galleryImages.length){
            calcNewImg = 1;
        }
    }

    //scroll back
    else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < 1){
            calcNewImg = galleryImages.length;
        }
    }

    //only works for .jpg now so either recode or change images
    newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");
    newImg.style.cssText = "opacity: 100%;";
    getLatestOpenedImg = calcNewImg;

    //generating new buttons for each new image
    // newImg.onload = function(){

    //     //standard screens
    //     if(windowWidth > 991){
    //         let imgWidth = this.width;
    //         calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90; //calculate image to the border of the browser

    //         let nextBtn = document.querySelector(".img-btn-next");
    //         nextBtn.style.cssText = "right: " + calcImgToEdge + "px; opacity: 100%;";

    //         let prevBtn = document.querySelector(".img-btn-prev");
    //         prevBtn.style.cssText = "left: " + calcImgToEdge + "px; opacity: 100%;";
    //     }

    //     //smaller screens and buttons below
    //     else if (windowWidth < 991) {
    //         let imgWidth = this.width;
    //         let imgHeight = this.height;
    //         selImgWidth = imgWidth;
    //         selImgHeight = imgHeight;

    //         //reassign global variables
    //         calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90; //calculate image to the border of the browser
    //         calcImgToEdgeW = ((windowWidth - imgWidth) / 2) + 30; //calculate image to the border of the browser
    //         calcImgToEdgeH = ((windowHeight - imgHeight) / 2) + imgHeight + 30; 

    //         //restating values
    //         //landscape images
    //         if (imgWidth > imgHeight) {
    //             let nextBtn = document.querySelector(".img-btn-next");
    //             nextBtn.style.cssText = "right: " + calcImgToEdgeW + "px; top: " + calcImgToEdgeH + "px; opacity: 100%;";

    //             let prevBtn = document.querySelector(".img-btn-prev");
    //             prevBtn.style.cssText = "left: " + calcImgToEdgeW + "px; top: " + calcImgToEdgeH + "px; opacity: 100%;";
    //         }

    //         //portrait images
    //         else if (imgHeight > imgWidth) {
    //             let nextBtn = document.querySelector(".img-btn-next");
    //             nextBtn.style.cssText = "right: " + calcImgToEdge + "px; top: 48vh; opacity: 100%;";
            
    //             let prevBtn = document.querySelector(".img-btn-prev");
    //             prevBtn.style.cssText = "left: " + calcImgToEdge + "px; top: 48vh; opacity: 100%;";
    //         }
    //     }
    // }
}
