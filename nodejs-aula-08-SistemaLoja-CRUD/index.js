// Importando o Express
import express from "express";
// Importando o arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express
const app = express();
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));



import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

// REALIZNADO A CONEXÃO COM O BANCO DE DADOS
connection.authenticate().then(() => {
    // Sucesso na promessa:
  console.log("Conexão com o banco de dados realizada com sucesso!");
    // Falha na promessa
}).catch((error) => {
  console.log(`Ocorreu um erro ao se conectar ao banco de dados. Erro: ${erro}`);
});
// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

app.use("/", ProdutosController);
app.use("/", ClientesController);
app.use("/", PedidosController);

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
