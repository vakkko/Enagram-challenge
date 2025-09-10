import styled from "styled-components";

export const OptToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 14px;
  line-height: 22px;
  color: var(--darkGray);
  & > input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
  }
  @media screen and (max-width: 33.93rem) {
    & {
      width: 100%;
    }
  }
`;
