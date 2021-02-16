gsap.to('.box', {
    scrollTrigger : {
        trigger:'.box',
        start:'top bottom'
    },
    x:500,
    ease:'expo.inOut',
    duration:1
})