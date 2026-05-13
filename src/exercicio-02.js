// Exercício 2: O Inspetor de Estoque (Laços de Repetição)
// O Problema de Negócio: Você recebeu uma remessa de 5 caixas de um produto. Cada caixa
// contém uma quantidade diferente de itens: [10, 25, 5, 12, 8] . O gerente precisa
// saber o total exato de itens que chegaram ao armazém. Lembre-se: o computador só
// consegue olhar para uma caixa por vez.
// O Desafio: Use a técnica do "Papel em branco" (Acumulador) e um laço de repetição para somar o
// estoque.
// Passo 1: Escreva os comentários (A Lógica)

// A lista de caixas que chegou
const caixas = [10, 25, 5, 12, 8];
// 1. Criar a variável acumuladora começando em 0 (o papel em branco)
let acumulador = 0;
// 2. Iniciar o laço para olhar caixa por caixa
caixas.forEach((caixa)=>{acumulador+=caixa})
// 3. Em cada volta, somar a quantidade da caixa atual com o valor que já
// 4. Fora do laço, mostrar o total do estoque
console.log(`O total de itens que chegaram na remessa é de ${acumulador}`);
