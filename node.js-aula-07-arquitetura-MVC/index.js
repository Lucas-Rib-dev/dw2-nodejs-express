// index.js == arquivo principal do back-end.

// Importando o express para o projeto
// const express = require("express"); // Forma Classica (CommonJS)
import express from "express"; // Forma de exportação do ES6
const app = express(); // Criando uma instância do Express

// IMPORTANDO O CONTROLLER DE Produto
import ProdutoController from "./controllers/ProdutoController.js";
import ClienteController from "./controllers/ClienteController.js";
import ServicoController from "./controllers/ServicoController.js";
import UsuarioController from "./controllers/UsuarioController.js";
//AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

//Configurações do EXPRESS
// Configurando o EJS
app.set("view engine", "ejs"); // EJS renderiza as páginas do site
// Configurando a pasta 'PUBLIC' para arquivos estáticos
app.use(express.static("public"));
// Método do Express para iniciar o servidor back-end
// app.listen()

//CONFIGURANDO AS ROTAS
app.use("/", ProdutoController)
app.use("/", ClienteController)
app.use("/", ServicoController)
app.use("/", UsuarioController)

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
