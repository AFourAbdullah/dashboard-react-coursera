import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory } from "../api";

const Inventory = () => {
  const [dataSource, setdataSource] = useState(0);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    getInventory().then((res) => setdataSource(res.products));
    setloading(false);
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title
        level={3}
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}
      >
        Inventory
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
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
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
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
        ]}
      ></Table>
    </Space>
  );
};

export default Inventory;
