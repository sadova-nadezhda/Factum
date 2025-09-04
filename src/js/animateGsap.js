export function animateGsap() {
  gsap.registerPlugin(ScrollTrigger);

  const scrollTriggerConfig = {
    start: "top bottom",
    end: "bottom 20%",
    anticipatePin: 1,
    toggleActions: "play none none reverse",
  };

  gsap.utils.toArray(".up").forEach(element => {
    gsap.fromTo(element,
      { yPercent: 60, opacity: 0 },
      {
        duration: 1.2,
        opacity: 1,
        yPercent: 0,
        ease: "power2.out",
        scrollTrigger: { trigger: element, ...scrollTriggerConfig }
      }
    );
  });
  
  gsap.utils.toArray(".flip").forEach(element => {
    gsap.fromTo(element,
      { rotationX: 90, opacity: 0 },
      {
        duration: 1.2,
        rotationX: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: element, ...scrollTriggerConfig }
      }
    );
  });
  
  gsap.utils.toArray(".fade-left").forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: element, ...scrollTriggerConfig }
      }
    );
  });
  
  gsap.utils.toArray(".fade-right").forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: element, ...scrollTriggerConfig }
      }
    );
  });

  gsap.utils.toArray(".scale-in").forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: element, ...scrollTriggerConfig }
      }
    );
  });

}