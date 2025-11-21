// MENU HAMBÚRGUER
document.getElementById("btn-menu").addEventListener("click", function () {
    const menu = document.getElementById("menu-list");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// SLIDESHOW
let imagens = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg"
];

let index = 0;

function mostrarImagem() {
    document.getElementById("slide").src = imagens[index];
}

function avancar() {
    index = (index + 1) % imagens.length;
    mostrarImagem();
}

function voltar() {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarImagem();
}
