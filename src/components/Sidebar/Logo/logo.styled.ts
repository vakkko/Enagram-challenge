import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.3rem;

  & > img {
    align-self: flex-end;
    padding-right: 3.2rem;
  }

  & > div {
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 1.1rem;
  }

  & > div > p {
    color: var(--white);
  }
`;
