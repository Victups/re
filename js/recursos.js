const recursosEInstituicoes = [
  {
    nome: "ABGLT",
    descricao: "Associação Brasileira de Lésbicas, Gays, Bissexuais, Travestis, Transexuais e Intersexos",
    link: "https://www.abglt.org/",
    tipo: "instituicao",
  },
  {
    nome: "Grupo Dignidade",
    descricao: "Organização da sociedade civil que atua na promoção da cidadania LGBTI+",
    link: "https://www.grupodignidade.org.br/",
    tipo: "instituicao",
  },
  {
    nome: "Casa 1",
    descricao: "Centro de acolhida e cultura para LGBT+ em situação de vulnerabilidade",
    link: "https://www.casaum.org/",
    tipo: "instituicao",
  },
  {
    nome: "Mães pela Diversidade",
    descricao: "Associação de mães, pais e familiares em defesa da diversidade",
    link: "https://maespeladiversidade.org.br/",
    tipo: "instituicao",
  },
  {
    nome: "ANTRA",
    descricao: "Associação Nacional de Travestis e Transexuais",
    link: "https://antrabrasil.org/",
    tipo: "instituicao",
  },
  {
    nome: "Cartilha de Saúde LGBTQIA+",
    descricao: "Informações importantes sobre saúde física e mental para a comunidade LGBTQIA+",
    link: "#",
    tipo: "recurso",
  },
  {
    nome: "Guia de Direitos LGBTQIA+",
    descricao: "Um guia completo sobre os direitos da comunidade LGBTQIA+ no Brasil",
    link: "#",
    tipo: "recurso",
  },
]

function createCard(item) {
  return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">${item.nome}</h3>
                    <p class="card-text">${item.descricao}</p>
                    <a href="${item.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        ${item.tipo === "instituicao" ? "Visitar Site" : "Acessar Recurso"}
                    </a>
                </div>
            </div>
        </div>
    `
}

document.addEventListener("DOMContentLoaded", () => {
  const recursosList = document.getElementById("recursos-list")
  if (recursosList) {
    recursosEInstituicoes.forEach((item) => {
      recursosList.innerHTML += createCard(item)
    })
  }
})

