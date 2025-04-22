const express = require("express");

const router = require("./src/routers/router");
const sequelize = require("./src/config/config");

const app = express();

app.use(express.json());

sequelize.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso MYSQL")
    })
    .catch((err) => {
        console.log(err);
        console.log("Não foi possivel se conectar MySQL")
    })

sequelize.sync()
    .then(() => {
        console.log("Tabelas sincronizadas")
    })
    .catch((err) => {
        console.log(err)
    });

app.use("/api", router);

app.listen(8080, () => {
    console.log("API ONLINE");
});