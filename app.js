let nomes = [];
contador = 0;

function adicionarAmigo(){
    nome = document.getElementById('amigo').value;
    nomes.push(nome);
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML += `<li>${nomes[contador]}</li>`;
    contador++;
}

function sortearAmigo(){
    let sorteado = Math.floor(Math.random() * nomes.length);
    document.getElementById('resultado').innerHTML = nomes[sorteado];
}