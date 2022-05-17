import React from "react";
import { Guard } from "@authing/react-ui-components";
// 引入 css 文件
import "@authing/react-ui-components/lib/index.min.css";

const GuardDemo = (props) => {
  // 替换你的 AppId
  const appId = "5d70d0e991fdd597019df70d";

  const { updateUser } = props;

  const onLogin = (user) => {
    updateUser(user);
  };

  return <Guard appId={appId} onLogin={onLogin} />;
}; 

export default GuardDemo;
