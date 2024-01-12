import Header from "@/component/global/Header";
import Featured from "@/component/global/Featured";
import Rooms from "@/component/Home/Rooms";
import Cta from "@/component/Home/Cta";
import Footer from "@/component/global/Footer";
import Filters from "@/component/global/Filters";
import { useState } from "react";
const index = () => {
  const [filter, setFilter] = useState({});

  return (
    <>
      <Header />
      <Featured title="Property" />
      <Filters setFilter={setFilter} />
      <Rooms filter={filter} maxRoom={12} />
      <Cta />
      <Footer />
    </>
  );
};

export default index;
