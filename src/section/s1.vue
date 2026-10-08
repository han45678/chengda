<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/logo.svg" class="t1" data-aos="fade-up" data-aos-delay="0" />
<picture>
  <source srcset="./s1/t1m.svg" media="(max-width: 767px)" />
    <img src="./s1/t1.svg" class="t2" data-aos="fade-up" data-aos-delay="200" />
</picture>
<picture>
  <source srcset="./s1/t2m.svg" media="(max-width: 767px)" />
    <img src="./s1/t2.svg" class="t5" data-aos="fade-up" data-aos-delay="200" />
</picture>

  <!--
    <img src="./s1/t3.svg" class="t3" data-aos="fade-up" data-aos-delay="0" />
    <img src="./s1/t4.svg" class="t4" data-aos="fade-up" data-aos-delay="200" />
    -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  position: relative;
  height: sizem(960);
  $pcextra-h: 620;
 //   background: url('@/section/s1/1m.jpg');
    background-size: 100% auto;

  @media screen and (min-width: 768px) {
    height: calc(100dvh + #{size($pcextra-h)});
    max-height: size(900 + $pcextra-h);
    min-height: size(1080 + $pcextra-h);
  //  background-image: url('@/section/s1/1.jpg');
  }

  .t1 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(250);
    top: sizem(200);

    @media screen and (min-width: 768px) {
      width: size(680);
      top: calc(50% + #{size(195 - (1080 + $pcextra-h) * .5)});
    }
  }

  .t2 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(230);
    top: sizem(425);

    @media screen and (min-width: 768px) {
      width: size(1040);
      top: calc(50% + #{size(815 - (1080 + $pcextra-h) * .5)});
    }
  }

  .t3 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(240);
    top: sizem(743);

    @media screen and (min-width: 768px) {
      width: size(620);
      top: size(1450);
      top: calc(50% + #{size(1450 - (1080 + $pcextra-h) * .5)});
    }
  }

  .t5 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(80);
    top: sizem(700);

    @media screen and (min-width: 768px) {
      width: size(850);
      top: size(1450);
      top: calc(50% + #{size(1350 - (1080 + $pcextra-h) * .5)});
    }
  }

  .t4 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(340);
    top: sizem(780);

    @media screen and (min-width: 768px) {
      width: size(1520);
      top: size(1520);
      top: calc(50% + #{size(1520 - (1080 + $pcextra-h) * .5)});
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, #0b1149 0%, #0b1149cc 50%, #0b114900 100%);
    pointer-events: none;
    height: sizem(400);

    @media screen and (min-width: 768px) {
      height: size(650);
    }
  }
}
</style>
<script setup>
</script>
