// Exercício 4: O Relatório Atrasado (Assincronicidade)
// O Problema de Negócio: Você precisa exibir o nome de um cliente na tela. Porém, essa
// informação está guardada em um servidor lento. Se você tentar imprimir o nome
// imediatamente, o sistema vai mostrar dados vazios, porque a resposta ainda não chegou da
// internet.
// O Desafio: Escreva uma função que saiba "pausar" a execução até que o banco de dados responda.
// (Nota: Para este exercício, usaremos uma função falsa buscarClienteNoBanco() que simula o
// tempo de rede).
// Passo 1: Escreva os comentários (A Lógica)

// Função simulada que demora 2 segundos
function buscarClienteNoBanco() {
 return new Promise(resolve => setTimeout(() => resolve("Maria Silva")))
}
// 1. Criar uma função assíncrona para iniciar o sistema
async function main(){
// 2. Mostrar mensagem "Buscando dados..."
console.log('Buscando dados...');
// 3. Pausar a execução e esperar o resultado da função buscarClienteNoBa
// 4. Salvar esse resultado numa variável
const cliente = await buscarClienteNoBanco()
// 5. Mostrar a mensagem "Cliente encontrado:" junto com o nome
console.log(`Cliente encontrado: ${cliente}`);


}

main() // inicializa o programa