const btnMobile = document.getElementById('btn-mobile');
const closeMenu1 = document.getElementById("link1");
const closeMenu2 = document.getElementById("link2");
const closeMenu3 = document.getElementById("link3");
const closeMenu4 = document.getElementById("link4");

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
closeMenu1.addEventListener('click', toggleMenu);
closeMenu2.addEventListener('click', toggleMenu);
closeMenu3.addEventListener('click', toggleMenu);
closeMenu4.addEventListener('click', toggleMenu);