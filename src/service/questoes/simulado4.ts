import { IQuestao } from "../../interfaces";
import { A, B, C, D } from "../../interfaces";

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

export default questoes4;
