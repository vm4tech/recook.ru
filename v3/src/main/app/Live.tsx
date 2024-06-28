
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

export const Live: React.FC = () => {
  return (
    <Title
      style={{ textAlign: "center" }}
      type="secondary"
      level={2}

    >
      result - {}
    </Title>
  );
};
