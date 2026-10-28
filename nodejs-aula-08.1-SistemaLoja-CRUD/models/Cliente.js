// Model Cliente
// Um Moldel é uma representação de uma entidade do sistema (tabela)

//Importando o arquivo de conexão

import connection from "../config/sequelize-config.js"
// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

// O método define() define a estrutura de uma tabela no banco
const Cliente = connection.define('clientes', {
    // Atributos da tabela 'clientes'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereço: {
        type: Sequelize.STRING,
        alloNull: false
    },
});
// O método .sync sincroniza a estrutura do Model com a tabela do banco de dados
// force: false sincroniza a tabela somente na priemira vez (somente se não existir)
Cliente.sync({force: false})

// Exportando o módulo
export default Cliente;