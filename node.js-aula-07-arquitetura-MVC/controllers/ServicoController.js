import express from "express";
// router() : método do express para criar rotas
const rota = express.Router();
//ROTA DE SERVIÇOS
rota.get("/servicos", (req, res) => {
  res.render("servicos");
});
//ROTA DE CLIENTES
// EXPORTANDO O MÓDULO
export default rota;