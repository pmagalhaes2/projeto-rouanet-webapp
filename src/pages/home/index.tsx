import { Container } from "../../components/Container/styles";

import image from "../../assets/images/main.svg";

export const Home = () => {
  return (
    <Container>
      <img
        src={image}
        alt="Imagem pessoas trabalhando em projeto"
        width={500}
      />
    </Container>
  );
};
