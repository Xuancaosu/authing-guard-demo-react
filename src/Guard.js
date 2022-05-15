import React from "react";
import { Guard } from "@authing/react-ui-components";
// 引入 CSS 文件
import "@authing/react-ui-components/lib/index.min.css";

const GuardDemo = () => {
  const appId = "5d70d0e991fdd597019df70d";

  const onLogin = (userInfo) => {
    console.log(userInfo);
  };

  return <Guard appId={appId}  onLogin={onLogin} />;
}

export default GuardDemo;