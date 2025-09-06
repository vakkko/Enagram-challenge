import { GrayBtn } from "./button.styled";

export default function Button({
  icon,
  text,
}: {
  icon?: boolean | undefined;
  text: string;
}) {
  return (
    <GrayBtn $icon={icon}>
      {icon && <img src="./images/add.png" alt="add" />}
      {text}
    </GrayBtn>
  );
}
