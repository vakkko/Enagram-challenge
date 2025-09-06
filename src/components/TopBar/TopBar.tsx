import Button from "./Button/Button";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import OptionsToggle from "./OptionsToggle/OptionsToggle";
import { LeftBarBox, TopBarCont } from "./topBar.styled";

export default function TopBar() {
  return (
    <TopBarCont>
      <LeftBarBox>
        <LanguageSelector />
        <OptionsToggle />
      </LeftBarBox>
      <Button icon />
    </TopBarCont>
  );
}
