import { ChangeEvent, InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  freeSize?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  freeSize = false,
  onChange,
}: InputProps) => {
  return (
    <Container freeSize={freeSize}>
      {label && <label htmlFor={id}>{label}:</label>}

      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </Container>
  );
};
