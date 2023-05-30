import styled from "styled-components";

interface IProps {
  freeSize: boolean;
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ freeSize }) => (freeSize ? "0 5rem" : "0 1rem")};

  label {
    font-size: 1.1rem;
    font-weight: 500;
    color: #3a506b;
  }

  input {
    margin: ${({ freeSize }) => (freeSize ? "3rem 0 0" : "1rem 0 2rem")};
    padding: 0.5rem 1rem;
    width: ${({ freeSize }) => (freeSize ? "350px" : "100%")};
    box-shadow: 0.625rem 0.625rem 1.875rem rgba(0, 0, 0, 0.06);
    border: 1px solid #fff;
    border-radius: ${({ freeSize }) => (freeSize ? "0.3rem" : "0.5rem")};
    color: #3a506b;
    font-size: 0.9rem;
    outline: none;
    background-color: #fff;
    font-family: inherit;


    ::placeholder {
      color: #c4c4c4;
      font-size: ${({ freeSize }) => (freeSize ? "1rem" : "0.8rem")};
      font-weight: 400;
    }
  }
`;
