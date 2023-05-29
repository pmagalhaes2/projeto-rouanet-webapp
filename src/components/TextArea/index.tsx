import { ChangeEvent, TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({
  id,
  name,
  label,
  placeholder,
  onChange,
  maxLength = -1,
}: TextProps) {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}:</label>}

      <div>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxLength}
        />
      </div>
    </Container>
  );
}
