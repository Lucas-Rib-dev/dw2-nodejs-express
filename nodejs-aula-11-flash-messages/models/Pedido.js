import connection from "../config/sequelize-config.js";
import Sequelize, { INTEGER } from "sequelize";

const Pedido = connection.define('pedidos', {
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    //Chave estrangeira
    cliente_id:{
        type: Sequelize.INTEGER,
        alowNull: false,
    },
});

//Essa linha será movida para o arquivo "index.js"
//Pedido.sync({force: false});



//Exportando o módulo
export default Pedido;