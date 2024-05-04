import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import img1 from "./../../img/images/1.jpg";
import img2 from "./../../img/images/2.jpg";
import img3 from "./../../img/images/3.jpg";
import img4 from "./../../img/images/4.jpg";
import img5 from "./../../img/images/5.jpg";
import img6 from "./../../img/images/6-С.jpg";
import img7 from "./../../img/images/7-С.jpg";
import img8 from "./../../img/images/8-С.jpg";
import img9 from "./../../img/images/9-С.jpg";
import img10 from "./../../img/images/10-С.jpg";
import img11 from "./../../img/images/11-С.jpg";
import img12 from "./../../img/images/12-С.jpg";
import img13 from "./../../img/images/13-С.jpg";
import img14 from "./../../img/images/14-С.jpg";

const Slider = () => {
    return (
        <>
            <h1 className='title-1'>Диплом</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotete: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                // pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <img src={img1} alt='one' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='two' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='htree' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt='four' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt='fife' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt='six' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} alt='seven' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img8} alt='eight' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img9} alt='eight' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img10} alt='fife' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img11} alt='fife' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img12} alt='fife' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img13} alt='fife' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img14} alt='fife' />
                </SwiperSlide>
                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'></div>
                    <div className='swiper-button-next slider-arrow'></div>
                    {/* <div className='swiper-pagination'></div> */}
                </div>
            </Swiper>
        </>
    );
};

export default Slider;
