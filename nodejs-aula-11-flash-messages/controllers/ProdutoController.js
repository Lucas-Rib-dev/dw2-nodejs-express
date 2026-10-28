import express from 'express';
import Produto from '../models/Produto.js';
//importando o middleware de Autenticação
import Auth from '../middlewares/Auth.js';
import { where } from 'sequelize';

const route = express.Router();


// ROTA PRODUTOS
route.get("/produtos", Auth, function(req,res){
    Produto.findAll().then((produtos) => {
        res.render("produtos", {
            produtos: produtos
        });
    }).catch((error) => {
        console.log(`Falha ao carregar produtos. Error ${error}`);
    });

});

route.get("/produtos/excluir/:id", Auth, (req, res) => {
    const id = req.params.id;

    Produto.destroy({
        where: {id: id}
    }).then(() => {
        res.redirect("/produtos");
    }).catch((error) => {
        console.log(`Erro ao excluir produto. Erro: ${error}`);
    })
})

route.get("/produtos/editar/:id", Auth, (req, res) => {
    const id = req.params.id;
    Produto.findByPk(id).then(produto => {
        res.render("produtosEditar", {
            produto: produto
        });
    }).catch((error) => {
        console.log(`Erro ao buscar produto. Erro ${error}`);
    });
});

route.post("/produtos/alterar", Auth, (req, res) => {
    const id = req.body.id
    const nome  = req.body.nome
    const preco = req.body.preco
    const categoria = req.body.categoria

    Produto.update(
        {
            nome: nome,
            preco: preco,
            categoria: categoria
        },
        {
            where: {id: id}
        }
    ).then(() => {
        res.redirect("/produtos");
    }).catch((error) => {
        console.log(`Erro ao atualizar produto. Erro: ${error}`);
    });
});

export default route;