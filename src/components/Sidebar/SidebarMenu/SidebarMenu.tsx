import MenuItem from "./MenuItem/MenuItem";
import { SidebarMenuBox } from "./sidebarMenu.styled";

export default function SidebarMenu() {
  return (
    <SidebarMenuBox>
      <MenuItem icon={"./images/check.png"} text={"მართლმწერი"} />

      <MenuItem
        background
        icon={"./images/spelling.png"}
        text={"ტექსტის შედარება"}
      />

      <MenuItem
        icon={"./images/mic.png"}
        text={"ხმა"}
        arrow={"./images/arrow-right.png"}
        text2={"ტექსტი"}
      />
      <MenuItem
        icon={"./images/sound.png"}
        text={"ტექსტი"}
        arrow={"./images/arrow-right.png"}
        text2={"ხმა"}
      />
      <MenuItem icon={"./images/document.png"} text={"PDF კონვერტაცია"} />
    </SidebarMenuBox>
  );
}
