import { ChangeEvent, TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({
  id,
  name,
  label,
  placeholder,
  value,
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
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      </div>
    </Container>
  );
}
