'use strict'

let btnBanner = document.querySelector('.banner__btn')
let workLink = document.querySelectorAll('.header-nav__work')
let teamLink = document.querySelectorAll('.header-nav__team')
let contactLink = document.querySelectorAll('.header-nav__contact')
let featured = document.querySelector('.section-featured')
let team = document.querySelector('.section-team')
let contact = document.querySelector('.section-contact')
let btnMenu = document.querySelector('.header-nav__btn')
let menu = document.querySelector('.header-nav_sm')
let closeMenuBtn = document.querySelector('.header-nav__close__btn')

btnBanner.addEventListener('click', function() {
  featured.scrollIntoView({
    behavior: 'smooth',
  })
})

for (let elem of workLink) {
  elem.addEventListener('click', function(e) {
    e.preventDefault()
    featured.scrollIntoView({
      behavior: 'smooth',
    })
    menu.style.top = '-100%'
    menu.style.bottom = '100%'
  })
}

for (let elem of teamLink) {
  elem.addEventListener('click', function(e) {
    e.preventDefault()
    team.scrollIntoView({
      behavior: 'smooth',
    })
    menu.style.top = '-100%'
    menu.style.bottom = '100%'
  })
}

for (let elem of contactLink) {
  elem.addEventListener('click', function(e) {
    e.preventDefault()
    contact.scrollIntoView({
      behavior: 'smooth',
    })
    menu.style.top = '-100%'
    menu.style.bottom = '100%'
  })
}

btnMenu.addEventListener('click', function() {
  menu.style.top = '0'
  menu.style.bottom = '75%'
})

closeMenuBtn.addEventListener('click', function() {
  menu.style.top = '-100%'
  menu.style.bottom = '100%'
})
