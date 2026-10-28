import express from 'express';
import Cliente from '../models/Cliente.js';
//importando o middleware de Autenticação
import Auth from '../middlewares/Auth.js';
import { where } from 'sequelize';

const route = express.Router();

// ROTA CLIENTES
route.get("/clientes", Auth, function(req,res){
    // Selecionando todos os clientes do Banco de Dados
    Cliente.findAll().then((clientes) => {
        res.render("clientes", {
            // Enviando a lista de clientes para a página HTML
            clientes : clientes
        });
    }).catch((error) => {
        console.log(`Ocorreu um erro ao listar os clientes: ${error}`);
    });
})

// Rota de cadastro de Clientes
route.post("/clientes/cadastrar", Auth, (req, res) => {
    // Capturando os dados vindo do formulário e gravando nas variáveis
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;

    // chamando o model para gravar os dados no banco
    // equivalente ao INSERT INTO...
    Cliente.create({
        // NOME DA COLUNA NO BANCO / VARIÁVEL
        nome: nome,
        cpf: cpf,
        endereco: endereco
    }).then(() => {
        res.redirect("/clientes");
    }).catch((error) => {
        console.log(`Ocorreu um erro ao cadastrar o cliente: Erro ${error}`);
    });
});
// Rota para excluir o cliente
// :id -> Cria um parâmetro na rota
route.get("/clientes/excluir/:id", Auth, (req, res) => {
    // Criando uma variável para armazenar o parâmetro que chega pela URL
    const id = req.params.id
    Cliente.destroy({
        where : {
            id: id,
        }
    }).then(() => {
        res.redirect("/clientes");
    }).catch((error) => {
        console.log(`Ocorre um erro ao excluir o cliente. Erro: ${error}`);
    });
});

// Rota de edição do cliente
route.get("/clientes/editar/:id", Auth, (req, res) => {
    // Coletando o parâmetro da URL
    const id = req.params.id;
    // Buscando o cliente no Banco pela ID
    Cliente.findByPk(id).then(cliente => {
        res.render("clienteEditar", {
            // Enviando um objeto com os dados do cliente para a página
            cliente : cliente,
        });
    }).catch((error) => {
        console.log(`Ocorreu um erro ao buscar o cliente. Erro ${error}`);
    });
});

// Rota que altera cliente no banco de dados
route.post("/clientes/alterar", Auth, (req, res) => {
    // Coletando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;

    // Chamando o Model e pedindo para alterar no banco de dados
    Cliente.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        {
            where: {id: id}
        }
    ).then(() => {
        res.redirect("/clientes");
    }).catch((error) => {
        console.log(`Ocorreu um erro ao alterar o cliente. Erro: ${error}`)
    });
});

export default route;