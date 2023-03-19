import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import * as S from "./styled";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {

    return (
        <S.SliderStyled>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">

                <SwiperSlide>
                    <S.Img src="./slider1.png" />
                </SwiperSlide>

                <SwiperSlide>
                    <S.Img src="./slider2.png" />
                </SwiperSlide>

                <SwiperSlide>
                    <S.Img src="./slider3.png" />
                </SwiperSlide>
            </Swiper>
        </S.SliderStyled>
    );
}