import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import logo from "../assets/logodash.png";
import { getComments, getOrders } from "../api";

const Header = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="AppHeader">
      <Image src={logo} width={40} height={40} style={{ objectFit: "cover" }} />
      <Typography.Title style={{ color: "white" }}>Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length}>
          <MailOutlined
            style={{ fontSize: 24, color: "white" }}
            onClick={() => setCommentsOpen(!commentsOpen)}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24, color: "white", marginLeft: "10px" }}
            onClick={() => setNotificationsOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default Header;
