<template>
  <article
    class="s8 relative"
    id="s8"
  >
    <img
      src="./s8/t1.svg"
      class="t1"
      data-aos="fade-up"
      data-aos-delay="0"
    />

    <p class="font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
      台南市中心的樞紐版圖，一座不需門牌的地標級<br>
      建築，成大第一排首席位置，24層擎天地標<br>
      1862坪豐盛美地，22-34坪傳世經典<br>
      風靡台南世家、政商名流、各界領袖無不競逐<br>台南400年一期一會「成大之森」
    </p>
    <p class="font-['Noto_Sans_TC',serif]" data-aos="fade-up" data-aos-delay="200" v-else>
      台南市中心的樞紐版圖，一座不需門牌的地標級建築，成大第一排首席位置，24層擎天地標，1862坪豐盛美地，22-34坪傳世經典，風靡台南世家、政商名流、各界領袖無不競逐，台南400年一期一會「成大之森」。
    </p>

    <img
      class="s8_bg pc"
      src="@/section/s8/pic.svg"
      alt="pic"
    />
    <fullview class="s8_bg m" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    height: auto;
  }

  .t1 {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    z-index: 5;
    width: sizem(310);
    top: sizem(60);
    @media screen and (min-width: 768px) {
      width: size(552);
      right: unset;
      left: size(270);
      top: size(210);
      
    }
  }
  p {
    color: #000;
    font-weight: 500;
    line-height: 1.9;
    text-align: center;
      font-size: sizem(13);
    margin: auto;
    width: sizem(300);
    top: sizem(180);
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;

    @media screen and (min-width: 768px) {
      line-height: 1.6;
      width: size(610);
      font-size: size(18);
      top: size(375);
      left: size(245);
      text-align: left;
      margin: 0;
    }

    &::before {
      content: '';
      position: absolute;
      width: sizem(1);
      height: sizem(48);
      top: sizem(-70);
      left: 0;
      right: 0;
      margin: auto;
      background-color: #000;
      @media screen and (min-width: 768px) {
        top: size(-77);
        width: size(1);
        height: size(48);
      }
    }
  }

  .s8_bg {
    @media screen and (min-width: 768px) {
      width: 100%;
      background-image: url("@/section/s8/pic.jpg");
      background-size: cover;
    }
    &.m {
      display: block;
      // background: linear-gradient(to top, #2d9cd7 60%, #0b2a49 100%);
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    &.pc {
      display: none;
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }
}
</style>
<script setup>
import fullview from '@/components/fullview2.vue';
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll');
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  });
};
</script>
