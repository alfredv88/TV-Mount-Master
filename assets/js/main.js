/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // 58px is a good offset
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


/*=============== TESTIMONIALS SLIDER (SWIPER) ===============*/
/*=============== TESTIMONIALS SLIDER (SWIPER) ===============*/
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    // Configuración para el carrusel
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    // Autoplay (Movimiento automático)
    autoplay: {
        delay: 5000, // 5 segundos entre cada testimonio
        disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa
    },

    // Paginación (los puntitos de abajo)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navegación (las flechas)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints (cuántos testimonios mostrar según el tamaño de pantalla)
    breakpoints: {
        // cuando la ventana es >= 576px
        576: {
          slidesPerView: 1,
        },
        // cuando la ventana es >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // cuando la ventana es >= 1024px
        1024: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
});

/*=============== INITIALIZE AOS (ANIMATE ON SCROLL) ===============*/
AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true,     // La animación solo ocurre una vez
});

/*=============== FAQ ACCORDION ===============*/
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const header = item.querySelector('.faq__header');
    header.addEventListener('click', () => {
        const openItem = document.querySelector('.faq__item.open');

        // Toggle (abrir/cerrar) el item actual
        toggleItem(item);

        // Si había otro item abierto, cerrarlo
        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const content = item.querySelector('.faq__content');
    
    if (item.classList.contains('open')) {
        content.style.maxHeight = 0;
        item.classList.remove('open');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        item.classList.add('open');
    }
};