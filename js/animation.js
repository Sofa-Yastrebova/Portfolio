gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({});

tlStart.from(".author",{
    duration:2,
    opacity:0,
    scale: 4,
    ease:"bounce(1.5)",
});