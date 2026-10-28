import express from 'express';
import Pedido from '../models/Pedido.js';
import { where } from 'sequelize';
//importando o Model de Cliente
import Cliente from '../models/Cliente.js';
//importando o middleware de Autenticação
import Auth from '../middlewares/Auth.js';

const route = express.Router();

// ROTA PEDIDOS
route.get("/pedidos", Auth, function(req,res){

    Promise.all([
        //listando todos os pedidos
    Pedido.findAll({
        //Trazendo os dados dos clientes juntos com os pedidos(innerJoin)
        include:[
            {
                model: Cliente, //Inclui a tabela Cliente no SELECT
                required: true,//Opcional: Garante que somente pedidos com clientes associados sejam retornados
            }
        ],
    }),
        //Selecionando todos os clientes
    Cliente.findAll()

]).then(([pedidos, clientes])=>{
        res.render("pedidos",{
            pedidos: pedidos,
            clientes: clientes
        })
    }).catch(error=>{
        console.log(`Erro ao listar os pedidos. ERRO: ${error}`);
    })
});
route.post("/pedidos/cadastrar", Auth, (req, res)=>{
    const numero = req.body.numero;
    const valor = req.body.valor;
    const clienteId = req.body.clienteId;
    Pedido.create({
        numero: numero,
        valor: valor,
        cliente_id: clienteId
    }).then(()=>{
        res.redirect("/pedidos")
    }).catch(error=>{
        console.log(error);
    })
})

route.get("/pedidos/excluir/:id", Auth, (req, res) => {
    const id = req.params.id;
    Pedido.destroy({
        where: {id: id}
    }).then(() => {
        res.redirect("/pedidos");
    }).catch((error) => {
        console.log(`Erro ao excluir pedidio. Erro ${error}`);
    });
});

route.get("/pedidos/editar/:id", Auth, (req, res) => {
    const id = req.params.id;
    Pedido.findByPk(id).then(pedido => {
        res.render("pedidosEditar", {
            pedido: pedido,
        });
    }).catch((error) => {
        console.log(`Erro ao buscar usuário. Erro ${error}`);
    });
});

route.post("/pedidos/alterar", Auth, (req, res) => {
    const id = req.body.id
    const numero = req.body.numero
    const valor = req.body.valor

    Pedido.update(
        {
            numero: numero,
            valor: valor
        },
        {
            where: {id: id}
        }
    ).then(() => {
        res.redirect("/pedidos")
    }).catch((error) => {
        console.log(`Não foi possivel alterar o pedido. Erro: ${error}`)
    });
});


export default route;