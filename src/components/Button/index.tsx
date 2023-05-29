import { Container } from "./styles";

interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <Container>
      <button>{title}</button>
    </Container>
  );
};
