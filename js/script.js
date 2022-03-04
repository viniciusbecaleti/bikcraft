// Ativar links menu
const url = location.href
const links = document.querySelectorAll(".header-menu a")

links.forEach(link => {
   if (url.includes(link.href)) {
      link.classList.add("ativo")
   }
});

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
   console.log(parametro);
   
   const elemento = document.getElementById(parametro)
   
   if (elemento) {
      elemento.checked = true
   }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
   const pergunta = event.currentTarget
   console.log(pergunta);
   const controls = pergunta.getAttribute("aria-controls")
   const resposta = document.getElementById(controls)
   resposta.classList.toggle("ativa")
   const ativa = resposta.classList.contains("ativa")
   pergunta.setAttribute("aria-expanded", ativa)
}

function eventosPerguntas(pergunta) {
   pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// Galeria de bicicletas
const galeriaContainer = document.querySelector(".bicicleta-imagens")
const galeria = document.querySelectorAll(".bicicleta-imagens img")

galeria.forEach(imagem => {
   imagem.addEventListener("click", event => {
      const clicada = event.currentTarget
      const media = matchMedia("(min-width: 960px)").matches

      if (media) {
         galeriaContainer.prepend(clicada)
      }
   })
})

// Animação
if (window.SimpleAnime) {
   new SimpleAnime()
}