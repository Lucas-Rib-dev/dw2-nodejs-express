// FUNÇÃO SIMPLES

function showMessage() {
  const message = "<h2>Olá, bem-vindo!</h2>";
  document.write(message);
}
// INVOCANDO A FUNÇÃO
showMessage();
// FUNÇÃO COM PARÂMETRO / ARGUMENTO
const user = "Lucas";
// ESSA FUNÇÃO RECEBE UM PARÂMETRO
function userMessage(user) {
  document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`);
}
// INVOCANDO A FUNÇÃO PASSANDO UM ARGUMENTO
userMessage(user);
// FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 60;
const n2 = 25;

function soma(n1, n2) {
  let resultado = n1 + n2;
  document.write(`A soma de ${n1} + ${n2} é igual á ${resultado}.`);
}
soma(n1, n2);
