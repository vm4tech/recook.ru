import React from "react";

import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export const Dev: React.FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Извините, этот раздел находится в разработке."
      extra={
        <Button type="primary">
          <Link to="/">Назад</Link>
        </Button>
      }
    />
  );
};


