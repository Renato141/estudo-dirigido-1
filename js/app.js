const divImagemPrincipal = document.querySelector("#imagem-principal");
const imagemPrincipal = divImagemPrincipal.querySelector("img");
const textoAlternativo = divImagemPrincipal.querySelector(".texto-alternativo");
const btnProximo = divImagemPrincipal.querySelector(".proximo");
const btnAnterior = divImagemPrincipal.querySelector(".anterior");
const todasImagens = document.querySelectorAll("#imagens img");

let idImagemAtiva = 0;

const proximaImagem = function () {
    idImagemAtiva++;
    if (idImagemAtiva >= todasImagens.length) idImagemAtiva = 0;
    selecionarImagem();
};

const voltarImagem = function () {
    idImagemAtiva--;
    if (idImagemAtiva < 0) idImagemAtiva = todasImagens.length - 1;
    selecionarImagem();
};

const selecionarImagem = function () {
    imagemPrincipal.src = todasImagens[idImagemAtiva].src;
    atualizarTextoAlternativo();
    todasImagens.forEach(function (imagem) {
        imagem.classList = "";
    });

    todasImagens[idImagemAtiva].classList.add("");
};

const atualizarTextoAlternativo = function () {
    textoAlternativo.textContent = todasImagens[idImagemAtiva].alt;
};

btnProximo.addEventListener("click", proximaImagem);
btnAnterior.addEventListener("click", voltarImagem);

todasImagens.forEach(function (imagem, numeroImage) {
    imagem.addEventListener("click", function () {
        idImagemAtiva = numeroImage;
        selecionarImagem();
    });
});


