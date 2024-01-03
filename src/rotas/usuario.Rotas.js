const express = require("express");
const { cadastrarUsuario } = require("../controladores/usuario");
const usuarioRotas = express();

usuarioRotas.post("/usuario", cadastrarUsuario);
