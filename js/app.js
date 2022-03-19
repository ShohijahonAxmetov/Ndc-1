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