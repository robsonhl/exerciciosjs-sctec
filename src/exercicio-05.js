// Exercício 5: O Desafio do Fechamento de Caixa (Integração)
// Este é o teste final. Ele exige que o aluno estruture o raciocínio em camadas: o tempo, a repetição, a
// condição e a memória.
// O Problema de Negócio: No fim do dia, o seu sistema precisa calcular o lucro líquido de uma
// loja. As transações do dia estão guardadas num servidor (demora para buscar). O servidor
// devolve uma lista de objetos. Cada objeto tem um tipo (que pode ser "venda" ou "despesa") e
// um valor .
// O Desafio: Busque os dados no servidor. Leia transação por transação. Se for "venda", some o valor ao
// caixa. Se for "despesa", subtraia o valor do caixa. No final, mostre o saldo do dia.

let caixa = 0;

// // Função simulada da API (Não alterar)
function buscarTransacoesAPI() {
 return new Promise(resolve => setTimeout(() => resolve([
 { tipo: "venda", valor: 200 },
 { tipo: "despesa", valor: 50 },
 { tipo: "venda", valor: 100 },
 { tipo: "despesa", valor: 20 }
 ]), 1500));
}


async function fecharCaixa(transacao){
 await buscarTransacoesAPI().then(((transacao)=>transacao.forEach(transacao => {
    if(transacao.tipo === 'venda'){
        caixa += transacao.valor;
    }  
      if(transacao.tipo === 'despesa'){
        caixa -= transacao.valor;
    }   
 }) ))
 console.log(`Valor do caixa: R$${caixa}`)
 
}



fecharCaixa()
