const knex = require("../conexoes/postgres");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  const verificarEmail = await knex("usuarios").where({ email }).first();

  if (verificarEmail) {
    return res
      .status(400)
      .json({ mensagem: "O email já esta sendo utilizado" });
  }
  const criptografarSenha = await bcrypt.hash(senha, 24);

  try {
    const { senha: xxx, ...dadosUsuario } = await knex("usuarios")
      .insert({ nome, email, senha: criptografarSenha })
      .returning(["id", "nome", "email"]);

    return res.json(dadosUsuario[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const detalharPerfilUsuario = async (req, res) => {
  const { senha: xxx, ...perfilUsuario } = req.usuario;
  return res.json(perfilUsuario);
};

module.exports = {
  cadastrarUsuario,
  detalharPerfilUsuario,
};
