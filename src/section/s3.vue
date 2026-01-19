<template>
  <article class="s3" id="s3">
    <div class="text">
      <img src="./s3/t1.svg" alt="title">
      <p>台南門戶計畫因半導體及世界AI巨擘擴大投資台南而生，台南車站4站距離可抵南科與高鐵，透過交通轉運與科技發展緊密串連。</p>
      <p>
        台南門戶計畫主要結合了鐵路地下化、車站TOD再造計畫、三座商業大樓(8萬坪招商面積)、綠園道、並增設2站地下化車站(林森站、南台南)，消除地面鐵路對都市發展的阻礙，並配合都市更新，打造現代化的交通樞紐，國際級CBD。
      </p>
      <p class="highlight">
        「成大之森」緊鄰台南門戶計畫核心，絕對是您置產投資致富的關鍵標的！
      </p>
    </div>
    
    <img src="./s3/bg.jpg" alt="bg" class="bg-img">

    <div class="caption">
      台南車站3D情境示意圖
      <span>圖/臺南市政府都市發展局</span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss'; // 假設暫時用不到

.s3 {
  position: relative;
  width: 100%;
  height: 100vh; // 設定高度為視窗高度
  overflow: hidden;
  font-family: "Noto Sans TC", sans-serif; // 建議使用無襯線字體

  // 1. 背景圖層設定 (絕對定位，置底)
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom; // 重點在下方建築
    z-index: 1;
  }

  // 2. 文字內容層 (相對定位，置頂)
  .text {
    position: relative;
    z-index: 2; // 在背景之上
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; // 佔滿高度以應用漸層
    padding-top: 15vh; // 標題距離頂部的空間
    
    // **關鍵修改：加入白色半透明漸層背景**
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,    // 頂部純白
      rgba(255, 255, 255, 0.8) 50%, // 中間半透明
      rgba(255, 255, 255, 0) 100%   // 底部透明
    );

    // 標題 SVG
    > img[alt="title"] {
      width: auto;
      height: 60px; // 依實際 SVG 調整
      margin-bottom: 40px;
    }

    // 段落樣式
    p {
      color: #4a4a4a; // 深灰色，非純黑
      font-size: 15px;
      line-height: 2.2; // 更寬鬆的行高
      letter-spacing: 2px; // 更寬的字距
      text-align: center;
      max-width: 700px; // 限制文字寬度
      margin-bottom: 20px;
      font-weight: 400;
      padding: 0 20px;

      // 3. 垂直分隔線
      &:first-of-type {
        position: relative;
        margin-top: 40px; // 與標題的距離

        &::before {
          content: '';
          position: absolute;
          top: -40px; // 往上推
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 20px;
          background-color: #a0a0a0; // 淺灰色線條
        }
      }
      
      // 最後一段強調文字
      &:last-child {
        font-weight: 500;
        color: #222; // 稍微深一點
        margin-top: 10px;
      }
    }
  }

  // 3. 右下角 Caption (絕對定位)
  .caption {
    position: absolute;
    bottom: 40px;
    right: 50px;
    z-index: 3;
    text-align: right;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: 500;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5); // 增加陰影提高可讀性

    span {
      display: block;
      font-size: 12px;
      margin-top: 8px;
      font-weight: 400;
      opacity: 0.9;
    }
  }
}

// RWD 調整 (Mobile)
@media (max-width: 768px) {
  .s3 {
    height: auto; // 手機版高度自動
    min-height: 100vh;
    
    .text {
      padding-top: 100px;
      padding-bottom: 50px;
      // 手機版漸層可以調整或移除
      background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%);

      > img[alt="title"] {
        height: 40px;
        margin-bottom: 30px;
      }
      p {
        font-size: 14px;
        line-height: 1.8;
        max-width: 100%;
        
        &:first-of-type {
          margin-top: 30px;
          &::before {
             top: -30px;
             height: 15px;
          }
        }
      }
    }
    
    .caption {
      position: relative; // 手機版改為相對定位，避免擋住內容
      bottom: auto;
      right: auto;
      padding: 20px;
      text-align: center;
      color: #666; // 手機版背景可能較白，改用深色字
      text-shadow: none;
    }
  }
}
</style>