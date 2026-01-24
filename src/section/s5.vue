<script setup>
</script>

<template>
  <article
    class="s5"
    id="s5"
  >
    <div class="wrapper">
      <div class="box-text">
        <div class="text-header">
          <img
            class="title-img"
            src="./s5/title.svg"
            alt="title"
          />
          <span class="line-deco"></span>
        </div>
        <p class="text-desc font-['Noto_Sans_TC',serif]">
          「成大之森」位居台南繁華核心，十幾分鐘車程內盡享台南便利商圈，7大百貨、4大夜市齊聚，繽紛百匯、餐飲、時尚、娛樂一次滿足，布局「成大之森」讓您輕鬆享受舒適與未來增值生活！
        </p>
      </div>

      <div class="box-img item-1">
        <div class="img-wrap">
          <img
            src="./s5/pic01.jpg"
            alt="新光三越小北門店"
          />
        </div>
        <div class="caption font-['Noto_Sans_TC',serif]"><span class="bar"></span>新光三越小北門店</div>
      </div>

      <div class="box-img item-2">
        <div class="img-wrap">
          <img
            src="./s5/pic02.jpg"
            alt="南紡購物中心"
          />
        </div>
        <div class="caption font-['Noto_Sans_TC',serif]"><span class="bar"></span>南紡購物中心</div>
      </div>

      <div class="box-img item-3">
        <div class="img-wrap">
          <img
            src="./s5/pic03.jpg"
            alt="台南香格里拉&大遠百"
          />
        </div>
        <div class="caption font-['Noto_Sans_TC',serif]"><span class="bar"></span>台南香格里拉&大遠百</div>
      </div>

      <div class="box-img item-4">
        <div class="img-wrap">
          <img
            src="./s5/pic04.jpg"
            alt="花園夜市"
          />
        </div>
        <div class="caption font-['Noto_Sans_TC',serif]"><span class="bar"></span>花園夜市</div>
      </div>
    </div>

    <img
      class="leaf leaf1"
      src="./s5/leaf1.png"
      alt="leaf"
    />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 顏色變數
$color-bg: #0f4c63;
$color-gold: #d4af78;
$color-white: #ffffff;
$color-bar: #3baee3;

.s5 {
  position: relative;
  padding: sizem(40) sizem(20);
  color: $color-white;
  overflow: visible;

  // 電腦版覆蓋為 size
  @media (min-width: 768px) {
    padding: size(50) 0 size(180) 0;
  }

  .wrapper {
    width: 100%;
    margin: 0 auto;
    display: grid;

    // --- 手機版 Grid (使用 sizem) ---
    gap: sizem(20);
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'txt txt'
      'i1  i3'
      'i2  i3'
      'i4  i4';

    // --- 電腦版 Grid (使用 size) ---
    @media (min-width: 768px) {
      max-width: size(1520);
      gap: size(20);
      grid-template-columns: 28% 34% 1fr;
      grid-template-areas:
        'i1 i3 txt'
        'i2 i3 i4';
    }
  }

  .leaf {
    position: absolute;
    &.leaf1 {
       width: sizem(75);
       top: sizem(30);
       left: 0 ;
      @media (min-width: 768px) {
        width: size(270);
        top: size(-200);
        left: 0;
      }
    }
  }
}

// --- 內容樣式 ---

// 1. 文字區塊
.box-text {
  grid-area: txt;

  // 手機版間距
  margin-bottom: sizem(20);

  @media (min-width: 768px) {
    text-align: center;

    // 電腦版間距重設
    margin-bottom: 0;
    padding-left: size(40);
  }

  .text-header {
    // 手機版間距
    margin-bottom: sizem(20);
    text-align: center;
    @media (min-width: 768px) {
      text-align: unset;
      margin-bottom: size(40);
    }

    .title-img {
      margin-bottom: sizem(15);
      width: sizem(205);
      @media (min-width: 768px) {
        width: size(375);
        margin-bottom: size(40);
      }
    }

    .line-deco {
      display: block;
      background-color: $color-white;
      margin: 0 auto;

      // 手機版線條
      width: 1px;
      height: sizem(40);

      // 電腦版線條
      @media (min-width: 768px) {
        height: size(60);
      }
    }
  }

  .text-desc {
    color: #fff;
    line-height: 1.6;
    font-weight: 500;
    text-align: center;

    font-size: sizem(12);

    @media (min-width: 768px) {
      text-align: left;
      font-size: size(18);
      letter-spacing: size(1.8) ;
    }
  }
}

// 2. 圖片區塊通用樣式
.box-img {
  display: flex;
  flex-direction: column;

  .img-wrap {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: calc(100% - size(30));

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s ease;
    }
  }

  &:hover .img-wrap img {
    transform: scale(1.1);
  }

  .caption {
    display: flex;
    align-items: center;
    color: $color-white;
    width: 100%; // [新增] 確保容器本身是滿版

    // 手機版文字與間距
    margin-top: sizem(10);
    font-size: sizem(14);

    // 電腦版文字與間距
    @media (min-width: 768px) {
      font-size: size(18);
      margin-top: size(15);
    }

    .bar {
      // [新增] 關鍵屬性：讓 Bar 佔據剩餘的所有空間
      flex: 1;

      display: block; // 建議改為 block 或保持 inline-block 皆可
      height: sizem(10);

      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.75) 100%
      );

      // 手機版間距
      margin-right: sizem(10);

      // 移除 width: sizem(0);  <-- 刪除這行，不然手機版線條會消失或無法伸展

      // 電腦版間距
      @media (min-width: 768px) {
        margin-right: size(10);
        height: size(10);
        // 移除 width: size(80); <-- 刪除這行
      }
    }

    // [選用優化] 防止文字被擠壓換行
    white-space: nowrap;
  }
}

// 3. 各個 Grid Area 指定
.item-1 {
  grid-area: i1;
}
.item-2 {
  grid-area: i2;
}
.item-3 {
  grid-area: i3;
}
.item-4 {
  grid-area: i4;
}
</style>
