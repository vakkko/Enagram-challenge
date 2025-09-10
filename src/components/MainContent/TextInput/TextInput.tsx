import type React from "react";
import {
  HighlightOverlay,
  InputContainer,
  StyledTextarea,
} from "./textInput.styled";
import { type SetStateAction } from "react";

export default function TextInput({
  state,
  setState,
  letters,
  greenHighlight,
}: {
  state: string;
  setState: React.Dispatch<SetStateAction<string>>;
  letters?: number[];
  greenHighlight?: boolean;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(event.target.value);
  };

  const getHighlightedText = () => {
    if (!letters || letters.length === 0) {
      return state;
    }

    return state
      .split("")
      .map((char, index) => {
        if (letters.includes(index)) {
          return `<span class=${
            greenHighlight ? "highlight-green" : "highlight"
          }>${char}</span>`;
        }
        return char;
      })
      .join("");
  };

  return (
    <InputContainer>
      <StyledTextarea
        value={state}
        onChange={handleChange}
        name="textInput"
        placeholder="დაიწყე წერა"
      />
      {letters && letters.length > 0 && (
        <HighlightOverlay
          dangerouslySetInnerHTML={{ __html: getHighlightedText() }}
        />
      )}
    </InputContainer>
  );
}
