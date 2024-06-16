import { IQuestao } from "../../interfaces";
import { A, B, C, D } from "../../interfaces";

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

export default questoes1;
