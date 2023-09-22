import {
  Button,
  Card,
  Carousel,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {useStore} from "../../../../store/store";
import { SignType } from "../../../../types/common/SignFormType";
import { setCookie } from "typescript-cookie";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../hooks/useStore";
import { isLoggined } from "../../../utils/CookieUtils";
import {useSender} from "../../../../hooks/useSender";

const { Content } = Layout;
const { Title, Link, Text } = Typography;

const formName = "login";
const validateMessages = {
  required: "${label} обязателен!",
  types: {
    email: "${label} не email!",
    number: "${label} не число!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { userStore } = useStore();
  const login = useSender(userStore.loginAction)

  useEffect(() => {
    if (isLoggined()) navigate("/");
  }, []);

  const onFinish = () => {
    console.log("Success: ", form.getFieldsValue());
    const values: SignType = form.getFieldsValue();
    login(values).then(() => navigate(0));
  };

  const onFinishFailed = () => {
    console.log("Failed:", form.getFieldsError());
  };

  return (
    <Row align={"middle"} justify={"center"}>
      <Col span={12}>
        <Image
          preview={false}
          style={{ opacity: "80%", height: "86vh", objectFit: "cover" }}
          src={
            "http://vsegda-pomnim.com/uploads/posts/2022-04/1649132661_34-vsegda-pomnim-com-p-krasivaya-priroda-norvegii-foto-46.jpg"
          }
        />
      </Col>
      <Col span={12}>
        <Title style={{ textAlign: "center" }}> {userStore.login}Вход</Title>
        <Form
          form={form}
          name={formName}
          disabled={userStore.isLoading}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 9 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateMessages={validateMessages}
        >
          <Form.Item label="Логин" name="username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          {/* <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item> */}

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            Нет аккаунта?{" "}
            <Link
              // href="/signup"
              onClick={() => navigate("/signup")}
            >
              Зарегистрироваться
            </Link>
          </div>
          <br />
          <Form.Item wrapperCol={{ offset: 11 }}>
            <Button
              loading={userStore.isLoading}
              type="primary"
              htmlType="submit"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default observer(LoginPage);
