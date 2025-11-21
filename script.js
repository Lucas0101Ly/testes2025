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

// TEXTOS DAS REDAÇÕES
let redacoes = [
    {
        titulo: "Redação 1",
        texto: "Aqui vai o texto completo da redação 1..."
    },
    {
        titulo: "Redação 2",
        texto: "Aqui vai o texto completo da redação 2..."
    },
    {
        titulo: "Redação 3",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 4",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 5",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 6",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 7",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 8",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 9",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 10",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 11",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 12",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 13",
        texto: "Texto completo..."
    },
    {
        titulo: "Redação 14",
        texto: "Texto completo..."
    }
];

// ABRIR MODAL
function abrirRedacao(i) {
    document.getElementById("modal-titulo").innerText = redacoes[i].titulo;
    document.getElementById("modal-texto").innerText = redacoes[i].texto;
    document.getElementById("modal").style.display = "flex";
}

// FECHAR MODAL
function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

