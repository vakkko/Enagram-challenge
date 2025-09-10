import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  background-color: var(--inputBackg);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 1.2rem;
  color: var(--darkGray);
  font-size: 1.8rem;
  line-height: 26px;
  position: relative;
  z-index: 2;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const HighlightOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  white-space: pre-wrap;
  word-wrap: break-word;

  font-family: inherit;
  font-size: 1.8rem;
  line-height: 26px;
  padding: 1.2rem;
  border-radius: 8px;

  box-sizing: border-box;
  overflow: hidden;
  z-index: 3;
  color: transparent;

  .highlight {
    background-color: var(--highlightRed);
    color: white;
  }

  .highlight-green {
    color: white;
    background-color: var(--highlightedGreeb);
  }
`;
