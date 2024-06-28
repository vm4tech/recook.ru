import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { dropCookies, isLoggined } from "../../utils/CookieUtils";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import {useStore} from "../../../hooks/useStore";
import {useSender} from "../../../hooks/useSender";

const AuthButtons: React.FC = () => {
  const navigate = useNavigate();
  const {userStore} = useStore()
  const {isLoading, logout} = userStore;
  const logoutSender = useSender(logout, undefined, "Вы успешно вышли из Recook!")

  const logoutClick = () => {
    logoutSender().then(() => navigate(0))
  }

  return (
    <Space align={"center"}>
      {isLoggined() ? (
        <Button
          loading={isLoading}
          onClick={logoutClick}
          size={"large"}
        >
          Logout
        </Button>
      ) : (
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
      )}
    </Space>
  );
};

export default observer(AuthButtons);
