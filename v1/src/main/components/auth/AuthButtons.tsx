import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { dropCookies, isLoggined } from "../../utils/CookieUtils";
import { useState } from "react";

const AuthButtons: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <Space align={"center"}>
      {isLoggined() ? (
        <Button
          loading={loading}
          onClick={() => {
            setLoading(true);
            dropCookies().then(() => navigate(0));
          }}
          size={"large"}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button
            type="primary"
            onClick={() => navigate(`/login`)}
            size={"large"}
          >
            Log in
          </Button>
          <Button onClick={() => navigate(`/signup`)} size={"large"}>
            Sign up
          </Button>
        </>
      )}
    </Space>
  );
};

export default AuthButtons;
