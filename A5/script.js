class Pessoa{
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    mostrarPessoa(calculadora){
        console.log(
            `olá ${this.nome}! Sua idade é ${this.idade} e seu cpf é ${this.cpf}`
        )
    }
}
class User extends Pessoa{
    #saldo = 0;
    constructor(nomePessoa, idadePessoa, cpfPessoa, email, senha){
        super(nomePessoa, idadePessoa, cpfPessoa)
        this.email = email;
        this.senha = senha;
    
    }
    mostrarUser(){
        console.log(this.email, nomePessoa)
    }
}
