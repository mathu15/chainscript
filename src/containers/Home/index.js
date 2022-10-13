import React from "react";
import "./style.css";
import RecentPost from "./RecentPost";
import Footer from "../../components/Footer";
import MyCarousel from "./mycarousel/MyCarousel";

const Home = (props) => {
  return (
    <>
      <section>
        <MyCarousel />
        <RecentPost />
        <Footer />
      </section>
    </>
  );
};

export default Home;
