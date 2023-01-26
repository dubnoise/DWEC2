ScrollReveal().reveal('.presentacion');
ScrollReveal().reveal('.bloque-p', {delay: 300});
ScrollReveal().reveal('#conocimientos', {delay: 300});
ScrollReveal().reveal('.html5', {delay: 500});
ScrollReveal().reveal('.css3', {delay: 600});
ScrollReveal().reveal('.java', {delay: 700});

btnMostrar = document.querySelector("#btnMostrar"),
mysql = document.getElementById('mysql'),
php = document.getElementById('php'),
arduino = document.getElementById('arduino'),
multisim = document.getElementById('multisim'),
kicad = document.getElementById('kicad'),

btnMostrar.addEventListener("click", () => {
	mysql.style.display = "flex";
    php.style.display = "flex";
    arduino.style.display = "flex";
    multisim.style.display = "flex";
    kicad.style.display = "flex";
    btnMostrar.style.display = "none"
});

var card_html5 = document.getElementById("card_html5");

card_html5.addEventListener("click", function (e) {
    card_html5.classList.toggle('is-flipped');
});

var card_css3 = document.getElementById("card_css3");

card_css3.addEventListener("click", function (e) {
    card_css3.classList.toggle('is-flipped');
});

var card_java = document.getElementById("card_java");

card_java.addEventListener("click", function (e) {
    card_java.classList.toggle('is-flipped');
});

var card_mysql = document.getElementById("card_mysql");

card_mysql.addEventListener("click", function (e) {
    card_mysql.classList.toggle('is-flipped');
});

var card_php = document.getElementById("card_php");

card_php.addEventListener("click", function (e) {
    card_php.classList.toggle('is-flipped');
});

var card_arduino = document.getElementById("card_arduino");

card_arduino.addEventListener("click", function (e) {
    card_arduino.classList.toggle('is-flipped');
});

var card_multisim = document.getElementById("card_multisim");

card_multisim.addEventListener("click", function (e) {
    card_multisim.classList.toggle('is-flipped');
});

var card_kicad = document.getElementById("card_kicad");

card_kicad.addEventListener("click", function (e) {
    card_kicad.classList.toggle('is-flipped');
});




