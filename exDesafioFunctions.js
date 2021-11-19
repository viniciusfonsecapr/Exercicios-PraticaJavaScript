// [x] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou

// const envia = (number) => {

// for(let i = 0; i < number; i++)
// console.log("Contando...", i)

// }

// envia(11)

// [x] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

// const envia = (number) => {
//     if(number < 1 || number > 10) { 
//     console.log("Algo deu errado, consulte novamente seu número")
//     return 
// }
//     for(let i = 1; i <=10; i++)
//     console.log(`${number} x ${i} = ${number * i}`)

// }


// envia(10)

// [x] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 

// const horaExata = (new Date().toLocaleTimeString()) 

// console.log(horaExata)

// [x] Escreva um programa onde, você chame uma função, e ela diga que ano estamos! 

// const anoExato = (new Date().getFullYear())

// console.log(anoExato)

// [x] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

// const maiorNumero = (number1, number2) => {
//     if(number1 > number2) { 
//         console.log('O primeiro numero é maior')
//     } else console.log('O segundo número é maior')


// }

// maiorNumero(7,3)

// [x] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
// * A prefeitura deseja saber: 
// - média do salário da população; 
// - média do número de filhos; 
// - maior salário; 
// - O final da leitura de dados se dará com a entrada de um salário negativo. 
// - Faça isso usando uma função!


//     const arrayPessoas = [
//     {
//         numeroDeFilhos: 2,
//         salario: 2345

//     },
//     {
//         numeroDeFilhos: 5,
//         salario: 4500

//     },
//     {
//         numeroDeFilhos: 0,
//         salario: 1350

//     },
//     {
//         numeroDeFilhos: 2,
//         salario: 1750

//     },
//     {
//         numeroDeFilhos: 4,
//         salario: 6000

//     },
//     {
//         numeroDeFilhos: 1,
//         salario: 1200

//     },
//     {
//         numeroDeFilhos: 0,
//         salario: -1200

//     },

//     ]

// function organizarDadosDasPessoas (informaçãoPessoas) {
//     let salarioMedio = 0
//     let mediaDasCrianças = 0
//     let maiorSalario = 0 

//     for (let i = 0; i < informaçãoPessoas.length; i++) {

//         const salario = informaçãoPessoas[i].salario
//         const filhos = informaçãoPessoas[i].numeroDeFilhos

//         if (salario > maiorSalario) maiorSalario = salario 

//         if (salario < 0) {
//             console.log(`Media de Salarios R$${(salarioMedio / i).toFixed(0)}`)
//             console.log(`Media de Filhos ${(mediaDasCrianças / i).toFixed(0)}`)
//             console.log(`Maior Salario R$${maiorSalario}`)
//             break

//         } else {
//             salarioMedio = salarioMedio + salario
//             mediaDasCrianças += filhos
//         }

//     }

// }

// organizarDadosDasPessoas(arrayPessoas)

// [x] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

// - Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investido
// - A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.

// Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo


// function calculate(valorInicial, valorAtual, tempo) {

//     const juros = (valorAtual - valorInicial) / (valorInicial * tempo)

//     console.log((juros * 100).toFixed(2) + '%')


// }

// calculate(1000, 1200, 10)

// calculate(2000, 2400, 12)

// [X] Escreva um programa onde, você cria uma função geradora de desconto. 

// - A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

const descontoAleatorio = Math.floor(Math.random() * (20 - 10) + 10);

function calculandoDesconto(nome, valor, primeiraCompra, pagamentoemDinheiro) {
   
    if (primeiraCompra && pagamentoemDinheiro) {
        if (valor > 1000) { console.log(`AGRADECEMOS SUA COMPRA DE R$${valor}, POREM COM O DESCONTO SUA COMPRA FICOU R$${valor - ((valor * 30) / 100) } E O DESCONTO TOTAL FOI 30% DE DESCONTO`) }
        else if (valor < 1000 && valor > 500) { console.log(`AGRADECEMOS SUA COMPRA DE R$${valor}, POREM COM O DESCONTO SUA COMPRA FICOU R$${valor - ((valor * 25) / 100) } E O DESCONTO TOTAL FOI 25% DE DESCONTO`) }
        else { console.log(`AGRADECEMOS SUA COMPRA DE R$${valor}, POREM COM O DESCONTO SUA COMPRA FICOU R$${valor - ((valor * 20) / 100) } E O DESCONTO TOTAL FOI 20% DE DESCONTO`) }
    
    }


    if (primeiraCompra && !pagamentoemDinheiro) { 

        if (valor > 1000) { console.log(`20% de desconto `) }
        else if (valor < 1000 && valor > 500) { console.log(`15% de desconto`) }
        else { console.log(`desconto de 10%  `) }
    }


    if (!primeiraCompra && pagamentoemDinheiro) { 

        if (valor > 1000) { console.log(`20% de desconto `) }
        else if (valor < 1000 && valor > 500) { console.log(`15% de desconto`) }
        else { console.log(`desconto de 10%  `) }
    }

    if (!primeiraCompra && !pagamentoemDinheiro) {
        
        if (valor > 1000) { console.log(`10% de desconto  `) }
        else if (valor < 1000 && valor > 500) { console.log(`5% de desconto `) }
        else { console.log(`SEM DESCONTO PARA COMPRAS MENORES DE R$500, AGRADECEMOS PELA COMPRA DE R$${valor} 
        E PARA COMPENSA-LO VOCÊ GANHOU UM CUPOM PARA PROXIMA COMPRA DE ${descontoAleatorio}% DE DESCONTO`) }

    }

}

calculandoDesconto('Joao', 450, 'dasdasdsa', 'sadadsada')


