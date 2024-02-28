
let campoAmigo = document.getElementById("nome-amigo");
let listaAmigos = document.getElementById("lista-amigos");
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
}

function sortear() {
    let listaSorteio = document.getElementById("lista-sorteio");
    embaralha(amigos);
    
    for(let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " --> " + amigos[i+1] + "<br>";
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}
