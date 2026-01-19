<template>
  <article
    class="s2 relative"
    id="s2"
  >
    <img
      src="./s2/t1.svg"
      class="t1"
      data-aos="zoom-out"
      data-aos-delay="0"
    />

    <p class="font-['Noto_Sans_TC',serif]">
      面2萬5千坪成大綠海首席，5萬坪台南公園旁；台南車站、捷運綠線，雙鐵交匯增值動能驚人；<br />
      頂尖學府成大、南一中雙明星學區文風加持；匯集遠百、新光三越7大商圈、4大夜市旗艦級繁華商圈。
    </p>

    <img src="./s2/pic.png" alt="pic">
    <!-- <img src="./s2/logo.svg" class="logo" data-aos="zoom-out" data-aos-delay="0">
      <img src="./s2/t1.svg" class="t1" data-aos="zoom-out" data-aos-delay="0">
      <div class="img" data-aos="zoom-out" data-aos-delay="0"  data-aos-offset="-500"><img src="./s2/img.png"></div> -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  width: 100%;
  position: relative;
  background: linear-gradient(to top, #2d9cd7 0%, #0b2a49 100%);
  @media screen and (min-width: 768px) {
    padding-top: size(385);
  }

  .t1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px) {
      width: size(420);
      margin-bottom: size(130);
    }
  }
  p {
    color: #fff;
    font-weight: 500;
    line-height: 1.6;
    text-align: center;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: size(900);
      font-size: size(18);
      padding-bottom: size(0);
    }
  }
}
</style>
<script setup>
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
