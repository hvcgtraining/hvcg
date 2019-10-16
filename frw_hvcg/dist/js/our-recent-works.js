"use strict";

$('#carousel').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      dots: false
    },
    600: {
      items: 2,
      dots: false
    },
    1000: {
      items: 3
    }
  }
});