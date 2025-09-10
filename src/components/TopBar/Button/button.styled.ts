import styled from "styled-components";

export const GrayBtn = styled.button<{
  $changeBackgr: boolean | undefined;
  $icon: boolean | undefined;
}>`
  color: var(--white);
  background-color: ${(props) =>
    props.$changeBackgr ? "#4571E4" : "#383a4899"};
  font-size: 1.4rem;
  line-height: 28px;
  border-radius: 6px;
  cursor: pointer;

  ${(props) =>
    props.$icon &&
    `
  display: flex;
  align-items: center;
  gap:0.4rem;
  padding: 0.9rem 1.6rem 0.9rem 1.2rem;
  `}
`;
