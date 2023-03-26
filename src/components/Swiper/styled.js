import styled from "styled-components"

export const SliderStyled = styled.div`
margin-top: 82px;
cursor: pointer;
.swiper {
  width: 1200px;
  height: 100%;
  @media screen and (min-width: 767px) and (max-width: 1077px) {
  width: 700px;
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) and (max-width: 1077px) {
  width: 700px;
  }
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet-active {
     background-color: var(--color-orange) !important;
}
`
export const Img = styled.img`
width: 100%;
height:100%;
`
