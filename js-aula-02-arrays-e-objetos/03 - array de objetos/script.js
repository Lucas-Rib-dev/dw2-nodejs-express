const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "Pc moderno com bom desempenho"
};
document.write(`${produto}`)

// Acessando os atributos do objeto

document.write(`<p>${produto.nome}, ${produto.marca}, ${produto.preco}, ${produto.descricao}</p>`);

// ARRAY DE OBJETOS
document.write("<h3>Array de objetos:</h3>")
const listaProdutos = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom desempenho"
    },
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Ótima velocidade de processamento"
    },
    {
        nome: "iphone",
        marca: "Apple",
        preco: 13000,
        descricao: "Bateria dura mais que 2 horas!"
    },

];

// EXIBINDO AS INFORMAÇÕES DOS PRODUTOS COM FOREACH

document.write(`<h4>Produtos em promoção:</h4>`);

listaProdutos.forEach(produto => {
    document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco} <br>
        Descrição ${produto.descricao} <br><br>
    `);
})