// ROTA CLIENTES
import express from "express";
import Cliente from "../model/Cliente.js"
const router = express.Router();
rota.get("/clientes", function (req, res) {
    // Selecionando todos os Clientes do banco de dados
  Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes: clientes,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os clientes, ERRO: ${error}`)
    });
});
Cliente.sync({force: false})
export default router;