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

function scrollHeader(){
    let navbar = document.getElementById('navbar')
    if(this.scrollY >= 50) navbar.classList.add('scroll-header'); else navbar.classList.remove('scroll-header')
  }
window.addEventListener('scroll', scrollHeader)

new Swiper('.partnersSwiper', {
  slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
})

new Swiper('.revSwiper', {
  slidesPerView: 3,
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
})

var element = document.getElementById('telNum');
var maskOptions = {
  mask: '+{998}(00)000-00-00'
};
var mask = IMask(element, maskOptions);

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

