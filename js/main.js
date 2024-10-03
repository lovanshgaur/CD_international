


var tl = gsap.timeline({});
  tl.from(".load img",{
    opacity: 0,       
    y: 500,           
    duration: 1.5,
    scale: 0,      
    ease: 'power2.out'
  });
  tl.to(".load img",{
    scale: 0.5,
  });

  tl.from("main .card", {
    opacity:0,
    x: -1000,
    stagger: 0.1
  })

  

  