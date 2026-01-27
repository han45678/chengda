<template>
  <article
    class="s2 relative"
    id="s2"
  >
    <img
      src="./s2/t1.svg"
      class="t1"
      data-aos="fade-up"
      data-aos-delay="0"
    />

    <p
      class="font-['Noto_Sans_TC',serif]"
      data-aos="fade-up" data-aos-delay="200" v-if="isMobile"
    >
      面2萬5千坪成大綠海首席，5萬坪台南公園旁<br />
      台南車站、捷運綠線，雙鐵交匯增值動能驚人<br />
      頂尖學府成大、南一中雙明星學區文風加持<br />
      匯集遠百、新光三越7大商圈<br />
      4大夜市旗艦級繁華商圈。
    </p>
    <p
      class="font-['Noto_Sans_TC',serif]"
      data-aos="fade-up" data-aos-delay="200" v-else
    >
      面2萬5千坪成大綠海首席，5萬坪台南公園旁；台南車站、捷運綠線，雙鐵交匯增值動能驚人；<br />
      頂尖學府成大、南一中雙明星學區文風加持；匯集遠百、新光三越7大商圈、4大夜市旗艦級繁華商圈。
    </p>

    <img
      class="s2_bg pc"
      src="@/section/s2/pic.png"
      alt="pic"
    />
    <fullview class="s2_bg m" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  background: #0b2a49;
  background: linear-gradient(to top, #2d9cd7 53%, #0b2a49 100%);
  width: 100%;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: auto;
    // background: linear-gradient(to top, #2d9cd7 53%,#0b2a49 100%);
    padding-top: size(385);
  }

  .t1 {
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-top: sizem(250);
    width: sizem(235);z-index: 5;
    @media screen and (min-width: 768px) {
      padding-top: 0;
      width: size(420);
      margin-bottom: size(130);
    }
  }
  p {z-index: 5;
    color: #fff;
    font-weight: 400;
    line-height: 1.9;
    text-align: center;
    margin: 0 auto;
    padding-top: sizem(70);
    width: sizem(300);
    position: relative;
    font-size: sizem(13);
    &::before {
      content: '';
      position: absolute;
      width: sizem(1);
      height: sizem(27);
      top: sizem(22);
      left: 0;
      right: 0;
      margin: auto;
      background-color: #fff;
      @media screen and (min-width: 768px) {
        width: size(1);
        height: size(48);
        top: size(-90);
      }
    }
    @media screen and (min-width: 768px) {
      line-height: 1.6;
      width: size(900);
      font-size: size(18);
      padding-bottom: size(0);
      padding-top: 0;
    }
  }

  .s2_bg {
      margin-top: sizem(-190);
    @media screen and (min-width: 768px) {
      width: 100%;
      margin-top: size(-260);
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
import fullview from '@/components/fullview.vue';
import { computed, getCurrentInstance } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>
