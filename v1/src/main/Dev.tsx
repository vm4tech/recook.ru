import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Dev: React.FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Извините, этот раздел находится в разработке."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
};

export default Dev;
