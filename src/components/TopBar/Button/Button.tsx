import { GrayBtn } from "./button.styled";

export default function Button({
  icon,
  text,
  handleClick,
  changeBackgr,
}: {
  icon?: boolean | undefined;
  text: string;
  handleClick?: () => void;
  changeBackgr?: boolean;
}) {
  return (
    <GrayBtn onClick={handleClick} $changeBackgr={changeBackgr} $icon={icon}>
      {icon && <img src="./images/add.png" alt="add" />}
      {text}
    </GrayBtn>
  );
}
