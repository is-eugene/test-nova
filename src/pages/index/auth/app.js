require('./app.scss');
require('./index.html');

import Swiper from 'swiper';

window.onload = function() {
	let swiper = new Swiper('.swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
	    320: {
	      slidesPerView: 1
	    },
	    480: {
	      slidesPerView: 2
	    },
	    640: {
	      slidesPerView: 3
	    }
	  }
  });

  document.querySelector('.js-user-login').onclick = function() {
		document.querySelector('.с-user-login').classList.toggle('с-user-login--hidden');
	}
}