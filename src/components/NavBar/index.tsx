import { Container } from "./styles";

export const NavBar = () => {

  return (
    <Container>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Listar Projetos</a>
        </li>
        <li>
          <a href="/projects/create">Criar Projeto</a>
        </li>
      </ul>
    </Container>
  );
};
