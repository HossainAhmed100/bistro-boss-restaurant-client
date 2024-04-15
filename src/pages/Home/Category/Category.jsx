import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Category.css';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Image } from '@nextui-org/react';

function Category() {
  return (
    <section className='menuCategory'>
      <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11:00am to 10:00pm---"}/>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      // centeredSlides={true}
      pagination={{clickable: true,}}
      modules={[Pagination]}
      className="mySwiper mb-8"
    >
      <SwiperSlide>
        <Image isZoomed src={slide1}  alt="Salads"/>
        <h3 className='text-4xl uppercase absolute -mt-16 text-white drop-shadow m-auto z-50'>
          Salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <Image isZoomed src={slide3}  alt="Pizzas"/>
        <h3 className='text-4xl uppercase absolute -mt-16 text-white drop-shadow m-auto z-50'>
          Pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <Image isZoomed src={slide2}  alt="Soups"/>
        <h3 className='text-4xl uppercase absolute -mt-16 text-white drop-shadow m-auto z-50'>
          Soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <Image isZoomed src={slide4}  alt="Desserts"/>
        <h3 className='text-4xl uppercase absolute -mt-16 text-white drop-shadow m-auto z-50'>
          Desserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <Image isZoomed src={slide5}  alt="Pizzas"/>
        <h3 className='text-4xl uppercase absolute -mt-16 text-white drop-shadow m-auto z-50'>
        Pizzas
        </h3>
      </SwiperSlide>
    </Swiper>
    </section>
  )
}

export default Category
