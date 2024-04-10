function init() {
  const navHeader = document.querySelector('.nav-header')
  const burger = document.querySelector('.burger')
  const navLinks = document.querySelector('.nav-links')
  const scrollUpBtn = document.querySelector('.scroll-up-btn')

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('is-active')
  })

  navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('is-active')
  })

  window.addEventListener('scroll', () => {
    navHeader.classList[window.scrollY > 200 ? 'add' : 'remove']('hide')
  })
  window.addEventListener('scroll', () => {
    scrollUpBtn.classList[window.scrollY > 200 ? 'add' : 'remove']('show')
  })

}
window.addEventListener('DOMContentLoaded', init)

console.log('latest changes pushed')
