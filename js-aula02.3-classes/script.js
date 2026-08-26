// CLASSES NO JAVASCRIPT    
class Carro {
// NOME DE CLASSES DEVEM INICIAR COM A PRIMEIRA LETRA MAIÚSCULA

// ATRIBUTOS
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
// MÉTODOS
    buzinar() {
        return "Beep! Bepp!";
    }
}

// CRIANDO UMA INSTÂNCIA (OBJETO) DA CLASSE CARRO
const carroPopular = new Carro("Fiat", "Uno", "2012");
// ACESSANDO OS ATRIBUTOS E MÉTODOS DO OBJETO
document.write(`
    <p>O carro popular ${carroPopular.marca}, Modelo ${carroPopular.modelo}, é do ano ${carroPopular.ano} e quando ele buzina faz ${carroPopular.buzinar()}</p>
    `);

