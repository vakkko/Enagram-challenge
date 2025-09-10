import styled from "styled-components";

export const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  margin-right: 4rem;

  @media screen and (max-width: 64rem) {
    & {
      margin-top: 0;
      padding: 0 2.8rem;
    }
  }
`;
