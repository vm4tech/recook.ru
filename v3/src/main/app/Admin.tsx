import React from "react";

import {
  Col,
  Menu,
  Row,
  MenuProps,
} from "antd";
import Layout, { Footer, Header } from "antd/lib/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import { WhiteColor } from "../utils/colors";



export const Admin: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/admin/${e.key}`);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={WhiteColor} className="header">
        <Row justify={"center"}>
          <Col flex={1}>
            <strong
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", fontSize: "190%" }}
            >
              Recook
            </strong>
            {/* </Typography.Text> */}
          </Col>
          <Col flex={"auto"}>
            <Menu
              onClick={onClick}
              style={{ borderBottom: "none" }}
              inlineCollapsed={false}
              mode="horizontal"
              defaultSelectedKeys={["test"]}
              // items={items1}
            />
          </Col>
          {/* <LoginButton /> */}
        </Row>
      </Header>

      <Outlet />

      <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
        Created by <b>Recook</b>
      </Footer>
    </Layout>
  );
};
