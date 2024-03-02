
let campoAmigo = document.getElementById("nome-amigo");
let listaAmigos = document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");
let amigos = [];

function adicionar() {
    let amigo = campoAmigo.value.toUpperCase();
    
    if (amigo == "") {
        alert("é necessário digitar o nome do amigo.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Esse nome já foi inserido na lista de amigos!");
        return;
    }
    amigos.push(amigo);
        
        //modo antigo
        // if (listaAmigos.textContent == "") {
            //     listaAmigos.textContent = amigo;
            // } else {
                //     listaAmigos.textContent = listaAmigos.textContent + ", " + amigo;
                // }
                
    renderizarLista();
    campoAmigo.value = "";
    campoAmigo.focus();
}

function sortear() {

    if (amigos.length < 3) {
        alert("É necessário pelo menos 3 amigos para realizar o sorteio.");
        return;
    }

    embaralha(amigos);
    listaSorteio.innerHTML = "";
    
    for(let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " --> " + amigos[i+1] + "<br>";
        }
    }
}

function reiniciar() {
    listaAmigos.textContent = "";
    listaSorteio.textContent = "";
    amigos = [];
    console.log(amigos);
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    renderizarLista();
}

function renderizarLista () {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let amigoElement = document.createElement("span");
        amigoElement.textContent = amigo;
        // amigoElement.onclick = () => excluirAmigo(index);
        amigoElement.addEventListener("click", () => {
            excluirAmigo(index);
        })
        
        if (listaAmigos.innerHTML == "") {
            listaAmigos.appendChild(amigoElement);

            //forma alternativa com problemas
            // listaAmigos.innerHTML = amigoElement;
        } else {
            let virgula = document.createElement("span");
            virgula.textContent = ", ";
            listaAmigos.appendChild(virgula);
            listaAmigos.appendChild(amigoElement);
            
            // listaAmigos.innerHTML = listaAmigos.innerHTML + ", " + amigoElement;
        
        }
        
        console.log(amigoElement);
    })
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