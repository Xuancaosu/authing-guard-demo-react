import "./App.css";
import { DisplayUserinfo } from "./ShowUserInfo/index";
import GuardDemo from "./Guard/index";
import React, { useState } from "react";

export const App = () => {
  const [user, setUser] = useState()

  return (
    <div className="App">
      <div className="guard-demo">
        <GuardDemo updateUser={(userInfo) => {setUser(userInfo)}} />
      </div>
      <div className="display-userinfo">
        <DisplayUserinfo userInfo={user}/>
      </div>
    </div>
  );
}