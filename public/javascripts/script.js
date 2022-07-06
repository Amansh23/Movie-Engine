var t1 = gsap.timeline();


t1.from("#nav",{
    duration: 2,
    ease : Expo.easeIn,
    opacity : 0,
    stagger : 0.5,

})
.from("#createapost",{
    duration: 2,
    ease : Expo.easeIn,
    opacity : 0,
    
}, "=-1")
.from("#box",{
    duration: 2,
    ease : Expo.easeIn,
    opacity : 0,
    
}, "=-1")