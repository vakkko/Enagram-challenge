import { UserBox } from "./user.styled";

export default function User() {
  return (
    <UserBox>
      <div>
        <img src="./images/user-letter.png" alt="user letter" />
        <span>თამარ ონიანი</span>
      </div>
      <img src="./images/dots-menu.png" alt="dots menu" />
    </UserBox>
  );
}
