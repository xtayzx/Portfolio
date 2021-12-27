'use strict';
//we want to follow the rules of safe and secure javascript

/*
    object.method(arguements);
*/

console.log('javascript menu is running');

var button = document.querySelector('#menu-toggle');
var buttonImage = document.querySelector('#menu-icon');
var menu = document.querySelector('#menu')
var menuItem = document.querySelectorAll('.menu-item');
menu.classList.add('hidden');
menuItem.forEach(menuItem => menuItem.classList.add('hidden-menu-item'));
menuItem.forEach(menuItem => menuItem.classList.add('hidden-menu-item-remove'));
menu.setAttribute('aria-hidden', 'true');
//telling screen readers that the element is hidden

// var menuToggle = document.createElement('button');
// menuToggle.classList.add('button');
// menuToggle.innerHTML = 'SVG Menu Button';
// menuToggle.setAttribute('id', 'menu-toggle');
// menu.setAttribute('aria-labelledby', 'menu-toggle');

// var header = document.querySelector('header');
// header.insertBefore(menuToggle, menu);

// menuToggle.setAttribute('aria-label', 'Main menu');
// menuToggle.setAttribute('aria-label', 'menu');
menu.setAttribute('aria-expanded', 'false');

button.addEventListener('click',
    function() {
        console.log('button has been clicked');

        if (menu.classList.contains('hidden')) {
            console.log('show menu');
            menu.classList.remove('hidden');
            buttonImage.classList.remove('button-rotate-exit');
            buttonImage.classList.add('button-rotate');

            menuItem.forEach(menuItem => menuItem.classList.remove('hidden-menu-item-remove'));

            setTimeout(function() {
                menuItem.forEach(menuItem => menuItem.classList.remove('hidden-menu-item'));
            }, 20);

            menu.setAttribute('aria-hidden', 'false');
            menu.setAttribute('aria-expanded', 'true');
        } else {
            console.log('hide menu');
            menu.classList.add('hidden');
            buttonImage.classList.remove('button-rotate');
            buttonImage.classList.add('button-rotate-exit');

            setTimeout(function() {
                menuItem.forEach(menuItem => menuItem.classList.add('hidden-menu-item-remove'));
            }, 300);

            menuItem.forEach(menuItem => menuItem.classList.add('hidden-menu-item'));

            menu.setAttribute('aria-hidden', 'true');
            menu.setAttribute('aria-expanded', 'false');
        }
    }
);