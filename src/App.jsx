import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Space } from "antd";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Footer } from "antd/es/layout/layout";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </div>
  );
};

export default App;
