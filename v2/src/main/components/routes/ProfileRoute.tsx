import { useEffect } from "react";
import { Col, Image, Layout, Row, Typography } from "antd";
import {useSender} from "../../../hooks/useSender";
import {useStore} from "../../../hooks/useStore";
import {LAYOUT_PADDING} from "../../utils/paddings";
import FormProfile from "../profile/FormProfile";
import {observer} from "mobx-react-lite";

const { Title } = Typography;
const ProfileRoute: React.FC = () => {
  const {profileStore} = useStore();
  const {getProfile, isLoading, avatar} = profileStore;
  const getProfileSender = useSender(getProfile);
  useEffect(() => {
    getProfileSender()
        .then(r => console.warn("LOG!!!", r))
        .catch(err => console.error("ERRR", err));
  }, []);
  return !isLoading ? (
    <Layout>
      <Image
        // preview={false}
        height={300}
        // onBlur={}
        style={{
          objectFit: "cover",
          filter: "blur(0.5px)",
          margin: "-5px -10px -10px -5px",
        }}
        src={avatar ? avatar : "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
      />
      <Row justify={"center"} style={LAYOUT_PADDING}>
        <Col span={12}>
          <Title style={{ textAlign: "center" }}>Профиль</Title>
          <FormProfile />
        </Col>
      </Row>
    </Layout>
  ) : null;
};
export default observer(ProfileRoute);
