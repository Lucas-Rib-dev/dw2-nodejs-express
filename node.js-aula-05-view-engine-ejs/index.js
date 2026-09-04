// index.js == arquivo principal do back-end.

// Importando o express para o projeto
const express = require("express"); // Forma Classica (CommonJS)

const app = express(); // Criando uma instância do Express

//AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

// ROTAS DE PRODUTOS
app.get("/produtos", (req, res) => {
  // Lista de produtos (dados mockados)
  //Futuramente os dados virão do banco de dados
  // Array de objetos
  const produtos = [
    {nome: "Computador", marca: "Lenovo", preco: 3500},
    {nome: "Celular", marca: "Samsung", preco: 3500},
    {nome: "Notebook", marca: "Dell", preco: 3500},
    {nome: "Tablet", marca: "Asus", preco: 3500},

  ];
  // Enviando a lista de produtos para a pagina
  res.render("produtos",{
  // Enviando a lista de produtos para a pagina
  produtos : produtos, 
  } );
});
app.get("/serviços", (req, res) => {
  res.render("servicos");
});
app.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Lucas Morato", cpf:"999.999.999.999"},
    {nome: "Osvaldo Hoch", cpf:"888.888.888.888"},
    {nome: "Pamela", cpf:"777.777.777.777"},
    {nome: "Allison Lopes", cpf:"666.666.666.6666"},
  ];
  res.render("clientes", {
    clientes: clientes,
  });
    
});
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

app.set("view engine", "ejs"); // EJS renderiza as páginas do site

// Método do Express para iniciar o servidor back-end
// app.listen()

// Iniciando o servidor na porta 8080
const port = 8070;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    // Em caso de sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
