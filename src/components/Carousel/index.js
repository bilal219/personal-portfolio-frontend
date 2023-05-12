import Button from "@/commons/Button";
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      draggable={true}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {/* 1 */}
        <div className="portfolio-content grid">
          <img
            src="/assets/images/portfolio1.jpg"
            alt=""
            className="portfolio-img"
          />
          <div className="portfolio-data">
            <h3 className="portfolio-title">Modern website</h3>
            <p className="portfolio-description">
              nothin jest checking my text in theis section
            </p>
            <Button
              btnClass={" portfolio-btn"}
              btnText={"Demo"}
              iconClass={"uil uil-arrow-right"}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 1 */}
        <div className="portfolio-content grid">
          <img
            src="/assets/images/portfolio2.jpg"
            alt=""
            className="portfolio-img"
          />
          <div className="portfolio-data">
            <h3 className="portfolio-title">Modern website</h3>
            <p className="portfolio-description">
              nothin jest checking my text in theis section
            </p>
            <Button
              btnClass={" portfolio-btn"}
              btnText={"Demo"}
              iconClass={"uil uil-arrow-right"}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 1 */}
        <div className="portfolio-content grid">
          <img
            src="/assets/images/portfolio2.jpg"
            alt=""
            className="portfolio-img"
          />
          <div className="portfolio-data">
            <h3 className="portfolio-title">Modern website</h3>
            <p className="portfolio-description">
              nothin jest checking my text in theis section
            </p>
            <Button
              btnClass={" portfolio-btn"}
              btnText={"Demo"}
              iconClass={"uil uil-arrow-right"}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
