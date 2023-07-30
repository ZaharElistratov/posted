// @KirillUsenko

const burger = document.querySelector(".nav__burger")
const burgerMenu = document.querySelector('.burger')
const burgerBack = document.querySelector('.burger__back')
const burgerCross = document.querySelector('.burger-menu__cross')
const burgerLinks = document.querySelectorAll('.burger-menu__link')

burger.addEventListener("click", () => {
	burgerMenu.classList.add('burger_active')
})

burgerBack.addEventListener("click", () => {
	burgerMenu.classList.remove('burger_active')
})

burgerCross.addEventListener("click", () => {
	burgerMenu.classList.remove('burger_active')
})

burgerLinks.forEach(link => {
	link.addEventListener('click', () => {
		burgerMenu.classList.remove('burger_active')
	})
})