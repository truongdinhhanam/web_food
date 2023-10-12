let menu = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// let home = document.getElementById("home");
// home.onclick = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
// };

// let speciality = document.getElementById("speciality");
// speciality.onclick = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
// };

var section = document.querySelectorAll('section');
for (let i = 0; i < section.length; i++) {
  section[i].onclick = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  }
  
}
