import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
  document.title = props.title;
  return (
    <>
      {props.type === "homepage" ? (
        <>
          <Header />
          <div>{props.children}</div>
        </>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
};

export default Layout;
