import styled from "styled-components";

export const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  gap: 0.8rem;
  padding: 2rem 1.6rem;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
`;

export const Progress = styled.progress`
  width: 159px;
  height: 14px;
  border-radius: 64px;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: #f6f9ff;
    border-radius: 7px;
  }

  &::-webkit-progress-value {
    background-color: #4571e4;
    border-radius: 7px;
  }
`;

export const ProgressText = styled.span`
  font-size: 1rem;
  line-height: 16px;
  letter-spacing: 0px;
  color: var(--darkGray);
`;

export const ProgressTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > span {
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
  }
`;
