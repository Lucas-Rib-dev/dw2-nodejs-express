// Importando o framework Express
import express from "express";
// IMportando o Model
import Produto from "../models/Produto.js"

// Criando a porta
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos",function(req,res){
    Produto.findAll().then((produtos) => {
    res.render("produtos", {
        produtos: produtos
    });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os produtos. Erro: ${error}`)
    })
});
// Exportando o módulo
export default router;