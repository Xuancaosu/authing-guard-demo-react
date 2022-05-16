import React, { useState } from "react";
import { AuthenticationClient, Guard } from "@authing/react-ui-components";
// 引入 css 文件
import "@authing/react-ui-components/lib/index.min.css";

const GuardDemo = (props) => {
  const appId = "5d70d0e991fdd597019df70d";

  const { updateUser } = props;

  const [client, setClient] = useState<AuthenticationClient>();

  const onLogin = (user, client) => {
    updateUser(user);

    console.log(user);

    setClient(client);
  };

  const onLogout = async () => {
    // await client.logout()

    const user = await client.getCurrentUser()

    console.log(user)

    updateUser(null);
  }

  return (
    <>
      <Guard appId={appId} onLogin={onLogin} />
      {client && <button  className='btn' onClick={onLogout}>登出</button>}
    </>
  );
};

export default GuardDemo;
