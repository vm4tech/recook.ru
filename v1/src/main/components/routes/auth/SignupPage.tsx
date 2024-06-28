import { useEffect } from "react";
import {
  Button,
  Card,
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
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../hooks/useActions";
import { useCRUDSender } from "../../../../hooks/useCRUDSender";
import { error } from "console";
import { ErrorType } from "../../../../types/common/ErrorType";
import { setErrorsFromResponse } from "../../../utils/utils";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
const { Content } = Layout;
const { Title, Link, Text } = Typography;

const formName = "signup";
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
const SignupPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { loading } = useTypedSelector((state) => state.restReducer);
  const { signUp } = useActions();
  const sender = useCRUDSender(
    signUp,
    undefined,
    "Вы успешно зарегистрировались в Recook!"
  );
  useEffect(() => {}, []);

  const onFinish = () => {
    console.log("Success: ", form.getFieldsValue());
    sender(form.getFieldsValue())
      .then((res) => navigate("/login"))
      .catch((error: ErrorType) => {
        form.setFields(setErrorsFromResponse(error));
      });
  };

  const onFinishFailed = () => {
    // console.log("Failed:", form.getFieldsError());
  };

  return (
    <Row align={"middle"} justify={"center"}>
      <Col span={12}>
        <Title style={{ textAlign: "center" }}>Регистрация</Title>
        <Form
          form={form}
          name={formName}
          disabled={loading}
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
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            Есть аккаунт?{" "}
            <Link
              // href="/signup"
              onClick={() => navigate("/login")}
            >
              Войти
            </Link>
          </div>
          <br />
          <Form.Item wrapperCol={{ offset: 9 }}>
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        <Image
          preview={false}
          style={{ opacity: "80%", height: "86vh", objectFit: "cover" }}
          src={
            "https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        />
      </Col>
    </Row>
  );
};

export default SignupPage;
