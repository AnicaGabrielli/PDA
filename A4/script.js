// notação literal
const Pessoa = {
    nome: "Daniel",
    idade: 28,
    mostrar: function(){
        console.log(`O meu nome é ${this.nome}`)
    }
}

console.log(Pessoa.nome);

//função literal

function criarPessoa(nome, idade, profissão){
    return{
        nome, 
        idade,
        profissão,

    }
}

let anica = criarPessoa("Anica", 27, "gp");
console.log(anica);

// 1 pilar: Herança

// Toda classe tera que ter propriedes e métodos

 class Persona{
    constructor(nome, idade, genero){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
    apresentar(){
        console.log(`Olá, eu me chamo ${this.nome}`)
    }

}

let pessoa1 = new Persona("Linda", 18, "feminino");
console.log(pessoa1);



// crir um arquivo da classe e exportar para o principal

