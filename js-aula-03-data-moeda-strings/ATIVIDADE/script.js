const dataAtual = new Date();

dataAtual.getDate;

document.write(dataAtual);

const dia = dataAtual.getDate();

const mes = dataAtual.getMonth() + 1;

const ano = dataAtual.getFullYear();

document.write(`<p>Hoje é ${dia}/${mes}/${ano}.</p>`);

const compraInternacional = 500.0;

document.write(`<p>
        ${compraInternacional.toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}
</p>`);

document.write(`<p>
        ${compraInternacional.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
</p>`);

document.write(
  `<p>A entrega do produto ocorrera a partir do dia ${dia - 19}/${mes + 1}/${ano}</p>`,
);

const nome = roberto;

const nomeFormatado = "nome"
  .split(" ").map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");

document.write(`<p>${nomeFormatado}</p>`);
