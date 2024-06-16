import { IQuestao } from "../../interfaces";
import { A, B, C, D } from "../../interfaces";

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

export default questoes8;
