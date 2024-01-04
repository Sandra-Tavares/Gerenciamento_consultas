const express = require("express");
const {
  cadastrarUsuario,
  detalharPerfilUsuario,
} = require("../controladores/usuario");

const usuarioRotas = express();

usuarioRotas.post("/usuario", cadastrarUsuario);
usuarioRotas.get("/usuario", detalharPerfilUsuario);

module.exports = usuarioRotas;
