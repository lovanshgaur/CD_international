// Sidebar

const sidebar = document.getElementById("sidebar-container");
const menubar = document.getElementById("menubar-container");
const socialbar = document.getElementById("socialbar-container");

const containerBtn = document.getElementById("container-btn");
const menuBtn = document.getElementById("menu-btn");
const socialBtn = document.getElementById("social-btn");

const sidebarNav = document.getElementById("sidebar")

function deactivateAllContainers() {
    sidebar.classList.remove("active");
    menubar.classList.remove("active");
    socialbar.classList.remove("active");
    menuBtn.classList.remove("active-menu");
}

containerBtn.addEventListener("click", () => {
    if (!sidebar.classList.contains("active")) {
        deactivateAllContainers();
        sidebar.classList.add("active");
    } else {
        sidebar.classList.remove("active");
    }
});

menuBtn.addEventListener("click", () => {
    if (!menubar.classList.contains("active")) {
        deactivateAllContainers();
        menubar.classList.add("active");
        menuBtn.classList.add("active-menu");
    } else {
        menubar.classList.remove("active");
        menuBtn.classList.remove("active-menu");
    }
});

socialBtn.addEventListener("click", () => {
    if (!socialbar.classList.contains("active")) {
        deactivateAllContainers();
        socialbar.classList.add("active");
    } else {
        socialbar.classList.remove("active");
    }
});



// Footer Top Hides Sidebar

const footer = document.getElementById('footer');

function getVisibleFooterHeight() {
    const rect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    if (rect.top >= 0 && rect.bottom <= viewportHeight) {
        return rect.height; 
    }

    if (rect.top < 0 && rect.bottom > 0) {
        return rect.bottom; 
    }

    if (rect.top > 0 && rect.top < viewportHeight) {
        return viewportHeight - rect.top; 
    }
    
    return 0;
}

if (window.matchMedia("(min-width: 769px)").matches) {
window.addEventListener("scroll", () => {
    const visibleHeightInPx = getVisibleFooterHeight();
    const visibleHeightInVh = (visibleHeightInPx / window.innerHeight) * 100;
    const sidebarHeight = 100 - visibleHeightInVh;    
    sidebarNav.style.height = `${sidebarHeight}vh`;
    if(sidebarHeight < 90){
        socialbar.classList.add("footer-on")
        sidebar.classList.add("footer-on")
    }
    else{
        socialbar.classList.remove("footer-on")
        sidebar.classList.remove("footer-on")
    }
    if(sidebarHeight < 45){
        sidebarNav.classList.add("footer-on")
    }else{
        sidebarNav.classList.remove("footer-on")
    }
});
}


// Scroll to Top Button

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { 
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



//cursor
let cursor = document.getElementById("cursor")

document.body.addEventListener("mousemove", (dets)=>{
    gsap.to(cursor,{
        x: dets.clientX,
        y:dets.clientY,
    })
})





// Testimonials Card
document.addEventListener('DOMContentLoaded', function() {
    if (window.matchMedia("(min-width: 769px)").matches) {
        var cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            var cardId = card.id; 
            var cardNumber = parseInt(cardId.replace('card', '')); 
            var leftPosition = (cardNumber - 1) * 20; 
            card.style.left = leftPosition + "%";

            card.addEventListener('mouseenter', function() {
                if (cardNumber < cards.length) {
                    cards[cardNumber].classList.add('hidden');
                }
            });

            card.addEventListener('mouseleave', function() {
                if (cardNumber < cards.length) {
                    cards[cardNumber].classList.remove('hidden');
                }
            });
        });
    }
});


var swiperPromo = new Swiper(".mySwiperPromo", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next-promo",
        prevEl: ".swiper-button-prev-promo",
    },
});

var swiperActivity = new Swiper(".mySwiperActivity", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next-activity",
        prevEl: ".swiper-button-prev-activity",
    },
});

var swiperSlider = new Swiper(".mySwiperSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next-slider",
        prevEl: ".swiper-button-prev-slider",
    },
});
var swiperTestimonial = new Swiper(".mySwiperTestimonials", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next-testimonial",
        prevEl: ".swiper-button-prev-testimonial",
    },
});