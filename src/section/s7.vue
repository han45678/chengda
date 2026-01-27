<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';

// 引入圖片資源 (Vite/Webpack 寫法)
// 確保圖片路徑正確，若在 public 資料夾可直接寫字串路徑
const slideData = [
  {
    img: new URL('./s7/pic01.png', import.meta.url).href,
    title: '台南一中實景圖'
  },
  {
    img: new URL('./s7/pic02.png', import.meta.url).href,
    title: '台南二中實景圖'
  },
  {
    img: new URL('./s7/pic03.png', import.meta.url).href,
    title: '成功國中實景圖'
  },
  {
    img: new URL('./s7/pic04.png', import.meta.url).href,
    title: '勝利國小實景圖'
  }
];

const modules = [Autoplay];

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>

<template>
  <article class="s7">
    <div class="top">
      <div class="text">
        <img
          class="title-img pc"
          src="./s7/title.svg"
          alt="title"
          data-aos="fade-up"
        />
        <img
          class="title-img m"
          src="./s7/title_m.svg"
          alt="title"
          data-aos="fade-up"
        />
        <p class="pc font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="200">
          府城400年文化底蘊，孕育出世界頂尖大學-
          成功大學，知名校友遍及科技政商藝文各界， 為台灣重要教育搖籃。
          「成大之森」驕傲立足成大首排， 又鄰近台南明星高中台南一中，
          近享頂流學府濃郁書香。
        </p>
        <p class="m font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="200">
          府城400年文化底蘊，孕育出世界頂尖大學<br />
          成功大學，知名校友遍及科技政商藝文各界<br />
          為台灣重要教育搖籃<br />
          「成大之森」驕傲立足成大首排<br />
          又鄰近台南明星高中台南一中<br />
          近享頂流學府濃郁書香
        </p>
      </div>
      <p class="detailed font-['Noto_Sans_TC',serif]" >成功大學實景圖</p>
    </div>
    <div class="bottom" data-aos="fade-up">
      <swiper
        :key="isMobile"
        :modules="modules"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="36"
        :loop="isMobile"
        :autoplay="
          isMobile
            ? {
                delay: 3000,
                disableOnInteraction: false
              }
            : false
        "
        :breakpoints="{
          769: {
            slidesPerView: 'auto',
            centeredSlides: false, // 取消置中
            centerInsufficientSlides: true,
            spaceBetween: 20, // 間距加大
            allowTouchMove: false // 禁止滑動 (變為靜態列表效果)
          }
        }"
        class="school-swiper"
      >
        <swiper-slide
          v-for="(item, index) in slideData"
          :key="index"
        >
          <div class="school-item">
            <div class="img-box">
              <img
                :src="item.img"
                :alt="item.title"
              />
            </div>
            <p class="name font-['Noto_Sans_TC',serif]">{{ item.title }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </article>
</template>

<style lang="scss">
// 假設這是您的全域 mixin 引入方式
@import '@/assets/style/function.scss';

// @media (min-width: 769px) {}

.s7 {
  background-color: #bad58d;
  z-index: 1;
  position: relative;
background-image: url(./s7/bgm.jpg);
background-size: cover;
    @media (min-width: 769px) {
background-image: url(./s7/bg.jpg);
    }
  .top {
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
 //   background-image: url(./s7/banner_m.jpg);
  background-size: cover;
    position: relative;
    padding-top: sizem(60);
    padding-bottom: sizem(185);
    @media (min-width: 769px) {
      padding-top: size(160);
      padding-bottom: size(500);
 //     background-image: url(./s7/banner.png);
    }

    .text {
      @media (min-width: 769px) {
        padding-left: size(200);
        padding-right: size(200);
      }
      .title-img {
        width: sizem(210);
        @media (min-width: 769px) {
          width: size(760);
                  margin: 0;
        }

        &.pc {
          display: none;
          @media (min-width: 768px) {
            display: block;
          }
        }
        &.m {
          display: block;
          @media (min-width: 768px) {
            display: none;
          }
        }
      }
      p {
        color: #262626;
        font-weight: 500;
        line-height: 1.6;
        text-align: center;
        font-size: sizem(13);
        position: relative;
        width: sizem(310);
        margin-left: auto;
        margin-right: auto;
        padding-top: sizem(90);
        @media (min-width: 769px) {
          width: size(700);
          text-align: left;
          font-size: size(18);
          letter-spacing: size(1.8);
          padding-top: size(130);
                  margin: 0;
        }
        &::before {
          content: '';
          background: #262626;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: sizem(48);
          top: sizem(20);
          @media (min-width: 769px) {
            width: 1px;
            height: size(48);
            top: size(40);
          }
        }

        &.pc {
          display: none;
          @media (min-width: 768px) {
            display: block;
          }
        }
        &.m {
          display: block;
          @media (min-width: 768px) {
            display: none;
          }
        }
      }
    }

    .detailed {
      position: absolute;
      color: #fff;
      font-size: sizem(12);
      font-weight: 500;
      line-height: 1.6;
      letter-spacing:.06em;
      bottom:-.8em;
      right: sizem(15);

      @media (min-width: 769px) {
        font-size: size(12);
        bottom: size(40);
        right: size(40);
      }
    }
  }

  .bottom {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: hard-light;
    padding-top: sizem(25);
    padding-bottom: sizem(0);
 //   background-image: url(./s7/bg_m.png);
    @media (min-width: 769px) {
      padding-top: size(95);
      padding-bottom: size(125);
      padding-left: size(125);
      padding-right: size(145);
   //   background-image: url(./s7/bg.png);
    }
  }

  .school-swiper {
    .swiper-slide {
      width: auto !important;
      .school-item {
        .img-box {
          img {
            width: auto;
            height: sizem(120);
            @media (min-width: 769px) {
              height: size(240);
            }
          }
        }
        .name {
          color: #fff;
          text-align: right;
          font-size: sizem(12);
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: 0.06em;
          margin-top: .8em;
          margin-bottom: 3em;
          position: relative;
          z-index: 3;
          @media (min-width: 769px) {
            font-size: size(14);
            letter-spacing:0.06em;

          }
        }
      }
&:after {
        content: '';
        display: block;
        width: sizem(100); 
        height:  sizem(135); 
        position: absolute;
        top:sizem(28);right: 0;transform: translateX(70%);
        background: linear-gradient(-90deg, #275a1c00 0%, #275a1c33 100%);
        @media (min-width: 769px) {
          width: size(238);top:size(56);
        height:size(250);
        }
    }
    &::before{
        content: '';
        display: block;
        position: absolute;
        top: 0;left: 0;transform: translateX(-100%);
        height: 100%;
        width: sizem(15);
        background: linear-gradient(0deg, #DBEDD700 0%, #6ca35f66 100%);
        @media (min-width: 769px) {
          width: size(32);
        }
    }
    }
  }
}
</style>
