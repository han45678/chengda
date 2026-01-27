<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/logo.svg" class="t1" data-aos="fade-up" data-aos-delay="0" />

    <img src="./s1/t1.svg" class="t2" data-aos="fade-up" data-aos-delay="200" />

    <img src="./s1/t3.svg" class="t3" data-aos="fade-up" data-aos-delay="0" />

    <img src="./s1/t4.svg" class="t4" data-aos="fade-up" data-aos-delay="200" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  position: relative;
  height: sizem(810);
  $pcextra-h: 620;

  @media screen and (min-width: 768px) {
    height: calc(100dvh + #{size($pcextra-h)});
    max-height: size(900 + $pcextra-h);
    min-height: size(1080 + $pcextra-h);
  }

  .t1 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(240);
    top: sizem(200);

    @media screen and (min-width: 768px) {
      width: size(600);
      top: size(280);
      top: calc(50% + #{size(250 - (1080 + $pcextra-h) * .5)});
    }
  }

  .t2 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(240);
    top: sizem(395);

    @media screen and (min-width: 768px) {
      width: size(545);
      top: size(880);
      top: calc(50% + #{size(875 - (1080 + $pcextra-h) * .5)});
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
    background: linear-gradient(to top, #0b2a49 0%, #0b2a49cc 50%, #0b2a4900 100%);
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
