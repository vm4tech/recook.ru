import { useEffect } from "react";
import { Button, Col, Form, Image, Input, Row, Typography } from "antd";
import UploadingAvatars from "./UploadingAvatars";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import Profile from "../../../../types/Profile";
import { SenderType } from "../../../../hooks/useCRUDSender";

const { Title } = Typography;

const formName = "profileForm";
const FormProfile: React.FC<{ profile: Profile; sender: SenderType }> = ({
  profile,
  sender,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(profile);
  }, []);

  const getValues = () => {
    console.log(form.getFieldsValue());
    sender({ ...form.getFieldsValue(), id: profile.id });
  };

  const deleteAccount = () => {
    alert("ТЫ ЧО РИЛ ЭТО УДЛИТЬ ХОЧЕШЬ?");
  };

  return (
    <div>
      <Title style={{ textAlign: "center" }} type="secondary" level={2}>
        Фотографии
      </Title>
      <UploadingAvatars />
      <Form
        autoComplete="false"
        form={form}
        name={formName}
        layout="vertical"
        onFinish={getValues}
        requiredMark
      >
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Общие данные:
        </Title>
        <Form.Item name="username" label="Логин">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="e-mail">
          <Input />
        </Form.Item>
        <Form.Item name="name" label="Имя">
          <Input />
        </Form.Item>
        {/* <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item> */}
        <Title style={{ textAlign: "center" }} type="secondary" level={2}>
          Смена пароля:
        </Title>
        <Form.Item label="Старый пароль" name="newPassword">
          <Input.Password autoComplete="new-password" />
        </Form.Item>
        <Form.Item label="Новый пароль" name="newPassword">
          <Input.Password autoComplete="new-password" />
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            color="success"
            htmlType="submit"
            form={formName}
          >
            Сохранить
          </Button>
        </Form.Item>
        <Form.Item>
          <Button block danger onClick={deleteAccount} form={formName}>
            Удалить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormProfile;
