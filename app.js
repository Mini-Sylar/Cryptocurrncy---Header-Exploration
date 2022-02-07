let ham = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let links  = document.querySelector('.links')
let login  = document.querySelector('.loginbutton')

ham.addEventListener("click", function () {
  navbar.classList.toggle("showlinks");
  if (navbar.classList.contains("showlinks")) {
   links.classList.remove('hidelinks')
   login.classList.remove("hidelinks");
  }
  else{
     links.classList.add("hidelinks");
      login.classList.add("hidelinks");
  }
});
