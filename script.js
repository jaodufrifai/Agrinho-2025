
function aumentarfont(){
    var elemento = document.querySelector("body");
    var tamanhoAtual = window.getComputedStyle(elemento).fontSize;
    var novoTamanho = parseFloat(tamanhoAtual) + 2 + "px";
    elemento.style.fontSize = novoTamanho;
}

function diminuirfont(){
    var elemento = document.querySelector("body");
    var tamanhoAtual = window.getComputedStyle(elemento).fontSize;
    var novoTamanho = parseFloat(tamanhoAtual) - 2 + "px";
    elemento.style.fontSize = novoTamanho;
}