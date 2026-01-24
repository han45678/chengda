<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination, Autoplay];
</script>

<template>
  <article
    class="s4"
    id="s4"
  >
    <div class="header-group">
      <div class="main-titles">
        <img
          class="title"
          src="./s4/title.svg"
          alt="title"
          data-aos="fade-up"
          data-aos-delay="0"
        />
        <h3 class="font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="100">台南車站+捷運綠線+北外環</h3>
      </div>
      <div class="desc-text">
        <p class="font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="200">
          位居台南市中心的革新，步行就到台南車站，四站就到南科，下樓就到捷運綠線G10預定站，約7分鐘直上北外環道，約15分接軌國道1號。
        </p>
      </div>
    </div>
    <div class="slider-container" data-aos="fade-up">
      <swiper
        :modules="modules"
        :slides-per-view="1.2"
        :space-between="20"
        :centered-slides="true"
        :loop="false"
        :breakpoints="{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
            allowTouchMove: false
          }
        }"
        class="swiper"
      >
        <swiper-slide>
          <div class="swiper_item">
            <div class="swiper_item_title font-['Noto_Sans_TC',serif]">台南火車站</div>
            <div class="swiper_item_img">
              <img
                src="./s4/pic01.webp"
                alt="slide1"
              />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="swiper_item">
            <div class="swiper_item_img bottom">
              <img
                src="./s4/pic02.webp"
                alt="slide1"
              />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
            </div>
            <div class="swiper_item_title bottom font-['Noto_Sans_TC',serif]">北環道路</div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="swiper_item">
            <div class="swiper_item_title font-['Noto_Sans_TC',serif]">國道1號</div>
            <div class="swiper_item_img">
              <img
                src="./s4/pic03.webp"
                alt="slide1"
              />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  padding-top: sizem(70);
  padding-bottom: size(60);
  @media (min-width: 769px) {
    padding-top: size(200);
    padding-bottom: size(220);
  }

  .header-group {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 769px) {
      max-width: size(1240);
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: size(110);
    }

    .main-titles {
      text-align: center;
      .title {
        width: sizem(285);
        @media (min-width: 769px) {
          width: size(510);
        }
      }
      h3 {
        color: #fff;
        font-weight: 500;
        font-size: sizem(18);
        letter-spacing: sizem(3.24);
        margin-top: sizem(15);
        padding-bottom: sizem(80);
        @media (min-width: 769px) {
          padding-bottom: 0;
          font-size: size(32);
          letter-spacing: size(5.76);
          margin-top: size(20);
        }
      }
    }

    .desc-text {
      position: relative;
      &::after {
        content: '';
        background: #fff;
        position: absolute;
        width: sizem(1);
        height: sizem(48);
        left: 50%;
        transform: translateX(-50%);
        top: sizem(-65);

        @media (min-width: 769px) {
          width: size(1);
          height: size(48);
          left: size(-30);
          top: 50%;
          transform: translateY(-50%);
        }
      }
      @media (min-width: 769px) {
        max-width: size(620);
        margin-left: size(105);
      }
      p {
        color: #fff;
        font-weight: 500;
        line-height: 1.6;

        text-align: center;
        font-size: sizem(13);
        letter-spacing: sizem(0.91);
        width: sizem(310);
        margin-left: auto;
        margin-right: auto;
        margin-bottom: sizem(50);
        @media (min-width: 769px) {
          margin-bottom: 0;
          text-align: left;
          width: auto;
          font-size: size(18);
          letter-spacing: size(1.26);
        }
      }
    }
  }

  .slider-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 769px) {
      max-width: size(1480);
    }

    .swiper {
      @media (min-width: 769px) {
        padding-top: size(20);
        padding-bottom: size(20);
      }
      .swiper_item {
        .swiper_item_title {
          text-align: center;
          font-weight: 500;
          line-height: 1.6;
          color: #fff;

          padding-top: sizem(80);
          padding-bottom: sizem(10);

          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          background-blend-mode: overlay;


          font-size: sizem(12);
          letter-spacing: sizem(1.191);

          @media (min-width: 769px) {
            padding-top: size(160);
            padding-bottom: size(25);
            font-size: size(24);
            letter-spacing: size(2.4);
          }
          &.bottom {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            padding-top: sizem(10);
            padding-bottom: sizem(80);

            @media (min-width: 769px) {
              padding-top: size(25);
              padding-bottom: size(160);
            }
          }
        }
        .swiper_item_img {
          position: relative;
          img {
            width: 100%;
            height: auto;
            display: block;
          }
          p {
            position: absolute;
            color: #fff;
            font-weight: 500;
            line-height: 1.6;
            font-size: sizem(6);
            right: sizem(10);
            bottom: sizem(5);

            @media (min-width: 769px) {
              letter-spacing: size(1.4);
              font-size: size(14);
              right: size(10);
              bottom: size(5);
            }
          }

          &::after {
            content: '';
            position: absolute;

            background-image: url(./s4/light.png);
            background-size: cover;
            @media (min-width: 769px) {
              width: 90%;
              height: 90%;
              bottom: -31%;
              left: -12%;
            }
          }
          &.bottom {
            margin-top: sizem(50);
            @media (min-width: 769px) {
              margin-top: 0;
            }
            &::after {
              @media (min-width: 769px) {
                bottom: unset;
                top: -59%;
                left: -10%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
