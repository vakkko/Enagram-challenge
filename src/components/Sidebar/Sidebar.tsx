import Logo from "./Logo/Logo";
import { SidebarContainer } from "./sidebar.styled";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import User from "./User/User";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <Logo />
        <SidebarMenu />
      </div>
      <User />
    </SidebarContainer>
  );
}
