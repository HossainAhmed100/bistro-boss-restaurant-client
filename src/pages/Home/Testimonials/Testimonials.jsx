import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import QuotePng from "../../../assets/icon/quote.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])
  return (
    <section>
      <SectionTitle heading={"TESTIMONIALS"} subHeading={"---What Our Clients Say---"}/>
      <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(item => <SwiperSlide key={item._id}>
            <div className="m-24 flex flex-col items-center ">
            <Rating style={{ maxWidth: 180 }} value={item.rating} />
            <img src={QuotePng} alt="QuotePng" className="w-20 my-8"/>
            <p>{item.details}</p>
            <h3 className="text-2xl text-orange-400">{item.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
