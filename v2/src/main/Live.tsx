import { ReactFC } from "../types/common/ReactFC";
import { useStore } from "../hooks/useStore";
import { Typography } from "antd";
import { observer } from "mobx-react-lite";

const { Title } = Typography;
const Live: ReactFC = () => {
  const { liveStore } = useStore();
  return (
    <Title
      style={{ textAlign: "center" }}
      type="secondary"
      level={2}
      onClick={liveStore.getLive}
    >
      result - {liveStore.live}
    </Title>
  );
};

export default observer(Live);
