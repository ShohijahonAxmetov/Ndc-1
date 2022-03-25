particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

function scrollHeader(){
    let navbar = document.getElementById('navbar')
    if(this.scrollY >= 50) navbar.classList.add('scroll-header'); else navbar.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

let navToggle = document.getElementById('toggle')
    navCollapse = document.getElementById('collapse')

if(navToggle){
  navToggle.addEventListener('click', () => {
    navCollapse.classList.toggle('show-menu')
    navToggle.classList.toggle('close-btn')
  })
}

new Swiper('.partnersSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
  },
})

new Swiper('.revSwiper', {
  slidesPerView: 1,
  spaceBetween: 24, 
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

new Swiper('.teamSwiper', {
  slidesPerView: 1.2,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
})

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active__tab')
        })
        target.classList.add('active__tab')
        tabs.forEach(tab => {
            tab.classList.remove('active__tab')
        })
        tab.classList.add('active__tab')
    })
})

$('.parallax-button').on('mousemove', function(e) {
  const bounds = this.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height;
  
  const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
  const deltaY = Math.floor((centerY - e.clientY)) * 0.333;
 
  
  $(this).css({
    transform: 'translate3d('+ deltaX * 1.2 +'px, '+ deltaY * 1.2 +'px, 0px)'
  });
  
  $('.parallax-button .forground').css({
    'text-shadow': deltaX * 0.4 + 'px 5px 15px rgba(0,0,0,0.2)',
  })
  
  $('.parallax-button .shadow').css({
    transform: 'translate3d('+ deltaX +'px, 15px, 0px)'
  });
});

$('.parallax-button').on('mouseenter', function() {
  $(this).addClass('hovered');
});

$('.parallax-button').on('mouseleave', function() { 
  $(this).removeClass('hovered');
  
  $('.parallax-button .forground').css({
    'text-shadow': 'none',
    'background-image': 'none',
  })
});

var element = document.getElementById('telNum');
var maskOptions = {
  mask: '+{998}(00)000-00-00'
};
var mask = IMask(element, maskOptions);

const cursor = document.getElementById('cursor')
const reviews = document.getElementById('reviews')

window.addEventListener('mousemove', function(e){
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px';
});

reviews.addEventListener('mouseleave', function(e) {
  cursor.classList.remove('show-cursor')
})

reviews.addEventListener('mousemove', function(e) {
  cursor.classList.add('show-cursor')
})

const tl = gsap.timeline()
const items = document.querySelectorAll('.big__num')

tl.from(items, {
  textContent: 0,
  duration: 3,
  snap: { textContent: 1 },
})
tl.from('.plus', {
  y: -30,
  opacity: 0,
  ease: 'elastic',
}) 