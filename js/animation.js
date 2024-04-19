gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({});

tlStart.from('.author',{
    duration:2,
    opacity:0,
    scale: 4,
    ease:'bounce(1.5)',
});

gsap.from('.skill-card',{
    opacity:0,
    scrollTrigger:{
        trigger: '.my-skills',
        start: '30% 40%',
        end:'50% 60%',
        scrub: 10,
        toggleActions: 'play none none reverse',
    }
  })

  gsap.from('.card-project',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.my-works',
        start: 'top 40%',
        end:'60% 70%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
  })

    gsap.from(".about-me", {
        x:-500,
        duration:2,
        opacity:0,
        scrollTrigger:{
            // markers:true,
            trigger: '.about-me',
            start: 'top 70%',
            end:'0 0',
            scrub: 2,
            toggleActions: 'play none none reverse',
        }
    })
    
    function paralax() {
        const preview = document.querySelector('.preview');
        const initialX = preview.offsetLeft + preview.offsetWidth / 2;
        const initialY = preview.offsetTop + preview.offsetHeight / 2;
    
        document.addEventListener('mousemove', function(event){
          const mouseX = event.clientX - initialX;
          const mouseY = event.clientY - initialY;
    
          gsap.to(
            '.avatar', 
            {
            x: mouseX * 0.01, 
            y: -mouseY * 0.01, 
            ease: 'power2.out' ,
            },);
    
          gsap.to(
            '.avatar__under--first', 
            {
            x: -mouseX * 0.05, 
            y: mouseY * 0.05, 
            ease: 'power2.out' ,
            },);  
    
          gsap.to(
            '.avatar__under--second', 
            {
            x: mouseX * 0.015, 
            y: -mouseY * 0.015, 
            ease: 'power2.out' ,
            },);
    
            gsap.to(
              '.avatar__under--third', 
              {
              x: -mouseX * 0.02, 
              y: -mouseY * 0.02, 
              ease: 'power2.out' ,
              },);
        }) 
    
      }
    
      paralax()
    







    //   Свойство offsetLeft содержит левое смещение элемента относительно offsetParent. Содержит расстояние от offsetParent до границы элемента.
    // offsetWidth возвращает ширину элемента.
    // MouseEvent.clientX свойство доступное только для чтения. Это свойство является горизонтальной координатой в пределах клиентской области приложения, на которой произошло событие 
    // MouseEvent.clientX свойство доступное только для чтения. Это свойство является вертикальной координатой в пределах клиентской области приложения, на которой произошло событие 
    // Ключевое слово initial (CSS) устанавливает свойство элемента в начальное (или по умолчанию) значение