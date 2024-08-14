jQuery(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

    let section = document.querySelector(".heroSection");
    let innerScreen = document.querySelector(".backOverlay");
    let textSection = document.querySelector(".textWrapper");
    let innerText = document.querySelector(".carouselSectionWrapper > .innerSectionWrapper");
    let carousel = document.querySelector(".mySwiper");
    let carouselWrapper = document.querySelector(".carouselWrapper");
    let carouselTranslateY = (-window.innerWidth * 0.8 * 0.125);
    let mainCarouselItem = document.querySelector(".mainCarouselItem");
    let mainItemWoman = document.querySelector(".womanImgCarousel");
    let scale = 0.5714;
    let initialWidth = window.innerHeight * 1.5;
    let correction = ((initialWidth - window.innerWidth) / 2);


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            markers: false,
            start: "50px top" ,
            end: "top top",
            pinSpacer: false,
            toggleActions: "restart none reverse none",
            invalidateOnRefresh: true,   
        }
    });

    tl
        .to(innerScreen, {
            backgroundColor: "#fff", 
            duration: 0.1})
        .to(innerScreen, {
            width: "100vw",
            height: "100vh",
            zIndex: "99999",
            backgroundColor: "#fff",
            border: 'none',
            borderRadius: "0",
            ease: "none", 
            duration: 0.7})
        .to(innerText, {
            opacity: 1}, "<")
        .to(carousel, {
            transform: `translate(0px, 0px)`, 
            ease: "none", 
            duration: 0.7}, "<")
        .to(carouselWrapper, {
            scale: scale,
            transform: `translate(-${correction}px, 0px)`, 
            bottom: carouselTranslateY / 2 + "px",
            ease: "none", 
            duration: 0.7}, "<")
        .to(textSection, {
            yPercent: "-100",
            ease: "none", 
            duration: 0.7}, "<")
        .to(mainCarouselItem, {
            borderRadius: "2.5vh",
            ease: "none", 
            duration: 0.7}, "<")
        .to(mainItemWoman, {
            scale: "1.51",
            transform: "translate(-50%, 0%)", 
            duration: 0.7}, "<");
})