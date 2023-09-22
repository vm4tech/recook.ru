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
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../hooks/useActions";
import { SignType } from "../../../../types/common/SignFormType";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useCRUDSender } from "../../../../hooks/useCRUDSender";
import { ErrorType } from "../../../../types/common/ErrorType";
import { setErrorsFromResponse } from "../../../utils/utils";
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
  const { signIn } = useActions();
  const { loading } = useTypedSelector((state) => state.restReducer);
  const sender = useCRUDSender(signIn);
  useEffect(() => {}, []);

  const onFinish = () => {
    console.log("Success: ", form.getFieldsValue());
    const values: SignType = form.getFieldsValue();
    sender(values)
      .then((res) => {
        navigate("/");
        navigate(0);
      })
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
        <Image
          preview={false}
          style={{ opacity: "80%", height: "86vh", objectFit: "cover" }}
          src={
            "http://vsegda-pomnim.com/uploads/posts/2022-04/1649132661_34-vsegda-pomnim-com-p-krasivaya-priroda-norvegii-foto-46.jpg"
          }
        />
      </Col>
      <Col span={12}>
        <Title style={{ textAlign: "center" }}>Вход</Title>
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
            <Button loading={loading} type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
