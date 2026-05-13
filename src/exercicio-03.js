// Exercício 3: A Catraca do Evento (Condições Booleanas)
// O Problema de Negócio: Um sistema de catraca eletrônica precisa decidir se libera ou
// bloqueia a entrada de um funcionário. Para entrar, o funcionário precisa atender a duas regras
// simultaneamente: possuir o crachá ativo E ter nível de acesso maior ou igual a 3.
// O Desafio: Crie as variáveis para representar o estado do funcionário e use a estrutura de decisão para
// imprimir "Acesso Liberado" ou "Acesso Negado". Experimente mudar os valores das variáveis para testar
// os dois caminhos

// Passo 1: Escreva os comentários (A Lógica)

// 1. Criar variável booleana informando se o crachá está ativo (true/false)
const crachaAtivo = true;
// 2. Criar variável numérica com o nível de acesso do funcionário
const nivelAcesso = 3;
// 3. SE o crachá for verdadeiro E o nível de acesso for >= 3:
console.log(nivelAcesso >=3 && crachaAtivo ? 'Acesso Liberado' : 'Acesso Negado');
// 4. Mostrar "Acesso Liberado"
// 5. CASO CONTRÁRIO:
// 6. Mostrar "Acesso Negado"