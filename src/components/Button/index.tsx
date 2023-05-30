import { Container } from "./styles";

interface ButtonProps {
  title: string;
  variant?: "primary" | "red" | "blue";
  onClick?: () => void;
}

export const Button = ({
  title,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <Container variant={variant}>
      <button onClick={onClick}>{title}</button>
    </Container>
  );
};
