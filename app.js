let nomes = [];
contador = 0;

function adicionarAmigo(){
    nome = document.getElementById('amigo').value;
    nomes.push(nome);
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML += `<li>${nomes[contador]}</li>`;
    contador++;
}
