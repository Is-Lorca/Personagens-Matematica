function mostrarDialogo(chave) {
  const no = dialogo[chave];
  // dialogo[logica]
  noAtual = chave;
  // logica

  // dialogo.inicio.texto -> abre dialogo -> pega inicio -> pega texto
  elemento.textContent = no.texto;

  // vai no documento e pega o elemento pelo id de nome "X"
  const bt1 = document.getElementById("bt1");
  const bt2 = document.getElementById("bt2");

  // dialogo.inicio.opção1 -> abre dialogo -> pega inicio -> pega opcao1
  bt1.textContent = no.opcao1;
  // quando bt1 apertado = mostrarDialogo(logica) e para a animação anterior
  bt1.onclick = (evento) => {
    evento.stopPropagation();
    mostrarDialogo(no.proximo1);
  };

  if (no.opcao2) {
    bt2.style.display = "inline-block";
    bt2.textContent = no.opcao2;

    bt2.onclick = (evento) => {
      evento.stopPropagation();
      mostrarDialogo(no.proximo2);
    };
  } else {
    bt2.style.display = "none";
  }

  escrever(no.texto);
}

function escrever(texto) {
  function falaCompleta() {
    clearTimeout(escrever.timer);
    elemento.textContent = fala;
    tela.removeEventListener("click", falaCompleta);
  }

  function passo() {
    if (i < fala.length) {
      // pega o elemento, altera o conteudo de texto dele e adiciona 1 letra por vez
      elemento.textContent += fala.charAt(i);
      // pega fala, "abre ele" e pega o caracter que está armazenado na posição i
      i++;
      // atualiza ponteiro
      escrever.timer = setTimeout(passo, 30);
      // espera 30 ms para recomeçar o if
    } else {
      tela.removeEventListener("click", falaCompleta);
    }
  }
  clearTimeout(escrever.timer);
  elemento.textContent = "";
  fala = texto;
  i = 0;
  // i é ponteiro, aponta para o local
  tela = document.getElementById("bodyPersona");
  tela.addEventListener("click", falaCompleta);

  passo();
}

const dialogo = {
  inicio: {
    texto:
      "Bom dia, alunos! Me chamo Marilia Curie Peixoto, mas podem me chamar de Dra Peixoto, serei a professora de Catemática de vocês. Desejo boas-vindas à Gatec.",
    opcao1: "Próximo",
    proximo1: "logica",
    opcao2: null,
    proximo2: null,
  },

  logica: {
    texto:
      "Iniciaremos com lógica boleana, explicarei o conceito de proposição: são frases que precisamos conseguir classificar como verdadeiras ou falsas.",
    opcao1: "Próximo",
    proximo1: "proposicao",
    opcao2: null,
    proximo2: null,
  },

  proposicao: {
    texto:
      "O que não podemos julgar se é verdadeiro ou falso, não é uma proposição, ou seja: perguntas, ordens e pedidos, exclamações, sentenças abertas, desejos ou opiniões não podem ser chamadas de proposições",
    opcao1: "Entendi!",
    proximo1: "sera",
    opcao2:
      "Se matemática com letra é difícil então matemática com frase é impossível",
    proximo2: "pensamento",
  },

  sera: {
    texto: "Será? Continuando...",
    opcao1: "Próximo",
    proximo1: "pergunta1",
    opcao2: null,
    proximo2: null,
  },

  pensamento: {
    texto:
      "Sua afirmativa é falsa, mas seu pensamento é lógico! Vamos Continuar..",
    opcao1: "Próximo",
    proximo1: "pergunta1",
    opcao2: null,
    proximo2: null,
  },

  pergunta1: {
    texto:
      "Com base no que expliquei, a frase “A educação é acessível se e somente se não houver barreira financeira.” é uma proposição?",
    opcao1: "Sim",
    proximo1: "proposicaoEducacaoCorreto",
    opcao2: "Não",
    proximo2: "proposicaoEducacaoErrado",
  },

  proposicaoEducacaoCorreto: {
    texto:
      "Correto! É proposição porque é declarativa, tem valor de verdade determinável",
    opcao1: "Próximo",
    proximo1: "proposicaoGatec",
    opcao2: null,
    proximo2: null,
  },

  proposicaoEducacaoErrado: {
    texto:
      "Errado… é proposição porque conseguimos julgar se é verdadeiro ou falso.",
    opcao1: "Próximo",
    proximo1: "proposicaoGatec",
    opcao2: null,
    proximo2: null,
  },

  proposicaoGatec: {
    texto: "Agora, “A Gatec é pública e isso é gratuito”, é uma proposição?",
    opcao1: "Com certeza! é proposição",
    proximo1: "proposicaoGatecErrado",
    opcao2: "A frase não é proposição e a Gatec é pública!",
    proximo2: "proposicaoGatecCorreto",
  },

  proposicaoGatecCorreto: {
    texto:
      'Isso mesmo! Você acertou e fez uma ótima observação, a Gatec é pública, porém a frase não é uma proposição pois "Isso" não diz a que se refere, não dá para dizer se "isso é gratuito" é verdade ou mentira',
    opcao1: "Consegui entender direitinho o que é verdadeiro e falso!",
    proximo1: "opiniaoResposta",
    opcao2: 'Então "eu odeio Matemática" também é proposição?',
    proximo2: "opiniaoResposta",
  },

  proposicaoGatecErrado: {
    texto:
      'Errado!!! não é uma proposição pois "Isso" não diz a que se refere, não dá para dizer se "isso é gratuito" é verdade ou mentira.',
    opcao1: "Consegui entender direitinho o que é verdadeiro e falso!",
    proximo1: "opiniaoResposta",
    opcao2: 'Então "eu odeio Matemática" também é proposição?',
    proximo2: "opiniaoResposta",
  },

  opiniaoResposta: {
    texto:
      "Se é opinião, então não. Mas fico feliz que já estejam pensando como bons lógicos! Essa base vai acompanhar vocês em toda a matéria.",
    opcao1: "Próximo",
    proximo1: "tiposRelacao",
    opcao2: null,
    proximo2: null,
  },

  tiposRelacao: {
    texto:
      "Agora que você já sabe o que é uma proposição, vamos ver como podemos relacioná-las. Temos quatro casos principais: conjunção, disjunção, condicional e bicondicional.",
    opcao1: "Próximo",
    proximo1: "conjuncaoIntro",
    opcao2: null,
    proximo2: null,
  },

  conjuncaoIntro: {
    texto:
      "Na conjunção, usamos “E”. Para ela ser verdadeira, as duas proposições precisam ser verdadeiras.",
    opcao1: "Próximo",
    proximo1: "conjuncaoExemplo",
    opcao2: null,
    proximo2: null,
  },

  conjuncaoExemplo: {
    texto:
      "Vamos testar: “A Gatec possui bons professores E possui muito investimento.”",
    opcao1: "Próximo",
    proximo1: "conjuncaoPergunta",
    opcao2: null,
    proximo2: null,
  },

  conjuncaoPergunta: {
    texto:
      "Sabendo que a Gatec possui bons professores, mas não tem muito investimento, essa proposição é:",
    opcao1: "Verdadeira",
    proximo1: "conjuncaoErrado",
    opcao2: "Falsa",
    proximo2: "conjuncaoCorreto",
  },

  conjuncaoErrado: {
    texto:
      "Errado, como uma das partes é falsa, a conjunção inteira também vai ser falsa. Mas não desanime, vamos para a próxima.",
    opcao1: "Próximo",
    proximo1: "disjuncaoIntro",
    opcao2: null,
    proximo2: null,
  },

  conjuncaoCorreto: {
    texto:
      "Muito bem, você acertou. Como uma das proposições é falsa, a conjunção inteira também é falsa. Está começando a pegar o jeito!",
    opcao1: "Próximo",
    proximo1: "disjuncaoIntro",
    opcao2: null,
    proximo2: null,
  },

  disjuncaoIntro: {
    texto:
      "Agora temos a disjunção, que utiliza o “OU”. Aqui, basta uma das proposições ser verdadeira.",
    opcao1: "Próximo",
    proximo1: "disjuncaoExemplo",
    opcao2: null,
    proximo2: null,
  },

  disjuncaoExemplo: {
    texto:
      "Tente responder: “A Gatec continuará sendo pública OU receberá novos investimentos.”",
    opcao1: "Próximo",
    proximo1: "disjuncaoPergunta",
    opcao2: null,
    proximo2: null,
  },

  disjuncaoPergunta: {
    texto:
      "Imagine que a Gatec não será mais pública, mas receberá novos investimentos. A proposição é:",
    opcao1: "Verdadeira",
    proximo1: "disjuncaoCorreto",
    opcao2: "Falso",
    proximo2: "disjuncaoErrado",
  },

  disjuncaoCorreto: {
    texto:
      "Muito bem! Você entendeu. Uma das proposições é verdadeira, então a disjunção também é verdadeira. Embora... se dependesse de mim, as duas seriam verdadeiras, mas isso é assunto para outra hora.",
    opcao1: "Próximo",
    proximo1: "condicionalIntro",
    opcao2: null,
    proximo2: null,
  },

  disjuncaoErrado: {
    texto:
      "Hmm... não exatamente. A resposta é verdadeira, lembre-se: no “OU”, basta uma das proposições ser verdadeira. E, sinceramente, eu preferiria que as duas fossem verdadeiras. Mas esqueça o que eu disse.",
    opcao1: "Próximo",
    proximo1: "condicionalIntro",
    opcao2: null,
    proximo2: null,
  },

  condicionalIntro: {
    texto:
      "Agora temos a condicional. Ela relaciona uma condição com uma consequência através de “SE... ENTÃO”.",
    opcao1: "Próximo",
    proximo1: "condicionalExplicacao1",
    opcao2: null,
    proximo2: null,
  },

  condicionalExplicacao1: {
    texto:
      "É como dizer que, se uma determinada situação acontecer, esperamos que outra aconteça como consequência.",
    opcao1: "Próximo",
    proximo1: "condicionalExemplo",
    opcao2: null,
    proximo2: null,
  },

  condicionalExemplo: {
    texto:
      "Por exemplo: “Se os alunos conseguirem resolver os desafios, então a GATEC continuará funcionando normalmente.”",
    opcao1: "Próximo",
    proximo1: "condicionalExplicacao2",
    opcao2: null,
    proximo2: null,
  },

  condicionalExplicacao2: {
    texto:
      "Nesse caso, resolver os desafios é a condição, e a GATEC continuar funcionando é o resultado.",
    opcao1: "Próximo",
    proximo1: "condicionalRegra",
    opcao2: null,
    proximo2: null,
  },

  condicionalRegra: {
    texto:
      "A condicional só é falsa quando a condição acontece, mas o resultado não acontece.",
    opcao1: "Próximo",
    proximo1: "condicionalExemplo2",
    opcao2: null,
    proximo2: null,
  },

  condicionalExemplo2: {
    texto:
      "Agora tente: “Se uma nova proposta for apresentada, então a GATEC receberá novos recursos”.",
    opcao1: "Próximo",
    proximo1: "condicionalPergunta",
    opcao2: null,
    proximo2: null,
  },

  condicionalPergunta: {
    texto:
      "Imagine que uma nova proposta foi apresentada, mas a GATEC não recebeu novos recursos. A proposição é:",
    opcao1: "Verdadeira",
    proximo1: "condicionalErrado",
    opcao2: "Falsa",
    proximo2: "condicionalCorreto",
  },

  condicionalErrado: {
    texto:
      "Hmm... dessa vez não. A resposta é falsa, pois a condição aconteceu, mas o resultado esperado não.",
    opcao1: "Próximo",
    proximo1: "bicondicionalIntro",
    opcao2: null,
    proximo2: null,
  },

  condicionalCorreto: {
    texto:
      "Muito bem, você acertou! Viu como um pequeno detalhe pode mudar tudo?",
    opcao1: "Próximo",
    proximo1: "bicondicionalIntro",
    opcao2: null,
    proximo2: null,
  },

  bicondicionalIntro: {
    texto:
      "Agora chegamos à bicondicional. Ela utiliza a expressão “SE E SOMENTE SE”.",
    opcao1: "Próximo",
    proximo1: "bicondicionalExplicacao1",
    opcao2: null,
    proximo2: null,
  },

  bicondicionalExplicacao1: {
    texto:
      "Diferente da condicional, aqui existe uma relação nos dois sentidos. As duas proposições precisam ter o mesmo valor lógico.",
    opcao1: "Próximo",
    proximo1: "bicondicionalExplicacao2",
    opcao2: null,
    proximo2: null,
  },

  bicondicionalExplicacao2: {
    texto:
      "Isso significa que as duas partes precisam concordar: as duas devem ser verdadeiras ou as duas devem ser falsas.",
    opcao1: "Próximo",
    proximo1: "bicondicionalExemplo",
    opcao2: null,
    proximo2: null,
  },

  bicondicionalExemplo: {
    texto:
      "Agora tente responder: “O laboratório será aberto se e somente se o professor estiver presente.”",
    opcao1: "Próximo",
    proximo1: "bicondicionalPergunta",
    opcao2: null,
    proximo2: null,
  },

  bicondicionalPergunta: {
    texto:
      "Imagine que o laboratório será aberto e o professor estará presente; a proposição é:",
    opcao1: "Verdadeira",
    proximo1: "bicondicionalCorreto",
    opcao2: "Falsa",
    proximo2: "bicondicionalErrado",
  },

  bicondicionalCorreto: {
    texto:
      "Isso mesmo! As duas proposições são verdadeiras, então a bicondicional também é verdadeira.",
    opcao1: "Próximo",
    proximo1: "encerramento",
    opcao2: null,
    proximo2: null,
  },

  bicondicionalErrado: {
    texto:
      "Ah, não, preste um pouquinho mais de atenção: as duas proposições são verdadeiras, então a bicondicional também é verdadeira.",
    opcao1: "Próximo",
    proximo1: "encerramento",
    opcao2: null,
    proximo2: null,
  },

  encerramento: {
    texto:
      "Bom alunos, por hoje é só! Nos vemos na próxima semana ou nos corredores. Até mais!",
    opcao1: "RETURN",
    proximo1: "inicio",
    opcao2: null,
    proximo2: null,
  },
};

const elemento = document.getElementById("falaPersona");
let i = 0;
let fala = "";

mostrarDialogo("inicio");