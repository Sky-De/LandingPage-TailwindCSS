import './style.css';

const menuBar = document.getElementById("menubar");
const menuBtn = document.getElementById("menu");
// menu BTN toggle show/hidden
function toggleShow(){
    menuBar.classList.toggle("hidden");
}
menuBtn.addEventListener("click",toggleShow);
