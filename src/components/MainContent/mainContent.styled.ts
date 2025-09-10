import styled from "styled-components";

export const StyledMain = styled.main<{ $showProgressBar: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${(props) =>
    props.$showProgressBar &&
    `
  align-items: center;
  justify-content:center;
  `}

  & > div {
    display: flex;
    align-items: stretch;
    height: ${(props) => (props.$showProgressBar ? "" : "51vh")};
    justify-content: space-between;
    margin-top: 2.4rem;
  }
  & > div > img {
    align-self: center;
  }

  & > button {
    align-self: center;
    padding: 1rem 3.7rem;
  }

  @media screen and (max-width: 33.93rem) {
    & > div {
      flex-direction: column;
      gap: 1.6rem;
      justify-content: flex-start;
    }

    & > div > img {
      transform: rotate(90deg);
    }
  }
`;
