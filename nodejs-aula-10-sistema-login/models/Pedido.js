import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const Pedido = connection.define("pedidos", {
  // Atributos da tabela 'pedidos'
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  // Chave estrangeira
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Essa linha será movida para o arquivo "index.js"
// Pedido.sync({ force: false });

// Exportando o módulo
export default Pedido;
