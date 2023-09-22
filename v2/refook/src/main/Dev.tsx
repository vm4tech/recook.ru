import { Button, Result } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";

const Dev: React.FC = () => {
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

export default observer(Dev);
