// OUR STORE
Splitting();
const ourStoreTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#our-store-wrapper",
        start: "top 50%",
        end: "50% 50%",
        // markers: true,
        scrub: 1,
    }
});

ourStoreTl.from("#our-store-wrapper .subhead .char",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
    ease: "back.out"
})

ourStoreTl.from(".locator", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: "back.out"
})
ourStoreTl.from(".connectors", {
    opacity: 0,
    duration: 1,
    ease: "back.out"
})
// OUR SERVICES
const ourSerTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#our-services",
        start: "top 50%",
        end: "50% 50%",
        // markers: true,
        scrub: 1,
    }
});

ourSerTl.from("#our-services .subhead .char",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
    ease: "back.out"
})

ourSerTl.from("#our-services .lva-wrap", {
    y:100,
    opacity: 0,
    duration: 2,
    ease: "back.out"
})

