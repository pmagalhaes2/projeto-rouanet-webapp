import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { getProjectsList } from "../../services/ProjetoRouanetAPI";
import { Input } from "../../components/Input";
import { ProjectCard } from "../../components/ProjectCard";
import { Container } from "../../components/Container/styles";

interface IResponseProject {
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

export const Projects = () => {
  const [projects, setProjects] = useState<IResponseProject[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<IResponseProject[]>([]);

  const fetchData = useCallback(() => {
    getProjectsList().then((response: IResponseProject[]) =>
      setProjects(response)
    );
  }, []);

  useEffect(() => {
    fetchData();
    setFiltered(
      projects.filter((project) =>
        project.nome.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [fetchData, projects, search]);

  return (
    <>
      <Input
        placeholder="Type to search..."
        freeSize={true}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <Container>
        <div className="cards-container">
          {filtered.map((project, index) => {
            return (
              <ProjectCard
                info={{
                  nome: project.nome,
                  area: project.area,
                  municipio: project.municipio,
                  uf: project.uf,
                  resumo: project.resumo,
                  valor_aprovado: project.valor_aprovado,
                  valor_captado: project.valor_captado,
                  flag: project.area,
                }}
                key={index}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};
