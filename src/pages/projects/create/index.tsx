import { ChangeEvent, EventHandler, FormEvent, useState } from "react";
import { createProject } from "../../../services/ProjetoRouanetAPI";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/Input";
import { inputProps } from "./inputProps";
import { TextArea } from "../../../components/TextArea";
import { Select } from "../../../components/Select";
import { Container } from "../../../components/Container/styles";
import { Button } from "../../../components/Button";

export const ProjectsCreate = () => {
  const initialValue = {
    pronac: 0,
    ano_projeto: 0,
    nome: "",
    segmento: "",
    area: "",
    uf: "",
    municipio: "",
    data_inicio: "",
    data_termino: "",
    situacao: "",
    mecanismo: "",
    enquadramento: "",
    valor_captado: 0,
    valor_aprovado: 0,
    acessibilidade: "",
    objetivos: "",
    justificativa: "",
    etapa: "",
    ficha_tecnica: "",
    impacto_ambiental: "",
    especificacao_tecnica: "",
    providencia: "",
    democratizacao: "",
    sinopse: "",
    resumo: "",
    valor_projeto: 0,
    outras_fontes: "",
    valor_proposta: 0,
    valor_solicitado: 0,
    objetivo: "",
    estrategia_execucao: "",
    link_incentivadores: "",
  };

  const [request, setRequest] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createProject(request);
      navigate("/projects");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1>Adicione um Projeto</h1>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        {inputProps.map((input, index) =>
          input.type == "textarea" ? (
            <TextArea
              id={input.id}
              name={input.name}
              label={input.label}
              onChange={handleChange}
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
              required
            />
          )
        )}
        <Button title={'Criar Projeto'} />
      </form>
    </Container>
  );
};
