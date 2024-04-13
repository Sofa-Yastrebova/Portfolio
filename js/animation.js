gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({});

tlStart.from(".author",{
    duration:2,
    opacity:0,
    scale: 4,
    ease:"bounce(1.5)",
});

gsap.from('.skill-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.skills',
        start: 'top 60%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
})
