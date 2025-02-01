const organizacoes = [
  {
    nome: "ABGLT",
    descricao: "Associação Brasileira de Lésbicas, Gays, Bissexuais, Travestis, Transexuais e Intersexos",
    site: "https://www.abglt.org/",
  },
  {
    nome: "Grupo Dignidade",
    descricao: "Organização da sociedade civil que atua na promoção da cidadania LGBTI+",
    site: "https://www.grupodignidade.org.br/",
  },
  {
    nome: "Casa 1",
    descricao: "Centro de acolhida e cultura para LGBT+ em situação de vulnerabilidade",
    site: "https://www.casaum.org/",
  },
  {
    nome: "Mães pela Diversidade",
    descricao: "Associação de mães, pais e familiares em defesa da diversidade",
    site: "https://maespeladiversidade.org.br/",
  },
  {
    nome: "Associação Nacional de Travestis e Transexuais (ANTRA)",
    descricao: "Rede nacional em defesa dos direitos da população trans",
    site: "https://antrabrasil.org/",
  },
]

function createOrgCard(org) {
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">${org.nome}</h3>
          <p class="card-text">${org.descricao}</p>
          <a href="${org.site}" class="btn btn-primary" target="_blank">Visitar Site</a>
        </div>
      </div>
    </div>
  `
}

document.addEventListener("DOMContentLoaded", () => {
  const orgList = document.getElementById("org-list")
  organizacoes.forEach((org) => {
    orgList.innerHTML += createOrgCard(org)
  })
})

