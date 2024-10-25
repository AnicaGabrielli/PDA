class Personagem{
    constructor(serie, nome, descricao, bordao){
        this.serie = serie;
        this.nome = nome;
        this.descricao = descricao;
        this.bordao = bordao;

    }
    frase(){
        console.log(`Meu nome é ${this.nome} e meu bordão é "${this.bordao}"`)
    }

}
let alex = new Personagem("Verdades Secretas", "Alex", "Rico, poderoso, macho alpha, doente pela Angel", "Eu te compro!");

console.log(alex);
console.log(alex.frase());