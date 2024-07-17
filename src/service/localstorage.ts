import { IQuestao, IResposta, ISimulado, ITentativa } from "../interfaces";
import questoes1 from "./questoes/simulado1";
import questoes10 from "./questoes/simulado10";
import questoes2 from "./questoes/simulado2";
import questoes3 from "./questoes/simulado3";
import questoes4 from "./questoes/simulado4";
import questoes5 from "./questoes/simulado5";
import questoes6 from "./questoes/simulado6";
import questoes7 from "./questoes/simulado7";
import questoes8 from "./questoes/simulado8";
import questoes9 from "./questoes/simulado9";

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
    case "9":
      return questoes9;
    case "10":
      return questoes10;
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

//DADOS ESTÁTICOS DOS SIMULADOS

const simulados: ISimulado[] = [
  { id: "1", nome: "Prova 1", tentativas: getTentativas("1").length },
  { id: "2", nome: "Prova 2", tentativas: getTentativas("2").length },
  { id: "3", nome: "Prova 3", tentativas: getTentativas("3").length },
  { id: "4", nome: "Prova 4", tentativas: getTentativas("4").length },
  { id: "5", nome: "Prova 5", tentativas: getTentativas("5").length },
  { id: "6", nome: "Prova 6", tentativas: getTentativas("6").length },
  { id: "7", nome: "Prova 7", tentativas: getTentativas("7").length },
  { id: "8", nome: "Prova 8", tentativas: getTentativas("8").length },
  {
    id: "9",
    nome: "Prova 3 - (18/07/2024)",
    tentativas: getTentativas("9").length,
  },
  {
    id: "10",
    nome: "Prova 4 - (18/07/2024)",
    tentativas: getTentativas("10").length,
  },
];
