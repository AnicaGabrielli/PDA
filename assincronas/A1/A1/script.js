/*
criar o array de nome e um array de sobrenomdes
vou usar o laço for para percorrer o array de nomes
usar o metodo para capturar a primeira letra dos dois
empurrar eles dois somados para outro array
*/
const nomes = ["Anica", "Bruna"];
const sobrenomes = ["Pereira", "Santos"];
const nome_comp = [];
let p = document.getElementById("p");
function juntar (nomes, sobrenomes, nome_comp){
    for(i = 0; i < nomes.length; i++){
        nome_comp.push(nomes[i].charAt(0).toLowerCase()+ sobrenomes[i].charAt(0).toLowerCase());

        p.innerHTML = `${nome_comp.join("<br>")}`;
    }
}
juntar(nomes,sobrenomes,nome_comp);
console.log(nome_comp);

/*Atividade Assincrona:  
 Crie um programa utilizando  "let" e "const" em JavaScript:
 Crie um programa que calcule a média de notas de uma turma
 armazenando as notas em variáveis usando "let" e 
 declarando constantes utilizando "const" para valores fixos,
 como o número máximo de notas.

Utilize o prompt para o usuário inserir as notas.
*/

const qtd = Number(prompt("Quantas notas vc deseja inserir: "));
const notas = [];
var soma = 0;


for(i = 0; i < qtd; i++){
    let nota = parseFloat(prompt(`Digite a nota ${i+1}:`));
    notas.push(nota);
}

for( i = 0; i< notas.length; i++){
    soma += notas[i];
}
var media = soma / (notas.length);

console.log(`A media é ${media}`);
