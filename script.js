var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration:100,
    offset:50
}).setPin('#my-sticky-element')
  .addTo(controller)