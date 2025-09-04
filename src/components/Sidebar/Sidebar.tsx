import Logo from "./Logo/Logo";
import { SidebarContainer } from "./sidebar.styled";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Logo />
      <SidebarMenu />
    </SidebarContainer>
  );
}
