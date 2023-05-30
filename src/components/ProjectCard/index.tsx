import { useNavigate } from "react-router-dom";
import {
  deleteProject,
} from "../../services/ProjetoRouanetAPI";
import { formatValue } from "../../utils/formatValue";
import { Button } from "../Button";
import { Card } from "./styles";

interface IProps {
  info: {
    id: number;
    nome: string;
    area: string;
    municipio: string;
    uf: string;
    resumo: string;
    valor_aprovado: number;
    valor_captado: number;
    flag: string;
  };
}
export const ProjectCard = ({ info }: IProps) => {
  const {
    id,
    nome,
    area,
    municipio,
    uf,
    resumo,
    valor_aprovado,
    valor_captado,
    flag,
  } = info;

  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    try {
      const option = confirm(
        "A operação selecionada é irreversível. Deseja continuar?"
      );

      if (option) {
        deleteProject(id);
        alert(`Projeto de id: ${id} excluído com sucesso!`);
        navigate("/projects");
      } else return;
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/projects/edit/${id}`);
  };

  return (
    <>
      <Card flag={flag}>
        <span>{area}</span>
        <h2>{nome}</h2>
        <p>
          {municipio} • {uf}
        </p>
        <p>{resumo}</p>
        <div className="wrap-text">
          <p>Aprovado</p>
          <span>R$ {formatValue(valor_aprovado)} </span>
        </div>
        <div className="wrap-text">
          <p>Captado</p>
          <span>R$ {formatValue(valor_captado)} </span>
        </div>
        <div className="wrap-button">
          <Button
            variant={"blue"}
            onClick={() => handleEdit(id)}
            title="Editar"
          />
          <Button
            variant={"red"}
            onClick={() => handleDelete(id)}
            title="Excluir"
          />
        </div>
      </Card>
    </>
  );
};
