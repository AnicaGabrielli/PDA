/*const mostrar = function(num1, num2, callback){
    let nome = prompt("Insira seu nome:");
    console.log(callback(num1, num2))
}

mostrar(2,3, function (num1, num2)){
    return num1+num2;
}*/

// seleciona só um
const titulo3 = document.querySelector("h2");
titulo3.innerText = '';
const titulo = document.querySelector("h1");
console.log(titulo);
//seleiona todos. pode-se pegar o elemento pelo índice porque está dentro de um array
const titulo2 = document.querySelectorAll("h1")[0];
//pegar o texto do elemento;
console.log(titulo.innerText);

// reescreveu o texxo
titulo.innerText = '';

//criar elementos

const main = document.querySelector("main");

const section = document.createElement("sectio");

section.innerText = "biu";

main.append(section);

