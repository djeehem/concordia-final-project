import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <ButtonLogIn onClick={() => loginWithRedirect()}>Log In</ButtonLogIn>;
};

const ButtonLogIn = styled(Button)``;

export default LoginButton;