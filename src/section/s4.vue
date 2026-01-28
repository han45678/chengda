<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination, Autoplay];

import { computed, getCurrentInstance } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>

<template>
  <article class="s4" id="s4">
    <div class="header-group">
      <div class="main-titles" data-aos="fade-up" data-aos-delay="0">
        <img class="title" src="./s4/title.svg" alt="title" />
        <h3 class="font-['Noto_Sans_TC',serif]">台南車站+捷運綠線+北外環</h3>
      </div>
      <div class="desc-text" data-aos="fade-up" data-aos-delay="0">
        <p class="font-['Noto_Sans_TC',serif]" v-if="isMobile">
          位居台南市中心的核心，步行就到台南車站<br />四站就到南科，下樓就到捷運綠線G10預定站<br />約7分鐘直上北外環道，約15分接軌國道1號
        </p>
        <p class="font-['Noto_Sans_TC',serif]" v-else>
          位居台南市中心的核心，步行就到台南車站，四站就到南科，下樓就到捷運綠線G10預定站，約7分鐘直上北外環道，約15分接軌國道1號。
        </p>
      </div>
    </div>
    <div class="slider-container" data-aos="fade-up" data-aos-delay="200">
      <swiper :modules="modules" :slides-per-view="1.2" :space-between="20" :centered-slides="true" :loop="isMobile"
        :autoplay="isMobile
            ? {
              delay: 3000,
              disableOnInteraction: false
            }
            : false
          " :breakpoints="{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
            allowTouchMove: false
          }
        }" class="swiper">
        <swiper-slide>
          <div class="swiper_item">
            <div class="swiper_item_title font-['Noto_Sans_TC',serif]">台南火車站</div>
            <div class="swiper_item_img">
              <img src="./s4/pic01.jpg" alt="slide1" />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
              <div class="light"></div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="swiper_item">
            <div class="swiper_item_img bottom">
              <img src="./s4/pic02.jpg" alt="slide1" />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
              <div class="light"></div>
            </div>
            <div class="swiper_item_title bottom font-['Noto_Sans_TC',serif]">北環道路</div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="swiper_item">
            <div class="swiper_item_title font-['Noto_Sans_TC',serif]">國道1號</div>
            <div class="swiper_item_img">
              <img src="./s4/pic03.jpg" alt="slide1" />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
              <div class="light"></div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide v-if="isMobile">
          <div class="swiper_item">
            <div class="swiper_item_img bottom">
              <img src="./s4/pic01.jpg" alt="slide1" />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
              <div class="light"></div>
            </div>
            <div class="swiper_item_title bottom font-['Noto_Sans_TC',serif]">台南火車站</div>
          </div>
        </swiper-slide>

        <swiper-slide v-if="isMobile">
          <div class="swiper_item">
            <div class="swiper_item_title font-['Noto_Sans_TC',serif]">北環道路</div>
            <div class="swiper_item_img">
              <img src="./s4/pic02.jpg" alt="slide1" />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
              <div class="light"></div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide v-if="isMobile">
          <div class="swiper_item">
            <div class="swiper_item_img bottom">
              <img src="./s4/pic03.jpg" alt="slide1" />
              <p class="font-['Noto_Sans_TC',serif]">實景圖</p>
              <div class="light"></div>
            </div>
            <div class="swiper_item_title bottom font-['Noto_Sans_TC',serif]">國道1號</div>
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
        font-weight: 400;
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

          background: linear-gradient(0deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%);
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
            background: linear-gradient(180deg,
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0) 100%);
            padding-top: sizem(10);
            padding-bottom: sizem(80);

            @media (min-width: 769px) {
              padding-top: size(25);
              padding-bottom: size(160);
            }
          }
        }
/*
@keyframes light {
  0% {
    transform-origin: 100% 50%;
    transform: scale(0,.2);
  }
  60% {
    transform-origin: 100% 50%;
    transform: scale(0,.2);
  }
  80% {
    transform: scale(1,1);
  }
  100% {
    transform: scale(0,.2);
    transform-origin: 0% 50%;
  }
}
*/
@keyframes light1 {
  0% {
    transform: scale(0.01,1);
    opacity: 0;
  }
  50% {
    transform: scale(0.01,1);
    opacity: 0;
  }
  60% {
    transform: scale(.5,1);
    opacity: 1;
  }
  70% {
    transform: scale(1,1);
  }
  80% {
    transform: scale(1,1);
  }
  90% {
    transform: scale(.5,1);
    opacity: 1;
  }
  100% {
    transform: scale(0.01,1);
    opacity: 0;
  }
}
@keyframes light2 {
  0% {
          left: -50%;
  }
  50% {
          left: -50%;
  }
  100% {
          left: 50%;
  }
}

        .light {
          position: absolute;
          height: 2em;
          width: 100%;
          bottom: -1em;
          left: 0;
          // z-index: 5;
          transition: left 5s linear;
          background:
            radial-gradient(8% 5% at 50% 50%, #FFF 0%, #FFF0 100%),
            radial-gradient(5% 10% at 50% 50%, #FFFc 0%, #FFF0 100%),
            radial-gradient(15% 15% at 50% 50%, #FFFc 0%, #FFF0 100%),
            radial-gradient(15% 25% at 50% 50%, #17dcffcc 0%, #FFF0 100%),
            radial-gradient(20% 50% at 50% 50%, #17dcff66 0%, #FFF0 100%),
            radial-gradient(50% 3% at 50% 50%, #17dcff 0%, #FFF0 100%);
          animation: light1 4s linear infinite ,light2 4s linear infinite;
    transform-origin: 50% 50%;
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

            .light {
              top: -1em;
            }
          }
        }
      }
    }
  }
}
</style>