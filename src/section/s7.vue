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
          class="title-img"
          src="./s7/title.svg"
          alt="title"
        />
        <p>
          府城400年文化底蘊，孕育出世界頂尖大學-成功大學，知名校友遍及科技政商藝文各界，為台灣重要教育搖籃。「成大之森」驕傲立足成大首排，又鄰近台南明星高中台南一中，近享頂流學府濃郁書香。
        </p>
      </div>
    </div>
    <div class="bottom">
      <swiper
        :key="isMobile"
        :modules="modules"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="15"
        :loop="isMobile"
        :autoplay="isMobile ? {
          delay: 3000,
          disableOnInteraction: false
        } : false"
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
          <div class="card">
            <div class="img-box">
              <img
                :src="item.img"
                :alt="item.title"
              />
            </div>
            <p class="name">{{ item.title }}</p>
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
  background-color: #fff;
  z-index: 1;
  position: relative;

  .top {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    @media (min-width: 769px) {
      padding-top: size(160);
      padding-bottom: size(470);
      background-image: url(./s7/banner.png);
    }
  }

  .bottom {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: hard-light;
    @media (min-width: 769px) {
      padding-top: size(95);
      padding-bottom: size(125);
      padding-left: size(125);
      padding-right: size(145);
      background-image: url(./s7/bg.png);
    }
  }

  .school-swiper {
    .swiper-slide {
      width: auto !important;
      .card {
        .img-box {
          img {
            width: auto;
            height: sizem(120);
            @media (min-width: 769px) {
              height: size(240);
            }
          }
        }
      }
    }
  }
}
</style>
