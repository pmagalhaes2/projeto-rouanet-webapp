import styled from "styled-components";

interface IProps {
  flag: string;
}

export const Card = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 60rem;
  border-radius: 0.5rem;
  padding: 2rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;

  > span {
    text-transform: uppercase;
    background-color: ${({ flag }) =>
      flag === "Música"
        ? "#A6D157"
        : flag === "Artes Cênicas"
        ? "#fff2db"
        : flag === "Artes Visuais"
        ? "#FF905E"
        : flag === "Humanidades"
        ? "#FAEAE3"
        : flag === "Patrimônio Cultural"
        ? "#3F3F3F"
        : "#82CFFA"};
    color: ${({ flag }) =>
      flag === "Artes Cênicas"
        ? "#d2a562"
        : flag === "Música"
        ? "#F4FFF1"
        : flag === "Artes Visuais"
        ? "#FFEEDF"
        : flag === "Humanidades"
        ? "#C68B6E"
        : flag === "Patrimônio Cultural"
        ? "#F2F2F2"
        : "#ECF8FE"};

    font-weight: bold;
    width: fit-content;
    position: absolute;
    top: 5;
    right: 0;
    border-radius: 0.2rem;
    padding: 0 0.5rem;
  }

  h2 {
    margin-top: 3rem;
    color: #0b132b;
  }

  p {
    color: #3a506b;
  }

  .wrap-text {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      font-weight: bold;
      color: #1c2541;
    }
  }

  .wrap-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
