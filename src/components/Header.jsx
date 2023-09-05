import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import React from "react";
import logo from "../assets/logodash.png";

const Header = () => {
  return (
    <div className="AppHeader">
      <Image src={logo} width={40} />
      <Typography.Title>Abdullah's Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default Header;
