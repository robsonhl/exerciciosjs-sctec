// O Problema de Negócio: Você está construindo a tela de checkout de um e-commerce. O
// sistema precisa calcular o valor final a ser cobrado do cliente. O carrinho tem um produto de R$
// 150,00, o frete custa R$ 20,00 e o cliente tem um cupom de desconto de R$ 30,00.


//valor final a ser cobrado do cliente (calcular)
//carrinho tem um produto de R$150,00 +
//frete custa R$ 20,00 +
//cliente tem um cupom de desconto de R$ 30,00 -

// O Desafio: Declare as caixas (variáveis) para representar cada um desses valores isoladamente e, em
// seguida, crie uma última caixa que guarde o resultado da operação matemática entre eles.

// const carrinho
// const frete
// const cupomDesconto
// const valorCompra

// Passo 1: Escreva os comentários (A Lógica)
// // 1. Guardar o preço do produto
const produto = 150;
// // 2. Guardar o valor do frete
const frete = 20;
// // 3. Guardar o valor do desconto
const cupomDesconto = 30;
// // 4. Guardar o total (produto + frete - desconto)
const valorCompra = produto + frete - cupomDesconto;
// // 5. Mostrar o total na tela
console.log(`O Valor da compra ficou em: R$${valorCompra}`);
