import React from "react";

export const DisplayUserinfo = (props) => {
  const { userInfo } = props;

  return (
    <>
      <h2>用户信息</h2>

      {userInfo ? (
        <>
          <h4>id:</h4>
          <p>{userInfo.id}</p>
          {userInfo.username && (
            <>
              <h4>用户名:</h4>
              <p>{userInfo.username ?? ""}</p>
            </>
          )}
          {userInfo.email && (
            <>
              <h4>邮箱:</h4>
              <p>{userInfo.email ?? ""}</p>
            </>
          )}
          {userInfo.phone && (
            <>
              <h4>手机号:</h4>
              <p>{userInfo.phone ?? ""}</p>
            </>
          )}

          <h4>token:</h4>
          <p>{userInfo.token}</p>
          <h4>全部信息:</h4>
          <p>{JSON.stringify(userInfo)}</p>
        </>
      ) : (
        <span>请在左侧进行登录操作，登录成功后会在此显示用户信息。</span>
      )}
    </>
  );
};
