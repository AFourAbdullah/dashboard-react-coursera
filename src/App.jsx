import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Space } from "antd";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Space>
        <Sidebar />
        <Content />
      </Space>
    </div>
  );
};

export default App;
