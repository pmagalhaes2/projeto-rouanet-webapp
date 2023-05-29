import { formatValue } from "../../utils/formatValue";
import { Card } from "./styles";

interface IProps {
  info: {
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
  const { nome, area, municipio, uf, resumo, valor_aprovado, valor_captado, flag} =
    info;

  return (
    <Card flag={flag}>
      <span>{area}</span>
      <h2>{nome}</h2>
      <p>{municipio} • {uf}</p>
      <p>{resumo}</p>
      <div className="wrap-text">
        <p>Aprovado</p>
        <span>R$ {formatValue(valor_aprovado)} </span>
      </div>
      <div className="wrap-text">
        <p>Captado</p>
        <span>R$ {formatValue(valor_captado)} </span>
      </div>
    </Card>
  );
};
