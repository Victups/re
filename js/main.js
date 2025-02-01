document.addEventListener("DOMContentLoaded", () => {

  const backToTopButton = document.getElementById("back-to-top")
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        backToTopButton.classList.add("show")
      } else {
        backToTopButton.classList.remove("show")
      }
    })

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

 
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
    
      alert("Obrigado por entrar em contato! Responderemos em breve.")
      this.reset()
    })
  }
})

