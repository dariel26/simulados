import { IQuestao, IResposta, ISimulado, ITentativa } from "../interfaces";

const A = 0;
const B = 1;
const C = 2;
const D = 3;
//const E = 4;

function getSimulados(): ISimulado[] {
  return simulados;
}

function getTentativas(idSimulado: string): ITentativa[] {
  const tentativas = localStorage.getItem(`tentativas-${idSimulado}`);
  if (tentativas === null || tentativas === undefined) return [];
  else return JSON.parse(tentativas);
}

function crearTentativa(idSimulado: string): number {
  const tentativas = getTentativas(idSimulado);
  const numTentativas = tentativas.length;

  const newID = numTentativas + 1;
  const tentativa: ITentativa = {
    id: newID.toString(),
    inicio: new Date(),
    respostas: [],
  };

  const tentativasAtuais = getTentativas(idSimulado);
  const tentativasAtualizadas = [...tentativasAtuais, tentativa];
  localStorage.setItem(
    `tentativas-${idSimulado}`,
    JSON.stringify(tentativasAtualizadas)
  );

  return newID;
}

function atualizaTentativa(
  idTentativa: string,
  idSimulado: string,
  resposta: IResposta
) {
  const tentativas = getTentativas(idSimulado);
  const tentativaParaAtualizar = tentativas.find(
    (tentativa) => tentativa.id === idTentativa
  );

  //Atualizando a tentativa
  if (tentativaParaAtualizar) {
    const respostas = tentativaParaAtualizar.respostas;

    //Retira se existir a resposta a ser modificada
    const novasRespostas = respostas.filter(
      (res) => res.questaoId !== resposta.questaoId
    );
    //Adiciona a nova resposta
    novasRespostas.push(resposta);

    const tentativaAtualizada = {
      ...tentativaParaAtualizar,
      respostas: novasRespostas,
    };

    //Atualiza as tentativas
    const tentativasAtualizadas = tentativas.map((tentativa) =>
      tentativa.id === idTentativa ? tentativaAtualizada : tentativa
    );

    //Salva a atualização
    localStorage.setItem(
      `tentativas-${idSimulado}`,
      JSON.stringify(tentativasAtualizadas)
    );
  }
}

function finalizarTentativa(idTentativa: string, idSimulado: string): number {
  const tentativas = getTentativas(idSimulado);
  const tentativaParaFinalizar = tentativas.find(
    (tentativa) => tentativa.id === idTentativa
  );

  if (tentativaParaFinalizar) {
    const dataFinal = new Date();
    const questoes = getQuestoes(idSimulado);
    const respostas = tentativaParaFinalizar.respostas;

    let acertos = 0;
    for (const questao of questoes) {
      const resposta = respostas.find((res) => res.questaoId === questao.id);
      if (
        resposta &&
        (resposta.indexSelecionado === questao.alternativaCorreta ||
          questao.alternativaCorreta === -1)
      )
        acertos += 1;
    }

    const pontuacao = (10 * acertos) / questoes.length;

    //Finalizando tentativa
    const tentativaFinalizada: ITentativa = {
      ...tentativaParaFinalizar,
      fim: dataFinal,
      pontuacao,
    };
    //Atualiza as tentativas
    const tentativasAtualizadas = tentativas.map((tentativa) =>
      tentativa.id === idTentativa ? tentativaFinalizada : tentativa
    );

    //Salva a atualização
    localStorage.setItem(
      `tentativas-${idSimulado}`,
      JSON.stringify(tentativasAtualizadas)
    );

    return pontuacao;
  } else return -1;
}

function getQuestoes(id: string): IQuestao[] {
  switch (id) {
    case "1":
      return questoes1;
    case "2":
      return questoes2;
    case "3":
      return questoes3;
    case "4":
      return questoes4;
    case "5":
      return questoes5;
    case "6":
      return questoes6;
    case "7":
      return questoes7;
    case "8":
      return questoes8;
    default:
      return [];
  }
}

const servicos = {
  getSimulados,
  getTentativas,
  getQuestoes,
  crearTentativa,
  atualizaTentativa,
  finalizarTentativa,
};

export default servicos;

//SIMULADOS E QUESTOES DADOS ESTATICOS

const simulados: ISimulado[] = [
  { id: "1", nome: "Prova 1", tentativas: getTentativas("1").length },
  { id: "2", nome: "Prova 2", tentativas: getTentativas("2").length },
  { id: "3", nome: "Prova 3", tentativas: getTentativas("3").length },
  { id: "4", nome: "Prova 4", tentativas: getTentativas("4").length },
  //{ id: "5", nome: "Prova 5", tentativas: getTentativas("5").length },
  { id: "6", nome: "Prova 6", tentativas: getTentativas("6").length },
  { id: "7", nome: "Prova 7", tentativas: getTentativas("7").length },
  { id: "8", nome: "Prova 8", tentativas: getTentativas("8").length },
];

const questoes1: IQuestao[] = [
  {
    id: "117",
    numero: 17,
    texto: `Lactente de 58 dias é trazido à emergência pela mãe, que refere que o paciente não está sugando
direito há pelo menos 12 horas, apresentando-se mais irritado. Neste período, teve 2 picos febris
adequadamente aferidos, sem outros sinais ou sintomas. O médico examina este paciente: aspecto
irritado ao manuseio, mucosas um pouco ressecadas, temperatura de 38,7 FC: 160 bpm sem
sopros/ritmo cardiaco regular, sem desconforto respiratório ou alteração à ausculta pulmonar, sem
qualquer outra alteração ao exame físico. Assinalea alternativa correta, que apresenta a conduta mais
adequada:`,
    alternativas: [
      `Paciente deverá ser internado para hidratação e ser submetido à coleta de diversos exames a fim de
detectar o foco do processo febril, mesmo que não tenha completado 24 horas de evolução.`,
      `Paciente apresenta sinais de desidratação, devendo ser internado apenas para reidratação.`,
      `Como não apresenta alteração ao exame fisico, solicitar que a mãe traga o paciente em 24 horas para
reavaliação (pois, como o quadro é recente, pode não ter aparecido nenhum foco evidente).`,
      `Como não apresenta alteração ao exame fisico, liberar o paciente para casa e pedir para a mãe fazer
medicação antitérmica. Caso a febre persista, trazer novamente à emergência para reavaliação. `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "118",
    numero: 18,
    texto: `Manuel, 3 anos de idgde, há 2 dias com febre de 39°c (temperatura axilar) associada a rinorreia e
tosse. Admitido em Pronto-Socorro com relato de crise tônico-clônica generalizada em vigência de febre
com duração de 10 minutos há cerca de 2 horas. Evoluiu com sonolência breve após o episódio, mas
agora está ativo, reativo e sem alterações neurológicas. Trata-se do primeiro episódio de crise
convulsiva. O pai da criança apresentou quadros semelhantes na infância. Sobre o ocorrido, assinale
qual a orientação adequada a esta familia`,
    alternativas: [
      `Tranquilizar os pais, orientá-los quanto à possibilidade de recorrência em vigência de febre e sinais de
alarme.`,
      `Prosseguir a investigação com eletroencefalograma e tomografia de crânio, internar paciente para
observação por 12 horas.`,
      `Internar, coletar liquor e culturas (urina, sangue e líquor e iniciar antibioticoterapia empírica de amplo
espectro.`,
      `Introduzir profilaxia contínua com fenobarbital. Internar para observação por 12 horas. `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "121",
    numero: 21,
    texto: `L.S.A, 17 anos, sexo masculino, estudante, procurou o serviço de pronto atendimento referindo ter iniciado há 8 dias quadro de odinofagia associada a febre aferida (38,5°C), cefaleia e mal estar. Relata
ter iniciado o uso de amoxicilina há 4 dias porém sem melhora do quadro. Há dois dias notou o
surgimento de exantema em região de tronco. Dentre os exames abaixo demonstrados, qual ajudaria a
elucidar o diagnóstico?`,
    alternativas: [
      `Hemograma com anemia e plaquetopenia, leucopenia com predomínio de linfócitos`,
      `Proteína C Reativa elevada, enzimas hepáticas elevadas`,
      `Hemograma com leucocitose, monocitose e linfócitos atípicos`,
      `Proteina C reativa normal, hemograma com plaquetopenia `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "123",
    numero: 23,
    texto: `Caso Cínico, Pré-escolar, masculino de cinco anos de idade, acompanha no ambulatório de pediatria desde os 15 dias de vida. A partir dos 18 meses,
     mãe passa a referir que ele é o menor da turma e "quase não troca de roupas". Dados do parto: Parco cesária a termo, com 3130g e 49cm.
     Mãe: 39 anos; história de dislipidemia, E=158cm.
     Pai: 48 anos, E=173cm.
      Alimentação: Seio materno exclusivo até seis meses e após, seio materno e alimentação complementar
      até 12 meses. Alimentação equilibrada ebalanceada. Vacinas: Atuglizadas. Exame fisico: Sem alterações Exames complementares: Aos 2 anos de idade, realizou exames laboratoriais normais e RX de punhoe
      mão esquerdos, com IC= 2 anos e 5 meses, 10= 1 ano e 6 meses.
      Gráfico de estatura abaixo:`,
    imagens: ["123"],
    subTexto: `De acordo com os gráficos de crescimento do Ministério da Saúde e os dados clínicos, classifique o
paciente em relação à sua estatura. `,
    alternativas: [
      `Muito baixa estatura para a idade.`,
      `Baixa estatura para a idade.`,
      `Estatura adequada para a idade sem atraso constitucional.`,
      `Estatura adequada para a idade com atraso constitucional. `,
    ],
    alternativaCorreta: D,
  },
  {
    id: "124",
    numero: 24,
    texto: `Caso Cínico, Pré-escolar, masculino de cinco anos de idade, acompanha no ambulatório de pediatria desde os 15 dias de vida. A partir dos 18 meses,
     mãe passa a referir que ele é o menor da turma e "quase não troca de roupas". Dados do parto: Parco cesária a termo, com 3130g e 49cm.
     Mãe: 39 anos; história de dislipidemia, E=158cm.
     Pai: 48 anos, E=173cm.
      Alimentação: Seio materno exclusivo até seis meses e após, seio materno e alimentação complementar
      até 12 meses. Alimentação equilibrada ebalanceada. Vacinas: Atuglizadas. Exame fisico: Sem alterações Exames complementares: Aos 2 anos de idade, realizou exames laboratoriais normais e RX de punhoe
      mão esquerdos, com IC= 2 anos e 5 meses, 10= 1 ano e 6 meses.
      Gráfico de estatura abaixo:`,
    imagens: ["123"],
    subTexto: `
    Assinale a alternativa que contém o dado mais importante para o acompanhamento do caso`,
    alternativas: [
      `RX de idade óssea.`,
      `Cálculo de estatura alvo.`,
      `Velocidade de crescimento.`,
      `Exames laboratoriais de perfil hormonal.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "125",
    numero: 25,
    texto: `Caso Cínico, Pré-escolar, masculino de cinco anos de idade, acompanha no ambulatório de pediatria desde os 15 dias de vida. A partir dos 18 meses,
     mãe passa a referir que ele é o menor da turma e "quase não troca de roupas". Dados do parto: Parco cesária a termo, com 3130g e 49cm.
     Mãe: 39 anos; história de dislipidemia, E=158cm.
     Pai: 48 anos, E=173cm.
      Alimentação: Seio materno exclusivo até seis meses e após, seio materno e alimentação complementar
      até 12 meses. Alimentação equilibrada ebalanceada. Vacinas: Atuglizadas. Exame fisico: Sem alterações Exames complementares: Aos 2 anos de idade, realizou exames laboratoriais normais e RX de punhoe
      mão esquerdos, com IC= 2 anos e 5 meses, 10= 1 ano e 6 meses.
      Gráfico de estatura abaixo:`,
    imagens: ["123"],
    subTexto: `
    Calcule a estatura-alvo do pacientee assinale a alternativa que contenhaa resposta correta`,
    alternativas: [
      `159cm +/- 8,5cm.`,
      `172cm +/-8,5cm.`,
      `165cm +/-8,5cm.`,
      `Nenhuma das alternativas está correta.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "126",
    numero: 26,
    texto: `
    Adolescente, sexo masculino, 15 anos, procura atendimento por se considerar alto demais e que ainda
 está crescendo. HPP: sem patologios, vacinas atualizadas. Mãe: 44 anos, E=174cm, menarca aos 13 anos
 Pai: 47 anos, E-192cm. Exame fisico: Peso= 78ko. E= 93cm, Tanner G4P5. Sem dismorfismos. Gráfico de
 estatura abaixo.`,
    imagens: ["126"],
    subTexto: `De acordo com os gráficos de crescimento do Ministério da Saúde e os dados clinicos, classifique o
 adolescente em relação à sua estatura. `,
    alternativas: [
      `Estatura adequada para a idade`,
      `Alta estatura para a idade. `,
      `Gigantismo`,
      `Velocidade de crescimento acelerada. `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "129",
    numero: 29,
    texto: `
    De acordo com os pontos de corte preconizados pela OMS, escolha a alternativa correta em relaçao ao diagnóstico do excesso de peso na faixa etária de 0-5 anos incompletos:`,
    alternativas: [
      `São considerados como sobrepeso os vatores de escore Z IMC > +1 e <= +2`,
      `São considerados como obesidade os valores de escore Z IMC > +2 e <= +3.`,
      `São considerados como sobrepeso os valores de escore Z IMC > 3.`,
      `São considerados como obesidade os valores de escore Z IMC > 3.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "130",
    numero: 30,
    texto: `
    Criança com 4 meses de idade foi levada à UBS para receber vacinas atrasadas. A mesma passou
por longa internação hospitalar devido à bronquiolite e recebeu até o momento apenas BCG e hepatite
B ao nascimento. Assinale a melhor alternativa contendo as vacinas que deverá receber hoje: `,
    alternativas: [
      `Meningo C, Pneumo-10 e retorno em 1 mês para as outras vacinas. `,
      `Meningo C, Penta (DPT, HIB, Hep B), VIP, Pneumo-10 e Rotavírus`,
      `Penta (DPT, HIB, Hep B), VIP, Pneumo-10. `,
      `Meniago C, Penta (DPT,HIB, Hep B),  VIP, Pneumo-10`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "131",
    numero: 31,
    texto: `Sobre a vacinação contra Febre Amárela, assinale a alternativa correta`,
    alternativas: [
      `É totalmente contraindicada para pessoas que vivem com HIV`,
      `Faz parte do calendário infantil do PNI (Programa Nacional de Imunizações) em todo o território nacional (2 doses, aos 9 meses e 4 anos)`,
      `Lactantes não podem receber a vacina, independentemente da idade do bebê que amamentam`,
      `Não gera boa resposta por ser pouco imunogênica`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "132",
    numero: 32,
    texto: `Sobre imunizantes do PNI, faça a associação e assinale abaixo a alternativa com a sequência correta: `,
    itens: [
      `Vacina Hepatite B`,
      `Vacina meningocócica B`,
      `Vacina meningocócica ACWY`,
      `DTP (difteria, tétano e cooqueluche)`,
    ],
    itensVF: [
      `Consta no calendário vacinal do adolescente.`,
      `A primeira dose é realizada ao nascimento e as subsequentes incluidas na penta`,
      `Atualmente está disponivel apenas nos serviços privados de imunização.`,
      `Reações locais (eritema, dor) e sistêmicas (febre, choro) são comuns apos esta vacina.`,
    ],
    alternativas: [`1-2-3-4`, `3-1-2-4`, `3-2-4-1`, `1-3-4-2`],
    alternativaCorreta: B,
  },
  {
    id: "133",
    numero: 33,
    texto: `
    Você atende em consulta uma criança de 2 anos com caderneta vacinal completa e sem
comorbidades. Está acontecendo campanha de vacinação contra poliomielite na sua cidade. A mãe
questiona se precisa mesmo levar a criança para vacinar, já que tem o calendário todo em dia. Qual
seria a sua melhor orientação?`,
    alternativas: [
      `Não precisa levar, não haverá benefício para ela`,
      `Não precisa levar, não haverá benefício para ela e nem para comunidade`,
      `Levar, pois pode haver benefício para ela e para a comunidade`,
      `Levar, pois mesmo sem haver beneficio, é importante cumprir as orientações do Ministerio da
Saúde. `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "135",
    numero: 35,
    texto: `Um lactente de 10 meses de idade inicia com tosse, coriza hialina e febre.
     Dois dias depois, evolui com piora clínica, prostração, mantendo febre alta.
      Inicia também com lesões de pele mácula papulares retroauriculares, 
      que rapidamente progridem para todo o corpo. Apresenta ainda conjuntivas 
      hiperemiadas e aumento importante da secreção nasal. Sobre a principal hipótese diagnóstica desse caso, assinale a alternativa correta: `,
    alternativas: [
      `É uma doença viral com alta transmissibilidade e a criança deve ficar isolada por 4 dias após o
aparecimento do exantema.`,
      `Apesar de os sintomas serem exuberantes, a criança está em uma faixa etária onde a doença apresenta poucas complicações.`,
      `Provavelmente a criança está com a vacinação atrasada, já que a vacina contra esta doença é aplicada aos 9 meses.`,
      `O diagnóstico é principalmente clínico, mas pode ser solicitado lgM desde o primeiro dia de sintomas.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "137",
    numero: 37,
    texto: `Sobre a coqueluche, assinale a alternativa correta:`,
    alternativas: [
      `O tratamento de escolha é com sulfametoxazol-trimetropim`,
      `O tratamento é importante para reduzir sintomas e complicações, mas não consegue evitar a
transmissibilidade da doença`,
      `A tosse com guincho característica é observada na maioria dos casos de coqueluche`,
      `A maior mortalidade por coqueluche é na faixa etária dos menores de 6 meses `,
    ],
    alternativaCorreta: D,
  },
  {
    id: "139",
    numero: 39,
    texto: `O tratamento especifico desta doença pode prevenir complicações, como febre reumática: `,
    alternativas: [
      `Eritema infeccioso`,
      `Exantema súbito`,
      `Escarlatina`,
      `Varicela `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "140",
    numero: 40,
    texto: `O tratamento com aciclovir pode ser indicado em casos específicos de: `,
    alternativas: [
      `Varicela`,
      `Mononucleose`,
      `Eritema infeccioso`,
      `Enteroviroses`,
    ],
    alternativaCorreta: A,
  },
];
const questoes2: IQuestao[] = [
  {
    id: "21",
    numero: 1,
    texto: `Os pais de um bebê de dois meses e meio levam seu filho ao ambulatório
para uma consulta de Puericultura. Eles referem que a criança está bem, recebendo
leite materno sob livre demanda e queixam-se apenas de que a criança,
ocasionalmente, fica até cinco dias sem evacuar. Neste caso, é correto afirmar:`,
    alternativas: [
      `Esta é a idade mais adequada de se coletar o teste de triagem neonatal (teste do
pezinho).`,
      `O padrão alimentar da criança deve ser mantido.`,
      `Deve ser investigada a constipação intestinal pois nessa idade em aleitamento
materno a criança deve evacuar de 4 a 6 vezes ao dia.`,
      `Em relação ao desenvolvimento neuropsicomotor, espera-se que esta criança já
apresente sorriso social e preensão palmar voluntária.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "22",
    numero: 2,
    texto: `O Desenvolvimento Neuropsicomotor deve ser avaliado de forma
longitudinal nas consultas pediátricas. Ao avaliar um lactente de 8 meses, será sinal de
alerta se ele:`,
    alternativas: [
      `Não estiver ficando em pé com apoio`,
      `Não estiver engatinhando`,
      `Não emitir sons`,
      `Não realizar a pinça com polegar e indicador`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "23",
    numero: 3,
    texto: `Mãe de 17 anos, 52 kg, solteira, chega a primeira consulta de puericultura
com recém-nascido de 15 dias de vida, nascido com 3300g, atualmente com 2800g.
Frente ao peso atual, qual sua conduta durante a consulta?`,
    alternativas: [
      `Orientar uma nutrição materna adequada pois o baixo peso da mãe leva um menor
valor calórico do leite.`,
      `Orientar a suplementação de vitamina D e agendar retorno para 30 dias pois a
perda de peso é normal para a idade do bebê.`,
      `Iniciar o uso de fórmula infantil pois menores de 18 anos não produzem leite em
quantidade adequada`,
      `Observar a mamada, orientar em caso de falhas e agendar retorno para no máximo
1 semana para avaliação de peso. `,
    ],
    alternativaCorreta: D,
  },
  {
    id: "24",
    numero: 4,
    texto: `Com relação a puericultura é correto afirmar que:`,
    alternativas: [
      `Os dois pilares magnos da puericultura são a prevenção e a educação em saúde.`,
      `Termo usado tão somente para o controle de peso e estatura das crianças`,
      `A puericultura é fundamentalmente pediatria curativa`,
      `A puericultura não tem relação com a redução da mortalidade infantil`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "25",
    numero: 5,
    texto: `Observe as 3 imagens abaixo. Com que idade ocorrem os marcos de
    desenvolvimento apontados nelas?`,
    imagens: ["25"],
    alternativas: [
      `A-6 meses; B-5 meses; C-4 meses`,
      `A-9 meses; B-4 meses; C- 6 meses`,
      `A-12 meses; B- 4 meses; C- 2 meses`,
      `A-9 meses; B- 4 meses; C- 2 meses`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "26",
    numero: 6,
    texto: `Assinale, dentre as alternativas abaixo, a que melhor descreve (correta)
as orientações básicas de introdução alimentar`,
    alternativas: [
      `A partir dos 6 meses a criança deve iniciar alimentação complementar, ficando
restrita a frutas até o sétimo mês e outros alimentos a partir dessa idade.`,
      `Peixes, glúten, oleaginosas e ovo devem ser oferecidos progressivamente à criança
desde o início da introdução alimentar.`,
      `O aleitamento materno deve ser reduzido a partir dos 6 meses para promover
melhor aceitação dos alimentos.`,
      `Não é permitido adoçar alimentos com açúcar branco, devendo-se dar preferência
ao açúcar mascavo ou mel, mas somente a partir dos 9 meses`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "27",
    numero: 7,
    texto: `Lactente de 7 meses foi levado a atendimento médico. Nunca foi
amamentado ao seio e nem vacinado. Segundo sua mãe, vinha sendo alimentado com
leite em pó integral diluído com adição de açúcar e farinha, além de sopa de legumes.
Nasceu com 3.200g. Exame físico atual: peso 4.200g, um pouco irritado ao exame.
Fígado palpável a 4 cm de rebordo costal direito, lesões de pele. Utilizando o gráfico
anexo, classifique essa criança nutricionalmente.`,
    alternativas: [
      `Baixo peso para idade.`,
      `Peso adequado para idade`,
      `Eutrófico`,
      `Muito baixo peso para idade`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "28",
    numero: 8,
    texto: `Considerando a necessidade de conhecer os pontos de corte
estabelecidos pela OMS para o índice peso/Idade para crianças de 5 – 10 anos, faça a
correlação das colunas Pontos de corte com Classificação e assinale a alternativa
correta`,
    imagens: ["28"],
    alternativas: [
      `A-5; B-1; C-2; D-7`,
      `A-1; B-2; C-3; D-4`,
      `A-5; B-6; C-2; D-7`,
      `A-1; B-6; C-3; D-4 `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "29",
    numero: 9,
    texto: ` Durante uma consulta de puericultura atendemos um lactente de 3
meses, que nasceu de parto vaginal com 3.100g de peso e 50cm de comprimento. Está
sendo alimentado exclusivamente no seio materno. Qual seria o peso esperado para
ele nessa consulta?`,
    alternativas: [
      "O nosso paciente deveria ter em torno de 5.100g",
      "Deveria estar com 4.200g",
      "O peso de 4.050g é o esperado",
      "Em torno de 3.800g estaria ótimo ",
    ],
    alternativaCorreta: A,
  },
  {
    id: "210",
    numero: 10,
    texto: `Os pais levam seu filho de 9 anos em consulta pois acham que ele não
está crescendo. Ele está atualmente com 123cm. O canal genético de crescimento
dele, pela altura dos pais, aponta para uma variação de 169cm a 192cm na vida adulta.
Seu estadio puberal é G1P1 e a idade óssea de 8 anos. Qual sua orientação aos pais
desse menino? (utilize os gráficos no final da prova para avaliação do caso e assinale
a resposta correta)`,
    alternativas: [
      `A altura está adequada para a idade cronológica e dentro do canal genético de
crescimento. A idade óssea atrasada indica a necessidade de investigação.`,
      `A altura está adequada para idade cronológica mas abaixo do canal genético de
crescimento. A idade óssea atrasada coloca sua altura dentro do canal genético de
crescimento.`,
      `A altura está abaixo do esperado para a idade e para o seu canal genético de
crescimento. A idade óssea atrasada não muda a interpretação dos dados.`,
      `A altura está adequada para a idade cronológica e dentro do canal genético de
crescimento. A puberdade atrasada indica a necessidade de investigação.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "211",
    numero: 11,
    texto: `Um menino de 8 anos e com Índice de massa Corporal de 18kg/m2 é
classificado nutricionalmente de que forma? (utilize os gráficos ao final da prova)`,
    alternativas: [
      `Eutrófico`,
      `Com sobrepeso`,
      `Obeso`,
      `Com risco de sobrepeso `,
    ],
    alternativaCorreta: B,
  },
  {
    id: "212",
    numero: 12,
    texto: `Considere as afirmações abaixo e assinale abaixo a alternativa correta.`,
    itens: [
      `O hábito alimentar da criança obesa é fortemente influenciado pelos inadequados
hábitos alimentares familiares, tais como: ingestão alta de lipídios e baixa de glicídios,
principalmente em pais obesos e com baixo nível educacional; consumo entre as
refeições (“beliscar”) e rejeição às frutas e verduras.`,
      `A reduzida atividade física, em idades precoces da vida, não é só um fator de risco
para o desenvolvimento da obesidade, mas favorece, também, o aumento do
colesterol sérico, a redução de HDL-colesterol, intolerância à glicose e hipertensão.`,
      `Na desnutrição energético-proteica grave há uma redução de massa muscular e
uma progressão da massa adiposa e se produz uma série de mudanças metabólicas
que contribuem para o desenvolvimento de edema, principal característica do
Raquitismo.`,
      `O peso é uma variável antropométrica que se modifica de forma rápida em
intervalos curtos de tempo, expressando as alterações no estado nutricional, o que
permite o diagnóstico precoce da desnutrição. `,
    ],
    alternativas: [
      `Todas as afirmações estão corretas.`,
      `As afirmações I e II estão corretas.`,
      `As afirmações I, II e IV estão corretas`,
      `As afirmações II, III e IV estão corretas`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "217",
    numero: 17,
    texto: `Lactente de 15 meses chega para consulta pediátrica ambulatorial com
quadro de desnutrição de primeiro grau. Revisado cartão vacinal, este não apresentava
registro de nenhuma vacina. Escolha o esquema mais adequado para iniciar a
vacinação desta criança e que pode ser realizado em um mesmo momento:`,
    alternativas: [
      `Pentavalente, pneumocócica, meningocócica, Sabin (pólio atenuada), Febre
amarela e tetra viral`,
      `Pentavalente, pneumocócica, meningocócica, Sabin (pólio atenuada), tríplice viral e
rotavírus`,
      `Pentavalente, pneumocócica, meningocócica, Salk (pólio inativada), Febre amarela
e tetra viral `,
      `Pentavalente, pneumocócica, meningocócica, Salk (pólio inativada) e tetra viral `,
    ],
    alternativaCorreta: D,
  },
  {
    id: "218",
    numero: 18,
    texto: ` Um lactente de 4 meses que apresentou quadro de hipotonia
generalizada e cianose com necessidade de observação hospitalar após vacinação com
Pentavalente aos dois meses de idade, chega ao posto para atualização vacinal (está
atualmente com 4 meses). Quais orientações devem ser dadas à mãe deste paciente. `,
    alternativas: [
      `Encaminhar a mãe para realizar todo o seguimento vacinal pelo CRIE (Centro de
        Referência em Imunobiológicos Especiais), pois lactentes que apresentam reações
        adversas a uma vacina, comumente apresentam a outras vacinas também.`,
      `Realizar todas as vacinas devidas do 4º mês, visto que as reações adversas são
        pontuais e não se repetem.`,
      `Realizar as demais vacinas devidas do 4º mês e encaminhá-la ao CRIE para
        realização da DTP acelular.`,
      `Encaminhar a criança a um imunologista para a realização de testes alérgicos. `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "219",
    numero: 19,
    texto: `Sobre as imunizações na infância, assinale a opção correta. `,
    alternativas: [
      `A vacina pentavalente imuniza contra difteria, tétano, coqueluche, rubéola e
      sarampo, sendo recomendado que a primeira dose seja administrada com um mês
      de vida.`,
      `A vacina que protege contra Hepatite B deve ser administrada em três doses,
      devendo a primeira ser aplicada aos dois meses de vida.`,
      `As vacinas contra Febre Amarela e Tríplice viral não deve ser administradas juntas.`,
      `A vacina BCG protege contra a tuberculose pulmonar, devendo ser administrada
      em dose única quando o bebê nasce`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "220",
    numero: 20,
    texto: `Dentre as vacinas ditas “especiais” e que podem ser solicitadas ao
Centro de Referência em Imunobiológicos Especiais, assinale a alternativa que contém
a vacina e indicação corretas. `,
    alternativas: [
      `Palivizumabe – aplicada em prematuros que tenham doença pulmonar da
prematuridade`,
      `Pneumocócica 23 valente – aplicada em contactuantes de imunodeprimidos`,
      `Palivizumabe – aplicada em idosos com mais de 65 anos`,
      `Pneumocócica 23 valente- aplicada em crianças a partir dos 6 meses com
diagnostico de asma `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "221",
    numero: 21,
    texto: `. Criança de 1 ano e seis meses iniciou quadro de febre alta sem outros
sintomas, evoluindo com resolução da febre no terceiro dia, porém apresentou no
mesmo dia exantema morbiliforme de distribuição em tronco com extensão para os
membros e face. A criança manteve ótimo estado geral. Qual o agente etiológico mais
provável desta doença exantemática?`,
    alternativas: [
      `Citomegalovirus`,
      `Herpes vírus 6`,
      `Epstein-barr`,
      `Parvovirus B19`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "222",
    numero: 22,
    texto: `.Exantemas comuns na infância e sua etiologia pode ser: infecciosa (viral
ou bacteriana), por hipersensibilidade a medicamentos (farmacodermias) ou
indeterminada. Analise as frases abaixo e assinale a alternativa correta. `,
    itens: [
      `O exantema do sarampo caracteriza-se por ser papulovesicular e que se inicia na
  testa e região retroauricular, frequentemente pruriginoso.`,
      `Na rubéola usualmente febre e exantema aparecem juntos e costuma determinar
  artralgia principalmente em adolescentes.`,
      `O exantema súbito acomete crianças de 1 a 3 anos e tem como principal
  característica o exantema palmo-plantar que determina descamação no final da
  doença.`,
      `Embora benigno, o eritema infeccioso pode determinar aplasia medular em
  mulheres jovens e seu exantema pode reaparecer após passado o período agudo da
  doença `,
    ],
    alternativas: [
      `As alternativas I e II estão corretas.`,
      `As alternativas II e IV estão corretas`,
      `As alternativas III e IV estão corretas`,
      `As alternativas I e III estão corretas`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "223",
    numero: 23,
    texto: `Sobre a coqueluche, analise as frases abaixo e assinale a alternativa
correta`,
    itens: [
      `Após 7 a 10 dias de incubação, a coqueluche se apresenta em fases distintas: fase
  catarral, com duração de uma a duas semanas; fase paroxística, com duração de duas
  a seis semanas e fase convalescência, com duração de seis semanas a três meses.`,
      `O tratamento da coqueluche deve ser realizado com antibióticos em qualquer fase
  de diagnóstico, pois mesmo na fase paroxística pode determinar diminuição da
  gravidade dos sintomas, embora não erradique a Bordetella pertussis da orofaringe.`,
      `São complicações comuns a broncopneumonia e o pneumotórax, principalmente
  em menores de 6 meses`,
      `Maiores de 6 meses somente são mais acometidos se não receberam a terceira
  dose da vacina tríplice bacteriana, pois após esta dose já produzem quantidade
suficiente de anticorpos contra a coqueluche.`,
    ],
    alternativas: [
      `As alternativas I, II e III estão corretas`,
      `As alternativas I, III e IV estão corretas`,
      `As alternativas II, III e IV estão corretas `,
      `As alternativas I, II e IV estão corretas `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "224",
    numero: 24,
    texto: `Associe a primeira coluna com a segunda e assinale a alternativa que
contém a sequência correta. `,
    imagens: ["224"],
    alternativas: [
      `A-2; B-5; C-1; D-3; E-4`,
      `A-3; B-2; C-5; D-3; E-4`,
      `A-2; B-3; C-4; D-1; E-5`,
      `A-5; B-2; C-1; D-3; E-4`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "225",
    numero: 25,
    texto: `Um lactente de 10 dias iniciou febre de 38,8 °C há 24 horas. Os pais
dizem que a criança mantém bom estado geral e está mamando sem dificuldade.
Durante a avaliação, o exame físico do paciente encontra-se normal e, após 30
minutos do antitérmico, sua temperatura mantém-se 38,6 °C. Considerando-se o
quadro de febre sem foco, qual deve ser a próxima medida?`,
    alternativas: [
      `Prescrever antitérmico, orientar sinais de alarme e reavaliar em 24 horas.`,
      `Solicitar hemocultura, urocultura e punção lombar com cultura, celularidade e
bioquímica do líquor e, se o líquor estiver normal, liberar após dose de ceftriaxona
intramuscular.`,
      `Indicar internação hospitalar para realização de hemocultura, urocultura e punção
lombar com cultura, além de iniciar antiobioticoterapia parenteral empírica.`,
      `Colher hemograma e exame de urina e iniciar antibioticoterapia empírica por via
oral. `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "226",
    numero: 26,
    texto: `Para efeitos de avaliação de febre sem sinais localizatórios em crianças
de três a 36 meses de idade, com temperatura < 39°C, analise as frases abaixo,
estabeleça se verdadeiras (V) ou falsas (F) e assinale a alternativa com a sequência
correta.`,
    itensVF: [
      `O hemograma deve ser utilizado para estratificar a criança em baixo risco ou alto
  risco para bacteremia oculta, independente do estado geral.`,
      `Deve ser coletado parcial de urina e cultura, Se parcial de urina alterado tratar
  infecção urinária.`,
      `No caso de PU normal e hemograma normal, a utilização de antibioticoterapia
  dependerá da situação vacinal.`,
      `A antibioticoterapia empírica no caso de risco de bacteremia oculta é o ceftriaxone,
  que deve ser mantido até o resultado das culturas.`,
    ],
    alternativas: [
      `F – V – V – V`,
      `V – V – V – F`,
      `F – F – V – V`,
      `F – V – F – F `,
    ],
    alternativaCorreta: -1,
  },
  {
    id: "227",
    numero: 27,
    texto: `Convulsões febris são manifestações epilépticas benignas da infância,
que ocorrem entre 1 mês e 5 anos de idade, afetando em torno de 2 a 5 % das
crianças. Sobre esse tema, assinale a alternativa correta.`,
    alternativas: [
      `O tratamento profilático com anticonvulsivantes é indicado sempre que a crise
ocorrer antes dos 2 anos, pelo alto risco de recorrência`,
      `Primeira convulsão febril depois dos 24 meses de vida caracteriza a crise como
complexa`,
      `Crise tônico-clônica generalizada é o tipo mais comum e necessário para
caracterizar a crise como febril simples.`,
      `O risco de recorrência da crise convulsiva febril é aproximadamente 90%, sendo
diretamente proporcional à temperatura. `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "228",
    numero: 28,
    texto: `Febre é uma queixa comum em pediatria. Qual a definição de febre?`,
    alternativas: [
      `Temperatura axilar acima de 38,3º C`,
      `Temperatura axilar acima de 37,8º C`,
      `Temperatura axilar acima de 37,3º C`,
      `Temperatura axilar acima de 38,5º C`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "229",
    numero: 29,
    texto: `Qual a alteração laboratorial mais frequente na mononucleose
infecciosa? `,
    alternativas: [
      `Leucopenia com neutropenia`,
      `Trombocitose e leucopenia`,
      `Leucocitose com linfocitose e presença de linfócitos atípicos`,
      `Leucopenia com anemia hemolítica `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "232",
    numero: 32,
    texto: ` Sobre a Mononucleose infecciosa é correto afirmar que:`,
    alternativas: [
      `É causada pelo vírus de Epstein barr, transmitido por contato com as secreções
orais da pessoa infectada.`,
      `Essa doença é caracterizada por febre, faringite, linfadenopatias e leucocitose com
neutrofilia.`,
      `Evitar exercícios físicos é uma recomendação feita ao doente para diminuir o risco
de insuficiência cardíaca.`,
      `Para diagnóstico é necessária a presença de Monoteste ( pesquisa de anticorpos
heterofilos) positiva `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "240",
    numero: 40,
    texto: `Lactente de 6 meses de idade é levado ao pronto atendimento com
quadro de febre há 3 dias e recusa alimentar parcial. Ao exame apresenta-se em
regular estado geral, choroso, taquicárdico e desidratado moderado. Após avaliação o
médico resolve solicitar exames: Parcial de urina- normal/ Hemograma: leucocitose
com neutrofilia e desvio à esquerda. Qual a conduta nesse caso: `,
    alternativas: [
      `Hidratar a criança, orientar a família e liberar com anti-inflamatório `,
      `Hidratar a criança, solicitar culturas de urina e sangue e liberar com antitérmico e
      orientações`,
      `Internar, solicitar culturas de urina e sangue e iniciar antibioticoterapia parenteral`,
      `Internar para observar a evolução do quadro. `,
    ],
    alternativaCorreta: C,
  },
];

const questoes3: IQuestao[] = [
  {
    id: "31",
    numero: 1,
    texto: `RN prematuro tardio, IG = 36 semanas, filho de mãe com diabetes gestacional. Tipagem sanguínea
do RN é A, Rh-negavo; pagem sanguínea da mãe é O, Rh-negavo, Coombs indireto negavo.
Evoluiu com icterícia com 24 horas de vida, Zona III. Perda de peso de 4% em aleitamento misto desde o
nascimento. Sem outras alterações ao exame sico.`,
    alternativas: [
      `Paciente sem fatores de risco para hiperbilirrubinemia significava, sendo possível manter apenas
observação clínica, sem solicitação de exames e com reavaliações a cada 8 a 12 horas.`,
      `Paciente com fatores de risco para hiperbilirrubinemia significava (prematuro, filho de mãe com
diabetes e incompabilidade Rh). Deve ser administrada imunoglobulina, já que se trata de bilirrubina
Zona III (nível de bilirrubina ao redor de 12 mg/dL).`,
      `Paciente com fatores de risco para hiperbilirrubinemia significava (prematuro, filho de mãe com
diabetes, incompabilidade ABO). Deve-se analisar BT e frações, hemograma e reculócitos, e iniciar
fototerapia enquanto aguarda resultado dos exames.`,
      `Paciente com fatores de risco para hiperbilirrubinemia significava (prematuro, filho de mãe com
diabetes, incompabilidade ABO). Deve ser realizada exsanguinotransfusão, já que se trata de icterícia
Zona III. Está em risco para encefalopaa bilirrubínica. `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "32",
    numero: 2,
    texto: `A icterícia constui-se em um dos problemas mais frequentes no período neonatal e corresponde à
expressão clínica da hiperbilirrubinemia. Em relação à icterícia neonatal, é correto afirmar:`,
    alternativas: [
      `O termo encefalopaa bilirrubínica é reservado à forma crônica da doença, com sequelas clínicas
permanentes resultantes da toxicidade da bilirrubina`,
      `É mais comumente associada ao aumento de bilirrubina direta`,
      `A fototerapia é indicada de acordo com o nível de bilirrubina sérica e a idade do recém-nascido em
horas.`,
      `A circulação êntero-hepáca reduzida é uma das causas de icterícia por anomalias gastrointesnais`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "33",
    numero: 3,
    texto: `Recém-nascido com 27 dias de vida, nascido a termo, com bom ganho ponderal, em aleitamento
materno exclusivo, apresenta icterícia zona II, acolia fecal, colúria e gado palpável a 4 cm do rebordo
costal direito (RCD), com aspecto liso e endurecido. A hipótese diagnósca mais provável seria:`,
    alternativas: [
      `Fibrose císca`,
      `Atresia de vias biliares`,
      `Icterícia do aleitamento materno`,
      `Incompabilidade Rh `,
    ],
    alternativaCorreta: B,
  },
  {
    id: "34",
    numero: 4,
    texto: `Felipe, 23 dias, é atendido com icterícia desde os primeiros dias de vida. O 1º filho nasceu a termo,
com bom peso e sem intercorrências. Felipe recebeu alta com a mãe e está em aleitamento humano
exclusivo, ganhando 35g por dia. Em excelente estado geral, mama bem, as fezes estão amareladas e a
urina é considerada normal. Ao examiná-lo, você observa icterícia zona II para III, e o restante do exame
é normal. Assinale a alternava correta: `,
    alternativas: [
      `Solicitar coleta de bilirrubinas e transaminases`,
      `Encaminhar o paciente ao especialista para avaliação em 3 meses`,
      `Tranquilizar a mãe, pois a criança está bem e ganhando peso, e marcar nova avaliação em 1 mês`,
      `Orientar suspender o leite materno e ulizar fórmula de leite de vaca própria para a idade `,
    ],
    alternativaCorreta: C,
  },
  {
    id: "35",
    numero: 5,
    texto: `Recém-nascido, filho de mãe sem pré-natal, nasceu de parto normal com 38 semanas de gestação,
pequeno para a idade gestacional. Na maternidade, detectou-se a presença de persistência do canal
arterial, o teste do reflexo vermelho apresentou opacidade bilateral e as emissões otoacúscas foram
ausentes bilateralmente. Esses achados são sugesvos de qual infecção congênita? `,
    alternativas: [
      `Citomegalovírus.`,
      `Toxoplasmose.`,
      `Sífilis.`,
      `Rubéola. `,
    ],
    alternativaCorreta: D,
  },
  {
    id: "36",
    numero: 6,
    texto: `Mulher de 17 anos de idade, primigesta, está em um relacionamento estável com seu parceiro há 1
ano e meio. Recebeu o diagnósco de sífilis na 16ª semana de gestação. Naquele momento o VDRL da
gestante era de 1/32. Foi tratada, juntamente com seu parceiro, terminando o tratamento na 20ª
semana de gestação . Na 30ª semana de gestação, o VDRL da gestante era 1/2. `,
    subTexto: `A criança, do sexo masculino, nasceu a termo (idade gestacional de 40 semanas), por parto vaginal,
com peso de 2470 kg. No dia do parto, o VDRL materno e do recém-nascido eram 1/64. O exame sico
do RN é normal no momento do nascimento. Qual a alternava indica a conduta para esse
recém-nascido?`,
    alternativas: [
      `Coleta de líquor, hemograma, radiografia de ossos longos e penicilina benzana dose única se exames laboratoriais normais.`,
      `Sorologia para sífilis no primeiro, no terceiro e sexto meses de idade, e penicilina procaína 10 doses`,
      `Hemograma, radiografia de ossos longos e penicilina procaína por 10 dias.`,
      `Coleta de líquor, hemograma, radiografia de ossos longos. Se esses exames forem normais, observação clínica ambulatorial. `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "37",
    numero: 7,
    texto: `Em relação aos cuidados imediatos do recém-nascido exposto ao HIV, é correto afirmar que o(a): `,
    alternativas: [
      `Primeira dose de AZT, quando indicada, deve ser iniciada preferencialmente nas primeiras 4 horas após o nascimento.`,
      `Suspensão do aleitamento materno é relava, sendo necessária a avaliação individual de cada caso.`,
      `Clampeamento tardio do cordão umbilical após o nascimento deve ser realizado para prevenção da anemia.`,
      `Parto cesariano deve ser realizado sempre que possível.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "38",
    numero: 8,
    texto: `Um recém-nascido de 37 semanas apresenta microcefalia, tomografia de crânio com calcificações
periventriculares, fundo de olho com coriorrenite bilateral e avaliação audiva com compromemento
à esquerda. Com base nesse caso hipotéco, assinale a alternava correta:`,
    alternativas: [
      `Como há o acomemento ocular, o tratamento deve incluir o uso de prednisona.`,
      `As lesões ósseas quando encontradas geralmente são bilaterais e simétricas, incidindo mais no rádio e na ulna.`,
      `A maioria dos casos de transmissão vercal ocorre no momento do parto.`,
      `A decisão do tratamento depende da carga viral. `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "39",
    numero: 9,
    texto: `Lactente de 11 meses apresenta palidez. No invesgatório alimentar, observa-se apenas consumo
eventual de frutas, legumes, verduras e carne, pois a criança prefere mamadeira de leite de vaca e
mingau com bolacha. Aleitamento materno exclusivo até os 4 meses de vida e após introdução de leite
de vaca. `,
    imagens: ["39"],
    subTexto: `De acordo com o resultado do exame, o po morfológico da anemia e a provável eologia são
respectivamente: `,
    alternativas: [
      `normocíca e normocrômica; anemia hemolíca autoimune.`,
      `microcíca e hipocrômica; anemia ferropriva.`,
      `microcíca e hipocrômica; anemia de doença crônica.`,
      `macrocíca e normocrômica; anemia megaloblásca. `,
    ],
    alternativaCorreta: B,
  },
  {
    id: "310",
    numero: 10,
    texto: `Um lactente de quatro meses de vida, nascido de parto normal, a termo, após uma gestação sem
intercorrências, foi levado à sua primeira consulta de puericultura. A mãe refere que a criança nasceu
com 3,2 kg, está em aleitamento materno exclusivo, sorri, acompanha com o olhar e se senta com
apoio. Não tem queixas. Não conseguiu vir à consulta antes, pois estava realizando a mudança da
família de Vitória para São Paulo. Não está fazendo uso de nenhuma medicação no momento. Exame
sico sem alterações . Com base nesse caso hipotéco e nas recomendações da Sociedade Brasileira de
Pediatria, é correto afirmar que, nessa consulta, o médico deverá `,
    alternativas: [
      `introduzir vitamina D e introduzir profilacamente sulfato ferroso.`,
      `introduzir vitamina D e aguardar até o sexto mês de vida para introduzir profilacamente sulfato ferroso.`,
      `introduzir vitamina De introduzir empiricamente sulfato ferroso em dose terapêuca para anemia ferropriva.`,
      `realizar triagem laboratorial para anemia ferropriva e hipovitaminose D. `,
    ],
    alternativaCorreta: B,
  },
  {
    id: "311",
    numero: 11,
    texto: `Mariana, 10 anos, é trazida por sua mãe em consulta com pediatra por achar que a filha está muito
pálida e com o início da menstruação, teme anemia. Trouxe o seguinte hemograma (VR= valor de
referência)`,
    imagens: ["311"],
    subTexto: `A melhor conduta para se estabelecer um diagnósco neste caso é:`,
    alternativas: [
      `Solicitar mielograma`,
      `Solicitar eletroforese de hemoglobina`,
      `Solicitar reculócitos`,
      `Dosagem sérica de vitamina B12 e folato`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "312",
    numero: 12,
    texto: `Em relação ao desenvolvimento neuropsicomotor, assinale a alternava correta. `,
    alternativas: [
      `A criança que não atende ao chamado aos 9 meses deve ser mais bem avaliada`,
      ` Não enganhar aos 18 meses indica lesão neurológica`,
      ` O sorriso social é considerado um reflexo arcaico pois a criança já sorri ao nascer`,
      ` Aos 12 meses, toda criança nascida a termo deve andar sem apoio. `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "313",
    numero: 13,
    texto: `O Desenvolvimento Neuropsicomotor deve ser avaliado de forma longitudinal nas consultas
pediátricas. Ao avaliar um lactente de 12 meses, será movo de preocupação se ele: `,
    alternativas: [
      `Não esver ficando em pé com apoio`,
      `Não esver enganhando`,
      `Não consegue comer sozinho com colher`,
      `Não falar frases com duas palavras `,
    ],
    alternativaCorreta: A,
  },
  {
    id: "314",
    numero: 14,
    texto: `No posto de saúde você recebe uma mãe preocupada pois o teste de triagem metabólica de seu
filho está alterado. Ao avaliar o teste você observa o seguinte resultado: `,
    imagens: ["314"],
    subTexto: `Qual a orientação que você deve dar a essa mãe?`,
    alternativas: [
      `Não há movos para preocupação. A alteração encontrada não tem significado nenhum e representa uma variação do normal, não há necessidade de nenhuma invesgação adicional `,
      `Orienta que se trata de um caso de Talassemia e seu filho deve procurar imediatamente um hematologista`,
      `Orienta que se trata de uma suspeita de Doença Falciforme e que seu filho deverá ser acompanhado por equipe muldisciplinar pelas complicações possíveis`,
      `Orienta que se trata de uma situação de portador de um gene e que a criança não desenvolverá doença `,
    ],
    alternativaCorreta: D,
  },
  {
    id: "315",
    numero: 15,
    texto: `
    Qual dos testes de triagem abaixo relacionados, embora deva ser realizado dentro da primeira
semana de vida, poderia ser realizado até o terceiro mês de vida `,
    alternativas: [
      `Teste do reflexo vermelho`,
      `Teste da orelhinha`,
      `Teste do pezinho`,
      `Teste da oximetria (coraçãozinho) `,
    ],
    alternativaCorreta: B,
  },
  {
    id: "316",
    numero: 16,
    texto: `Seguindo as orientações dadas na maternidade, uma família leva um recém-nascido para uma
consulta no 6º dia de vida. Trata-se de um prematuro de 35 semanas cuja mãe é uma adolescente de 16
anos. A gestação transcorreu sem problemas até o dia do parto vaginal, e o bebê não necessitou de UTI
e foi amamentado ao seio materno. Como devemos orientar corretamente esta família?`,
    alternativas: [
      `Como o recém-nascido foi classificado com portador de risco habitual, seu acompanhamento deve ser realizado na Atenção Básica`,
      `Todo RN de risco habitual, como é o caso deste paciente, além da atenção básica, deve ser acompanhado também com outros serviços de rede (como NASF, CRAS, CREAS etc.)`,
      `Como este paciente é de risco médio, deve ser acompanhado pela atenção básica com outros serviços de rede (como NASF, CRAS, CREAS etc.)`,
      `Em casos de recém-nascidos de alto risco, como neste caso, os cuidados devem ser compartilhados entre a atenção básica, visitas domiciliares e atenção especializada.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "317",
    numero: 17,
    texto: `Estudos recentes sugerem que o crescimento da criança durante os primeiros anos de vida seja
fortemente influenciado pelo padrão de crescimento fetal. Com relação a isto o que significa a
expressão “janela de oportunidades da saúde da criança e as suas repercussões na vida adulta”? `,
    alternativas: [
      `Significa o período dos “mil dias” que é a soma das 40 semanas de gestação com os 2 primeiros anos de vida`,
      `Refere-se ao período de acompanhamento da criança do nascimento até a adolescência`,
      `Intervenção no período do nascimento aos 12 meses, cruciais para o bom desenvolvimento da criança`,
      `Intervenção no período dos 12 aos 24 meses, cruciais para o bom desenvolvimento da criança`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "318",
    numero: 18,
    texto: `O Ministério da Saúde e a Organização Pan-americana da Saúde estabeleceram, para crianças
menores de dois anos de idade, dez passos para a alimentação saudável. Em relação a essas
recomendações, assinale a alternava correta: `,
    alternativas: [
      `Após os seis meses de vida, a mãe deverá oferecer alimentos complementares (cereais, tubérculos, carnes, leguminosas, frutas e legumes) à criança, uma vez ao dia se a criança ainda receber leite materno e duas vezes ao dia se estiver desmamada.`,
      `A mãe deve ofertar à criança somente leite materno até os seis meses de vida, sem oferecer água, chás ou quaisquer outros alimentos.`,
      `Os horários em que a alimentação complementar é oferecida devem ser rigidamente respeitados, independentemente da vontade da criança.`,
      `A partir dos seis meses de vida, devem ser introduzidos de forma lenta e gradual, na alimentação da criança, suspendendo-se o aleitamento materno.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "319",
    numero: 19,
    texto: `Os dois primeiros anos de vida são decisivos para o crescimento e desenvolvimento da criança;
nesse contexto, o Guia Alimentar para Crianças Brasileiras Menores de 2 Anos traz recomendações e
informações sobre alimentação para promover saúde, crescimento e desenvolvimento das crianças
brasileiras (BRASIL, 2019). No que se refere à introdução alimentar, o guia alimentar preconiza que:`,
    alternativas: [
      `O consumo de sal, açúcar, mel e suco natural de frutas não deve ocorrer antes dos 3 anos de vida, devido à imaturidade do trato gastrointestinal e do sistema imunológico da criança.`,
      `A partir de 6 meses de vida, além do leite materno, outros alimentos devem fazer parte das refeições da criança e os alimentos in natura ou minimamente processados devem ser a base da alimentação da criança e de toda a família.`,
      `Para crianças em uso de fórmula infantil, a partir dos 4 meses de vida, outros alimentos devem fazer parte das refeições da criança e os alimentos in natura ou minimamente processados devem ser a base da alimentação da criança e de toda a família.`,
      `Os alimentos com potencial alergênico, como leite de vaca, trigo, clara de ovo, peixes e frutos do mar, carne suína e oleaginosas, devem ser introduzidos após os 12 meses de vida, a fim de se evitar reações alérgicas e prejuízos no desenvolvimento.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "320",
    numero: 20,
    texto: `Qual sua orientação para uma mãe que quer iniciar a introdução alimentar ulizando sucos 2 vezes
ao dia pois tem dificuldade em introduzir a fruta “in natura” `,
    alternativas: [
      `Que ela pode fazer isso desde que também ofereça água nos intervalos`,
      `Que é uma opção já que contém grande quantidade de vitaminas, fibras e frutose`,
      `Que sucos utilizados uma vez ao dia podem auxiliar no funcionamento do intestino.`,
      `Que não é uma boa opção pois pode predispor à obesidade e doença gordurosa não alcoólica do fígado.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "321",
    numero: 21,
    texto: `O profissional de saúde, frente a uma mãe com dificuldade em amamentar e com intenção de iniciar
fórmula infanl, deve reforçar a importância do aleitamento materno, assim como as diferenças entre
o leite materno e as fórmulas infans. À luz dos conhecimentos sobre leite materno e fórmulas infans,
é correto afirmar: `,
    alternativas: [
      `Quanto à composição proteica do leite materno, 80% correspondem a caseína e 20% a lactoalbumina, o que lhe confere melhor digestibilidade se comparado ao leite de vaca.`,
      `A mãe com infecção pelo vírus HIV deve ser orientada a iniciar fórmula infantil adequada à idade do bebê.`,
      `Atualmente, a composição das fórmulas infantis está cada vez mais semelhante ao leite materno em relação à proteína, carboidratos, gorduras e fatores imunológicos.`,
      `A mãe com diagnóstico de sífilis no momento do parto deve receber tratamento adequado e pode continuar amamentando com medidas de precaução, não sendo necessário suspender o aleitamento materno.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "322",
    numero: 22,
    texto: `A técnica de amamentação e a pega/sucção são importantes para que o bebê consiga rerar , de
maneira eficiente, o leite da mama e não machucar os mamilos. Em relação à mamada e a boa pega, é
correto afirmar: `,
    alternativas: [
      `O corpo do bebê se encontra bem próximo do da mãe, todo voltado para ela, barriga com barriga, com corpo e cabeça alinhados (pescoço não torcido)`,
      `A mãe segura a mama de maneira que a aréola fique livre, colocando os dedos na mama em forma de tesoura.`,
      `A cabeça do bebê fica no mesmo nível da mama, com o nariz acima da altura do mamilo, o queixo sem tocar a mama, e as narinas tocam as mamas.`,
      `O lábio superior do bebê fica curvado para fora, e o lábio inferior não é visualizado se estiver curvado para dentro.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "323",
    numero: 23,
    texto: `Assinale a alternava que indica uma situação que pode indicar ingestão insuficiente de leite
materno e poderia jusficar a introdução de uma fórmula infanl: `,
    alternativas: [
      `Sinais e/ou sintomas clínicos ou laboratoriais de desidratação que não melhoram após cuidados adequados e manejo apropriado da amamentação`,
      `Perda de peso maior que 8% no quinto dia de vida.`,
      `Transição para fezes amareladas no terceiro dia de vida mantendo quatro evacuações ao dia ou mais.`,
      `Apojadura iniciada no quarto dia de vida após readequação da pega.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "324",
    numero: 24,
    texto: `Você está avaliando um recém-nascido de 32 semanas de idade gestacional e pesando 2800g.
Ulizando o gráfico abaixo, classifique o RN de acordo coma idade gestacional e adequação de peso `,
    imagens: ["324"],
    alternativas: [
      `RN a termo e Pequeno para a idade gestacional`,
      `RN prematuro e adequado para a idade gestacional`,
      `RN a termo e adequado para a idade gestacional`,
      `RN prematuro e grande para a idade gestacional`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "330",
    numero: 30,
    texto: `O hemograma é um exame muito ulizado na práca médica para avaliar condições clínicas dos
pacientes, o qual analisa informações específicas sobre os pos e quandades dos componentes no
sangue. Em relação a este tema, assinale a alternava correta: `,
    alternativas: [
      `Neutrófilos imaturos produzidos na medula óssea são chamados de bastonetes, os quais podem estar elevados principalmente em infecções virais, o que acompanha neutrofilia com desvio à esquerda.`,
      `No esfregaço, as plaquetas geralmente aparecem aglomeradas, e quando há um número elevado de plaquetas no sangue (trombocitose), isso geralmente sinaliza inflamação ou trauma, mas tem pouco significado clínico.`,
      `A molécula de hemoglobina fetal predomina em elevadas taxas até 2 anos de idade, sendo um importante fator de proteção contra fenômenos de falcização, em virtude de possuir maior afinidade pelo oxigênio.`,
      `As principais proteínas do plasma são as albuminas, alfa, beta e gama globulinas, lipoproteínas, protrombina e fibrinogênio, com exceção das imunoglobulinas que não permanecem no plasma.`,
    ],
    alternativaCorreta: B,
  },
];
const questoes4: IQuestao[] = [
  {
    id: "419",
    numero: 19,
    texto: `Considerando o crescimento tipico na infância, analise as assertivas abaixo e assinale
a alternativa que apresente as corretas: `,
    itens: [
      `O crescimento normal é dividido em cinco fases, de acordo com o período da vida`,
      `Em todas as fases, os mesmos fatores determinantes exercem influência na velocidade do crescimento`,
      `A velocidade de crescimento não é linear ao longo da vida`,
      `É possível prever o crescimento de crianças e adolescentes de acordo com a fase da vida`,
    ],
    alternativas: [
      `Apenas II.`,
      `Apenas I e IV.`,
      `Apenas II e III.`,
      `Apenas III e IV.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "420",
    numero: 20,
    texto: `Paciente, sexo feminino, 5 anos e 3 meses, comparece à consulta por aparecimento de
broto mamário. Mãe percebeu que nos últimos três meses houve crescimento de mamas,
Refere que na escola é a crianca mais alta da turma. Qual o principal exame que devemos
solicitar nesse caso? `,
    alternativas: [
      `RX de idade óssea.`,
      `Dosagem do hormônio do crescimento.`,
      `Ressonância magnética da hipófise.`,
      `TSH e T4 livre.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "421",
    numero: 21,
    texto: `Com relação à avaliação do crescimento da criança e do adolescente, assinale a
alternativa INCORRETA `,
    alternativas: [
      `Quando há diferença acima de 1 desvio padrão (DP) entre a estatura do pai e a da mãe, ou o padrão familiar é inferior a -2 DP, a estatura alvo calculada deve ser interpretada com cautela.`,
      `As medidas antropométricas são avaliações simples, porém que exigem cuidados quanto à adequada realização, seguindo padronização recomendada e utilizando aparelhos frequentemente calibrados.`,
      `Em crianças nascidas prematuras, é necessário realizar o registro das medidas antropométricas considerando a idade cronológica e também a idade corrigida para 40 semanas.`,
      `A avaliação da velocidade de crescimento é indispensável quando for realizada a avaliação de peso e estatura.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "422",
    numero: 22,
    texto: `Para realizar o diagnóstico da deficiência de hormônio de crescimento em crianças é necessário:`,
    itens: [
      `Dosagem de fator de crescimento semelhante a insulina 1 (IGF-1) e níveis do tipo de ligação à proteína IGF 3 (IGFBP3).`,
      `Geralmente confirmação por meio de testes de estímulo.`,
      `Avaliação de outros hormônios hipofisários e outras causas do baixo crescimento.`,
    ],
    alternativas: [
      `Apenas I e II estão corretas.`,
      `Apenas I e III estão corretas.`,
      `Apenas II e III estão corretas.`,
      `I, II e III estão corretas.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "423",
    numero: 23,
    texto: `A desnutriçao energético-proteica é um problema de saúde pública global,
especialmente em crianças menores de 5 anos de idade. Segundo a Organização Mundial
de Saúde, para o diagnóstico de desnutrição aguda grave utilizam-se medidas
antropométricas e o melhor preditor de mortalidade das medidas antropométricas é: `,
    alternativas: [
      `Peso/estatura.`,
      `IMC.`,
      `Circunferência do braço.`,
      `Circunferência abdominal.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "424",
    numero: 24,
    texto: `Nos ultimos anos a obedicidade infantil vem ganhando maior espaço e um dos motivos é
a alteração dos hábitos de vida dos brasileiros. Das alternativas abaixo a que NÃO teria
impacto na prevenção da obesidade infantil seria: `,
    alternativas: [
      `Uso de hipoglicemiantes orais.`,
      `Prática regular de atividade física.`,
      `Evitar ingestão de alimentos com alto índice calórico.`,
      `Refeições diversificadas e em porções menores.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "425",
    numero: 25,
    texto: `A respeito da vacinação na infância, assinale a alternativa correta. `,
    alternativas: [
      `Crianças que não apresentarem a cicatriz vacinal após receberem a dose da vacina BCG não precisam ser revacinadas.`,
      `A primeira dose da vacina contra a hepatite B deve ser administrada 30 dias após o nascimento.`,
      `A vacina tetraviral corresponde à segunda dose da tríplice viral com a primeira dose da vacina pneumocócica.`,
      `A vacina contra a febre amarela é de vírus vivo atenuado.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "426",
    numero: 26,
    texto: `Uma criança de sete meses, recebendo prednisona na dose diária de 1mg há 15 dias,
 vai à Unidade Básica de Saúde (UBS) para vacinação conforme o calendário de vacinação
 do Programa Nacional de Imunização (PNI). Ela está com sua vacinação atrasada. Essa
 criança: `,
    alternativas: [
      `Não deve receber vacinas do PNI com vírus vivo.`,
      `Não deve receber nenhum tipo de vacina do PNI.`,
      `Deve ser vacinada com todas as vacinas do PNI em um Centro de Referência de Imunobiológicos Especiais.`,
      `Deve ser vacinada com todas as vacinas do PNI na UBS, para colocar seu calendário vacinal em dia.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "428",
    numero: 28,
    texto: `Joana, de 8 meses e 20 dias de idade foi levada à Unidade Básica de Saúde para
atualizar as vacinas. Conversando com a mãe e checando a carteirinha de vacinação,
concluiu-se que Joana tinha tomado as seguintes vacinas: Nascimento: BCG e contra
Hepatite B. 2 meses: Pentavalente (contra difteria, tétano, coqueluche, Haemophilus
influenzae tipo b e hepatite B), VIP (vacina inativada contra poliomielite), pneumocócica
10 valente e contra o rotavírus. 3 meses: vacina meningocócica C. Depois disso, não
recebeu nenhuma o utra vacina, porque sua mãe ficou com medo de sair de casa por causa
da pandemia de COVID-19. O melhor esquema vacinal para ser aplicado em Joana, nesse
momento é: `,
    alternativas: [
      `Pentavalente, VOP, pneumocócica 23 valentes, meningocócica C, febre amarela e contra a influenza.`,
      `Pentavalente, VIP, Rotavírus, pneumocócica 10 valente, meningocócica C e contra a influenza.`,
      `Pentavalente, VIP, Rotavírus, pneumocócica 23 valente, meningocócica C, febre amarela e contra a influenza.`,
      `Pentavalente, VIP, pneumocócica 10 valente, meningocócica C e contra a influenza.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "429",
    numero: 29,
    texto: `Um adolescente com 12 anos de idade é trazido à consulta na Unidade Básica de
Saúde com relato de febre variando entre 38,8°C e 39°C há dois dias, acompanhada de
dor de garganta, manchas vermelhas pelo corpo e desânimo. Na anamnese refere também
náuseas e dor abdominal. Ao exame o paciente apresenta queda do estado geral,
exantema máculo-papular não pruriginoso em membros, tronco e região glútea. As
amigdalas mostram-se muito hipertrofiadas, com presença de exsudato; presença de
linfoadenopatia submandibular, cervical anterior e epitroclear. Aparelho respiratório e
cardiovascular sem alterações. Abdome difusamente doloroso, com fígado palpável a 2
cm de rebordo costal direito e baço a 3 cm do rebordo costal esquerdo. O hemograma
apresenta leucocitose de 14.000 celulas/mm³ com 20% de linfócitos atípicos, sem outras alterações 
importantes, e o teste rápido para pesquisa de antígeno esreptocócico do grupo A é negativo. 
Diante do quadro clínico e laboratorial do paciente, qual o diagnóstico e conduta?`,
    alternativas: [
      `Amigdalite estreptocócica: prescrever penicilina ou derivados por dez dias e reavaliar o paciente.`,
      `Escarlatina: prescrever antimicrobiano e analgésico, orientando que o paciente evite esforços físicos.`,
      `Infecção pelo vírus da rubéola: prescrever anti-histamínico, analgésico e afastar o paciente de gestantes.`,
      `Mononucleose infecciosa: prescrever analgésico e antitérmico, não sendo necessário o uso de antimicrobianos.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "430",
    numero: 30,
    texto: `Sobre doenças exantemáticas, faça a associação e assinale a alternativa com a
sequência correta: `,
    itens: [`Escarlatina`, `Varicela`, `Eritema infeccioso`, `Enterovírus`],
    itensVF: [
      `exantema eritematoso puntiforme (pele áspera)`,
      `geralmente sem pródromos, inicia como eritema difuso`,
      `diversas apresentações de exantema`,
      `presença concomitante de vesículas, pústulas e crostas`,
    ],
    alternativas: [`1-2-3-4`, `3-1-2-4`, `3-2-4-1`, `1-3-4-2`],
    alternativaCorreta: D,
  },
  {
    id: "431",
    numero: 31,
    texto: `Qual dos achados clinicos ou laboratoriais abaixo são mais facilmente encontrados
numa suspeita dé mononucleose? `,
    alternativas: [
      `leucopenia no hemograma.`,
      `Descamação em face e tronco.`,
      `Hepatoesplenomegalia.`,
      `Edema de membros inferiores.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "432",
    numero: 32,
    texto: `Diversas doenças comuns na infância cursam com febre e exantema. O surgimento de
febre alta (acima de 38,5°C), tosse, coriza, conjuntivite e exantema maculopapular
generalizado 2 a 4 dias após o inicio dos sintomas prodômicos são sugestivos de
gravidade da doença. O surgimento de enantemas da mucosa oral (manchas de Koplik) em
áreas epidémicas ou de surtos sugere o diagnóstico de: `,
    alternativas: [`Rubéola.`, `Roséola.`, `Eritema infeccioso.`, `Sarampo.`],
    alternativaCorreta: D,
  },
  {
    id: "433",
    numero: 33,
    texto: `Diversas doenças comuns na infância cursam com febre e exantema. Define-se
exantema como a presenca de manchas vermelhas na pele, podendo ser do tipo
maculopapular, papulovesicular ou petequial/purpúrico. Com relação às doenças
exantemáticas na infancia, assinalar a alternativa CORRETA: `,
    alternativas: [
      `As manchas de Koplik, ou enantemas na mucosa oral, são consideradas patognomônicas da rubéola.`,
      `A escarlatina é uma doença infecciosa aguda causada pelo Streptococcus pyogenes, uma bactéria beta-hemolítica do grupo A, produtora de toxina eritrogênica.`,
      `O exantema maculopapular róseo, no exantema súbito, inicia-se no tronco antes do aparecimento da febre e se estende para o pescoço, sem outros sintomas gerais.`,
      `O exantema no eritema infeccioso tem aspecto maculopapular e distribuição centrípeta, iniciando na face, no couro cabeludo ou no tronco; após algumas horas, torna-se vesicular, evolui rapidamente para pústulas e, em 3 a 4 dias, forma crostas.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "434",
    numero: 34,
    texto: `Lactente de 10 meses, sexo masculino, vindo do estado do Rio de Janeiro há 2
semanas, apresenta, há um dia, exantema maculopapular não pruriginoso, que se iniciou
no tronco e evoluiu para pescoço e coxas, simetricamente. Vinha apresentando, há cerca
de 72 horas, febre alta (até 39 graus) e discreta irritabilidade. Está há 24 horas sem
febre. No exame físico, identifica-se o exantema e discreta hiperemia em orofaringe. Não
há linfadenopatia. O diagnóstico mais provável é: `,
    alternativas: [
      `Exantema súbito.`,
      `Escarlatina.`,
      `Rubéola.`,
      `Febre amarela.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "436",
    numero: 36,
    texto: `Criança de 18 meses vem em consulta de rotina, sem queixas, com bom ganho de
peso. Ao exame fisico, apresenta linfonodos cervicais, de consisténcia elástica, móveis,
indolores, com aproximadamente 1,0 cm, figado a 2,0 cm do RCD e baço não palpável. A
mãe refere que a crianga tem contato com gato saudável. Com base nessas informacaes,
a indicação é: `,
    alternativas: [
      `Solicitar hemograma e sorologias virais.`,
      `Solicitar como primeiro exame a ultrassonografia dos linfonodos.`,
      `Realizar antibiótico empírico.`,
      `Manter conduta expectante pela benignidade dos achados.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "440",
    numero: 40,
    texto: `Joaquim é uma crianca de 8 meses que está com febre há 48 horas. Estd se
alimentando e quando sem febre está ativo e brinca. Não foi solicitado nenhum exame
até o momento. Vai pela segunda vez a Emergéncia pois sua febre chegou a 39,5 C e sua
mãe se assustou. Joaquin recebeu até agora 3 doses de vacina pentavalente, 3 doses de
vacina pólio inativada, 2 doses de vacina Pneumocócica 10valente, 2 doses de Vacina
contra Rotavírus e 2 doses de vacina contra meningite C. Na emergência o
médico solicitou um exame de urina e um hemograma que mostraram o seguinte:`,
    imagens: ["440"],
    subTexto: `Qual a conduta adequada frente a esse caso? `,
    alternativas: [
      `Internar, solicitar culturas e iniciar antibioticoterapia empírica com ceftriaxone.`,
      `Solicitar culturas e liberar com antibioticoterapia empírica com ceftriaxone.`,
      `Solicitar raio X de tórax antes de liberar.`,
      `Liberar com antitérmico e reavaliar a cada 24 horas.`,
    ],
    alternativaCorreta: D,
  },
];
const questoes5: IQuestao[] = [];
const questoes6: IQuestao[] = [
  {
    id: "62",
    numero: 2,
    texto: `Os exames solicitados na primeira consulta de uma gestante de 30 anos e 12
semanas de idade gestacional mostraram VDRL de 1/64 e a gestante foi tratada
adequadamente. O teste não treponêmico realizado nos meses subsequentes
mostrou titulações em queda. Na internação em trabalho de parto com 38
semanas o título do exame foi de 1/8. O recém-nascido apresenta VDRL de 1/8 e
exame físico normal. Segundo o protocolo do Ministério da Saúde de 2020, a
conduta a ser realizada nesta criança é:`,
    alternativas: [
      `Colher hemograma com contagem de plaquetas, líquor e realizar radiografia de ossos longos. O tratamento vai depender do resultado dos exames.`,
      `Colher hemograma com contagem de plaquetas, análise do líquor e realizar radiografia de osso longos. A criança deve receber 1 dose de penicilina benzatina antes da alta.`,
      `Criança exposta a sífilis. Administrar penicilina benzatina IM e acompanhar o recém-nascido com VDRL com 1, 3 e 6 meses.`,
      `Criança exposta à sífilis, mas sem necessidade de tratamento imediato.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "64",
    numero: 4,
    texto: `A puericultura é “a arte de atender uma criança saudável e mantê-la assim”. Analise
as frases abaixo e assinale a alternativa correta.`,
    itens: [
      `A Puericultura preocupa-se também com a prevenção de acidentes domésticos e no trânsito`,
      `Prevenção da doença diarreica embora seja uma ação preventiva não é foco da puericultura`,
      `Orientação sobre vacinação e alimentação fazem parte da consulta de Puericultura somente até os 5 anos de idade`,
      `Na primeira consulta o médico deve avaliar os riscos à saúde da criança. Após isso, independente do risco, a criança deve ser avaliada a cada 6 meses`,
    ],
    alternativas: [
      `Somente as frases II e IV estão incorretas`,
      `Todas as frases estão corretas`,
      `Somente a frase I está correta`,
      `Somente a frase IV está correta`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "66",
    numero: 6,
    texto: `Sobre os primeiros procedimentos realizados no momento do nascimento do bebê,
avalie as assertivas a seguir, atribua a cada uma V ou F, e assinale a alternativa que
apresenta a ordem correta:`,
    alternativaCorreta: B,
    itensVF: [
      `O APGAR, conhecido popularmente como “a nota” do bebê, é um índice atribuído ao recém-nascido (RN) no momento em que nasce e após 5 minutos. Um índice entre 7 e 10 é considerado normal. Já um índice de 0 a 3 relaciona-se a maior mortalidade.`,
      `A administração de vitamina K ao nascimento visa a profilaxia contra a doença hemorrágica neonatal, e deve ser procedida em todos os recém-nascidos, independentemente do peso de nascimento e idade gestacional.`,
      `A vacina BCG deve ser administrada o mais precocemente possível, se possível ao nascimento, e deve ser procedida em todos os recém-nascidos, independentemente do peso de nascimento e idade gestacional.`,
      `A vacina contra Hepatite B deve ser administrada preferencialmente nas primeiras 12 horas ou na primeira visita do RN ao serviço de saúde. Deve ser administrada em todos os RN, independentemente do peso ao nascer e da idade gestacional, mantendo-se o mesmo esquema de doses para crianças prematuras/baixo peso e para crianças a termo/peso adequado.`,
    ],
    alternativas: [
      `V - F - F - V`,
      `V - V - F - V`,
      `F - F - V - V`,
      `V - V - V - V`,
    ],
  },
  {
    id: "611",
    numero: 11,
    texto: `A anemia megaloblástica é uma anemia macrocítica causada por deficiência de
cobalamina (vitamina B12), ácido fólico ou ambos. São considerados fatores de
risco para anemia megaloblástica:`,
    alternativas: [
      `Doença de Crohn, Pancreatite crônica e ingesta de fórmula infantil`,
      `Doença celíaca e uso de fenobarbital`,
      `Síndrome do intestino curto e uso de fórmula de soja`,
      `Aleitamento materno exclusivo e diarreia`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "612",
    numero: 12,
    texto: `Desde a década de 1970, o alojamento conjunto tem sido valorizado e
recomendado no mundo inteiro pelas inúmeras vantagens que oferece para a mãe,
para a criança, para a família e para a própria instituição. São consideradas crianças
elegíveis para permanecer em alojamento conjunto todas as descritas abaixo,
EXCETO:`,
    alternativas: [
      `Recém-nascido com Apgar de primeiro minuto 5 e quinto minuto 8`,
      `Recém-nascido prematuro com 36 semanas de idade gestacional`,
      `Recém-nascidos filhos de mães HIV positivas`,
      `Recém-nascido que teve Apgar de primeiro minuto 4 e de quinto minuto 5`,
    ],
    alternativaCorreta: D,
  },

  {
    id: "623",
    numero: 23,
    texto: `A infecção congênita é quando uma doença é transmitida da mãe para o bebê
durante a gravidez, via intrauterina ou via transplacentária, e pode causar
consequências a criança após o nascimento. Sobre estas infecções, assinale a
alternativa INCORRETA:`,
    alternativas: [
      `RNs nascidos de mães carreadoras do vírus da hepatite B devem fazer esquema profilático que consiste em: imunoglobulina para hepatite B + esquema vacinal de 3 doses (ao nascimento, com 1 mês e com 6 meses de idade). Deve-se realizar anti-HBS após completada a série de 3 doses, para avaliar soroconversão vacinal`,
      `Todas as crianças com toxoplasmose congênita comprovada devem receber tratamento durante 12 meses, que consiste em uma associação de sulfadiazina, pirimetamina e ácido folínico`,
      `O tratamento com ganciclovir em crianças com infecção congênita por citomegalovírus é indicado apenas a casos selecionados: RN com infecção confirmada ou com qualquer sintoma sugestivo de citomegalovirose`,
      `Não há imunoglobulina ou vacina disponíveis para prevenção da transmissão mãe-filho do vírus da hepatite C.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "625",
    numero: 25,
    texto: `O teste do pezinho ou triagem metabólica neonatal detecta várias doenças antes
mesmo do início das manifestações clínicas. Com relação à pesquisa da
imunotripsina reativa (IRT) em recém-nascidos , assinale a alternativa correta:
`,
    alternativas: [
      `É o teste padrão para o diagnóstico de fenilcetonúria, e o resultado deve ser confirmado por outro exame.`,
      `É o teste padrão para o diagnóstico de fibrose cística e não exige qualquer outra confirmação.`,
      `É usada para triagem de fibrose cística, e o resultado deve ser confirmado por outro exame`,
      `Detecta precocemente risco de alterações pulmonares na fibrose cística.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "626",
    numero: 26,
    texto: `Sobre a primeira consulta do recém-nascido (RN), avalie as seguintes afirmações:`,
    itens: [
      `A primeira consulta do RN deve ocorrer no seu primeiro mês de vida, entre 10 e 20 dias de vida, período propício para o estímulo e apoio ao aleitamento materno exclusivo e para intervenções precoces em situações que exijam orientações profissionais.`,
      `No primeiro contato da equipe de saúde com o RN, é essencial avaliar se já foi realizado o teste do pezinho, pois este teste tem um período ideal para ser coletado, que vai até o 30º dia de vida.`,
      `No primeiro exame do RN do sexo masculino, deve-se realizar o exame da genitália com palpação da bolsa escrotal para identificar a presença dos testículos. Quando esses não forem palpados na bolsa escrotal, deve-se tranquilizar os pais e explicar que deve ser acompanhada e reavaliada nas consultas subsequentes, pois, em geral, a descida dos testículos para a bolsa ocorre até o 3º mês de vida.`,
      `A palpação das clavículas para avaliação de fratura é parte indispensável do exame físico na primeira consulta do RN.`,
    ],
    alternativas: [
      `II e III estão corretas`,
      `I, II e IV estão corretas`,
      `I, II e III estão corretas`,
      `III e IV estão corretas.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "629",
    numero: 29,
    texto: `A principal função das hemácias, também conhecidas como eritrócitos, consiste no
transporte de hemoglobina, que, por sua vez, leva oxigênio dos pulmões para os
tecidos. As hemácias iniciam suas vidas, na medula óssea, por meio de tipo único
de célula referido como célula-tronco hematopoética pluripotente, da qual derivam
todas as células do sangue circulante. A massa total de células sanguíneas da
linhagem vermelha no sistema circulatório é regulada dentro de limites estreitos.
Assinale que fatores abaixo podem estimular a produção de mais células
vermellhas:`,
    alternativas: [
      `Trombopoetina e Eritropoetina`,
      `Hipercapnia e acidose respiratória`,
      `Eritropoetina, TSH e FSH`,
      `Hipovolemia e anemia`,
    ],
    alternativaCorreta: D,
  },
];

const questoes7: IQuestao[] = [
  {
    id: "71",
    numero: 1,
    texto: `Durante o nascimento, o bebê vem de um ambiente estéril e entra em contato com
uma variedade de microrganismos que irão colonizar suas superfícies e
desempenhar diversas funções. Em relação a microbiota normal, todas as
alternativas a seguir estão corretas, EXCETO:`,
    alternativas: [
      `Com a dentição, acrescenta-se a esse meio espiroquetas anaeróbias, espécies de Prevotella, espécies de Fusobacterium`,
      `No início da vida, aparecem os estafilococos aeróbios e anaeróbios, os diplococos gram(-), os difteróides e lactobacilos.`,
      `Nem a via de parto nem o ambiente ao qual o bebê é exposto logo após o nascimento interferem no desenvolvimento da microbiota normal, que dependerá exclusivamente da sua fonte alimentar.`,
      `Nas primeiras 4-12h de vida, os Streptococcus viridans colonizam, e se tornam membros importantes da microbiota residente, permanecendo por toda vida.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "72",
    numero: 2,
    texto: `Os exames solicitados na primeira consulta de uma gestante de 30 anos e 12
semanas de idade gestacional mostraram VDRL de 1/64 e a gestante foi tratada
adequadamente. O teste não treponêmico realizado nos meses subsequentes
mostrou titulações em queda. Na internação em trabalho de parto com 38
semanas o título do exame foi de 1/8. O recém-nascido apresenta VDRL de 1/8 e
exame físico normal.  Segundo o protocolo do Ministério da Saúde de 2020, a
conduta a ser realizada nesta criança é:`,
    alternativas: [
      `Colher hemograma com contagem de plaquetas, líquor e realizar radiografia de ossos longos. O tratamento vai depender do resultado dos exames.`,
      `Colher hemograma com contagem de plaquetas, análise do líquor e realizar radiografia de osso longos. A criança deve receber 1 dose de penicilina benzatina antes da alta.`,
      `Criança exposta a sífilis.  Administrar penicilina benzatina IM e acompanhar o recém-nascido com VDRL com 1, 3 e 6 meses.`,
      `Criança exposta à sífilis, mas sem necessidade de tratamento imediato. Deve ser acompanhado com VDRL quantitativo na atenção básica.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "73",
    numero: 3,
    texto: `O hormônio do crescimento, também chamado hormônio somatotrópico
ou somatotropina, provoca o crescimento de quase todos os tecidos do corpo que
são capazes de crescer. Além de seu efeito geral de provocar o crescimento
propriamente dito, o hormônio do crescimento apresenta diversos efeitos
metabólicos específicos, que incluem todos os abaixo, EXCETO:`,
    alternativas: [
      `Redução da utilização da glicose pelo organismo.`,
      `Aumenta a quantidade de proteína do corpo e as reservas de gordura corpo.`,
      `Aumento da síntese de proteínas, na maioria das células do corpo.`,
      `Aumento da mobilização dos ácidos graxos do tecido adiposo, aumento donível de ácidos graxos no sangue e aumento da utilização dos ácidos graxos, como fonte de energia.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "75",
    numero: 5,
    texto: `A puericultura é “a arte de atender uma criança saudável e mantê-la assim”. Analise
as frases abaixo e assinale a alternativa correta.`,
    itens: [
      `A Puericultura preocupa-se também com a prevenção de acidentes domésticos e no trânsito`,
      `Prevenção da doença diarreica embora seja uma ação preventiva não é foco da puericultura`,
      `Orientação sobre vacinação e alimentação fazem parte da consulta de Puericultura somente até os 5 anos de idade`,
      `Na primeira consulta o médico deve avaliar os riscos à saúde da criança. Após
isso, independente do risco, a criança deve ser avaliada a cada 6 meses.`,
    ],
    alternativas: [
      `Somente as frases II e IV estão incorretas`,
      `Todas as frases estão corretas`,
      `Somente a frase I está correta`,
      `Somente a frase IV está correta`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "76",
    numero: 6,
    texto: `Amamentar é muito mais do que nutrir a criança. É um processo que envolve
interação profunda entre mãe e filho, com repercussões no estado nutricional da
criança, em sua habilidade de se defender de infecções, em sua fisiologia e no seu
desenvolvimento cognitivo e emocional. O Ministério da Saúde recomenda que o
aleitamento materno seja realizado da seguinte forma:`,
    alternativas: [
      `Exclusivo até os seis meses de idade e a partir de então complementado com frutas e refeições`,
      `Exclusivo até os três meses de idade, complementado com sucos até os 6 meses e com frutas e refeições a partir dos 6 meses.`,
      `Exclusivo até os quatro meses de idade e a partir de então complementado com frutas e refeições`,
      `Exclusivo até os oito meses de idade e a partir de então complementado com frutas e refeições`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "78",
    numero: 8,
    texto: `Sobre os primeiros procedimentos realizados no momento do nascimento do bebê,
avalie as assertivas a seguir, atribua a cada uma V ou F, e assinale a alternativa que
apresenta a ordem correta:`,
    itensVF: [
      `O APGAR, conhecido popularmente como “a nota” do bebê, é um índice atribuído ao recém-nascido (RN) no momento em que nasce e após 5 minutos. Um índice entre 7 e 10 é considerado normal. Já um índice de 0 a 3 relaciona-se a maior mortalidade.`,
      `A administração de vitamina K ao nascimento visa a profilaxia contra a doença hemorrágica neonatal, e deve ser procedida em todos os recém-nascidos, independentemente do peso de nascimento e idade gestacional.`,
      `A vacina BCG deve ser administrada o mais precocemente possível, se possível ao nascimento, e deve ser procedida em todos os recém-nascidos, independentemente do peso de nascimento e idade gestacional.`,
      `A vacina contra Hepatite B deve ser administrada preferencialmente nas primeiras 12 horas ou na primeira visita do RN ao serviço de saúde. Deve ser administrada em todos os RN, independentemente do peso ao nascer e da idade gestacional, mantendo-se o mesmo esquema de doses para crianças prematuras/baixo peso e para crianças a termo/peso adequado.`,
    ],
    alternativas: [
      `V - F - F - V`,
      `V - V - F - V`,
      `F - F - V - V`,
      `V - V - V - V`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "711",
    numero: 11,
    texto: `Recém-nascido, 25 dias, em aleitamento materno exclusivo é trazido para a
consulta de revisão. O peso ao nascer foi 3200g. A mãe refere que notou os olhos e
a pele do bebê amarelados. Relata fezes líquido-pastosas amareladas 5 vezes ao
dia e urina clara. Exame físico: ativo, levemente ictérico, zona 2, reflexos
adequados, sem hepatoesplenomegalia. O peso atual é de 4100g.  Os exames do
dia da consulta mostram bilirrubina total: 8,5 mg/dL; bilirrubina indireta: 7,2 mg/dL;
hemograma e leucograma normais. Nesse caso, qual sua conduta?`,
    alternativas: [
      `Orientar o início de fórmula infantil pois trata-se de um caso de icterícia do leite materno`,
      `Orientar coleta de novos exames em 24 horas e se os níveis aumentarem deve iniciar fototerapia`,
      `Orientar internação para realização de fototerapia`,
      `Orientar que é normal essa icterícia e não há necessidade de suspender o aleitamento materno`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "712",
    numero: 12,
    texto: `O aleitamento materno é um ato que vai muito além de nutrir a criança: envolve
benefícios para mãe e bebê e o vínculo entre os dois. Assinale a alternativa
incorreta:`,
    alternativas: [
      `O aleitamento materno é recomendado pelo Ministério da Saúde do Brasil e pela OMS por dois anos ou mais, sendo exclusivo nos primeiros seis meses de vida. A introdução de alimentos complementares antes dos seis meses pode, inclusive, causar prejuízos à saúde da criança.`,
      `Estima-se que o aleitamento materno poderia evitar um grande número de óbitos em crianças menores de cinco anos em todo o mundo. O aleitamento materno é o fator isolado que alcança o maior impacto na redução de mortes nesse grupo`,
      `O aleitamento materno protege contra diarreias, infecções respiratórias, alergias, bem como diminui o risco de a criança desenvolver doenças crônicas como hipertensão e diabetes melitus. Tem ainda um efeito positivo sobre o desenvolvimento cognitivo da criança.`,
      `Aleitamento materno exclusivo ocorre quando a criança recebe somente o leite materno, direto da mama ou ordenhado, produzido  somente por sua mãe. Já o aleitamento materno complementado envolve a introdução, além do leite materno, de qualquer alimento sólido ou semissólido com a função de complementá-lo.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "713",
    numero: 13,
    texto: `A anemia megaloblástica é uma anemia macrocítica causada por deficiência de
cobalamina (vitamina B12), ácido fólico ou ambos. São considerados fatores de
risco para anemia megaloblástica: `,
    alternativas: [
      `Doença de Crohn, Pancreatite crônica e ingesta de fórmula infantil`,
      `Doença celíaca e uso de fenobarbital`,
      `Síndrome do intestino curto e uso de fórmula  de soja`,
      `Aleitamento materno exclusivo e diarreia`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "714",
    numero: 14,
    texto: `Desde a década de 1970, o alojamento conjunto tem sido valorizado e
recomendado no mundo inteiro pelas inúmeras vantagens que oferece para a mãe,
para a criança, para a família e para a própria instituição. São consideradas crianças
elegíveis para permanecer em alojamento conjunto todas as descritas abaixo,
EXCETO:`,
    alternativas: [
      `Recém-nascido com Apgar de primeiro minuto 5 e quinto minuto 8`,
      `Recém-nascido prematuro com 36 semanas de idade gestacional`,
      `Recém-nascidos filhos de mães HIV positivas`,
      `Recém-nascido que teve Apgar de primeiro minuto 4 e de quinto minuto 5`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "715",
    numero: 15,
    texto: `Júnior, um bebê de 07 dias de vida atendido pela sua Equipe de Saúde da Família,
chega em seu consultório para a primeira consulta do recém-nascido. Na caderneta
da criança, você lê que Júnior nasceu com idade gestacional = 37 semanas e
pesando 2.400g. A partir desses dados e utilizando o gráfico abaixo, assinale a
alternativa correta.`,
    imagens: ["715"],
    alternativas: [
      `Júnior nasceu pré-termo e apresentou baixo peso ao nascer. Foi classificado como PIG.`,
      `Júnior nasceu pré-termo e apresentou peso adequado ao nascer. Foi classificado como AIG.`,
      `Júnior nasceu a termo e apresentou peso adequado ao nascer. Foi classificado como AIG`,
      `Júnior nasceu a termo e apresentou baixo peso ao nascer. Foi classificado como PIG.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "717",
    numero: 17,
    texto: `Uma gestante soropositiva chega para uma consulta e quer orientações sobre o
parto, aleitamento e seu bebê. Ela está com 36 semanas de idade gestacional e traz
seus exames coletados há 5 dias: VDRL não reagente, Carga viral 2300 cópias/ml.
Faz uso regular de terapia antiretroviral desde o início da gestação. Qual a
orientação com relação a via de parto, aleitamento e medicações para o bebê ao
nascer?`,
    alternativas: [
      `Realizar parto vaginal, utilizar AZT intraparto, manter aleitamento materno e iniciar AZT para o bebê se carga viral acima de 5000 cópias/ml`,
      `Realizar cesárea eletiva com 3 semanas, utilizar AZT durante o cesárea, contra-indicar aleitamento materno e iniciar AZT imediatamente após o nascimento que deverá ser mantido por 4 semanas`,
      `Realizar parto vaginal, utilizar AZT intraparto, contra-indicar aleitamento materno e iniciar AZT 6 horas após o parto que deverá ser mantido por 4 semanas`,
      `Realizar parto vaginal, utilizar AZT intraparto, contra-indicar aleitamento materno e iniciar AZT imediatamente após o parto que deverá ser mantido por 4 semanas associado a 3 doses de nevirapir.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "721",
    numero: 21,
    texto: `A mãe de uma criança de 3 anos refere que, desde o nascimento, a criança
apresenta anemia grave, necessitando de transfusões esporádicas ao longo dos
anos. Refere que a causa dessa anemia nunca foi descoberta. Além disso, não
consegue brincar e fazer exercícios como as outras crianças pois se cansa
rapidamente. Quando fica cansada no repouso, procura assistência médica e
recebe transfusão sanguínea. O hemograma solicitado mostra:`,
    imagens: ["721"],
    subTexto: `Quais dos exames abaixo solicitados você julga necessários nesse caso?`,
    alternativas: [
      `Ferritina e dosagem de vitamina B12`,
      `Ferritina e saturação de transferrina`,
      `Eletroforese de hemoglobina e dosagem de vitamina b12`,
      `Dosagem de Reticulócitos e eletroforese de hemoglobina`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "722",
    numero: 22,
    texto: `Quando  estamos diante de um caso de um recém-nascido com quadro de
desconforto respiratório, várias suspeitas pairam no ar. Desde distúrbios
respiratórios isolados até infecções podem determinar aumento da frequência
respiratória de um bebê. Assinale abaixo um importante dado que poderia ajudar a
diferenciar uma taquipneia de causa  estritamente respiratória e mecânica de uma
taquipneia causada por sepse neonatal em um bebê com 6 horas de vida.`,
    alternativas: [
      `Presença de febre`,
      `Presença de tiragens intercostais`,
      `Presença de gemência`,
      `Hemograma com linfocitose`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "724",
    numero: 24,
    texto: `Analise o hemograma abaixo e assinale a alternativa correta em relação a ele`,
    imagens: ["724"],
    alternativas: [
      `Anemia microcítica, hipocrômica. A causa provável é a deficiência de ferro`,
      `Anemia macrocítica, hipocrômica. A causa provável é deficiência de vitamina B12`,
      `Anemia macrocítica, normocrômica. A causa provável é deficiência de vitamina B12`,
      `Anemia microcítica, normocrômica. A causa provável é deficiência de ácido fólico`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "725",
    numero: 25,
    texto: `Observe as 2 figuras e assinale a alternativa correta com relação á cicatrização das
mesmas.`,
    imagens: ["725a", "725b"],
    alternativas: [
      `A figura 2 mostra um ferimento candidato à cicatrização por primeira intenção`,
      `A figura 1 mostra um exemplo de ferimento que deve cicatrizar por segunda intenção`,
      `A figura 1 mostra um exemplo de ferimento no qual pode ocorrer a cicatrização por primeira intenção.`,
      `A figura 2 mostra um exemplo de ferimento que deve cicatrizar por terceira intenção`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "726",
    numero: 26,
    texto: `Analise as frases sobre  alimentação infantil e assinale abaixo a alternativa
correta.r: `,
    itens: [
      `Estudos mostram que a alimentação infantil é importante na prevenção de doenças da infância, não tendo relação com a saúde futura.`,
      `Na introdução alimentar o uso do mel é proibido antes de 1 ano pelo risco de botulismo, mas deve ser evitado até os 2 anos em função de conter basicamente açúcar em sua composição.`,
      `Alimentos alergênicos como ovo, peixes e leite devem ser introduzidos somente após os 9 meses de vida.`,
      `O almoço do bebê de 6 meses deve conter fonte de proteína (animal ou vegetal), carboidratos (batata, aipim) e legumes.`,
      `Na impossibilidade de manter o aleitamento materno exclusivo, a primeira opção é oferecer leite de vaca.`,
    ],
    alternativas: [
      `As alternativas I e V estão corretas`,
      `As alternativas II e IV estão corretas`,
      `As alternativas I e III estão corretas`,
      `As alternativas IV e V estão corretas`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "727",
    numero: 27,
    texto: `Dois irmãos adolescentes o procuram para saber por que a altura entre eles é
muito diferente. A menina (F), de 18 anos, menarca há 5 anos, já parou de crescer
há 2 anos e está com 162cm; o menino (M), de 20 anos, também parou de crescer
há 2 anos e está com 175cm. A mãe deles tem 157cm, e o pai 180cm. Assinale a
alternativa correta:`,
    alternativas: [
      `Não era esperada diferença tão grande entre as alturas finais dos 2irmãos.`,
      `As alturas de M e F foram as esperadas, de acordo com a altura dos pais.`,
      `A altura de F foi acima da esperada para a altura dos pais.`,
      `A altura de M foi abaixo da esperada pata a altura dos pais.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "728",
    numero: 28,
    texto: `Clara tem 6 meses e vai iniciar a introdução alimentar. Está em aleitamento
materno exclusivo e vai à consulta para uma avaliação. Assinale a alternativa
correta com relação às orientações após a consulta:`,
    alternativas: [
      `A introdução alimentar deve ser orientada de maneira adequada e deve ser prescrita a suplementação de ferro e vitamina A, administrados diariamente.`,
      `A introdução alimentar deve ser orientada junto com a manutenção do aleitamento materno e Clara deve receber suplementação de ferro diariamente.`,
      `Clara deve iniciar a introdução alimentar porém a mãe deve ser orientada a não oferecer ovo antes dos 10 meses de idade`,
      `A mãe deve reduzir o número de mamadas para o início da introdução alimentar, oferecer fórmula infantil 1 vez ao dia e iniciar suplementação de ferro.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "730",
    numero: 30,
    texto: `A infecção congênita é quando uma doença é transmitida da mãe para o bebê
durante a gravidez, via intrauterina ou via transplacentária, e pode causar
consequências a criança após o nascimento. Sobre estas infecções,  assinale a
alternativa incorreta:`,
    alternativas: [
      `RNs nascidos de mães carreadoras do vírus da hepatite B devem fazer esquema profilático que consiste em: imunoglobulina para hepatite B + esquema vacinal de 3 doses (ao nascimento, com 1 mês e com 6 meses de idade). Deve-se realizar anti-HBS após completada a série de 3 doses, para avaliar soroconversão vacinal`,
      `Todas as crianças com toxoplasmose congênita comprovada devem receber tratamento durante 12 meses, que consiste em uma associação de sulfadiazina, pirimetamina e ácido folínico`,
      `O tratamento com ganciclovir em crianças com infecção congênita por citomegalovírus é indicado apenas a casos selecionados: RN com infecção confirmada ou com qualquer sintoma sugestivo de citomegalovirose`,
      `Não há imunoglobulina ou vacina disponíveis para prevenção da transmissão mãe-filho do vírus da hepatite C.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "732",
    numero: 32,
    texto: `O teste do pezinho ou triagem metabólica neonatal detecta várias doenças antes
mesmo do início das manifestações clínicas. Com relação à pesquisa da
imunotripsina reativa (IRT) em recém-nascidos ,  assinale a alternativa correta: `,
    alternativas: [
      `É o teste padrão para o diagnóstico de fenilcetonúria, e o resultado deve ser confirmado por outro exame.`,
      `É o teste padrão para o diagnóstico de fibrose cística e não exige qualquer outra confirmação.`,
      `É usada para triagem de fibrose cística, e o resultado deve ser confirmado por outro  exame`,
      `Detecta precocemente risco de alterações pulmonares na fibrose cística.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "733",
    numero: 33,
    texto: `Sobre a primeira consulta do recém-nascido (RN), avalie as seguintes afirmações:`,
    itens: [
      `A primeira consulta do RN deve ocorrer no seu primeiro mês de vida, entre 10 e 20 dias de vida, período propício para o estímulo e apoio ao aleitamento materno exclusivo e para intervenções precoces em situações que exijam orientações profissionais.`,
      `No primeiro contato da equipe de saúde com o RN, é essencial avaliar se já foi realizado o teste do pezinho, pois este teste tem um período ideal para ser coletado, que vai até o 30º dia de vida.`,
      `No primeiro exame do RN do sexo masculino, deve-se realizar o exame da genitália com palpação da bolsa escrotal para identificar a presença dos testículos. Quando esses não forem palpados na bolsa escrotal, deve-se tranquilizar os pais e explicar que deve ser acompanhada e reavaliada nas consultas subsequentes, pois, em geral, a descida dos testículos para a bolsa ocorre até o 3º mês de vida.`,
      `A palpação das clavículas para avaliação de fratura é parte indispensável do exame físico na primeira consulta do RN.`,
    ],
    alternativas: [
      `II e III estão corretas`,
      `I, II e IV estão corretas`,
      `I, II e III estão corretas`,
      `III e IV estão corretas.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "735",
    numero: 35,
    texto: `Criança de 2 anos é trazida ao atendimento de puericultura com a queixa de atraso
na fala. Fez o teste da orelhinha ao nascer e repetiu com 1 ano de idade tendo
resultado normal nas duas ocasiões. O menino fala poucas palavras que também
são de difícil compreensão, não frequenta escola, tem bruxismo acentuado e seu
brinquedo predileto é o iPad da mãe. No exame físico seu crescimento está
adequado porém apresenta-se muito irritado ao exame e não estabelece contato
com o examinador sendo difícil avaliar o seu desenvolvimento. Baseado nos dados
apresentados, a sua hipótese diagnóstica é:`,
    alternativas: [
      `Transtorno do Espectro Autista.`,
      `Surdez neurosensorial.`,
      `Distúrbio do desenvolvimento da linguagem.`,
      `Transtorno Opositor Desafiante.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "736",
    numero: 36,
    texto: `Há situações que são frequentemente associadas à obesidade no desenvolvimento
da criança. Considerando essa afirmativa, marque a alternativa correta.`,
    alternativas: [
      `A obesidade da mãe, mesmo antes da gestação, correlaciona-se ao índice de massa corpórea da criança, na idade de 5 a 20 anos.`,
      `Estudos demonstram a relação negativa entre o desenvolvimento de obesidade na vida adulta e o baixo peso ao nascer.`,
      `A obesidade está associada de forma relevante à inatividade física, que pode ser indiretamente avaliada pelo número de horas assistindo televisão.`,
      `Entre os fatores de proteção contra o aparecimento da obesidade em crianças, o aleitamento materno é irrelevante.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "737",
    numero: 37,
    texto: `Sobre os reflexos primitivo, qual a alternativa CORRETA`,
    alternativas: [
      `O reflexo cutâneo plantar, quando presente, não é considerado normal quando visto em um lactente de 4 meses`,
      `O reflexo de moro é considerado fisiológico até cerca de 4 meses de idade.`,
      `A marcha reflexa pode ser vista em crianças de até 12 meses de idade`,
      `Os reflexos de voracidade e a postura tônico assimétrica podem se estender até os 6 meses de idade.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "738",
    numero: 38,
    texto: `A principal função das hemácias, também conhecidas como eritrócitos, consiste no
transporte de hemoglobina, que, por sua vez, leva oxigênio dos pulmões para os
tecidos. As hemácias iniciam suas vidas, na medula óssea, por meio de tipo único
de célula referido como célula-tronco hematopoética pluripotente, da qual derivam
todas as células do sangue circulante. A massa total de células sanguíneas da
linhagem vermelha no sistema circulatório é regulada dentro de limites estreitos.
Assinale que fatores abaixo podem estimular a produção de mais células
vermellhas:`,
    alternativas: [
      `Trombopoetina e Eritropoetina`,
      `Hipercapnia e acidose respiratória`,
      `Eritropoetina, TSH e FSH`,
      `Hipovolemia e anemia`,
    ],
    alternativaCorreta: D,
  },
];
const questoes8: IQuestao[] = [
  {
    id: "83",
    numero: 3,
    texto: `Você está no posto de saúde avaliando uma criança de 25 dias que segundo a mãe está mamando
bem e evacuando normalmente, porém está há 12 horas com febre de 38,8º C. Nasceu a termo
pesando 2980g e atualmente peso 3240g. Na avaliação o bebê aparenta estar bem. Qual sua
conduta? Escolha uma opção:`,
    alternativas: [
      `Solicitar hemograma e parcial de urina.`,
      `Encaminhar para internação.`,
      `Não solicitar exames e pedir para a mãe retornar em 24 horas para reavaliação.`,
      `Solicitar hemograma e iniciar antibioticoterapia empírica.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "85",
    numero: 5,
    texto: `João tem 2 meses e recebeu suas vacinas do PNI: pentavalente, pólio inativada, pneumocócica 10
valente e rotavírus. Após 4 horas da aplicação João apresenta quadro de febre alta seguida de
hipotonia muscular e aspecto de desmaio. Sua mãe o leva à UBS e você o está atendendo. A
temperatura é de 38,3 graus, no momento ele está pálido, mas está ativo e mamando no seio
materno. Qual sua conduta? Escolha uma opção: `,
    alternativas: [
      `Medicar para febre com dipirona e manter em observação até que a temperatura baixe.`,
      `Medicar para febre com paracetamol, manter em observação até que a temperatura baixe e solicitar à UBS que seja providenciada para João a vacina tríplice acelular.`,
      `Medicar para febre com ibuprofeno, manter em observação até que a temperatura baixe e solicitar à UBS que seja providenciada para João a vacina tríplice acelular.`,
      `Solicitar hemograma, Raio X de tórax e parcial de urina.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "87",
    numero: 7,
    texto: `Em relação as recomendações atuais de imunizações no Brasil listadas abaixo, assinale a alternativa
INCORRETA. Escolha uma opção: `,
    alternativas: [
      `A vacina contra hepatite B deve ser aplicada nas primeiras 12 horas de vida. Crianças prematuras (menos de 37 semanas) devem receber 4 doses.`,
      `A segunda dose da vacina BCG deve obedecer calendário nacional único e ser aplicada com dois anos de idade.`,
      `São exemplos de vacinas combinadas a DTP e Tríplice viral.`,
      `A vacina DTP (células inteiras) é eficaz e bem tolerada. Quando possível, aplicar a DTPa (acelular) devido à sua menor reatogenicidade.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "88",
    numero: 8,
    texto: `Diversas situações clínicas exigem o uso de imunizações passivas e ativas. No que se refere a este
tema, bem como à diferenciação de soros e imunoglobulinas, assinale a alternativa correta: Escolha
uma opção: `,
    alternativas: [
      `A administração de imunoglobulinas e soros caracteriza a imunização ativa, por meio da qual o organismo humano recebe anticorpos pré-formados.`,
      `Um exemplo de imunidade ativa é a transferência de anticorpos maternos através da placenta para o feto, o que permite aos recém-nascidos o combate a infecções antes de eles próprios desenvolverem a habilidade de produzir anticorpos.`,
      `Os soros heterólogos são assim denominados porque os anticorpos são obtidos a partir do plasma de doador (principalmente bovinos) de espécie diferente daquela do receptor (homem). Tal forma de imunização é chamada passiva natural.`,
      `Vacinas são formas de imunização ativa artificiais, porém alguns indivíduos podem não responder a determinadas vacinas, presumivelmente porque as moléculas do HLA não são capazes de se ligar e apresentar os peptídeos mais importantes do antígeno.`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "810",
    numero: 10,
    texto: `Um adolescente comparece ao seu consultório com a queixa de aumento de volume no pescoço. Ao
examiná-lo você identifica também o aparecimento de linfonodomegalias suboccipitais e pós
auriculares. Sem história de febre ou qualquer outro sintoma, a sua conduta é apenas expectante. No
entanto, uma semana após, o paciente retorna devido ao aparecimento de um rash cutâneo pouco
pruriginoso, não descamativo e que inicialmente surgiu na face e depois disseminou-se pelo restante
do corpo. Refere também dor articular. O diagnóstico mais provável é: Escolha uma opção: `,
    alternativas: [`Exantema súbito`, `Rubéola`, `Sarampo`, `Escarlatina`],
    alternativaCorreta: B,
  },
  {
    id: "812",
    numero: 12,
    texto: `Considerando as vantagens e desvantagens das vacinas Sabin (Vacina oral contra poliomielite) e
Salk (Vacina inativada contra poliomielite), numere a coluna abaixo (características) de acordo com
sua correspondência da vacina, sendo (1) Vacina Oral contra Poliomielite e (2) Vacina inativada
contra a Poliomielite e assinale a alternativa que apresenta a sequência correta da coluna, de cima
para baixo.`,
    itensVF: [
      `Pode ser administrada em imunossuprimidos.`,
      `Risco de ocorrência de paralisia associada à vacina.`,
      `Utilizada em controle de epidemias.`,
      `Não promove imunização secundária de contatos.`,
      `Induz produção de anticorpos da classe IgA em mucosa gastrintestinal `,
      `Induz imunidadehumoral.`,
    ],
    alternativas: [`2-1-1-2-1-2`, `2-1-2-2-2-1`, `2-2-1-1-1-2`, `2-1-1-2-2-2`],
    alternativaCorreta: A,
  },
  {
    id: "813",
    numero: 13,
    texto: `Sabendo das várias estratégias de vacinação, assinale abaixo qual a estratégia utilizada em cada uma
das situações abaixo listadas utilizando a seguinte legenda e assinalando a sequência correta abaixo.
1- a vacinação de rotina realizada no serviço de saúde; 2-campanhas de vacinação; 3- vacinação de
bloqueio; 4-  atividades de vacinação extramuros. `,
    itensVF: [
      `Criança de 7 dias recebe as vacinas BCG e hepatite B`,
      `Criança é vacinada contra poliomielite na escola`,
      `Criança é levada pelos pais para receber dose de vacina contra poliomielite no Posto de Saúde no Dia D de vacinação`,
      `Criança recebe vacina de varicela após contato com pessoa infectada por varicela `,
    ],
    alternativas: [`1-4-2-3`, `4-1-2-3`, `1-4-3-2`, `2-4-1-3`],
    alternativaCorreta: A,
  },
  {
    id: "814",
    numero: 14,
    texto: `O Programa Nacional de Imunizações (PNI) foi criado em 1973, com o objetivo de promover o
controle das principais doenças infectocontagiosas da época: sarampo, poliomielite, tuberculose,
tétano, difteria e coqueluche. Assinale a alternativa CORRETA  em relação ao PNI Escolha uma
opção: `,
    alternativas: [
      `É de sua responsabilidade elaborar normas e procedimentos para aquisição, armazenamento e distribuição dos imunobiológicos nos níveis nacional, estadual e municipal, atuando de acordo com o modelo descentralizado de gestão do SUS, em parceria com os estados e municípios.`,
      `De acordo com as recomendações da Organização Mundial da Saúde (OMS), os calendários de vacinação devem obedecer a padrões internacionais, sem variações regionais.`,
      `O município e a sala de vacina são os principais responsáveis por assegurar a qualidade e o quantitativo das vacinas necessários para o cumprimento do calendário de vacinação.`,
      `As ações de vacinação desenvolvidas pelo PNI são estabelecidas com base em critérios para o alcance de coberturas vacinais em torno de 75% em todos os municípios brasileiros.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "815",
    numero: 15,
    texto: `Qual das seguintes vacinas não podem ser administradas num mesmo dia? Escolha uma opção:`,
    alternativas: [
      `Febre amarela e tríplice viral`,
      `Pólio oral e pentavalente`,
      `Pólio inativada e pentavalente`,
      `Tríplice viral e pentavalente`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "816",
    numero: 16,
    texto: `As vacinas podem produzir efeitos adversos e dentre as afirmações abaixo, a única que se apresenta
correta é: Escolha uma opção:`,
    alternativas: [
      `A vacina DPT (difteria, pertussis e tétano) pode provocar a síndrome hipotônica-hiporresponsiva.`,
      `A vacina contra febre amarela pode ser aplicada em gestantes, pois é composta por vírus inativados.`,
      `A vacina de pólio oral (VPO) está sendo substituída pela vacina injetável (VPI), pelo risco de convulsão.`,
      `Na vacinação com BCG, está indicado o uso da isoniazida na presença de linfonodo axilar de 2cm de diâmetro.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "818",
    numero: 18,
    texto: `Sobre a vacina contra o HPV, analise as frases abaixo e assinale a alternativa correta `,
    itens: [
      `A vacina contra o HPV é aplicada aos 9 anos na menina e aos 11 anos no menino, com reforço após 6 meses. A vacina que deve ser aplicada é a bivalente`,
      `A vacina quadrivalente recombinante, contra os tipos 6, 11, 16 e 18, está disponível nas redes pública e particular`,
      `Por tratar-se de vacina de vírus inativado, pode ser aplicada em gestantes com segurança`,
    ],
    alternativas: [
      `Apenas a afirmativa II está correta`,
      `Apenas a afirmativa I está correta`,
      `As afirmativas II e III estão corretas`,
      `As afirmativas I e II estão corretas`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "819",
    numero: 19,
    texto: `A coqueluche é uma doença infecciosa, transmissível, que compromete o aparelho respiratório,
causada pela bactéria Bordetella pertussis e é transmitida através de contato direto com indivíduos
sintomáticos, por meio de secreções do trato respiratório. Sobre a coqueluche, analise as frases
abaixo e assinale a alternativa correta`,
    itens: [
      `Após 7 a 10 dias de incubação, a coqueluche se apresenta em fases distintas:  fase catarral, com
duração de uma a duas semanas; fase paroxística, com duração de duas a seis semanas e fase
convalescência, com duração de seis semanas a três meses.`,
      `O tratamento da coqueluche deve ser realizado com antibióticos em qualquer fase de
diagnóstico, pois mesmo na fase paroxística pode determinar diminuição da gravidade dos
sintomas, embora não erradique a Bordetella pertussis da orofaringe.`,
      `São complicações comuns a broncopneumonia e o pneumotórax, principalmente em menores
de 6 meses.`,
      `Menores de 6 meses somente são mais acometidos se não receberam a primeira dose da vacina
tríplice bacteriana, pois após esta dose já produzem quantidade suficiente de anticorpos contra a
coqueluche.`,
    ],
    alternativas: [
      `As alternativas I e IV estão corretas`,
      `As alternativas II e IV estão corretas`,
      `As alternativas I e II estão incorretas`,
      `As alternativas I e III estão corretas`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "820",
    numero: 20,
    texto: `O médico atendeu Lorenzo, de 4 anos, cuja queixa principal da mãe é febre. Ela refere que, há 20
horas, a criança vem apresentando febre persistente (temperatura aferida máxima de 39,2ºC). Refere
ainda inapetência, mas que, nos poucos momentos em que a febre cessa, a criança se anima e
brinca. Nega vômitos. Nega tosse. Eliminações normais. Nega contato com doenças febris. No
exame físico, o médico observa bom estado geral e o único dado alterado é a febre de 39ºC. A
melhor conduta, nesse caso, será: Escolha uma opção: `,
    alternativas: [
      `Manter observação por mais 24 horas, pois o estado geral da criança é bom, e orientar retorno após este período se o quadro persistir.`,
      `Realizar exames e iniciar antibioticoterapia até que se possa receber os resultados, pois, além da febre persistente, há inapetência, o que sugere quadro bacteriano.`,
      `Orientar e solicitar retorno se a febre não cessar dentro de sete dias, pois, nessa faixa etária, a maioria das infecções é viral.`,
      `Solicitar hemograma, proteína C-reativa, parcial de urina, urocultura e radiografia de tórax, pois a febre está alta e persistente, o que indica imediata investigação.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "821",
    numero: 21,
    texto: `A lesão a seguir está presente numa criança de 4 anos. Não há relato de nenhum sintoma associado.
os familiares, todos adultos, não apresentam lesão semelhante. Com relação à lesão apresentada,
assinale a alternativa correta. `,
    imagens: ["821"],
    subTexto: "Escolha uma opção:",
    alternativas: [
      `As lesões apresentadas não ultrapassam alguns milímetros.`,
      `É frequente o acometimento de pacientes com comprometimento da imunidade humoral.`,
      `Piscinas são um importante meio de aquisição desta infecção.`,
      `Dificilmente se observa regressão espontânea.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "822",
    numero: 22,
    texto: `Exantemas são caracterizados por eritema agudo, rapidamente progressivo, em geral de curta
duração. São comuns na infância e sua etiologia pode ser: infecciosa (viral ou bacteriana), por
hipersensibilidade a medicamentos (farmacodermias) ou indeterminada. Analise as frases abaixo e
assinale a alternativa correta.`,
    itens: [
      `O exantema do sarampo caracteriza-se por ser papulovesicular e que se inicia na testa e região retroauricular, frequentemente pruriginoso.`,
      `Na rubéola usualmente febre e exantema aparecem juntos e costuma determinar artralgia principalmente em adolescentes.`,
      `O exantema súbito acomete crianças de 1 a 3 anos e tem como principal característica o exantema palmo-plantar que determina descamação no final da doença.`,
      `São sinais patognomônicos da escarlatina Sinal de Pastia, língua em framboesa e manchas de Nagayama.`,
      `Embora benigno, o eritema infeccioso pode determinar aplasia medular em mulheres jovens e seu exantema pode reaparecer após passado o período agudo da doença.`,
    ],
    alternativas: [
      `As alternativas III e IV estão corretas`,
      `As alternativas II e V estão corretas`,
      `As alternativas III e V estão incorretas`,
      `As alternativas I e II estão corretas`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "824",
    numero: 24,
    texto: `Uma menina de 18 meses de idade apresenta febre há três dias, com poucos pródromos de infecção
respiratória aguda, apresenta erupção maculopapular que cursa por dois dias. Foi relatado pela mãe
da paciente que “no dia em que apareceu as manchas na pele, a febre desapareceu”. Evolutivamente
não houve piora do estado geral da criança. Este é um relato comum em uma das doenças
exantemáticas citadas nas alternativas. Qual seu agente etiológico? Escolha uma opção: `,
    alternativas: [
      `Mononucleose infecciosa – Epstein-Barr Vírus`,
      `Exantema súbito – Herpes vírus 6`,
      `Escarlatina – Streptococcus pyogenes`,
      `Eritema infeccioso – parvovirus B19`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "825",
    numero: 25,
    texto: `Considerando as doenças de infância da primeira coluna, correlacione com os agentes etiológicos
segunda coluna. Assinale a alternativa que contém a sequência correta da correlação Primeira
coluna: `,
    itens: [
      `Sarampo`,
      `Escarlatina`,
      `Eritema Infeccioso`,
      `Exantema Súbito`,
      `Síndrome mão-pé-boca`,
    ],
    itensVF: [
      `Coxsakie vírus`,
      `Parvovírus humano B19`,
      `Estreptococo`,
      `Paramixovírus`,
      `Herpes vírus humano 6`,
    ],
    alternativas: [
      `IV, III, I, II, V`,
      `V, III, II, I, IV`,
      `III, IV, II, I, V`,
      `V, IV, III, I, II`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "826",
    numero: 26,
    texto: `O hormônio do crescimento, também chamado hormônio somatotrópico ou somatotropina, provoca
o crescimento de quase todos os tecidos do corpo que são capazes de crescer. Além de seu efeito
geral de provocar o crescimento propriamente dito, o hormônio do crescimento apresenta diversos
efeitos metabólicos específicos, que incluem todos os abaixo, EXCETO: Escolha uma opção:`,
    alternativas: [
      `Redução da utilização da glicose pelo organismo`,
      `Aumenta a quantidade de proteína do corpo e as reservas de gordura corpo`,
      `Aumento da síntese de proteínas, na maioria das células do corpo`,
      `Aumento da mobilização dos ácidos graxos do tecido adiposo, aumento do nível de ácidos graxos no sangue e aumento da utilização dos ácidos graxos como fonte de energia`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "827",
    numero: 27,
    texto: `A puericultura é “a arte de atender uma criança saudável e mantê-la assim”. Analise as frases abaixo
e assinale a alternativa correta. `,
    itens: [
      `A Puericultura preocupa-se também com a prevenção de acidentes domésticos e no trânsito`,
      `Prevenção da doença diarreica embora seja uma ação preventiva não é foco da puericultura`,
      `Orientação sobre vacinação e alimentação fazem parte da consulta de Puericultura somente até os 5 anos de idade`,
      `Na primeira consulta o médico deve avaliar os riscos à saúde da criança. Após isso, independente do risco, a criança deve ser avaliada a cada 6 meses`,
    ],
    alternativas: [
      `Somente as frases II e IV estão incorretas`,
      `Todas as frases estão corretas`,
      `Somente a frase I está correta`,
      `Somente a frase IV está correta`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "828",
    numero: 28,
    texto: `Cláudio tem 11 anos e 6 meses e seus pais estão preocupados pois ele parece estar muito baixinho.
Você o coloca no gráfico e calcula o alvo parental (observe o gráfico) e solicita um Raio X de
punhos para avaliar Idade óssea. O laudo mostra a idade óssea de 10 anos e 3 meses. Assinale
abaixo o que explicar aos pais. `,
    imagens: ["828"],
    subTexto: "Escolha uma opção:",
    alternativas: [
      `A altura atual está abaixo do alvo parental mas a idade óssea está dentro do alvo parental, o que indica que Cláudio não tem déficit de crescimento, mas deve manter acompanhamento.`,
      `A altura atual está abaixo do alvo parental e a idade óssea também, o que indica provável déficit de crescimento. Deve ser encaminhado ao endocrinologista imediatamente.`,
      `A altura atual e a idade óssea estão dentro do alvo parental o que indica que Cláudio não tem déficit de crescimento.`,
      `A altura atual está dentro do alvo parental mas como a idade óssea está abaixo da cronológica deve-se investigar deficiência de Hormônio de Crescimento e encaminhar ao endocrinologista.`,
    ],
    alternativaCorreta: A,
  },
  {
    id: "829",
    numero: 29,
    imagens: ["829"],
    texto: `Analise o gráfico de Joice, atualmente com 2 anos e 10 meses. Seus diagnósticos nutricionais ao
nascer, aos 6 meses, aos 21 meses e com a idade atual são respectivamente: Escolha uma opção:`,
    alternativas: [
      `Peso adequado ao nascer, eutrofia, eutrofia e magreza`,
      `Peso adequado ao nascer, eutrofia, eutrofia e muito baixo peso para idade`,
      `Peso adequado ao nascer, peso adequado para idade, peso adequado para idade e magreza`,
      `Peso adequado ao nascer, peso adequado para idade, peso adequado para idade e baixo peso para idade`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "830",
    numero: 30,
    texto: `Analise as frases abaixo e assinale a opção que classifica adequadamente as alternativas:`,
    itens: [
      `O leite de vaca tem baixa biodisponibilidade de ferro.`,
      `Aos 6 meses o bebê possui maturidade neurológica para iniciar o processo de mastigação e maior facilidade de deglutição, devido à redução do reflexo de protrusão da língua.`,
      `A alimentação complementar deve ser iniciada aos 6 meses se o bebê estiver em aleitamento materno e aos 4 meses se o bebê estiver em uso de fórmula infantil.`,
      `Três ações são consideradas essenciais para a saúde das crianças: estimular o aleitamento materno, introduzir adequadamente a alimentação complementar e monitorar o crescimento e desenvolvimento.`,
      `A água deve ser oferecida a partir dos 4 meses de vida, principalmente se a criança em aleitamento morar em lugares com ar muito seco.`,
    ],
    alternativas: [
      `As alternativas II e  V estão corretas`,
      `Apenas a alternativa I está correta`,
      `As alternativas I, III e  V estão corretas`,
      `As alternativas I, II e  IV estão corretas`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "831",
    numero: 31,
    texto: `Analise o gráfico a seguir e assinale o diagnóstico nutricional nas idades de 2, 3 e 5 anos
respectivamente. Escolha uma opção: `,
    imagens: ["831"],
    alternativas: [
      `Risco de sobrepeso, obesidade e eutrofia`,
      `Sobrepeso, obesidade e risco de sobrepeso`,
      `Obesidade, obesidade e eutrofia`,
      `Risco de sobrepeso, sobrepeso e eutrofia`,
    ],
    alternativaCorreta: D,
  },
  {
    id: "832",
    numero: 32,
    texto: `Analise as frases sobre alimentação infantil e assinale abaixo a alternativa correta`,
    itens: [
      `Estudos mostram que a alimentação infantil é importante na prevenção de doenças da infância, não tendo relação com a saúde futura. `,
      `Na introdução alimentar o uso do mel é proibido antes de 1 ano pelo risco de botulismo, mas deve ser evitado até os 2 anos em função de conter basicamente açúcar em sua composição.`,
      `Alimentos alergênicos como ovo, peixes e leite devem ser introduzidos somente após os 9 meses de vida.`,
      `O almoço do bebê de 6 meses deve conter fonte de proteína (animal ou vegetal), carboidratos (batata, aipim) e legumes.`,
      `Na impossibilidade de manter o aleitamento materno exclusivo, a primeira opção é oferecer leite de vaca. `,
    ],
    alternativas: [
      `As alternativas I e V estão corretas`,
      `As alternativas II e IV estão corretas`,
      `As alternativas I e III estão corretas`,
      `As alternativas IV e V estão corretas`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "833",
    numero: 33,
    texto: `Dois irmãos adolescentes o procuram para saber por que a altura entre eles é muito diferente. A
menina (F), de 18 anos, menarca há 5 anos, já parou de crescer há 2 anos e está com 162cm; o
menino (M), de 20 anos, também parou de crescer há 2 anos e está com 175cm. A mãe deles tem
157cm, e o pai 180cm. Assinale a alternativa correta: Escolha uma opção: `,
    alternativas: [
      `Não era esperada diferença tão grande entre as alturas finais dos 2 irmãos.`,
      `As alturas de M e F foram as esperadas, de acordo com a altura dos pais.`,
      `A altura de F foi acima da esperada para a altura dos pais.`,
      `A altura de M foi abaixo da esperada pata a altura dos pais.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "834",
    numero: 34,
    texto: `Clara tem 6 meses e vai iniciar a introdução alimentar. Está em aleitamento materno exclusivo e vai
à consulta para uma avaliação. Assinale a alternativa correta com relação às orientações após a
consulta: Escolha uma opção:`,
    alternativas: [
      `A introdução alimentar deve ser orientada de maneira adequada e deve ser prescrita a suplementação de ferro e vitamina A, administrados diariamente.`,
      `A introdução alimentar deve ser orientada junto com a manutenção do aleitamento materno e Clara deve receber suplementação de ferro diariamente.`,
      `Clara deve iniciar a introdução alimentar porém a mãe deve ser orientada a não oferecer ovo antes dos 10 meses de idade`,
      `A mãe deve reduzir o número de mamadas para o início da introdução alimentar, oferecer fórmula infantil 1 vez ao dia e iniciar suplementação de ferro.`,
    ],
    alternativaCorreta: B,
  },
  {
    id: "835",
    numero: 35,
    texto: `Há situações que são frequentemente associadas à obesidade no desenvolvimento da criança.
Considerando essa afirmativa, marque a alternativa correta. Escolha uma opção: `,
    alternativas: [
      `A obesidade da mãe, mesmo antes da gestação, correlaciona-se ao índice de massa corpórea da criança, na idade de 5 a 20 anos.`,
      `Estudos demonstram a relação negativa entre o desenvolvimento de obesidade na vida adulta e o baixo peso ao nascer.`,
      `A obesidade está associada de forma relevante à inatividade física, que pode ser indiretamente avaliada pelo número de horas assistindo televisão.`,
      `Entre os fatores de proteção contra o aparecimento da obesidade em crianças, o aleitamento materno é irrelevante.`,
    ],
    alternativaCorreta: C,
  },
  {
    id: "836",
    numero: 36,
    texto: `João tem 12 anos e foi fazer uma consulta de rotina no posto de saúde. Não tinha nenhuma queixa.
Ao realizar a antropometria o médico aferiu estatura de 145cm e calculou o IMC- 22kg/cm2.
Utilizando os gráficos, qual o estado nutricional de João? `,
    imagens: ["836"],
    alternativas: [
      `Estatura elevada para idade e obesidade`,
      `Estatura adequada para idade e sobrepeso`,
      `Baixa estatura para a idade e sobrepeso`,
      `Estatura adequada para a idade e peso adequado para idade `,
    ],
    alternativaCorreta: B,
  },
];
