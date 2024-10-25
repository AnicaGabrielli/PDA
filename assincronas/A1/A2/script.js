// funções anonimas com callback
const p = document.getElementById("aprender");

function estudar(aluno, aprender){
    p.innerHTML = (`${aluno} aprendeu ${aprender()}`);
}

function lerHarryPoter(){
    return 'criatividade';
}
let lerDarcyRibeiro = function(){
    return 'sociologia';
}
function lerOlavoCarvalho(){
    return '?';
}
estudar("Andre", lerDarcyRibeiro);

// função anonima tradicional

const soma = function(a,b){
    return a + b;
};

console.log(soma(3,4));

// função seta

const soma2 = (a,b) => a+b;
console.log(soma(2,8));

// Funções anonimas imediatamente invocada (IIFE)

(function(){
    console.log("Esta é uma função executada imediatamente");
})();

// Função de seta com multiplas linhas

const multiplicar = (a,b)=>{
    const resultado = a*b;
    return resultado;
}
console.log(multiplicar(3,4));

// Funções anonimas como argumento

const numeros = [1,2,3,4,5,6,7];
const dobrados = numeros.map(function(num){
    return num*2;
});
console.log(dobrados);

// usando arrow function

const dobrados2 = numeros.map(num => num*2);


// Atividade assincrona:

// Crie uma função anônima usando const que recebe um array de nomes como parâmetro e retorna o array ordenado em ordem alfabética. 
const nomes = ["Ânica", "Gabrielli", "Gustavo Guanabara", "Ballerini", "Dimitro"];

const ordenamento = function(nomes){
    document.write(nomes.sort((a,b)=> a.localeCompare(b)).join("<br>"));
}
ordenamento(nomes);
// Em seguida, crie um array de nomes e utilize a função anônima como callback na função sort(), para ordenar os nomes. 


// Por fim, imprima no console o array de nomes ordenado.
