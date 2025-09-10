import styled from "styled-components";

export const SidebarMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 64rem) {
    & {
      border-bottom: 1px solid #ededed;
      padding: 0 2.8rem;
    }
  }
`;
