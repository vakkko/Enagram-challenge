import styled from "styled-components";

export const MenuItemBox = styled.div<{ $background: boolean | undefined }>`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  & > p {
    font-family: Helvetica;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${(props) => (props.$background ? "var(--blue)" : "var(--white)")};
  }

  ${(props) =>
    props.$background &&
    `
    & > p {
    font-weight: 700;
    }
    
  background-color: var(--white);
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 2rem 0 2rem 1.2rem;

  `}
`;
