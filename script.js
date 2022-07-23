function adicionar() {
  let listaConvidados = [];
  let convidado = document.getElementById("convidado").value;

  if (convidado == "") {
    alert("Preencha com o nome do convidado");
  } else {
    listaConvidados.push(convidado);

    for (let i = 0; i < listaConvidados.length; i++) {
      document.getElementById("cadastrados").innerHTML += `
          <ul>
              <li>${listaConvidados[i]}</li>
          </ul>`;
    }
  }
  limpaCampo();
}

function limpaCampo() {
  document.getElementById("convidado").value = "";
}
