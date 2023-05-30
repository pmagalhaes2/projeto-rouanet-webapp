import { ChangeEvent } from "react";
import { Container } from "./styles";

interface SelectProps {
  id: string;
  name?: string;
  label?: string;
  options: string[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  id,
  name,
  label,
  options,
  value,
  onChange,
}: SelectProps) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}:</label>}
      <select name={name} id={id} onChange={onChange} value={value}>
        {options.map((op, index) => {
          return (
            <option value={op} key={index}>
              {op}
            </option>
          );
        })}
      </select>
    </Container>
  );
};
