import { Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <Typography.Link href="tel:+12345678">+12345678</Typography.Link>
      <Typography.Link href="www.google.com" target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="www.google.com" target="_blank">
        Terms Of User
      </Typography.Link>
    </div>
  );
};

export default Footer;
