import express from "express";
// router() : método do express para criar rotas
const rota = express.Router();
rota.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Lucas Morato", cpf:"999.999.999.999"},
    {nome: "Osvaldo Hoch", cpf:"888.888.888.888"},
    {nome: "Pamela", cpf:"777.777.777.777"},
    {nome: "Allison Lopes", cpf:"666.666.666.6666"},
  ];
  res.render("clientes", {
    clientes: clientes,
  });  
});
// EXPORTANDO O MÓDULO
export default rota;