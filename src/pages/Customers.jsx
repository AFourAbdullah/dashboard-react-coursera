import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory, getUsers } from "../api";

const Customers = () => {
  const [dataSource, setdataSource] = useState(0);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    getUsers().then((res) => setdataSource(res.users));
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
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
      ></Table>
    </Space>
  );
};

export default Customers;
