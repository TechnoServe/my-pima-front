import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/techno-logo-transparent.png"}
        alt="technoServe-logo"
        style={{
          width: "200px",
          height: "auto",
          marginBottom: "40px",
        }}
      />
      <h1>404</h1>
      <em>Page Not Found</em>
    </div>
  );
};

export default NotFound;
