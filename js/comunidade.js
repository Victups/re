const posts = []

function createPostElement(post) {
  const postDate = new Date(post.date).toLocaleString()
  return `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${escapeHTML(post.title)}</h5>
                <p class="card-text">${escapeHTML(post.content)}</p>
                <p class="card-text"><small class="text-muted">Publicado em ${postDate}</small></p>
            </div>
        </div>
    `
}

function escapeHTML(str) {
  const div = document.createElement("div")
  div.textContent = str
  return div.innerHTML
}

function renderPosts() {
  const postsContainer = document.getElementById("posts-container")
  if (postsContainer) {
    postsContainer.innerHTML = posts.map(createPostElement).join("")
  }
}

function addNewPost(title, content) {
  const newPost = {
    title: title,
    content: content,
    date: new Date().toISOString(),
  }
  posts.unshift(newPost)
  renderPosts()
}

document.addEventListener("DOMContentLoaded", () => {
  const newPostForm = document.getElementById("new-post-form")
  if (newPostForm) {
    newPostForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const title = document.getElementById("post-title").value.trim()
      const content = document.getElementById("post-content").value.trim()
      if (title && content) {
        addNewPost(title, content)
        newPostForm.reset()
      }
    })
  }


  addNewPost(
    "Bem-vindos à nossa comunidade!",
    "Este é um espaço seguro para compartilharmos experiências e nos apoiarmos mutuamente.",
  )
  addNewPost("Dica de leitura", "Alguém tem recomendações de livros LGBTQIA+ para compartilhar?")
})

