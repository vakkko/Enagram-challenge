import { MenuItemBox } from "./menuItem.styled";

export default function MenuItem({
  icon,
  text,
  arrow,
  text2,
  background,
  active,
}: {
  icon: string;
  text: string;
  background?: boolean;
  arrow?: string;
  text2?: string;
  active?: boolean;
}) {
  return (
    <MenuItemBox
      $active={active || undefined}
      $background={background || undefined}
    >
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
