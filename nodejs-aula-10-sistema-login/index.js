// Importando o Express com ES6 Modules
import express from "express";
// Importando o arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express na variável app
const app = express();
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import UsuariosController from "./controllers/UsuariosController.js"

// Importando os Models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
import Produto from "./models/Produto.js";
// Importando as ASSOCIAÇÕES
import defineAssociations from "./config/associations.js";

// Configurações do Express
// Configurando o express para permitir dados através de formulários
app.use(express.urlencoded({ extended: false }));
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));
// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);
app.use("/", UsuariosController)

// REALIZANDO A CONEXÃO COM O BANCO DE DADOS
connection
  .authenticate()
  .then(() => {
    // Sucesso na promessa:
    console.log("Conexão com o banco de dados realizada com sucesso!");
    // Falha na promessa:
  })
  .catch((error) => {
    console.log(
      `Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`,
    );
  });

// CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
const DB_NAME = "loja";
connection
  .query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`)
  .then(() => {
    console.log(`O banco de dados ${DB_NAME} está criado!`);
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
  });

// Aplicando as associações
defineAssociations();

// Sincronizando os Models
Promise.all([ 
  Cliente.sync({force: false}),
  Pedido.sync({force: false})
]).then(() => {
  console.log("Tabelas e relacionamentos sincronizados com sucesso!");
}).catch(error => {
  console.log("Erro ao sincronizar as tabelas. Erro: " + error);
});


// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso: http://localhost:8080");
  }
});
