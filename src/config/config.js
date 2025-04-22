const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");
 
const sequelize = new Sequelize(
    "sesi_rest", // Nome do banco
    "root", // Usuario do banco
    "root", // Senha do banco
    {
        host: "localhost", // Host do banco
        port: 3306, // MySQL
        dialect: "mysql",
        dialectModule: mysql2,
        logging: false
    }
);
 

 
module.exports = sequelize;