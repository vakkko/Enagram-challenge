import { MenuItemBox } from "./menuItem.styled";

export default function MenuItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <MenuItemBox>
      <img src={icon} alt="icon" />
      <p>{text}</p>
    </MenuItemBox>
  );
}
