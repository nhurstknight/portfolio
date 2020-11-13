function init() {
  const navHeader = document.querySelector('.nav-header')
  const burger = document.querySelector('.burger')
  const navLinks = document.querySelector('.nav-links')
  const scrollUpBtn = document.querySelector('.scroll-up-btn')

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })

  navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })

  window.addEventListener('scroll', () => {
    navHeader.classList[window.scrollY > 20 ? 'add' : 'remove']('hide')
  })

  window.addEventListener('scroll', () => {
    scrollUpBtn.classList[window.scrollY > 150 ? 'add' : 'remove']('show')
    console.log(scrollY)
  })

  function parallax(element, distance, speed) {
    const item = document.querySelector(element)
    item.style.transform = `translateY(${distance * speed}px)`
  }
  
  window.addEventListener('scroll', function() {
    parallax('.hero-text', window.scrollY, 0.2)
  })

}

window.addEventListener('DOMContentLoaded', init)
