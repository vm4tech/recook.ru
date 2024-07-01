import {Col, Menu, MenuProps, Row, Space, Typography} from "antd";
import Layout, { Footer, Header } from "antd/lib/layout/layout";

import { getItem } from "./utils/utils";
import { WhiteColor } from "./utils/colors";
import { isAdmin, isLoggined } from "./utils/CookieUtils";
import {Outlet, useNavigate} from "react-router-dom";
import React from "react";
import {AuthButtons} from "./components/auth/AuthButtons";
import {ProfileButton} from "./components/profile";

const { Title } = Typography;

const headerItems: MenuProps["items"] = [
  isAdmin() ? getItem("Ингредиенты", "ingredient") : null,
  isLoggined() ? getItem("Блюда", "dishes/all") : null,
  isLoggined() ? getItem("История", "history") : null,
  isLoggined() ? getItem("Профиль", "profile") : null,
];

export const StartApp: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', ...WhiteColor }} className="header">
        {/*<Row justify={"center"}>*/}
          {/* <Col>
            <div
              className="logo"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Col> */}

          {/*<Col flex={1}>*/}
            <strong
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", fontSize: "190%" }}
            >
              Recook
            </strong>
            {/* </Typography.Text> */}
          {/*</Col>*/}
        <Menu
            onClick={onClick}
            style={{ borderBottom: "none", flex: 1, minWidth: 0 }}
            inlineCollapsed={false}
            mode="horizontal"
            defaultSelectedKeys={[""]}
            items={headerItems}
        />
          {/*<Col flex={"auto"}>*/}

          {/*</Col>*/}
        <Space align={"center"}>
            {isLoggined() ? <ProfileButton /> : <AuthButtons /> }
        {/*</Row>*/}
        </Space>
      </Header>

      <Outlet />
      <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
        Created by <b>Recook</b>
      </Footer>
    </Layout>
  );
};
