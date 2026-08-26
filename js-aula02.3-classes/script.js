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

// Criando uma nova INSTÂNCIA : Carro Conversível
const carroConversivel = new Carro();
carroConversivel.marca = "Chevrolet";
carroConversivel.modelo = "Camaro";
carroConversivel.ano = "2026";

// Adicionando um NOVO ATRIBUTO (não previsto na classe)
carroConversivel.corNeon = "Azul"
// Adicionando um NOVO METODO (não previsto na classe)
carroConversivel.turbo = function(){
    return "Vrummm, o carro está acelerando!"
};
document.write(
    `O carro ${carroConversivel.marca} ${carroConversivel.modelo} tem neon da cor ${carroConversivel.corNeon}`
)
document.write(
    `<p>${carroConversivel.turbo()}</p>`
)