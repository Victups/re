document.addEventListener("DOMContentLoaded", () => {
  const faqContent = [
    {
      question: "Qual a diferença entre união estável e casamento civil para casais homoafetivos?",
      answer:
        "A união estável é reconhecida como uma relação de convivência duradoura, sem mudança no estado civil dos companheiros. Já o casamento civil altera o estado civil para 'casado' e oferece proteções jurídicas mais amplas, como direitos hereditários sobre todos os bens do cônjuge, mesmo os adquiridos antes do relacionamento. Desde 2011, o Supremo Tribunal Federal (STF) reconheceu a união estável homoafetiva, e em 2013, o Conselho Nacional de Justiça (CNJ) proibiu que cartórios se recusem a celebrar casamentos entre pessoas do mesmo sexo.",
    },
    // ... (other FAQ items)
  ]

  const faqContentSection = document.getElementById("faq-content")

  faqContent.forEach((item) => {
    const contentItem = document.createElement("div")
    contentItem.className = "card mb-3"
    contentItem.innerHTML = `
      <div class="card-header">
        <h3 class="mb-0">
          <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${faqContent.indexOf(item)}">
            ${item.question}
          </button>
        </h3>
      </div>
      <div id="faq-${faqContent.indexOf(item)}" class="collapse">
        <div class="card-body">
          <p>${item.answer}</p>
        </div>
      </div>
    `
    faqContentSection.appendChild(contentItem)
  })

  const resources = [
    { name: "Ministério dos Direitos Humanos - LGBT", url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/lgbt" },
    // ... (other resources)
  ]

  const resourceList = document.getElementById("resource-list")
  resources.forEach((resource) => {
    const li = document.createElement("li")
    li.className = "mb-2"
    li.innerHTML = `<a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary">${resource.name}</a>`
    resourceList.appendChild(li)
  })

  const backToTopButton = document.getElementById("back-to-top")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = "block"
    } else {
      backToTopButton.style.display = "none"
    }
  })

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Initialize Lucide icons
  lucide.createIcons()
})

