import styled from "styled-components";

interface IProps {
  variant: "primary" | "red" | "blue";
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ variant }) => (variant === "primary" ? "0 1rem" : "0")};

  button {
    border-radius: 8px;
    width: 100%;
    border: 1px solid transparent;
    padding: ${({ variant }) =>
      variant === "primary" ? "0.8rem 0" : "0.8rem"};
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    background-color: ${({ variant }) =>
      variant === "red" ? "#B5342C" : "#3a506b"};
    color: #fff;
    cursor: pointer;
    transition: border - color 0.25s;
  }
`;
