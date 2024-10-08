jQuery(document).ready(function() {
            
    let buttons = ["Приключение ⛰️", "Сватба", "Премествания", "Билет за 🌔"];
    let buttonsThirdCarousel = ["Изпратете", "Поделете", "Подарете"];
    let buttonsFourthCarousel = ["Изпратете", "Поделете", "Подарете"];
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

            
    let imagedSection = document.querySelector(".imagedSection");
    let backgrounds = gsap.utils.toArray(".backgroundImage");

    backgrounds.forEach((bg, i) => {
    
        gsap.set(bg, { y: -130});

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: imagedSection,
                start: () => "top +=" + window.innerHeight,
                end: () => "bottom ",
                scrub: true,
                pinSpacer: false,
                toggleActions: "restart none reverse none",
                invalidateOnRefresh: true,   
            }
        });

        tl2
            .to(bg, {
                y: 0, 
                duration: 1})
            .to(bg, {
                y: 130, 
                duration: 1});

    });

    const swiperInstances = [
        new Swiper(".mySwiper", {  
            loop: true,
            slidesPerView: 3,
            initialSlide: 2,
            spaceBetween: 35,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                scale: 0.9,
                depth: 40,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 100000,
                disableOnInteraction: false,
        },
        }),


        new Swiper(".secondCarousel", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="carouselBtn ' + className + '"><span>' + buttons[index] + "</span></span>";
                },
            },
            autoplay: {
                delay: 8000,
                disableOnInteraction: true,
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    let overlay = document.querySelector(".swiper-pagination-bullet-active > span");
                    overlay.style.setProperty("--widthOverlay", (1 - progress) * 100 + '%');
                },

                slideChange(swiper){
                    let overlayAll = document.querySelectorAll(".swiper-pagination-bullet > span");
                    
                    overlayAll.forEach(ol => {
                        ol.style.setProperty("--widthOverlay", '0%');
                    });
                }
            }
        }),


        new Swiper(".thirdCarousel", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="carouselBtn ' + className + '"><span>' + buttonsThirdCarousel[index] + "</span></span>";
                },
            },
            autoplay: {
                delay: 8000,
                stop: true,
                disableOnInteraction: true,
            },
            on: {
                // init(swiper) {
                //     swiper.stop()
                // },
                autoplayTimeLeft(s, time, progress) {
                    let overlay2 = document.querySelector(".thirdCarousel .carouselBtn.swiper-pagination-bullet-active > span");
                    overlay2.style.setProperty("--widthOverlay", (1 - progress) * 100 + '%');
                },

                slideChange(swiper){
                    let overlayAll = document.querySelectorAll(".thirdCarousel .carouselBtn.swiper-pagination-bullet > span");
                    
                    overlayAll.forEach(ol => {
                        ol.style.setProperty("--widthOverlay", '0%');
                    });

                    let currentSlide = swiper.slides[swiper.activeIndex].querySelector('video');
                    currentSlide.play();
                }
            }
        }),



        new Swiper(".fourthCarousel", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            effect: 'fade',
            observer: true,
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="carouselBtn ' + className + '"><span>' + buttonsFourthCarousel[index] + "</span></span>";
                },
            },
            autoplay: {
                delay: 8000,
                disableOnInteraction: true,
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    let overlay2 = document.querySelector(".fourthCarousel .carouselBtn.swiper-pagination-bullet-active > span");
                    overlay2.style.setProperty("--widthOverlay", (1 - progress) * 100 + '%');
                },

                slideChange(swiper){
                    let overlayAll = document.querySelectorAll(".fourthCarousel .carouselBtn.swiper-pagination-bullet > span");
                    
                    overlayAll.forEach(ol => {
                        ol.style.setProperty("--widthOverlay", '0%');
                    });
                    
                    let currentSlide = swiper.slides[swiper.activeIndex].querySelector('video');
                    // currentSlide.currentTime = 0;
                    currentSlide.play();
                }
            }
        }),
    ]

    const carouselMap = {
        '.mySwiper': swiperInstances[0],
        '.secondCarousel': swiperInstances[1],
        '.thirdCarousel': swiperInstances[2],
        '.fourthCarousel': swiperInstances[3]
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            let swiperInstance = carouselMap[`.${entry.target.classList[0]}`];

            if (entry.target.classList.contains('mySwiper')) {
                if (entry.isIntersecting) {
                    swiperInstance.autoplay.start();
                } else {
                    swiperInstance.slideToLoop(2, 400);
                    swiperInstance.autoplay.stop();
                }
            } else {
                if (entry.isIntersecting) {
                    console.log('Common carousel start');
                    swiperInstance.autoplay.start();
                } else {
                    swiperInstance.autoplay.stop();
                    console.log('Common carousel stop');
                }
            }
        });
    }

    const observerHero = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 1,
    });

    const observerOther = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
    });
    
    observerHero.observe(document.querySelector('.mySwiper'));
    observerOther.observe(document.querySelector('.secondCarousel'));
    observerOther.observe(document.querySelector('.thirdCarousel'));
    observerOther.observe(document.querySelector('.fourthCarousel'));

    
})