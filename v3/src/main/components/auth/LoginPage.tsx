import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useLogin} from "../../../hooks/useAuthorization";
import {isLoggined} from "../../utils/CookieUtils";

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
export const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useLogin()

  useEffect(() => {
    if (isLoggined())
      navigate("/")
  }, [isLoggined()]);

  const onFinish = async () => {
    console.log("Success: ", form.getFieldsValue());
    await mutateAsync(form.getFieldsValue())
  };

  const onFinishFailed = () => {
    console.log("Failed:", form.getFieldsError());
  };

  return (
    <Row align={"middle"} justify={"center"}>
      <Col
          xs={{ flex: '0%' }}
          sm={{ flex: '0%' }}
          md={{ flex: '0%' }}
          lg={{ flex: '50%' }}
          xl={{ flex: '50%' }}
      >
        <Image
          preview={false}
          style={{ opacity: "80%", height: "86vh", objectFit: "cover" }}
          src={
            "http://vsegda-pomnim.com/uploads/posts/2022-04/1649132661_34-vsegda-pomnim-com-p-krasivaya-priroda-norvegii-foto-46.jpg"
          }
        />
      </Col>
      <Col flex={"50%"}>
        <Title level={3} style={{ textAlign: "center" }}> Вход</Title>
        <Form
          form={form}
          name={formName}
          disabled={isLoading}
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
          <Row align={"middle"} justify={"center"}>
            <Form.Item >
              <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
              >
                Войти
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
