<template>
  <article
    class="s3"
    id="s3"
  >
    <div class="text">
      <div class="pic">
        <img
          src="./s3/pic.jpg"
          alt="pic"
        />
      </div>
      <img
        src="./s3/t1.svg"
        alt="title"
      />
      <p>
        台南門戶計畫因半導體及世界AI巨擘擴大投資台南而生，台南車站4站距離可抵南科與高鐵，透過交通轉運與科技發展緊密串連。
      </p>
      <p>
        台南門戶計畫主要結合了鐵路地下化、車站TOD再造計畫、三座商業大樓(8萬坪招商面積)、綠園道、並增設2站地下化車站(林森站、南台南)，消除地面鐵路對都市發展的阻礙，並配合都市更新，打造現代化的交通樞紐，國際級CBD。
      </p>
      <p class="highlight">
        「成大之森」緊鄰台南門戶計畫核心，絕對是您置產投資致富的關鍵標的！
      </p>
    </div>

    <img
      src="./s3/bg.jpg"
      alt="bg"
      class="bg-img"
    />

    <div class="caption">
      台南車站3D情境示意圖
      <span>圖/臺南市政府都市發展局</span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  position: relative;
  width: 100%;
  overflow: hidden;

  // --- 手機版優先 (Base) ---
  height: auto;
  min-height: 100vh;

  // --- 電腦版 (Desktop) ---
  @media (min-width: 769px) {
    height: auto; // 或依需求改為 100%
    min-height: auto; // 重置最小高度，依內容撐開
  }

  // 1. 背景圖層設定 (無須更動，共用)
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
    z-index: 1;
  }

  // 2. 文字內容層
  .text {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    // --- 手機版優先 (Base) ---
    padding-top: sizem(100);
    padding-bottom: sizem(50);
    // 手機版背景 (底部較深)
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );

    // --- 電腦版 (Desktop) ---
    @media (min-width: 769px) {
      padding-top: size(184);
      padding-bottom: size(780);
      // 電腦版背景 (底部全透明)
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    // 標題 SVG
    > img[alt='title'] {
      width: auto;
      
      // --- 手機版優先 (Base) ---
      height: sizem(40);
      margin-bottom: sizem(30);

      // --- 電腦版 (Desktop) ---
      @media (min-width: 769px) {
        height: size(60);
        margin-top: size(55);
        margin-bottom: size(40);
      }
    }

    // 段落樣式
    p {
      text-align: center;
      font-weight: 500;
      color: #262626;

      // --- 手機版優先 (Base) ---
      font-size: sizem(14);
      line-height: 1.8;
      max-width: 100%;
      margin-bottom: sizem(20);
      padding: 0 sizem(20);
      letter-spacing: sizem(2); // 假設手機版也需要字距，若不用可設為 normal

      // --- 電腦版 (Desktop) ---
      @media (min-width: 769px) {
        font-size: size(18);
        line-height: 1.6;
        max-width: size(750);
        margin-bottom: size(20);
        padding: 0 size(20);
        letter-spacing: size(1.26);
      }

      // 3. 垂直分隔線
      &:first-of-type {
        position: relative;
        
        // --- 手機版優先 (Base) ---
        margin-top: sizem(30);

        &::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: #a0a0a0;
          
          // Mobile
          top: sizem(-30);
          width: sizem(1);
          height: sizem(15);
        }

        // --- 電腦版 (Desktop) ---
        @media (min-width: 769px) {
          margin-top: size(80);

          &::before {
            top: size(-80);
            width: size(1);
            height: size(40);
          }
        }
      }

      // 最後一段強調文字
      &:last-child {
        font-weight: 500;
        color: #222;
        
        // --- 手機版優先 (Base) ---
        margin-top: sizem(10);

        // --- 電腦版 (Desktop) ---
        @media (min-width: 769px) {
          margin-top: size(10);
        }
      }
    }
  }

  // 3. 右下角 Caption
  .caption {
    z-index: 3;
    font-weight: 500;
    
    // --- 手機版優先 (Base) ---
    // 手機版是相對定位，在內容下方
    position: relative;
    bottom: auto;
    right: auto;
    padding: sizem(20);
    text-align: center;
    color: #666;
    text-shadow: none;
    font-size: sizem(14);
    letter-spacing: sizem(1.5);

    span {
      display: block;
      font-weight: 400;
      opacity: 0.9;
      // Mobile
      font-size: sizem(12);
      margin-top: sizem(8);
    }

    // --- 電腦版 (Desktop) ---
    @media (min-width: 769px) {
      // 電腦版改為絕對定位，壓在背景上
      position: absolute;
      bottom: size(40);
      right: size(50);
      padding: 0; // 重置 padding
      text-align: right;
      color: #fff;
      text-shadow: size(1) size(1) size(3) rgba(0, 0, 0, 0.5);
      font-size: size(14);
      letter-spacing: size(1.5);

      span {
        font-size: size(12);
        margin-top: size(8);
      }
    }
  }
}
</style>
