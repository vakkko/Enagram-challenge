import { useState } from "react";
import Button from "../TopBar/Button/Button";
import { StyledMain } from "./mainContent.styled";
import TextInput from "./TextInput/TextInput";

export default function MainContent() {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [extraLetters, setExtraLetters] = useState<number[]>();
  const [missingLetters, setMissingLetters] = useState<number[]>();

  const handleClick = () => {
    const splitedFirstValue = firstValue.trim().split(" ");
    const splitedSecondValue = secondValue.trim().split(" ");
    const unmachedFirstVal: string[] = [];
    const unmachedSecondVal: string[] = [];
    const matchedFirstVal: string[] = [];
    const matchedSecondVal: string[] = [];
    splitedFirstValue.forEach((word) => {
      if (!splitedSecondValue.includes(word)) {
        unmachedFirstVal.push(word);
      } else {
        matchedFirstVal.push(word);
      }
    });
    splitedSecondValue.forEach((word) => {
      if (!splitedFirstValue.includes(word)) {
        unmachedSecondVal.push(word);
      } else {
        matchedSecondVal.push(word);
      }
    });

    const sameLettersFirst: string[] = [];
    const sameLettersSecond: string[] = [];

    const secondSentence = unmachedSecondVal.join(" ");
    const firstSentence = unmachedFirstVal.join(" ");

    for (let i = 0; i < unmachedFirstVal.length; i++) {
      const letters = unmachedFirstVal[i].split("");
      letters.forEach((letter) => {
        if (secondSentence.includes(letter)) {
          sameLettersFirst.push(letter);
        }
      });
    }

    for (let i = 0; i < unmachedSecondVal.length; i++) {
      const letters = unmachedSecondVal[i].split("");
      letters.forEach((letter) => {
        if (firstSentence.includes(letter)) {
          sameLettersSecond.push(letter);
        }
      });
    }

    const filteredLettersFirst = new Set(sameLettersFirst);
    const filteredLettersSecond = new Set(sameLettersSecond);

    const findIndexOfUnmachedWordFirst: number[] = unmachedFirstVal.map(
      (wrd) => {
        return firstValue.indexOf(wrd);
      }
    );

    const findIndexOfUnmachedWordSecond: number[] = unmachedSecondVal.map(
      (wrd) => {
        return secondValue.indexOf(wrd);
      }
    );

    const extraLetterIndexes = unmachedFirstVal.flatMap((wrd, wordIndex) => {
      return wrd
        .split("")
        .map((letter, letterIndex) => {
          if (!filteredLettersFirst.has(letter)) {
            return findIndexOfUnmachedWordFirst[wordIndex] + letterIndex;
          }
        })
        .filter((index) => index !== undefined);
    });
    setExtraLetters(extraLetterIndexes);

    const missingLetterIndexes = unmachedSecondVal.flatMap((wrd, wordIndex) => {
      return wrd
        .split("")
        .map((letter, letterIndex) => {
          if (!filteredLettersSecond.has(letter)) {
            return findIndexOfUnmachedWordSecond[wordIndex] + letterIndex;
          }
        })
        .filter((index) => index !== undefined);
    });
    setMissingLetters(missingLetterIndexes);
  };

  return (
    <StyledMain>
      <div>
        <TextInput
          letters={extraLetters}
          state={firstValue}
          setState={setFirstValue}
        />
        <img src="./images/two-way-arrow.png" alt="two way arrow" />
        <TextInput
          greenHighlight
          letters={missingLetters}
          state={secondValue}
          setState={setSecondValue}
        />
      </div>
      <Button
        changeBackgr={
          firstValue.trim().length > 0 && secondValue.trim().length > 0
        }
        handleClick={handleClick}
        text="შედარება"
      />
    </StyledMain>
  );
}
