<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// --- 修改這一段 ---
import { Pagination, Autoplay } from 'swiper'; 
// ----------------

import 'swiper/css';
import 'swiper/css/pagination';

// modules 變數不用變
const modules = [Pagination, Autoplay];

// 模擬資料 (圖片請替換為實際專案路徑)
const schools = [
  {
    id: 1,
    name: '台南一中實景圖',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: '台南二中實景圖',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: '成功國中實景圖',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: '勝利國小實景圖',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400'
  }
];

// 背景大圖 (成功大學榕樹)
const bgImage = 'https://images.unsplash.com/photo-1596436579294-8cb314545cc5?auto=format&fit=crop&q=80&w=1920';

</script>

<template>
  <article class="s7" id="s7">
    <div class="bg-layer" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    
    <div class="gradient-mask"></div>

    <div class="wrapper">
      <div class="text-group">
        <h2>出將入相菁英沃土<br>頂流學府世界搖籃</h2>
        <span class="line"></span>
        <div class="desc">
          <p>府城400年文化底蘊，孕育出世界頂尖大學</p>
          <p>成功大學，知名校友遍及科技政商藝文各界</p>
          <p>為台灣重要教育搖籃</p>
          <p>「成大之森」驕傲立足成大首排</p>
          <p>又鄰近台南明星高中台南一中</p>
          <p>近享頂流學府濃郁書香</p>
        </div>
      </div>

      <div class="school-swiper">
        <div class="main-scene-label">成功大學實景圖</div>

        <swiper
          :modules="modules"
          :slides-per-view="1.5"
          :centered-slides="true"
          :space-between="15"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            768: {
              slidesPerView: 4,     // 電腦版一次看4張
              centeredSlides: false, // 電腦版不置中，從左排到右
              spaceBetween: 30
            }
          }"
          class="my-swiper"
        >
          <swiper-slide v-for="item in schools" :key="item.id">
            <div class="card">
              <div class="img-box">
                <img :src="item.img" :alt="item.name">
              </div>
              <p class="name">{{ item.name }}</p>
            </div>
          </swiper-slide>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 變數
$color-white: #ffffff;
$color-line: #333; // 深色線條
$text-shadow: 0 2px 4px rgba(0,0,0,0.5); // 文字陰影增加可讀性

.s7 {
  position: relative;
  width: 100%;
  overflow: hidden;
  color: $color-white;

  // 高度設定：手機版給定最小高度，電腦版依內容撐開或固定
  min-height: sizem(800); 
  @media (min-width: 768px) {
    min-height: size(900);
  }

  // 背景圖處理
  .bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center bottom; // 對齊底部樹木
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
  }

  // 底部漸層 (讓底部白色文字清楚)
  .gradient-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(34, 139, 34, 0.9) 0%, rgba(34, 139, 34, 0) 100%);
    z-index: 1;
    pointer-events: none;
  }

  .wrapper {
    position: relative;
    z-index: 2; // 確保內容在背景之上
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // 上下分佈
    
    // Padding 設定
    padding-top: sizem(60);
    padding-bottom: sizem(40);
    
    @media (min-width: 768px) {
      max-width: size(1520);
      margin: 0 auto;
      padding-top: size(100);
      padding-bottom: size(60);
    }
  }
}

// 1. 文字區域
.text-group {
  text-align: center;
  
  @media (min-width: 768px) {
    // 電腦版如果想靠左，可在此調整
    padding-left: size(50);
    text-align: left; 
  }

  h2 {
    font-size: sizem(26);
    font-weight: bold;
    line-height: 1.4;
    text-shadow: $text-shadow;
    letter-spacing: 2px;

    @media (min-width: 768px) {
      font-size: size(40);
    }
  }

  .line {
    display: block;
    width: 1px;
    height: sizem(40);
    background-color: #333; // 依設計圖看是深色線
    margin: sizem(20) auto;

    @media (min-width: 768px) {
      height: size(60);
      margin: size(30) 0 size(30) size(20); // 靠左對齊時的 margin
      // 如果電腦版也是置中，則用 margin: size(30) auto;
    }
  }

  .desc {
    font-size: sizem(14);
    line-height: 1.8;
    text-shadow: $text-shadow;
    font-weight: 500;

    @media (min-width: 768px) {
      font-size: size(16);
    }
    
    p {
      margin: 0;
    }
  }
}

// 2. 底部輪播區
.school-swiper {
  width: 100%;
  position: relative;
  margin-top: sizem(50); // 與上方文字拉開距離

  @media (min-width: 768px) {
    margin-top: auto; // 推到底部
  }

  // 右下角標籤 "成功大學實景圖"
  .main-scene-label {
    position: absolute;
    top: sizem(-30);
    right: sizem(20);
    font-size: sizem(12);
    text-shadow: $text-shadow;
    
    @media (min-width: 768px) {
      top: size(-40);
      right: 0;
      font-size: size(14);
    }
  }

  // Swiper 本體樣式
  .my-swiper {
    padding-bottom: sizem(30); // 預留空間給 pagination 或 shadow
    
    @media (min-width: 768px) {
      padding-bottom: size(20);
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-box {
      width: 100%;
      aspect-ratio: 16/10;
      overflow: hidden;
      border: 2px solid rgba(255,255,255,0.8);
      border-radius: 4px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }
    }

    .name {
      margin-top: sizem(10);
      font-size: sizem(13);
      text-shadow: $text-shadow;
      
      @media (min-width: 768px) {
        margin-top: size(15);
        font-size: size(15);
      }
    }

    &:hover .img-box img {
      transform: scale(1.1);
    }
  }

  // 調整 Swiper 箭頭顏色
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #fff;
    width: sizem(30);
    height: sizem(30);
    
    &::after {
      font-size: sizem(20);
    }

    @media (min-width: 768px) {
      display: none; // 電腦版如果不需要箭頭可隱藏，或調整大小
    }
  }
}
</style>