import express from "express";
// router() : método do express para criar rotas
const rota = express.Router();
rota.get("/perfil", (req, res) => {
  res.render("perfil");
});
// EXPORTANDO O MÓDULO
export default rota;