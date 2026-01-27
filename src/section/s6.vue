<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'

// 圖片資料（你原本的 parks 直接沿用）
import pic01 from './s6/pic01.jpg';
import pic02 from './s6/pic02.jpg';
import pic03 from './s6/pic03.jpg';
import pic04 from './s6/pic04.jpg';

import pic01m from './s6/pic01m.jpg';
import pic02m from './s6/pic02m.jpg';
import pic03m from './s6/pic03m.jpg';
import pic04m from './s6/pic04m.jpg';

// 模擬資料：每個公園對應一組圖片（一大兩小）
const parks = [
  {
    id: 1,
    name: '台南公園',
    img_m: pic01m,
    img_pc: pic01,
    text: '台南公園實景圖'
  },
  {
    id: 2,
    name: '開元振興公園',
    img_m: pic02m,
    img_pc: pic02,
    text: '開元振興公園實景圖'
  },
  {
    id: 3,
    name: '東興公園',
    img_m: pic03m,
    img_pc: pic03,
    text: '東興公園實景圖'
  },
  {
    id: 4,
    name: '小東公園',
    img_m: pic04m,
    img_pc: pic04,
    text: '小東公園實景圖'
  }
];
const activeIndex = ref(0)
const swiperRef = ref(null)

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex
}
const setTab = (index) => {
  swiperRef.value?.slideToLoop(index)
}

const prev = () => {
  swiperRef.value?.slidePrev()
}

const next = () => {
  swiperRef.value?.slideNext()
}

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>



<template>
  <article class="s6" id="s6">
    <div class="wrapper">
      <div class="top-section">
        <div class="text-group">
          <img class="title-img pc" src="./s6/title.svg" alt="title" data-aos="fade-up" />
          <img class="title-img m" src="./s6/title_m.svg" alt="title" data-aos="fade-up" />
          <span class="line" alt="title" data-aos="fade-up" data-aos-delay="200"></span>
          <p class="desc font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
            成功大學第一排，無可取代的位置<br />
            開窗坐享25萬坪頂尖人文綠色流域<br />
            後擁台南公園百年翠綠<br />
            集古蹟、自然、文化、歷史於一身<br />
            4萬餘坪的城市森林，成大之森獨擁綠色奢華<br />獻給品味不凡的靈魂。
          </p>
          <p class="desc font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="400" v-else>
            成功大學第一排，無可取代的位置，開窗坐享25萬坪頂尖人文綠色流域，後擁台南公園百年翠綠，集古蹟、自然、文化、歷史於一身4萬餘坪的城市森林，成大之森獨擁綠色奢華，獻給品味不凡的靈魂。
          </p>
        </div>

        <div class="tab-buttons">
  <button
    v-for="(park, index) in parks"
    :key="park.id"
    :class="{ active: activeIndex === index }"
    @click="setTab(index)"
  >
    {{ park.name }}
  </button>
</div>
      </div>
      <div class="gallery-container">
        <button class="nav-btn prev" @click="prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="-6 0 17 17" fill="none">
            <path d="M0.246276 15.8394L7.86694 8.21869L0.246277 0.235128" stroke="#251D1B" stroke-width="0.680653" />
          </svg></button>
        <button class="nav-btn next" @click="next">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="-6 0 17 17" fill="none">
            <path d="M0.246276 15.8394L7.86694 8.21869L0.246277 0.235128" stroke="#251D1B" stroke-width="0.680653" />
          </svg></button>

        <swiper 
  @swiper="(s) => (swiperRef = s)"
  @slideChange="onSlideChange"
  :modules="modules"
  :slides-per-view="1"
  :space-between="15"
  :loop="true"
  :autoplay="{
    delay: 3500,
    disableOnInteraction: false
  }"
  class="s6-swiper">
          <swiper-slide v-for="(park) in parks" :key="park.id">
            <div class="img-box">
              <img :src="park.img_m" v-if="isMobile" />
              <img :src="park.img_pc" v-else />
              <p>{{ park.text }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>


    </div>

    <img class="leaf leaf2" src="./s6/leaf2.png" alt="leaf" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 顏色變數
$color-bg: #f2f2f2; // 模擬紙質背景底色
$color-title: #005a87; // 深藍色標題
$color-btn-active: #1f7fa8; // 按鈕選中色
$color-btn-text: #333;
$color-text: #444;

.s6 {
  z-index: 1;
  position: relative;
  background-color: $color-bg;
  background-image: url(./s6/bgm.jpg); // 模擬紙質紋理
  background-size: cover;

  // 手機版 Padding
  padding: sizem(50) 0 sizem(30) 0;

  // 電腦版 Padding
  @media (min-width: 768px) {
    background-image: url(./s6/bg.jpg); // 模擬紙質紋理
    padding: size(185) 0 size(80) 0;
  }

  .wrapper {
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: size(1780);
    }
  }

  .leaf {
    position: absolute;
    animation: sway 15s ease-in-out infinite;

    &.leaf2 {
      width: sizem(75);
      top: sizem(15);
      right: sizem(-20);

      @media (min-width: 768px) {
        width: size(220);
        top: size(-125);
        right: size(-20);
      }
    }
  }
}

// --- 頂部區域 (標題+按鈕) ---
.top-section {
  display: flex;
  flex-direction: column;
  margin-bottom: sizem(30);
  padding-left: sizem(15);
  padding-right: sizem(15);

  @media (min-width: 768px) {
    flex-direction: row; // 電腦版並排
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: size(50);
    padding-left: size(130);
    padding-right: size(15);
  }

  // 1. 文字群組
  .text-group {
    text-align: center;
    margin-bottom: sizem(30);

    @media (min-width: 768px) {
      text-align: left;
      width: size(730);
      margin-bottom: 0;
    }

    .title-img {
      width: sizem(210);

      @media (min-width: 768px) {
        width: 100%;
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

    .line {
      display: block;
      width: 1px;
      height: sizem(40);
      background-color: #999;
      margin: sizem(15) auto; // 置中

      @media (min-width: 768px) {
        height: size(50);
        margin: size(20) auto size(20) auto; // 靠左
      }
    }

    .desc {
      color: $color-text;
      font-size: sizem(13);
      line-height: 1.8;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: size(18);
        letter-spacing: 0.06em;
      }
    }
  }

  // 2. 按鈕群組
  .tab-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: sizem(5);

    @media (min-width: 768px) {
      justify-content: flex-end;
      gap: size(15);
      margin-top: auto;
      padding-bottom: size(10);
    }

    button {
      border: 1px solid #ccc;
      background: transparent;
      border-radius: 50px;
      cursor: pointer;
      color: $color-text;
      transition: all 0.3s;
      background-color: #fff;
      line-height: 1.6;
      font-weight: 500;

      // 手機版按鈕尺寸
      padding: sizem(8) sizem(12.5);
      font-size: sizem(12);

      // 電腦版按鈕尺寸
      @media (min-width: 768px) {
        padding: size(20) size(35);
        font-size: size(20);
      }

      &:hover {
        border-color: $color-btn-active;
        color: $color-btn-active;
      }

      &.active {
        background-color: $color-btn-active;
        color: #fff;
        border-color: $color-btn-active;
        box-shadow: 0 4px 10px rgba($color-btn-active, 0.3);
      }
    }
  }
}

// --- 圖片展示區 ---
.gallery-container {
  position: relative;
  width: 100%;

  // 左右箭頭按鈕
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(255, 255, 255, 0.58);
    box-shadow: 0 1.815px 1.815px 0 rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;

    // 手機版箭頭大小
    width: sizem(24);
    height: sizem(24);

    &.prev {
      left: sizem(10);
    }

    &.next {
      right: sizem(10);
    }

    // 電腦版箭頭大小
    @media (min-width: 768px) {
      width: size(50);
      height: size(50);

      &.prev {
        left: size(20);
      }

      &.next {
        right: size(20);
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }

    svg {
      width: sizem(17);
      height: sizem(16);
      stroke: #251D1B;
      stroke-width: 0.681px;

      @media (min-width: 768px) {
        width: size(35);
        height: size(35);
      }
    }

    &.prev svg {
      transform: rotate(180deg);
    }
  }
}

// 圖片展示
.img-box {
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (min-width: 768px) {
      height: size(600);
    }

    &.m {
      display: block;

      @media (min-width: 768px) {
        display: none;
      }
    }

    &.pc {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  p {
    color: #fff;
    font-weight: 500;
    line-height: 1.6;
    position: absolute;
    font-size: sizem(8);
    letter-spacing: sizem(0.8);
    right: sizem(10);
    bottom: sizem(10);

    @media (min-width: 768px) {
      font-size: size(14);
      letter-spacing: size(1.4);
      right: size(10);
      bottom: size(10);
    }
  }
}

// Vue Transition 動畫 (淡入淡出)
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes sway {
  0% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(-5deg);
  }
}
</style>
