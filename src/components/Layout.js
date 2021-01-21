import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import "normalize.css";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {/* <Typography /> */}
      <Nav />
      {children}
      <Footer />
    </>
  );
}
