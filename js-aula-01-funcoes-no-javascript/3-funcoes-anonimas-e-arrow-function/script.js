//FUNÇÃO ANÔNIMA

const mult = function (x) {
  return x * 2;
};
const x = 15;
document.write(`<p>O resultado da multiplicação é ${mult(x)}</p>`);

// FUNÇÃO SETA - COM UM ÚNICO PARÂMETRO ARROW FUNCTION
const triplo = (y) => {
  return y * 3;
};
const y = 100;
document.write(`<p>O triplo de ${y} é ${triplo(y)}</p>`);

// FUNÇÃO SETA = COM MAIS DE UM PARÂMETRO - ARROW FUNCTION
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
// eval no Javascript é uma função nativa que realiza cálculos matemáticos a partir de dois números e um operador
const num1 = 8;
const operador = "*";
const num2 = 2;
document.write(
  `<p>
    O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}
  </p>`
);

// FUNÇÃO IMEDIATA (IIFE - Imediately Invoked Function Expression)
const imediata = (function () {
  document.write("<p>Estou sendo executada imediatamente!</p>");
})(); //Passando os parâmetros

//FUNÇÃO IMEDIATA - COM PARÂMETROS
const loadUser = (function (user) {
  document.write(
    `<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`,
  );
  setTimeout(() => {
    document.write(`
            Nome: Lucas Morato <br>
            Idade: 18 anos <br>
            Cidade: Registro <br>
            Hobby: Estudar
        `);
  }, 3000);
})("Lucas"); //Passando o parâmetro
