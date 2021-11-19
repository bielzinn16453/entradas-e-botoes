function mostrarNome() {
    let divNova = document.createElement("div");
    let inputNome = document.querySelector("#nome");
    let inputNumber = document.querySelector("#idade")
    let textoNovo = document.createTextNode(`Bem vindo ${inputNome.value}`);

    divNova.appendChild(textoNovo);
    document.body.appendChild(divNova);

}

let botaoOk = document.querySelector("#botao");
botaoOk.onclick = mostrarNome
