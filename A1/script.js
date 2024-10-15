// FUNÇÕES ANÔNIMAS - SÃO FUNÇÕES QUE NÃO POSSUEM UM NOME ASSOCIADO. sÃO CHAMADAS EM TEMPO DE EXECUÇÃO. FFUNCIONA COMO UMA FUNÇÃO PADRÃO.


const f = function(val1,val2){
    return val1+val2;
}

console.log(f(10, 5));

// Exemplo 2

const botao = document.getElementById('botao');

botao.addEventListener('click', function(){
    alert("botão clicado pelo usuário.");
});

// FUNÇÕES CALLBACK - SÃO FUNÇÕES QUE RECEBEM OUTRAS FUNÇÕES COMO PARÂMETRO

const inserir_nome = (call_back) =>{
    let name = "Ãnica";
    call_back(name);
}
const meu_nome = (name)=>{
    console.log('olá, '+ name);
}
inserir_nome(meu_nome);