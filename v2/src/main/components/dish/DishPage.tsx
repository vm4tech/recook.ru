import { ReactFC } from "../../../types/common/ReactFC";
import { observer } from "mobx-react-lite";
import { Col, Image, Layout, Row, Skeleton, Typography } from "antd";
import { LAYOUT_PADDING } from "../../utils/paddings";
import FormProfile from "../profile/FormProfile";
import { useStore } from "../../../hooks/useStore";
import { getImage } from "../../utils/randomer/RandomImages";

const { Title, Paragraph } = Typography;
const DishPage: ReactFC = () => {
  const { dishStore } = useStore();
  const { isLoading, name, description } = dishStore;

  return !isLoading ? (
    <>
      <Image
        preview={false}
        height={300}
        style={{
          objectFit: "cover",
        }}
        src={getImage()}
      />
      <Layout style={LAYOUT_PADDING}>
        <Row justify={"center"} style={LAYOUT_PADDING}>
          <Col span={12}>
            <Title style={{ textAlign: "left" }}>{name}</Title>
            <Paragraph>{description}</Paragraph>
          </Col>
        </Row>
      </Layout>
    </>
  ) : (
    <Layout>
      {" "}
      <Skeleton active />{" "}
    </Layout>
  );
};

export default observer(DishPage);
