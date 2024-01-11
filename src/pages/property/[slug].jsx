import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/component/global/Header";
import Footer from "@/component/global/Footer";
import GalleryImage from "@/component/Property/GalleryImage";
import Property from "@/component/Property/Property";

const SingleProperty = () => {
  const [room, setRoom] = useState({});
  const [gallery, setGallery] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchSingleProperty = async () => {
      try {
        if (slug) {
          const res = await axios.get(
            `http://localhost:1337/api/rooms/${slug}?populate=*`
          );
          setRoom(res?.data?.data);
          const images = res?.data?.data?.attributes?.Gallery?.data?.map(
            (item) => item?.attributes?.url
          );
          setGallery(images);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchSingleProperty();
  }, [slug]);

  return (
    <>
      <Header />
      <GalleryImage gallery={gallery} />
      <Property data={room} />
      <Footer />
    </>
  );
};

export default SingleProperty;
