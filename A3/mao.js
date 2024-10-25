const titulo = document.querySelector("h1");
const botao = document.getElementById("botao");

botao.innerHTML = "CLIQUE";
titulo.style.background = "red";

botao.addEventListener('mouseup', function(){
    botao.innerHTML = "CLIQUE";
    titulo.style.background = "red";
})
botao.addEventListener('mousedown', function(){
    botao.innerHTML = "clicado";
    titulo.style.background = "green";
})
