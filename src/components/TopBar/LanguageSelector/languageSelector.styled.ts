// languageSelector.styled.ts
import styled from "styled-components";

export const LangSelector = styled.select`
  font-size: 14px;
  color: var(--darkGray);
  padding: 1rem 5rem 1rem 1.4rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'><path d='M4.99996 6.00002L0.756958 1.75702L2.17196 0.343018L4.99996 3.17202L7.82796 0.343018L9.24296 1.75702L4.99996 6.00002Z' fill='%2351555B'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.9rem center;
  @media screen and (max-width: 33.93rem) {
    & {
      width: 100%;
    }
  }
`;
