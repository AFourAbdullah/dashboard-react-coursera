import React from "react";
import { Route, Routes } from "react-router-dom";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";
import Orders from "../pages/Orders";
import Dashboard from "../pages/Dashboard";

const Content = () => {
  return (
    <div className="PageContent">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default Content;
