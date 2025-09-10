import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--blue);
  width: 16%;
  height: 100vh;
  padding: 1.2rem 0 2rem 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 64rem) {
    & {
      height: auto;
      width: 100%;
      padding-left: 0;
      padding-top: 0;
      background-color: white;
    }
  }
`;
