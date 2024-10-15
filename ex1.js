let res = document.getElementById('res');
let passos = document.getElementById('passos');
let array = [];

function gerarArray() {
    array = [];
    for (let i = 0; i < 10; i++) {
        array.push(gerarAleatorio(20, 1));
    }
    res.innerHTML = `Array original: ${array.join(', ')}\n`;
    passos.innerHTML = ''; // isso vai limpar os passos anteriores
}


function gerarAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Ordenação Crescente
function ordenarCrescente() {
    let aux;
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;

                passos.innerHTML += `Passo ${j + 1}: ${array.join(', ')}\n`;
            }
        }
    }
    res.innerHTML += `Array ordenado (crescente): ${array.join(', ')}`;
}

// Ordenação Decrescente
function ordenarDecrescente() {
    let aux;
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;

                passos.innerHTML += `Passo ${j + 1}: ${array.join(', ')}\n`;
            }
        }
    }
    res.innerHTML += `Array ordenado (decrescente): ${array.join(', ')}`;
}

// Chamadas dos botões
function chamada1Crescente() {
    gerarArray();
    ordenarCrescente();
}

function chamada1Decrescente() {
    gerarArray();
    ordenarDecrescente();
}