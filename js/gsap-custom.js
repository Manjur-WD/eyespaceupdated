// OUR STORE
Splitting();
const ourStoreTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#our-store-wrapper",
        start: "top 50%",
        end: "50% 50%",
        // markers: true,
        scrub: 1,
        yoyo: true,
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
})
