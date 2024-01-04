require("dotenv").config();

const express = require("express");

const usuariosRotas = require("./rotas/usuarioRotas");
const app = express();

app.use(usuariosRotas);
app.use(express.json());

app.get("/teste", (req, res) => {
  return res.send("teste de servidor");
});

app.listen(3000);
