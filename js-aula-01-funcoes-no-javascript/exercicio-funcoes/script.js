function showMessage(){
    const funcSimples = "<h2>Lucas, 18 anos, Registro.</h2>"
    document.write(funcSimples)
};
showMessage();

const num1 = 10
const num2 = 20
let resultado
function division(num1, num2) {
    let div = num1/num2;
    document.write(`<p>A divisão de ${num1} e ${num2} é igual a ${div}`)
    console.log(`<p>A divisão de ${num1} e ${num2} é igual a ${div}`)
}

const n1 = 30
const n2 = 20
const n3 = 40
function mult(n1, n2, n3){
    return n1 * n2 * n3; 
};
 document.write(`Função com retorno: A multiplicação entre ${n1} ${n2} e ${n3} é igual a ${mult(n1, n2, n3)} `)
 console.log(`Função com retorno: A multiplicação entre ${n1} ${n2} e ${n3} é igual a ${mult(n1, n2, n3)} `)


const idade = 13;
function Mdeidade(idade) {
    if (idade >=18) {
        return "Maior de idade";
    }
    else {
        return "Menor de idade";
    }

}
console.log(`Você é ${Mdeidade(idade)}`);

const nota1 = 10
const nota2 = 10
const media = function(nota1, nota2) {
    const media = (nota1+nota2)/2
    if (media >= 5) {
        return "Aprovado";
    }
    else {
        return "Reprovado"
    }
    
}
console.log(media(1, 2));

// 6 - Arrow function com parâmetro único


const triplo = (y) => {
    return y*3
}
const y = 20;
console.log(`O triplo de ${y} é ${triplo(y)} `)

// 7 Arrow function com mais de um parâmetro

nu1 = 2
nu2 = 3
nu3 = 5
nu4 = 9
const soma = (nu1, nu2, nu3, nu4) => {
    return nu1+nu2+nu3+nu4
}
console.log(`o resultado é ${soma(nu1, nu2, nu3, nu4)}`)

// 8 IIFE
const loadUser = (function(user) {
    const nome = Lucas;

   document.write(
    `Seja bem vindo`
    
   )
};
