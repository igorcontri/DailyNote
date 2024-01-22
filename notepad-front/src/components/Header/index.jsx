import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import defaultAvatar from "../../assets/default_avatar.png";

import { api } from "../../services/api";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : defaultAvatar;

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <span>Welcome</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
