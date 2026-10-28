// Model Pedido
// Um Moldel é uma representação de uma entidade do sistema (tabela)

//Importando o arquivo de conexão

import connection from "../config/sequelize-config.js"
// Importando a biblioteca Sequelize
import Sequelize from "sequelize";
// O método define() define a estrutura de uma tabela no banco
const Pedido = connection.define('pedidos', {
    // Atributos da tabela 'clientes'
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
});
// O método .sync sincroniza a estrutura do Model com a tabela do banco de dados
// force: false sincroniza a tabela somente na priemira vez (somente se não existir)
Pedido.sync({force: false})

// Exportando o módulo
export default Pedido;