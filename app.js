var slideIndex = 0
showSlides()

function showSlides() {
  var i
  var slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("dot")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
  setTimeout(showSlides, 3000) // Change image every 2 seconds
}

// Get all elements with the class "dropdown-toggle"
var dropdownToggles = document.querySelectorAll(".dropdown-toggle")

// Add a click event listener to each dropdown toggle
dropdownToggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    var content = this.nextElementSibling // Get the next sibling (dropdown content)
    var icon = this.querySelector(".icon") // Get the icon within the button

    if (content.style.display === "block") {
      content.style.display = "none"
      icon.textContent = "+"
    } else {
      content.style.display = "block"
      icon.textContent = "-"
    }
  })
})

const countdown = () => {
  const countDate = new Date("May 29 , 2024 00:00:00").getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  //how the fuck does time work
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  // Calculate this shit
  const textDay = Math.floor(gap / day)
  console.log(textDay)
  const textHour = Math.floor((gap % day) / hour)
  const textMinutes = Math.floor((gap % hour) / minute)
  const textSeconds = Math.floor((gap % minute) / second)

  document.querySelector(".day").innerText = textDay
  document.querySelector(".hour").innerText = textHour
  document.querySelector(".minute").innerText = textMinutes
  document.querySelector(".second").innerText = textSeconds

  document.querySelector(".day2").innerText = textDay
  document.querySelector(".hour2").innerText = textHour
  document.querySelector(".minute2").innerText = textMinutes
  document.querySelector(".second2").innerText = textSeconds
}

setInterval(countdown, 1000)

const mobileNav = document.querySelector(".mobile-nav")
const mobileNavToggle = document.querySelector(".mobile-navigator-toggle")

// Function to show the mobile navigation menu
function showMobileNav() {
  mobileNav.style.transform = "translateX(0)"
  mobileNav.style.opacity = "1"
}

// Function to hide the mobile navigation menu
function hideMobileNav() {
  mobileNav.style.transform = "translateX(-1500px)"
  mobileNav.style.opacity = "0"
}

// Event listener to toggle the mobile navigation menu when the button is clicked
mobileNavToggle.addEventListener("click", function () {
  if (mobileNav.style.transform === "translateX(0)") {
    hideMobileNav()
  } else {
    showMobileNav()
  }
})

// Add event listeners to close the mobile navigation menu when the "x" icon is clicked
const closeIcons = document.querySelectorAll(".fa-remove")

closeIcons.forEach((icon) => {
  icon.addEventListener("click", hideMobileNav)
})

const mobileCategory = document.querySelector(".mobile-category")
const mobileNavToggle2 = document.querySelector(".mobile-navigator-toggle2")
function showMobileCart() {
  mobileCategory.style.transform = "translateX(0)"
  mobileCategory.style.opacity = "1"
}

// Function to hide the mobile navigation menu
function hideMobileCart() {
  mobileCategory.style.transform = "translateX(-1500px)"
  mobileCategory.style.opacity = "0"
}

// Event listener to toggle the mobile navigation menu when the button is clicked
mobileNavToggle2.addEventListener("click", function () {
  if (mobileCategory.style.transform === "translateX(0)") {
    hideMobileCart()
  } else {
    showMobileCart()
  }
})
