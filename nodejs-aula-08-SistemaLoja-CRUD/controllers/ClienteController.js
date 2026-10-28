// Importando o framework Express
import express from "express";
// Importando o Model
import Cliente from "../models/Cliente.js";

// Criando a rota
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados (PROMISSE), equivalente à query SELECT * FROM clientes;
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
    // Enviando a lista de clientes para a página HTML (front-end)
    clientes: clientes,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`)
  })
});
// Exportando o módulo
export default router;
