import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Space,
  Col,
  Menu,
  notification,
  Row,
  Switch,
  Tooltip,
  MenuProps,
  Typography,
} from "antd";
import Sider from "antd/es/layout/Sider";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { WhiteColor } from "./utils/colors";
import { getItem } from "./utils/utils";
import {observer} from "mobx-react-lite";

const items1: MenuProps["items"] = [
  getItem("Ингредиенты", "ingredient"),
  getItem("Блюда", "dish"),
];

const Admin: React.FC = () => {
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
              Refook
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
              items={items1}
            />
          </Col>
          {/* <LoginButton /> */}
        </Row>
      </Header>

      <Outlet />

      <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
        Created by <b>Refook</b>
      </Footer>
    </Layout>
  );
};

export default observer(Admin);
