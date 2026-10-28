// Neste arquivo será definido os relacionamentos entre tabelas
// Model Cliente
import Cliente from "../models/Cliente.js";
// Model Pedido
import Pedido from "../models/Pedido.js";

// Definindo os relacionamentos entre os Models
const defineAssociations = () => {
  // Um Cliente possui MUITOS Pedidos
  Cliente.hasMany(Pedido, { foreignKey: "cliente_id" });
  // Um Pedido pertence a UM Cliente   
  Pedido.belongsTo(Cliente, { foreignKey: "cliente_id" });
};
// Exportando o módulo
export default defineAssociations;
