import { useEffect } from "react";
import { Col, Image, Layout, Row, Typography } from "antd";
import { LAYOUT_PADDING } from "../../../utils/paddings";
import FormProfile from "./FormProfile";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { useCRUDSender } from "../../../../hooks/useCRUDSender";

const { Title } = Typography;
const Profile: React.FC = () => {
  const { error, loading, profile } = useTypedSelector(
    (state) => state.profileReducer
  );
  const { getProfile, updateProfile } = useActions();
  const sender = useCRUDSender(
    updateProfile,
    undefined,
    "Данные профиля успешно обновлены"
  );
  useEffect(() => {
    getProfile();
  }, []);
  return !loading ? (
    <Layout>
      <Image
        // preview={false}
        height={300}
        // onBlur={}
        style={{
          objectFit: "cover",
          filter: "blur(10px)",
          margin: "-5px -10px -10px -5px",
        }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Row justify={"center"} style={LAYOUT_PADDING}>
        <Col span={12}>
          <Title style={{ textAlign: "center" }}>Профиль</Title>
          <FormProfile profile={profile} sender={sender} />
        </Col>
      </Row>
    </Layout>
  ) : null;
};
export default Profile;
