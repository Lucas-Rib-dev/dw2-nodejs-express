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
  res.render("produtos");
});
app.get("/serviços", (req, res) => {
  res.render("servicos");
});
app.get("/clientes", (req, res) => {
  res.render("clientes");
});
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

app.set("view engine", "ejs"); // EJS renderiza as páginas do site

// Método do Express para iniciar o servidor back-end
// app.listen()

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    // Em caso de sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
