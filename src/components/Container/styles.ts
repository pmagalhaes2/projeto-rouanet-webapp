import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 3rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EFF7FE;
    gap: 1rem;
    padding: 2rem;
    width: 50%;
    border-radius: 1rem;
  }

  img {
    width: 50%;
    padding: 2rem 0;
  }
`;
