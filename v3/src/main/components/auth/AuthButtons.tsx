import React, {useEffect} from "react";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {useAuthorization, useLogin, useLogout} from "../../../hooks/useAuthorization";
import {isLoggined} from "../../utils/CookieUtils";

export const AuthButtons: React.FC = () => {
  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useLogout()

  return (
      !isLoggined() ?
          <>
            <Button
                type="primary"
                onClick={() => navigate(`/login`)}
                size={"large"}
            >
              Log in
            </Button>
            <Button onClick={() => navigate(`/signup`)} size={"large"}>
              Sign up
            </Button>
          </>
       : <></>
  )
};