import Header from "@/component/global/Header";
import Hero from "@/Home/Hero";
import Footer from "@/component/global/Footer";
import Cta from "@/Home/Cta";
import Reviews from "@/Home/Reviews";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cta />
      <Reviews />
      <Footer />
    </div>
  );
};

export default index;
