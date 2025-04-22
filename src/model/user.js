const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const userController = require("../controllers/userController")
 
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
 
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
 
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'User',
    timestamps: true
});
 
module.exports = User;