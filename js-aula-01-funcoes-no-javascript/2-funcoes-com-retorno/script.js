// FUNÇÕES COM RETORNO
const n1 = 50;
const n2 = 3;

// ESSA FUNÇÃO GERA O RESULTADO E EXPORTA
function mult(n1, n2) {
  return n1 * n2;
}

document.write(
  `<p>A multiplicação de ${n1} por ${n2} é igual a <strong>${mult(n1, n2)}</strong>.</p>`,
);

// FUNÇÕES COM MAIS DE UM RETORNO
const number = 6;
function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write(`<p>O número ${number} é <strong> ${parImpar(number)}</strong>.</p>`)

