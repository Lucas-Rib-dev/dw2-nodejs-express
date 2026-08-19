// METÓDOS DE MANIPULAÇÃO DE VETORES

let frutas = ["Laranja", "Maçã", "Banana"];

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = "Morango";

document.write(`<p>Agora a lista é: ${frutas}</p>`);
// MÉTODO PUSH: INSERE UM NOVO ELEMENTO NO FINAL DO VETOR
frutas.push("Abacaxi");

document.write(`<p>Agora a lista é: ${frutas}</p>`);

// MÉTODO UNSHIFT: INSERE UM NOVO ELEMENTO NO ÍNICIO DO VETOR

// frutas[0] = 'Pera'

frutas.unshift("Pera");
document.write(`<p>Agora a lista é: ${frutas}</p>`);

// MÉTODO LENGTH: RETORNA O NÚMERO DE ELEMENTOS NO VETOR

document.write(`Na nossa lista temos ${frutas.length} frutas `);

//METODO SORT: ORDENA OS ITENS DO VETOR
document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();

document.write(`<p>O priemiro item da lista é ${frutasOrdenadas}</p>`);
document.write(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`);

// METODO SORT: ORDENADO EM ORDEM CRECENTE E DECRESCENTE
let numeros = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Os números são> ${numeros}</p>`);
document.write(`<p>Os números ordenados são: ${numeros.sort()}</p>`);

// ORDENANDO CORRETAMENTE OS NÚMEROS
// ORDEM CRESCENTE

document.write(
  `<p>Os números ordenados são: ${numeros.sort((a, b) => a - b)}</p>`,
);

// ORDEM DECRESCENTE
document.write(
  `<p>Os números ordenados são: ${numeros.sort((a, b) => b - a)}</p>`,
);