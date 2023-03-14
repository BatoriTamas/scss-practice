console.log("loaded")

let hamburgerMenuElement = document.querySelector('.hamburger-menu') // a queryselectornak mindig PONTOSAN ugyanolyan selectort adunk át, mint a css-ben

hamburgerMenuElement.addEventListener('click', function () {
  console.log('clicked')

  hamburgerMenuElement.classList.toggle("open")
})

