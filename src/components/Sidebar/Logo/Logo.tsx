import { ChevronImg, LogoContainer, MenuImg } from "./logo.styled";

export default function Logo() {
  return (
    <LogoContainer>
      <ChevronImg src="./images/chevrons-left.png" alt="left chevron" />
      <div>
        <img src="./images/logo.png" alt="logo" />
        <img src="./images/ENAGRAM.png" alt="Enagram text" />
      </div>
      <MenuImg src="./images/menu.png" alt="menu" />
    </LogoContainer>
  );
}
