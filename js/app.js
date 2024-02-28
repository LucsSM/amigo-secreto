
let listaAmigos = document.getElementById("lista-amigos");
let campoAmigo = document.getElementById("nome-amigo");
let amigos = [];

function adicionar() {
    let amigo = campoAmigo.value;
    amigos.push(amigo);

    if (listaAmigos.textContent == "") {
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + amigo;
    }

    campoAmigo.value = "";
    campoAmigo.focus();
    console.log(amigos);
}