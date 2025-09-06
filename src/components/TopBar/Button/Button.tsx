import { GrayBtn } from "./button.styled";

export default function Button({ icon }: { icon?: boolean | undefined }) {
  return (
    <GrayBtn $icon={icon}>
      {icon && <img src="./images/add.png" alt="add" />}
      ახლის გახსნა
    </GrayBtn>
  );
}
