import styled from "styled-components";

export const UserBox = styled.div`
  border-top: 1px solid var(--borderGray);
  padding-top: 2rem;
  padding-right: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > div > span {
    color: var(--white);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 20px;
  }
`;
