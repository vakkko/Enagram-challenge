import { MenuItemBox } from "./menuItem.styled";

export default function MenuItem({
  icon,
  text,
  arrow,
  text2,
  background,
}: {
  icon: string;
  text: string;
  background?: boolean;
  arrow?: string;
  text2?: string;
}) {
  return (
    <MenuItemBox $background={background || undefined}>
      <img src={icon} alt="icon" />
      <p>{text}</p>
      {arrow && text2 && (
        <>
          <img src={arrow} alt="arrow" />
          <p>{text2}</p>
        </>
      )}
    </MenuItemBox>
  );
}
