import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("1");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        style={{
          marginLeft: "5px",
        }}
      />
      <Menu
        style={{
          width: 256,
          height: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "60px",
          borderRadius: "20px",
          marginTop: "20px",
          marginLeft: "5px",
        }}
        theme={theme}
        onClick={(item) => navigate(item.key)}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default Sidebar;
