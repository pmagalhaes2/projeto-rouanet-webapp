import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {
  IProjectInfo,
  getProjectById,
  updateProject,
} from "../../../services/ProjetoRouanetAPI";
import { Container } from "../../../components/Container/styles";
import { inputProps } from "../create/inputProps";
import { TextArea } from "../../../components/TextArea";
import { Select } from "../../../components/Select";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export const ProjectsEdit = () => {
  const params = useParams();
  const id = Number(params.id);

  const [projectInfo, setProjectInfo] = useState<IProjectInfo>(
    {} as IProjectInfo
  );

  //   const initialValue = useMemo(() => {
  //     return {
  //       id_projeto: projectInfos.id_projeto,
  //       pronac: projectInfos.pronac,
  //       ano_projeto: projectInfos.ano_projeto,
  //       nome: projectInfos.nome,
  //       segmento: projectInfos.segmento,
  //       area: projectInfos.area,
  //       uf: projectInfos.uf,
  //       municipio: projectInfos.municipio,
  //       data_inicio: projectInfos.data_inicio,
  //       data_termino: projectInfos.data_termino,
  //       situacao: projectInfos.situacao,
  //       mecanismo: projectInfos.mecanismo,
  //       enquadramento: projectInfos.enquadramento,
  //       valor_captado: projectInfos.valor_captado,
  //       valor_aprovado: projectInfos.valor_aprovado,
  //       acessibilidade: projectInfos.acessibilidade,
  //       objetivos: projectInfos.objetivo,
  //       justificativa: projectInfos.justificativa,
  //       etapa: projectInfos.etapa,
  //       ficha_tecnica: projectInfos.ficha_tecnica,
  //       impacto_ambiental: projectInfos.impacto_ambiental,
  //       especificacao_tecnica: projectInfos.especificacao_tecnica,
  //       providencia: projectInfos.providencia,
  //       democratizacao: projectInfos.democratizacao,
  //       sinopse: projectInfos.sinopse,
  //       resumo: projectInfos.resumo,
  //       valor_projeto: projectInfos.valor_projeto,
  //       outras_fontes: projectInfos.outras_fontes,
  //       valor_proposta: projectInfos.valor_proposta,
  //       valor_solicitado: projectInfos.valor_solicitado,
  //       objetivo: projectInfos.objetivo,
  //       estrategia_execucao: projectInfos.estrategia_execucao,
  //       link_incentivadores: projectInfos.link_incentivadores,
  //     };
  //   }, [projectInfos]);

  useEffect(() => {
    getProjectById(id).then((resp: IProjectInfo) => {
      resp.data_inicio = resp.data_inicio.slice(0, 10);
      resp.data_termino = resp.data_termino.slice(0, 10);
      setProjectInfo(resp);
    });
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProjectInfo({ ...projectInfo, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const option = confirm(
      "A operação selecionada é irreversível. Deseja continuar?"
    );

    if (option) {
      updateProject(id, projectInfo)
        .then((response) => {
          if (response.status === 200) {
            alert("Projeto alterado com sucesso!");
            navigate("/projects");
          }
        })
        .catch((err) => {
          const { status } = err.response;
          const { message } = err.response.data;
          alert(`[Error ${status}] - Message: ${message}`);
        });
    } else {
      alert("Operação cancelada com sucesso!");
      navigate("/projects");
    }
  };
  return (
    <Container>
      <h1>Edite o Projeto - Nº {id}</h1>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        {inputProps.map((input, index: number) =>
          input.type == "textarea" ? (
            <TextArea
              id={input.id}
              name={input.name}
              label={input.label}
              onChange={handleChange}
              value={projectInfo[input.name] || ""}
              key={index}
              required
            />
          ) : input.type === "select" ? (
            <Select
              id={input.id}
              name={input.name}
              label={input.label}
              options={input.options as string[]}
              onChange={handleChange}
              value={projectInfo[input.name] || ""}
              key={index}
            />
          ) : (
            <Input
              id={input.id}
              name={input.name}
              label={input.label}
              type={input.type}
              onChange={handleChange}
              placeholder={input.placeholder}
              key={index}
              value={projectInfo[input.name] || ""}
              required
            />
          )
        )}
        <Button variant={"primary"} title={"Salvar"} />
      </form>
    </Container>
  );
};
