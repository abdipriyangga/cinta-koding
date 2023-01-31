import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props, { title }) => {
  document.title = title;
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
