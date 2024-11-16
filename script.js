const menu = document.querySelector ('.menu');
const toggle = document.querySelector ('#toggle'); /** For ID don't need DOT . !!! *Why in example work without # ? */

toggle.addEventListener('click', function(){
  menu.classList.toggle('show_menu');
});

/*Splide.JS*/

document.addEventListener('DOMContentLoaded', function() {
  const sliderElement = document.querySelector('.mySplide');
  
  if (sliderElement) {
    new Splide('.mySplide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      pagination: false,
      autoScroll: {
        speed: 0.7,
      },
    }).mount({
    });
  } else {
    console.error("Element with class '.mySplide' not found in the DOM.");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const sliderElement = document.querySelector('.photo_gallery_slide');
  
  if (sliderElement) {
    new Splide('.photo_gallery_slide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      pagination: false,
      autoScroll: {
        speed: 0.7,
      },
      breakpoints: {
        1024 : {
          perPage: 4,
        },
        900 : {
          perPage: 3,
        },
        768 : {
          perPage: 2,
        }
      }
    }).mount({
    });
  } else {
    console.error("Element with class '.mySplide' not found in the DOM.");
  }
});





