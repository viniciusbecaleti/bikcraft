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