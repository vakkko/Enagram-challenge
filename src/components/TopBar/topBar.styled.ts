import styled from "styled-components";

export const TopBarCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  padding-bottom: 1.6rem;

  @media screen and (max-width: 33.93rem) {
    & {
      flex-direction: column;
      gap: 1.6rem;
    }
    & > button {
      width: 100%;
    }
  }
`;

export const LeftBarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  @media screen and (max-width: 33.93rem) {
    & {
      flex-direction: column;
      gap: 1.6rem;
      width: 100%;
    }
  }
`;
