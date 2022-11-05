import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_03",
});

const novaConexao = conexao.promise();

function cadastrar({
  cpf,
  nome,
  email,
  cep,
  rua,
  numero,
  bairro,
  cidade,
  estado,
  complemento,
}) {
  return novaConexao.query(
    "INSERT INTO usuarios (cpf, nome, email, cep, rua, numero, bairro, cidade, estado, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [cpf, nome, email, cep, rua, numero, bairro, cidade, estado, complemento]
  );
}

function pegarTodosUsuarios() {
  return novaConexao.query("SELECT * FROM usuarios");
}

export { cadastrar, pegarTodosUsuarios };
