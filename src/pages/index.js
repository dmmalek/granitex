import Header from "@/component/global/Header";
import Hero from "@/component/Home/Hero";
import Footer from "@/component/global/Footer";
import Cta from "@/component/Home/Cta";
import Reviews from "@/component/Home/Reviews";
import Rooms from "@/component/Home/Rooms";
import About from "@/component/About/About";
import Featured from "@/component/global/Featured";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Rooms />
      <About />
      <Cta />
      <Reviews />
      <Footer />
    </div>
  );
};

export default index;
