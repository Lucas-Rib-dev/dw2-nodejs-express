// Arquivo com dados de conexão com o banco

// Importando o Sequelize
import Sequelize  from "sequelize";

const connection = new Sequelize({
    // Dados de conexão
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    //Esta linha precisa estar comentada na primeira execução do projeto
    database: 'loja_relacional',
    timezone: '-03:00'
});
// Exportando o módulo
export default connection;