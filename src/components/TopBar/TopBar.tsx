import type React from "react";
import Button from "./Button/Button";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import OptionsToggle from "./OptionsToggle/OptionsToggle";
import { LeftBarBox, TopBarCont } from "./topBar.styled";
import type { SetStateAction } from "react";

export default function TopBar({
  setFirstValue,
  setSecondValue,
  setResetLetters,
  resetLetters,
}: {
  resetLetters: boolean;
  setFirstValue: React.Dispatch<SetStateAction<string>>;
  setSecondValue: React.Dispatch<SetStateAction<string>>;
  setResetLetters: React.Dispatch<SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setFirstValue("");
    setSecondValue("");
    setResetLetters(false);
  };

  return (
    <TopBarCont>
      <LeftBarBox>
        <LanguageSelector />
        <OptionsToggle />
      </LeftBarBox>
      <Button
        changeBackgr={resetLetters}
        handleClick={handleClick}
        text={"ახლის გახსნა"}
        icon
      />
    </TopBarCont>
  );
}
