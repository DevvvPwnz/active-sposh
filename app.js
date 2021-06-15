//  loadaer anim
 TweenMax.to(".wrapper",2,{
    top:"-100%",
   ease: Expo.easeInOut,
   delay:3.6,
 })

 var tl = new TimelineMax()
 tl.from(".loader",1.6,{
   scaleY:"0",
  y:80,
   ease: Expo.easeInOut,
   delay:1,
   transformOrigin:"50% 100%"
 })

 tl.to(".loader",1.6,{
    height:"20vh",
    scaleY:"0",
   ease: Expo.easeInOut,
    transformOrigin:"0% -100%"
 });

 TweenMax.to(".box", 2.4,{
   y:"-100%",
   ease: Expo.easeInOut,
   delay:3.8
 })
 TweenMax.from(".header", 2.4,{
  scale:"0",
  transformOrigin:"50% 100%",
  ease: Expo.easeInOut,
  delay:3.8
})



// MENU ANIMATION

const menuLink = document.querySelectorAll(".menu__link");
const link1 = document.querySelector(".menu__link-one");
const link2 = document.querySelector(".menu__link-two");
const link3 = document.querySelector(".menu__link-three");
const menuHover = document.querySelector(".menu__hover");
const toggleBtn = document.querySelector(".menu__icon");
const body = document.querySelector("body");



TweenMax.set(".menu__hover",{width:0});
var tl = new TimelineLite();

var humburgerMotion = new TimelineMax();

humburgerMotion.to(".menu__icon-line1",0.2,
     { top:"50%",

    });
    humburgerMotion.to(".menu__icon-line2",0.2,
    {top:"50%",
    
    });
    humburgerMotion.to(".menu__icon-line1",0.2,
    {   
      transform:"rotate(-45deg)",
    
    });
    humburgerMotion.to(".menu__icon-line2",0.2,
    { 
      transform:"rotate(45deg)",
    
    });
    humburgerMotion.from(".menu__items",0.4,{
      left:"-100%",
      duration:0.7,
    })
    humburgerMotion.to(".menu__items",0.4,{
      left:"0%",
      duration:0.7,
    })
    humburgerMotion.reverse()

toggleBtn.addEventListener("click",()=>{
 
  humburgerMotion.reversed(!humburgerMotion.reversed());
  body.classList.toggle("lock");

})


menuLink.forEach( (link)=>{
  link.addEventListener("click",()=>{
  humburgerMotion.reversed(!humburgerMotion.reversed());
    body.classList.toggle("lock");
  })
  link.addEventListener("mouseenter", ()=>{
    tl.to(".menu__hover",1.5,{ width:"300px",
     ease:Expo.easeInOut
  })
  } );
  
  link.addEventListener("mouseout", ()=>{
    tl.to(".menu__hover",0.9,{ width:"0",
     ease:Expo.easeInOut
  })
  } );
})

link1.addEventListener("mouseenter",()=>{
   menuHover.style.backgroundImage = "url(./img/bg1.jpg)"
})
link2.addEventListener("mouseenter",()=>{
  menuHover.style.backgroundImage = "url(./img/img2.jpg)"
})
link3.addEventListener("mouseenter",()=>{
  menuHover.style.backgroundImage = "url(./img/img3.jpg)"
})
//  collection anim


gsap.registerPlugin(ScrollTrigger);

 ScrollTrigger.create({
  trigger: ".collection",
  onEnter: collectionAnim, 
});
//text animation & first img
function collectionAnim(){
  const tl1 = gsap.timeline();
  tl1.from(".collection__title",0.8,{transform:"rotateX(90deg)"})
  tl1.to(".collection__title",0.8,{transform:"rotateX(0deg)"})
  tl1.from(".collection__img",1.4,{scaleY:"0",transformOrigin:"100% 100%"})
  tl1.to(".collection__img", 
  {scaleY:"1",
  })
 
}
//line animation
ScrollTrigger.create({
  trigger: ".collection__img",
  start:"center",
  onEnter: ()=>{
    const lineAnim = gsap.timeline();
      lineAnim.from(".collection__line",0.4,{width:"0%"})
      lineAnim.to(".collection__line",0.4,{width:"100%"})
  }, 
});

// collection loader 
ScrollTrigger.create({
  trigger: ".collection__img-two",
  start:"top",
  onEnter: ()=>{
    const lineAnim = gsap.timeline();
     lineAnim.from(".collection__loader-text",0.4,{xPercent:-50, yPercent:-50,scaleY:1,delay:0.5})
      lineAnim.to(".collection__loader-text",0.4,{xPercent:-50, yPercent:-50,scaleY:0,delay:0.5})
      lineAnim.from(".collection__loader",0.4,{width:"100%",delay:0.3})
      lineAnim.to(".collection__loader",{width:"0%",})
      
  }, 
});

// text animation activewear
ScrollTrigger.create({
  trigger: ".collection__gallery",
  start:"top center",
  onEnter: ()=>{
    const textAnim = gsap.timeline();
    // textAnim.from(".collection__left-img",{scale:0,delay:1,duration:1,transformOrigin:"0% 50%"})
    // textAnim.from(".collection__gallery-img",{scale:0,duration:1,transformOrigin:"50% 0%"})
    // textAnim.from(".collection__right-text",0.7,{opacity:0,xPercent:-50, yPercent:-50,scale:0,duration:0.5,delay:0.4})

    textAnim.to(".collection__left-img",{scale:1,delay:1,duration:1,transformOrigin:"0% 50%"})
    textAnim.to(".collection__gallery-img",{scale:1,duration:1,transformOrigin:"50% 0%"})
    textAnim.to(".collection__right-text",0.7,{opacity:1,xPercent:-50, yPercent:-50,scale:1,duration:0.5,delay:0.4})
  }, 
  
});