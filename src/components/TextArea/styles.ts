import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;

  label {
    font-size: 1.1rem;
    font-weight: 500;
    color: #3a506b;
  }

  > div {
    width: 100%;
  }

  textarea {
    margin: 1rem 0;
    resize: none;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 6rem;
    box-shadow: 0.625rem 0.625rem 1.875rem rgba(0, 0, 0, 0.06);
    border: 1px solid #fff;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    outline: none;
    font-family: inherit;
  }
`;
