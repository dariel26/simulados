export interface ISimulado {
  id: string;
  nome: string;
  tentativas: number;
}

export interface ITentativa {
  id: string;
  inicio: Date;
  fim?: Date;
  respostas: IResposta[];
  pontuacao?: number;
}

export interface IResposta {
  questaoId: string;
  indexSelecionado: number;
}

export interface IQuestao {
  id: string;
  numero: number;
  texto: string;
  subTexto?: string;
  itens?: string[];
  itensVF?: string[];
  alternativas: string[];
  alternativaCorreta: number;
  imagens?: string[];
}
