<script setup>
import { ref, computed } from 'vue';

// 模擬資料：每個公園對應一組圖片（一大兩小）
const parks = [
  {
    id: 1,
    name: '台南公園',
    // 示意圖
    imgs: [
      'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=800', // 大圖
      'https://images.unsplash.com/photo-1565036509653-c5f111585817?auto=format&fit=crop&q=80&w=400', // 小圖1
      'https://images.unsplash.com/photo-1623838804048-d9e262c2cb6f?auto=format&fit=crop&q=80&w=400'  // 小圖2
    ]
  },
  {
    id: 2,
    name: '開元振興公園',
    imgs: [
      'https://images.unsplash.com/photo-1496945465243-7f28e6787946?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1588665798950-891d4d292212?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 3,
    name: '東興公園',
    imgs: [
      'https://images.unsplash.com/photo-1501854140884-074bf86ee91c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1519331379826-fda8feb021d5?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 4,
    name: '小東公園',
    imgs: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=400'
    ]
  }
];

const activeIndex = ref(0);

// 切換 Tab
const setTab = (index) => {
  activeIndex.value = index;
};

// 上一張
const prevTab = () => {
  activeIndex.value = (activeIndex.value - 1 + parks.length) % parks.length;
};

// 下一張
const nextTab = () => {
  activeIndex.value = (activeIndex.value + 1) % parks.length;
};

// 取得當前顯示的公園資料
const currentPark = computed(() => parks[activeIndex.value]);
</script>

<template>
  <article class="s6" id="s6">
    <div class="wrapper">
      
      <div class="top-section">
        <div class="text-group">
          <h2>30萬坪四季綠海<br>遊憩賞居純萃生活</h2>
          <span class="line"></span>
          <p class="desc">
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
        <button class="nav-btn prev" @click="prevTab">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button class="nav-btn next" @click="nextTab">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>

        <transition name="fade" mode="out-in">
          <div class="img-grid" :key="activeIndex">
            <div class="grid-item item-main">
              <img :src="currentPark.imgs[0]" :alt="currentPark.name">
            </div>
            <div class="grid-item item-sub1">
              <img :src="currentPark.imgs[1]" :alt="currentPark.name">
            </div>
            <div class="grid-item item-sub2">
              <img :src="currentPark.imgs[2]" :alt="currentPark.name">
              <span class="park-label">{{ currentPark.name }}</span>
            </div>
          </div>
        </transition>
      </div>

    </div>
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
  background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png'); // 模擬紙質紋理
  
  // 手機版 Padding
  padding: sizem(50) sizem(20);

  // 電腦版 Padding
  @media (min-width: 768px) {
    padding: size(80) 0;
  }

  .wrapper {
    width: 100%;
    margin: 0 auto;
    
    @media (min-width: 768px) {
      max-width: size(1520);
    }
  }
}

// --- 頂部區域 (標題+按鈕) ---
.top-section {
  display: flex;
  flex-direction: column;
  margin-bottom: sizem(30);

  @media (min-width: 768px) {
    flex-direction: row; // 電腦版並排
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: size(40);
  }

  // 1. 文字群組
  .text-group {
    text-align: center;
    margin-bottom: sizem(30);

    @media (min-width: 768px) {
      text-align: left;
      width: 45%;
      margin-bottom: 0;
    }

    h2 {
      color: $color-title;
      font-weight: bold;
      line-height: 1.4;
      font-size: sizem(24);
      
      @media (min-width: 768px) {
        font-size: size(36);
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
        margin: size(20) 0 size(20) 0; // 靠左
      }
    }

    .desc {
      color: $color-text;
      font-size: sizem(14);
      line-height: 1.8;
      
      @media (min-width: 768px) {
        font-size: size(16);
      }
    }
  }

  // 2. 按鈕群組
  .tab-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: sizem(10);

    @media (min-width: 768px) {
      justify-content: flex-end;
      width: 50%;
      gap: size(15);
      padding-top: size(20); // 對齊視覺
    }

    button {
      border: 1px solid #ccc;
      background: transparent;
      border-radius: 50px;
      cursor: pointer;
      color: $color-text;
      transition: all 0.3s;
      
      // 手機版按鈕尺寸
      padding: sizem(8) sizem(20);
      font-size: sizem(14);

      // 電腦版按鈕尺寸
      @media (min-width: 768px) {
        padding: size(10) size(30);
        font-size: size(16);
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
    background: rgba(0,0,0,0.3);
    border: none;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;

    // 手機版箭頭大小
    width: sizem(40);
    height: sizem(40);
    &.prev { left: sizem(10); }
    &.next { right: sizem(10); }

    // 電腦版箭頭大小
    @media (min-width: 768px) {
      width: size(50);
      height: size(50);
      &.prev { left: size(20); }
      &.next { right: size(20); }
    }

    &:hover {
      background: rgba(0,0,0,0.6);
    }
    
    svg {
      width: 60%;
      height: 60%;
    }
  }
}

// 圖片 Grid 系統
.img-grid {
  display: grid;
  width: 100%;
  
  // 手機版佈局：兩欄，第一張圖跨兩欄 (一大在上，兩小在下)
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "main main"
    "sub1 sub2";
  gap: sizem(10);

  // 電腦版佈局：左右分邊 (左一大，右兩小直排)
  @media (min-width: 768px) {
    grid-template-columns: 65% 1fr; // 約 2:1 比例
    grid-template-rows: 1fr 1fr;    // 右邊兩張圖均分高度
    grid-template-areas: 
      "main sub1"
      "main sub2";
    gap: size(20);
    height: size(600); // 固定一個高度讓排版穩定
  }

  .grid-item {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  // 指定 Grid Area
  .item-main { 
    grid-area: main; 
    
    // 手機版大圖高度限制
    height: sizem(250); 
    @media (min-width: 768px) {
      height: 100%; // 電腦版跟隨 grid 高度
    }
  }
  
  .item-sub1 { 
    grid-area: sub1; 
    height: sizem(150);
    @media (min-width: 768px) { height: 100%; }
  }
  
  .item-sub2 { 
    grid-area: sub2; 
    height: sizem(150);
    @media (min-width: 768px) { height: 100%; }

    // 右下角文字標籤 (公園名稱)
    .park-label {
      position: absolute;
      bottom: sizem(10);
      right: sizem(10);
      color: #fff;
      font-size: sizem(12);
      text-shadow: 0 1px 3px rgba(0,0,0,0.8);
      
      @media (min-width: 768px) {
        bottom: size(15);
        right: size(15);
        font-size: size(14);
      }
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
</style>