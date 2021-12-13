import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "./Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <ButtonLogOut onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </ButtonLogOut>
  );
};

const ButtonLogOut = styled(Button)``;

export default LogoutButton;