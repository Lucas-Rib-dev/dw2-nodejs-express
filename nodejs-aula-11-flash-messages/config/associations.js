//Neste arquivo será definido os relacionamentos entre tabelas

//Model Cliente
import Cliente from "../models/Cliente.js";
//Model Pedido
import Pedido from "../models/Pedido.js";

//Definindo os relacionamentos entre os models

const defineAssociations = () =>{
    //Um cliente possui muitos pedidos
    Cliente.hasMany(Pedido,{foreignKey: "cliente_id"});
    //Um pedido pertence a apenas um cliente
    Pedido.belongsTo(Cliente, {foreignKey: "cliente_id"});
}

export default defineAssociations;