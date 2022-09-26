const HamburgerMenu = document.querySelector('.mobileNav')
const CancelIcon = document.querySelector('.mobile div')
const mobileNav = document.querySelector('.mobile')

HamburgerMenu.addEventListener('click', () => {
    mobileNav.style.display = 'block'
    document.querySelector('body').style.overflowY = 'hidden'
})
CancelIcon.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    document.querySelector('body').style.overflowY = 'scroll'
})