const mainActionBtn = document.querySelector("#main-action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" })
}

const links = document.querySelectorAll(".header-nav-link > a")
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" })
  }
}

const buttons = document.querySelectorAll(".product-item-btn")
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" })
  }
}

let burger = document.getElementById("burger")
let name = document.getElementById("name")
let phone = document.getElementById("phone")
document.getElementById("order-action").onclick = function () {

  let hasError = false

  let = [burger, name, phone].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red"
      hasError = true
    } else {
      item.parentElement.style.background = ""
    }
  })

  if (!hasError) {
    [burger, name, phone].forEach((item) => {
      item.value = ""
    })
    alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
  }
}

let prices = document.getElementsByClassName("products-item-price")
document.getElementById("currency").onclick = function (e) {
  let currentCurrency = e.target.innerText

  let newCurrency = "$"
  let coefficient = 0.2

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 20;
  } else if (currentCurrency === "₽") {
    newCurrency = "UZS";
    coefficient = 6000;
  }
  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
    + (prices[i].getAttribute("data-price") * coefficient).toFixed(1) +
    " " + newCurrency
  }
}

const navList = document.querySelector('.header-nav-list')
const menuBurgerOpen = document.querySelector('.menu')
const menuBurgerClose = document.querySelector('.header-nav-close')
const navLinks = document.querySelectorAll('.header-nav-link')

menuBurgerOpen.addEventListener('click', function () {
  navList.classList.add('active')
})

menuBurgerClose.addEventListener('click', function () {
  navList.classList.remove('active')
})

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navList.classList.remove('active')
  })
}
