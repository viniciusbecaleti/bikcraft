const url = location.href
const links = document.querySelectorAll(".header-menu a")

links.forEach(link => {
   if (url.includes(link.href)) {
      link.classList.add("ativo")
   }
});