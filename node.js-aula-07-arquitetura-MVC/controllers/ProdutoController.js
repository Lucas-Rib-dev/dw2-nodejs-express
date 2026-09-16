import express from "express";
// router() : método do express para criar rotas
const rota = express.Router();
// ROTAS DE PRODUTOS
rota.get("/produtos", (req, res) => {
  // Lista de produtos (dados mockados)
  //Futuramente os dados virão do banco de dados
  // Array de objetos
  const produtos = [
    {nome: "Computador", marca: "Lenovo", preco: 3500},
    {nome: "Celular", marca: "Samsung", preco: 3500},
    {nome: "Notebook", marca: "Dell", preco: 3500},
    {nome: "Tablet", marca: "Asus", preco: 3500},

  ];
  // Enviando a lista de produtos para a pagina
  res.render("produtos",{
  // Enviando a lista de produtos para a pagina
  produtos : produtos, 
  } );
});
// EXPORTANDO O MÓDULO
export default rota;