import styled from "styled-components";

export const GrayBtn = styled.button<{ $icon: boolean | undefined }>`
  color: var(--white);
  background-color: #383a4899;
  font-size: 1.4rem;
  line-height: 28px;
  border-radius: 6px;

  ${(props) =>
    props.$icon &&
    `
  display: flex;
  align-items: center;
  gap:0.4rem;
  padding: 0.9rem 1.6rem 0.9rem 1.2rem;
  `}
`;
