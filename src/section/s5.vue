<script setup>
// 移除 images 物件，直接在 template 使用靜態路徑
</script>

<template>
  <article
    class="s5"
    id="s5"
  >
    <div class="wrapper">
      <div class="box-text">
        <div class="text-header">
          <h2>見證府城時尚風采<br />百貨商圈繁華匯聚</h2>
          <span class="line-deco"></span>
        </div>
        <p class="text-desc">
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
        <div class="caption"><span class="bar"></span>新光三越小北門店</div>
      </div>

      <div class="box-img item-2">
        <div class="img-wrap">
          <img
            src="./s5/pic02.jpg"
            alt="南紡購物中心"
          />
        </div>
        <div class="caption"><span class="bar"></span>南紡購物中心</div>
      </div>

      <div class="box-img item-3">
        <div class="img-wrap">
          <img
            src="./s5/pic03.jpg"
            alt="台南香格里拉&大遠百"
          />
        </div>
        <div class="caption"><span class="bar"></span>台南香格里拉&大遠百</div>
      </div>

      <div class="box-img item-4">
        <div class="img-wrap">
          <img
            src="./s5/pic04.jpg"
            alt="花園夜市"
          />
        </div>
        <div class="caption"><span class="bar"></span>花園夜市</div>
      </div>
    </div>
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
  // background-color: $color-bg;
  // 手機版使用 sizem
  padding: sizem(40) sizem(20);
  color: $color-white;
  overflow: hidden;

  // 電腦版覆蓋為 size
  @media (min-width: 768px) {
    padding: size(50) 0;
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
      gap: size(30);
      grid-template-columns: 28% 34% 1fr;
      grid-template-areas:
        'i1 i3 txt'
        'i2 i3 i4';
    }
  }
}

// --- 內容樣式 ---

// 1. 文字區塊
.box-text {
  grid-area: txt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // 手機版間距
  margin-bottom: sizem(20);

  @media (min-width: 768px) {
    align-items: flex-end;
    text-align: right;
    justify-content: flex-start;

    // 電腦版間距重設
    margin-bottom: 0;
    padding-left: size(40);
  }

  .text-header {
    // 手機版間距
    margin-bottom: sizem(20);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      align-items: flex-end;
      // 電腦版間距
      margin-bottom: size(20);
    }

    h2 {
      color: $color-gold;
      font-weight: bold;
      letter-spacing: 1.5px;
      line-height: 1.4;

      // 手機版字體
      font-size: sizem(24);
      margin-bottom: sizem(15);

      // 電腦版字體
      @media (min-width: 768px) {
        font-size: size(36);
        margin-bottom: size(15);
      }
    }

    .line-deco {
      display: block;
      background-color: $color-white;

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
    line-height: 1.8;
    text-align: center;
    max-width: 90%;

    // 手機版字體
    font-size: sizem(14);

    @media (min-width: 768px) {
      text-align: left;
      max-width: 100%;
      // 電腦版字體
      font-size: size(16);
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
    height: calc(100% - size(50));

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
      height: 3px;
      background: linear-gradient(90deg, transparent, $color-bar);

      // 手機版間距
      margin-right: sizem(10);

      // 移除 width: sizem(0);  <-- 刪除這行，不然手機版線條會消失或無法伸展

      // 電腦版間距
      @media (min-width: 768px) {
        margin-right: size(10);
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

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    justify-content: flex-end;
    .bar {
      order: 2;
      background: linear-gradient(90deg, $color-bar, transparent);
      margin-right: 0;
      margin-left: size(10);
    }
  }
}
</style>
