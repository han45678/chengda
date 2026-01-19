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

// 模擬資料 (圖片請替換成實際路徑)
const features = ref([
  {
    id: 1,
    title: '台南火車站',
    img: 'https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?q=80&w=600&auto=format&fit=crop', // 示意圖
    textPos: 'top' // 控制文字在圖片上方
  },
  {
    id: 2,
    title: '北外環道路',
    img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=600&auto=format&fit=crop', // 示意圖
    textPos: 'bottom' // 控制文字在圖片下方
  },
  {
    id: 3,
    title: '國道1號',
    img: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=600&auto=format&fit=crop', // 示意圖
    textPos: 'top' // 控制文字在圖片上方
  }
]);
</script>

<template>
  <article class="s4" id="s4">
    <div class="container">
      <div class="header-group">
        <div class="main-titles">
          <h2>台南最強複合式交通捷境</h2>
          <h3>台南車站+捷運綠線+北外環</h3>
        </div>
        <div class="desc-text">
          <p>位居台南市中心的革新，步行就到台南車站，四站就到南科，下樓就到捷運綠線G10預定站，約7分鐘直上北外環道，約15分接軌國道1號。</p>
        </div>
      </div>

      <div class="slider-container">
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
              allowTouchMove: false, // 電腦版禁止拖曳，變成靜態佈局
            }
          }"
          class="my-swiper"
        >
          <swiper-slide v-for="item in features" :key="item.id">
            <div class="card" :class="`text-${item.textPos}`">
              <h4 class="card-title">{{ item.title }}</h4>
              <div class="img-box">
                <img :src="item.img" :alt="item.title" />
                <span class="img-label">實景圖</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    
    <div class="deco-leaf"></div>
  </article>
</template>

<style lang="scss" scoped>
// 變數設定
$color-gold: #cfa972;
$color-white: #ffffff;
$color-bg-start: #00264d; // 深藍漸層起始
$color-bg-end: #004080;   // 深藍漸層結束

.s4 {
  width: 100%;
  background: linear-gradient(135deg, $color-bg-start, $color-bg-end);
  position: relative;
  overflow: hidden;
  padding: 60px 0;
  color: $color-white;

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
}

// 標題區域樣式
.header-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .main-titles {
    margin-bottom: 20px;
    @media (min-width: 768px) {
      width: 50%;
      margin-bottom: 0;
      text-align: right;
      padding-right: 30px;
    }

    h2 {
      color: $color-gold;
      font-size: 24px;
      margin-bottom: 10px;
      letter-spacing: 2px;
      font-weight: bold;
      
      @media (min-width: 768px) {
        font-size: 32px;
      }
    }

    h3 {
      font-size: 18px;
      font-weight: normal;
      letter-spacing: 1px;
      
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
  }

  .desc-text {
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.9;
    
    @media (min-width: 768px) {
      width: 50%;
      padding-left: 30px;
      border-left: 1px solid rgba(255,255,255,0.3); // 中間的分隔線
    }
  }
}

// 卡片與 Swiper 樣式
.slider-container {
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  
  // 圖片容器
  .img-box {
    width: 100%;
    aspect-ratio: 4/3; // 保持圖片比例
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    // "實景圖" 標籤
    .img-label {
      position: absolute;
      bottom: 5px;
      right: 10px;
      font-size: 12px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    }
  }

  &:hover .img-box img {
    transform: scale(1.1);
  }

  .card-title {
    font-size: 18px;
    text-align: center;
    color: $color-white;
    letter-spacing: 1px;
    margin: 15px 0;
  }

  // 處理 "文字在上" 的樣式
  &.text-top {
    flex-direction: column; // 預設順序：標題 -> 圖片
    .card-title {
      margin-bottom: 15px;
      margin-top: 0;
    }
  }

  // 處理 "文字在下" 的樣式
  &.text-bottom {
    flex-direction: column-reverse; // 反轉順序：圖片 -> 標題
    .card-title {
      margin-top: 15px;
      margin-bottom: 0;
    }
  }
}

// 裝飾葉子 (用 CSS 簡單模擬)
.deco-leaf {
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #e0e0e0 0%, #b0b0b0 100%);
  opacity: 0.2;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  // 實際專案請用 background-image: url('leaf.png');
}

// Swiper 修正
:deep(.swiper-wrapper) {
  align-items: center; // 讓卡片垂直置中
}
</style>