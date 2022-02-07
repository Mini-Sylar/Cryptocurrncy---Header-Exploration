let ham = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let links  = document.querySelector('.links')

ham.addEventListener("click", function () {
  navbar.classList.toggle("showlinks");
  if (navbar.classList.contains("showlinks")) {
   links.classList.remove('hidelinks')
  }
  else{
     links.classList.add("hidelinks");
  }
});
