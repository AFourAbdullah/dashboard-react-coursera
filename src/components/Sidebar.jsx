import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("1");
  const [selectedKeys, setSelectedKeys] = useState("/");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
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
        selectedKeys={[selectedKeys]}
        style={{
          width: 256,
          height: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
          borderRadius: "20px",
          marginTop: "20px",
          marginLeft: "5px",
          fontSize: "20px",
        }}
        theme={theme}
        onClick={(item) => navigate(item.key)}
        items={[
          {
            label: "Dashboard",
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
