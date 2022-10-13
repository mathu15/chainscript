import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <section className="footer container">
      <p>© 2022 ChainScript.dev. All Rights Reserved.</p>
      <div className="social">
        <a href="#">
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-linkedin"></i>
          <i class="bx bxl-youtube"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;
