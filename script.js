let headerbottomBlockwrapper__iconMenu = document.querySelector('.header-bottomBlock-wrapper__iconMenu');
let fachevronleft = document.querySelector('.fa-chevron-left');
function functionRef() {
    document.querySelector('.nav__menu').style.display = "block";
    document.querySelector('body').style.overflow = "hidden";
}
function functionReff() {
    document.querySelector('.nav__menu').style.display = "none";
    document.querySelector('body').style.overflow = "visible";
}
headerbottomBlockwrapper__iconMenu.onclick = functionRef;
fachevronleft.onclick = functionReff;