import axios from "axios";
export interface IProjectInfo {
  pronac: number;
  ano_projeto: number;
  nome: string;
  segmento: string;
  area: string;
  uf: string;
  municipio: string;
  data_inicio: string;
  data_termino: string;
  situacao: string;
  mecanismo: string;
  enquadramento: string;
  valor_captado: number;
  valor_aprovado: number;
  acessibilidade: string;
  objetivos: string;
  justificativa: string;
  etapa: string;
  ficha_tecnica: string;
  impacto_ambiental: string;
  especificacao_tecnica: string;
  providencia: string;
  democratizacao: string;
  sinopse: string;
  resumo: string;
  valor_projeto: number;
  outras_fontes: string;
  valor_proposta: number;
  valor_solicitado: number;
  objetivo: string;
  estrategia_execucao: string;
  link_incentivadores: string;
}

const baseURL = "http://127.0.0.1:8000";

export const api = axios.create({
  baseURL: `http://127.0.0.1:8000`,
});

export const getProjectsList = (): Promise<IProjectInfo[]> =>
  api.get(`${baseURL}/projects`).then((response) => response.data);

export const createProject = (request: IProjectInfo) => {
  api
    .post(`${baseURL}/projects`, request);
};
