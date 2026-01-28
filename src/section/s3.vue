<template>
  <article
    class="s3"
    id="s3"
  >
    <div class="text font-['Noto_Sans_TC',serif]">
      <div class="pic" data-aos="fade-up" data-aos-delay="0">
        <img
       
          src="./s3/pic.jpg"
          alt="pic"
        /><div class="caption">台南車站3D情境示意圖
<span>圖/臺南市政府都市發展局</span></div>
      </div>
      <img
      data-aos="fade-up" data-aos-delay="200"
        src="./s3/t1.svg"
        alt="title"
      />
      <p data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
        台南門戶計畫因半導體及世界AI巨擘擴大投資<br />
        台南而生，台南車站4站距離可抵南科與高鐵<br />
        透過交通轉運與科技發展緊密串連
      </p>
      <p data-aos="fade-up" data-aos-delay="400" v-else>
        台南門戶計畫因半導體及世界AI巨擘擴大投資台南而生，台南車站4站距離可抵南科與高鐵，透過交通轉運與科技發展緊密串連。
      </p>
      <p data-aos="fade-up" data-aos-delay="600" v-if="isMobile">
        台南門戶計畫主要結合了鐵路地下化、車站TOD<br />
        再造計畫、三座商業大樓(8萬坪招商面積)<br />
        綠園道、並增設2站地下化車站(林森站、南台南)<br />
        消除地面鐵路對都市發展的阻礙，並配合都市更新<br />
        打造現代化的交通樞紐，國際級CBD
      </p>
      <p data-aos="fade-up" data-aos-delay="600" v-else>
        台南門戶計畫主要結合了鐵路地下化、車站TOD再造計畫、三座商業大樓(8萬坪招商面積)、綠園道、並增設2站地下化車站(林森站、南台南)，消除地面鐵路對都市發展的阻礙，並配合都市更新，打造現代化的交通樞紐，國際級CBD。
      </p>
      <p class="highlight" data-aos="fade-up" data-aos-delay="800" v-if="isMobile">
        「成大之森」緊鄰台南門戶計畫核心<br />絕對是您置產投資致富的關鍵標的
      </p>
      <p class="highlight" data-aos="fade-up" data-aos-delay="800" v-else>
        「成大之森」緊鄰台南門戶計畫核心，絕對是您置產投資致富的關鍵標的！
      </p>
    </div>

    <div class="bg-img-wrapper">
      <img
        src="./s3/bg.jpg"
        alt="bg"
        class="bg-img"
      />
    </div>

    <!-- --><div class="caption">
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
  background-color: #EFEFEF;

  // --- 手機版優先 (Base) ---
  height: sizem(770);

  // --- 電腦版 (Desktop) ---
  @media (min-width: 769px) {
  background-color: #fff;
    height: auto; // 或依需求改為 100%
    min-height: auto; // 重置最小高度，依內容撐開
  }

  // 1. 背景圖層設定 (無須更動，共用)
  .bg-img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    height: 100%;
    z-index: 1;
    .bg-img {
      width: 100%;
      height: auto;
      @media (max-width: 768px) {
        position: absolute;
        bottom: 0;
        left: -6%;
      width: 110%;
      }
      @media (min-width: 769px) {
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }

  .pic {
    width: sizem(240);
    position: relative;
    @media (min-width: 769px) {
      width: size(480);
    }
    img {
      width: 100%;
    }
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
    padding-top: sizem(60);
    padding-bottom: sizem(200);

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
      height: sizem(25);
      margin-top: sizem(30);
      // --- 電腦版 (Desktop) ---
      @media (min-width: 769px) {
        height: size(46);
        margin-top: size(55);
        margin-bottom: size(40);
      }
    }

    // 段落樣式
    p {
      text-align: center;
      font-weight: 400;
      color: #262626;

      // --- 手機版優先 (Base) ---
      font-size: sizem(13);
      line-height: 1.8;
      margin-bottom: sizem(13);
      width: sizem(300);
      letter-spacing: .04em; // 假設手機版也需要字距，若不用可設為 normal

      // --- 電腦版 (Desktop) ---
      @media (min-width: 769px) {
        font-size: size(18);
        line-height: 1.6;
        max-width: size(750);
        margin-bottom: size(20);
        padding: 0 size(20);
        letter-spacing: .06em;
      }

      // 3. 垂直分隔線
      &:first-of-type {
        position: relative;
        margin-top: sizem(30);

        &::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: #a0a0a0;

          // Mobile
          top: sizem(-50);
          width: sizem(1);
          height: sizem(40);
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
    /*
    @media (max-width: 768px) {
      &::before {
        content: '';
        background: linear-gradient(
          to bottom,
          rgb(255, 255, 255) 0%,
          rgba(255, 255, 255, 0.8) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        width: 100%;
        height: sizem(100);
        position: absolute;
        bottom: sizem(120);
        left: 0;
      }
    }
      */
  }


  .caption {
    position: absolute;
    bottom: .5em;
    right: .5em;
    color: #fff;
    text-align: right;
      font-size: sizem(10);
      z-index: 3;
    span{
      display: block;
      font-size: .6em;
    }
    @media (min-width: 768px) {
      font-size: size(15);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>
