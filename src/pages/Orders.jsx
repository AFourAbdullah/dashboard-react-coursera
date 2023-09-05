import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory, getOrders } from "../api";

const Orders = () => {
  const [dataSource, setdataSource] = useState(0);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    getOrders().then((res) => setdataSource(res.products));
    setloading(false);
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title
        level={3}
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}
      >
        Orders
      </Typography.Title>
      <Table
        style={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        dataSource={dataSource}
        pagination={{
          pageSize: 6,
          style: {
            display: "flex",
            justifyContent: "center",
          },
        }}
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
        ]}
      ></Table>
    </Space>
  );
};

export default Orders;
