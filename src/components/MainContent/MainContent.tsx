import Button from "../TopBar/Button/Button";
import { StyledMain } from "./mainContent.styled";
import TextInput from "./TextInput/TextInput";

export default function MainContent() {
  return (
    <StyledMain>
      <div>
        <TextInput />
        <img src="./images/two-way-arrow.png" alt="two way arrow" />
        <TextInput />
      </div>
      <Button text="შედარება" />
    </StyledMain>
  );
}
