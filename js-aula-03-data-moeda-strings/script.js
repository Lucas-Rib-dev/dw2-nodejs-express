document.write("<h3>Manipulando datas: </h3>");

// PARA COMEÇARMOS A MANIPULAR DATAS NO JAVASCRIPT PRECISAMOS PRIMEIRO CRIAR UMA INSTÂNCIA DA CLASSE "DATE", QUE É NATIVA DO JAVA SCRIPT

const dataAtual = new Date();

dataAtual.getDate;

document.write(dataAtual);

// Pegando o dia atual

const dia = dataAtual.getDate();

document.write(`<p>Hoje é dia ${dia}</p>`);

// Pegando o mês atual

const mes = dataAtual.getMonth() + 1;

document.write(`<p>Estamos no mês ${mes}</p>`);

// Pegando o ano atual

const ano = dataAtual.getFullYear();

document.write(`<p>Estamos no ano ${ano}</p>`);

// Exibindo data completa

document.write(`Hoje é ${dia}/${mes}/${ano}.`);

// ADICIONANDO DIAS, MESES E ANO ATUAL
// Adicionando 4 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 4);
// Exibindo a nova data:
document.write(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}</p>`);

// Adicionando 3 meses à data atual:
dataAtual.setMonth(dataAtual.getMonth()) + 3;
// Exibindo a nova data:
document.write(`<p>Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}</p>`);

// Adicionando 2 anos à data atual:
dataAtual.setFullYear(dataAtual.getFullYear()) + 2;
// Exibindo a nova data:
document.write(`<p>Daqui a 2 anos será ${dataAtual.getFullYear() + 2}</p>`);

// ###########################################################################################

// FORMATAÇÃO DE MOEDAS
document.write("<h3>Manipulando moedas:</h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);
//MOSTRANDO CASAS DECIMAIS
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
// OCULTANDO CASAS DECIMAIS
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);
// TROCANDO O IDENTIFICADOR DE CASAS DECIMAIS
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

// FORMATANDO PARA REAL
document.write(`<p>
        ${futuroSalario.toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}
</p>`);

// ##########################################################################################

// FORMATAÇÕES DE STRINGS
document.write("<h3>Formatações de Strings: </h3>");
const nome = "lucas morato";

// ALTERNANDO STRING PARA LETRAS MAIÚSCULAS
document.write(`<p>${nome.toUpperCase()}</p>`);
// ALTERNANDO STRING PARA LETRAS MINÚSCULAS
document.write(`<p>${nome.toLowerCase()}</p>`);

// COLOCANDO AS INICIAIS EM LETRAS MAIÚSCULAS
const cidade = "sete barras";
const cidadeFormatada = cidade.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
// EXIBINDO
document.write(`<p>${cidadeFormatada}</p>`);

// CONTANDO O NÚMERO DE CARACTERES
document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "")length} letras.</p>`);
