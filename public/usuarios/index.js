async function pegarTodosUsuarios() {
  const response = await fetch("/api/usuarios");
  const usuarios = await response.json();
  console.log(usuarios);
  return usuarios[0];
}

async function criarUsuarios() {
  const usuarios = await pegarTodosUsuarios();

  const cpf = document.getElementById("cpf");
  const span = document.createElement("span");
  //   span.innerText =
}

criarUsuarios();
