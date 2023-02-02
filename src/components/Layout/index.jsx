/* eslint-disable react/prop-types */
import React from "react";
import Header from "../Header";

const Layout = (props) => {
  document.title = props.title;
  return (
    <>
      {props.type === "homepage" ? (
        <>
          <Header />
          <div>{props.children}</div>
        </>
      ) : props.type === "afterLogin" ? (
        <>
          <Header name={props.name} typeHeader="afterLogin" />
          <div>{props.children}</div>
        </>
      ) : (
        <>
          <div>{props.children}</div>
        </>
      )}
    </>
  );
};

export default Layout;
