<template>
  <article
    class="s8 relative"
    id="s8"
  >
    <img
      src="./s8/t1.svg"
      class="t1"
      data-aos="zoom-out"
      data-aos-delay="0"
    />

    <p class="font-['Noto_Sans_TC',serif]">
      府城400年文化底蘊，孕育出世界頂尖大學-成功大學，知名校友遍及科技政商藝文各界，為台灣重要教育搖籃。「成大之森」驕傲立足成大首排，又鄰近台南明星高中台南一中，近享頂流學府濃郁書香。
    </p>

    <img
      class="s8_bg pc"
      src="@/section/s8/pic.jpg"
      alt="pic"
    />
    <fullview class="s8_bg m" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
  // background: #0b2a49;
  // background: linear-gradient(to top, #2d9cd7 0%, #0b2a49 100%);
  width: 100%;
  position: relative;
  // height: sizem(900);
  @media screen and (min-width: 768px) {
    height: auto;
    // background: linear-gradient(to top, #2d9cd7 0%, #0b2a49 100%);
    // padding-top: size(385);
  }

  .t1 {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    z-index: 3;
    width: sizem(310);
    top: sizem(60);
    @media screen and (min-width: 768px) {
      width: size(760);
      right: unset;
      left: size(250);
      top: size(200);
      
    }
  }
  p {
    color: #000;
    font-weight: 500;
    line-height: 1.9;
    text-align: center;
    margin: auto;
    width: sizem(300);
    top: sizem(180);
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;

    @media screen and (min-width: 768px) {
      line-height: 1.6;
      width: size(700);
      font-size: size(18);
      top: size(375);
      left: size(245);
      text-align: left;
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
