async function pegarTodosUsuarios() {
  const response = await fetch("/api/usuarios");
  const usuarios = await response.json();
  return usuarios[0];
}

async function criarUsuarios() {
  const usuarios = await pegarTodosUsuarios();

  const containerGeral = document.getElementById("container-usuarios");

  for (const usuario of usuarios) {
    const divUsuario = document.createElement("div");
    divUsuario.id = "info";

    const spanCpf = document.createElement("span");
    spanCpf.innerText = `CPF: ${usuario.cpf}`;
    const spanNome = document.createElement("span");
    spanNome.innerText = `Nome: ${usuario.nome}`;
    const spanEmail = document.createElement("span");
    spanEmail.innerText = `Email: ${usuario.email}`;
    const spanCEP = document.createElement("span");
    spanCEP.innerText = `CEP: ${usuario.cep}`;

    containerGeral.appendChild(divUsuario);
    divUsuario.appendChild(spanCpf);
    divUsuario.appendChild(spanNome);
    divUsuario.appendChild(spanEmail);
    divUsuario.appendChild(spanCEP);
  }
}

criarUsuarios();
