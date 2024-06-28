import React, {useEffect} from "react";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {useAuthorization} from "../../../hooks/useAuthorization";

export const AuthButtons: React.FC = () => {
  const navigate = useNavigate();

  const data = useAuthorization()
  console.log(data)
  // useEffect(() => {})
  return (
    <Space align={"center"}>
      {/*{isLoggined() ? (*/}
      {/*  <Button*/}
      {/*    loading={isLoading}*/}
      {/*    onClick={logoutClick}*/}
      {/*    size={"large"}*/}
      {/*  >*/}
      {/*    Logout*/}
      {/*  </Button>*/}
      {/*) : (*/}
      {/*{isLoading ? "asdasd" : "lol"}*/}
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
      {/*)}*/}
    </Space>
  );
};