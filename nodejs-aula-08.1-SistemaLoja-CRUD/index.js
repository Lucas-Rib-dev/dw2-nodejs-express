// Importando o Express com ES6 Modules
import express from "express";
// Importando o arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express na variável app
const app = express();
// Importando os Controllers (onde estão as rotas)
import PedidosController from "./controllers/PedidoController.js";
import ClienteController from "./controllers/ClienteController.js";
// Importando os Models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
// Configurações do Express
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));
// Definindo o uso das rotas dos Controllers
app.use("/", PedidosController);

// REALIZANDO A CONEXÃO COM O BANCO DE DADOS
connection.authenticate().then(() => {
    // Sucesso na promessa:
  console.log("Conexão com o banco de dados realizada com sucesso!");
   // Falha na promessa:
}).catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`)
});
const DB_NAME = "loja";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
  console.log(`O banco de dados ${DB_NAME} está criado!`);
}).catch((error) => {
  console.log(`Ocorreu um erro ao criar o banco de dados. ERRO: ${error}`);
})

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});


// ROTA PRODUTOS
app.get("/produtos", function (req, res) {
  const produtos = [
    { nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis" },
    { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
    { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
    { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
