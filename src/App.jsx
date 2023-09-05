import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Space } from "antd";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Footer } from "antd/es/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="SideMenuAndPageContent">
          <Sidebar />
          <Content />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
