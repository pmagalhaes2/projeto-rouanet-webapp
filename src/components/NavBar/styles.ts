import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: 2rem 8rem;
  position: sticky;
  top: 0;
  background-color: var(--bg-color);
  height: 75px;
  z-index: 99;
  box-shadow: 0px 4px 11px rgb(0 0 0 / 15%);
  background-color: #1c2541;

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 3rem;
    list-style: none;

    li {
      font-size: 1.2rem;
      font-weight: 400;
      text-align: center;
      align-items: center;
    }
    a {
      text-decoration: none;
      font-weight: 400;
      color: #f5f5f5;

      :hover {
        box-shadow: inset 0 100px #3a506b;
        color: white;
      }
    }
  }
`;
