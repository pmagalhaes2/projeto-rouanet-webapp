import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  IProjectInfo,
  getProjectsList,
} from "../../services/ProjetoRouanetAPI";
import { Input } from "../../components/Input";
import { ProjectCard } from "../../components/ProjectCard";
import { Container } from "../../components/Container/styles";

export const Projects = () => {
  const [projects, setProjects] = useState<IProjectInfo[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<IProjectInfo[]>([]);

  const fetchData = useCallback(() => {
    getProjectsList().then((response: IProjectInfo[]) => setProjects(response));
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
                  id: project.id_projeto,
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
