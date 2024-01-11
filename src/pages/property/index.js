import Header from "@/component/global/Header";
import Featured from "@/component/global/Featured";
import Rooms from "@/component/Home/Rooms";
import Cta from "@/component/Home/Cta";
import Footer from "@/component/global/Footer";
import Filters from "@/component/global/Filters";
const index = () => {
  return (
    <>
      <Header />
      <Featured title="Property" />
      <Filters />
      <Rooms />
      <Cta />
      <Footer />
    </>
  );
};

export default index;
