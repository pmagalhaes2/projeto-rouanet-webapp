import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 0 1rem;

  button {
    border-radius: 8px;
    width: 100%;
    border: 1px solid transparent;
    padding: 0.8rem 0;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    background-color: #3a506b;
    color: #fff;
    cursor: pointer;
    transition: border-color 0.25s;
  }
`;
