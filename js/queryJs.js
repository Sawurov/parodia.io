
TweenMax.to(".overlay h1", 2,{
    opacity: 0,
    y: -180,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 3,{
    delay: .3,
    opacity: 0,
    y: -90,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 3,{
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".ellipse-container", 1,{
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".yellow", 1,{
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".circle1", 1,{
    delay: 4,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".circle2", 1,{
    delay: 5.7,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 1,{
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu-links ul li", 1,{
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
}, 0.08)


TweenMax.from(".scrolldown", 1,{
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
})

TweenMax.from(".text .title", 1,{
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})
TweenMax.from(".text p", 1,{
    delay: 3.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".watchnow", 1,{
    delay: 3.4,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 1,{
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
},0.08)