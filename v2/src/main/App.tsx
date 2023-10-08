import { Col, Menu, MenuProps, Row, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Layout, { Footer, Header } from "antd/lib/layout/layout";

import { observer } from "mobx-react-lite";
import { getItem } from "./utils/utils";
import { WhiteColor } from "./utils/colors";
import { isAdmin, isLoggined } from "./utils/CookieUtils";
import AuthButtons from "./components/auth/AuthButtons";
import Navbar from "./components/navbar/Navbar";

import "../styles/main.css"

const { Title } = Typography;

const headerItems: MenuProps["items"] = [
  getItem("Ингредиенты", "ingredient"),
  getItem("Блюда", "dishes/all"),
  getItem("История", "history"),
  getItem("Профиль", "profile"),
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };
  return (
    <>
      <Navbar />
      <Layout>
      {/* <Header style={WhiteColor} className="header">
        <Row justify={"center"}>

          <Col flex={1}>
            <strong
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", fontSize: "190%" }}
            >
              Refook
            </strong>
          </Col>
          <Col flex={"auto"}>
            <Menu
              onClick={onClick}
              style={{ borderBottom: "none" }}
              inlineCollapsed={false}
              mode="horizontal"
              defaultSelectedKeys={[""]}
              items={headerItems}
            />
          </Col>

          <AuthButtons />
        </Row>
      </Header> */}

      <Outlet />
      <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
        Created by <b>Refook</b>
      </Footer>
    </Layout>
    </>
    
  );
};

export default observer(App);
