import { Col, Menu, Row, MenuProps } from "antd";

import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { WhiteColor } from "./utils/colors";
import { getItem } from "./utils/utils";
import AuthButtons from "./components/auth/AuthButtons";
import { isLoggined } from "./utils/CookieUtils";

const headerItems: MenuProps["items"] = [
  getItem("Ингредиенты", "ingredient"),
  getItem("Блюда", "dish"),
  isLoggined() ? getItem("История", "history") : null,
  isLoggined() ? getItem("Профиль", "profile") : null,
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };
  return (
    <Layout>
      <Header style={WhiteColor} className="header">
        <Row justify={"center"}>
          {/* <Col>
            <div
              className="logo"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Col> */}

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
              defaultSelectedKeys={[""]}
              items={headerItems}
            />
          </Col>

          <AuthButtons />
        </Row>
      </Header>

      <Outlet />

      <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
        Created by <b>Recook</b>
      </Footer>
    </Layout>
  );
};

export default App;
