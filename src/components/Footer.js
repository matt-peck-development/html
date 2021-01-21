import React from "react";
import image from "../../assets/logo-dark-bg.png";

export default function Footer() {
  return (
    <footer>
      <img src={image} alt="logo" />
      <span>
        © {new Date().getFullYear()} Matt Peck Development, LLC. All rights
        reserved.
      </span>
    </footer>
  );
}
