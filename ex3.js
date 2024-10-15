let array3 = [];
let aux3 = 0;

// Função para gerar número aleatório
function gerarAleatorio3(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para gerar o array aleatório
function gerarArray3() {
    array3 = [];  // Limpar o array antes de gerar um novo
    for (let i = 0; i < 10; i++) {
        array3.push(gerarAleatorio3(20, 1)); // Gerar 10 números aleatórios entre 1 e 20
    }
    document.getElementById("res3").innerText = "Array Bagunçado: " + array3.join(", ");
    document.getElementById("passos3").innerText = '';  // Limpar passos anteriores
}

// Ordenação Crescente
function ordenarCrescente3() {
    let passos = 'Passo a Passo do Bubble Sort (Crescente):\n';
    for (let j = array3.length - 1; j > 0; j--) {
        for (let i = 0; i < array3.length - 1; i++) {
            if (array3[i] > array3[i + 1]) {  // Comparar para crescente
                aux3 = array3[i];
                array3[i] = array3[i + 1];
                array3[i + 1] = aux3;
                passos += array3.join(", ") + "\n";  // Adicionar cada passo
            }
        }
    }
    document.getElementById("res3").innerText += "\nArray Ordenado (Crescente): " + array3.join(", ");
    document.getElementById("passos3").innerText = passos;
}

// Ordenação Decrescente
function ordenarDecrescente3() {
    let passos = 'Passo a Passo do Bubble Sort (Decrescente):\n';
    for (let j = array3.length - 1; j > 0; j--) {
        for (let i = 0; i < array3.length - 1; i++) {
            if (array3[i] < array3[i + 1]) {  // Comparar para decrescente
                aux3 = array3[i];
                array3[i] = array3[i + 1];
                array3[i + 1] = aux3;
                passos += array3.join(", ") + "\n";  // Adicionar cada passo
            }
        }
    }
    document.getElementById("res3").innerText += "\nArray Ordenado (Decrescente): " + array3.join(", ");
    document.getElementById("passos3").innerText = passos;
}

// Funções chamadas pelos botões
function chamada3Crescente() {
    gerarArray3();
    ordenarCrescente3();
}

function chamada3Decrescente() {
    gerarArray3();
    ordenarDecrescente3();
}