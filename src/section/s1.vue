<template>
  <article
    class="s1 relative"
    id="s1"
  >
    <img
      src="./s1/logo.svg"
      class="t1"
      data-aos="zoom-out"
      data-aos-delay="0"
    />

    <img
      src="./s1/t1.svg"
      class="t2"
      data-aos="zoom-out"
      data-aos-delay="0"
    />

    <img
      src="./s1/t3.svg"
      class="t3"
      data-aos="zoom-out"
      data-aos-delay="0"
    />

    <img
      src="./s1/t4.svg"
      class="t4"
      data-aos="zoom-out"
      data-aos-delay="0"
    />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  width: 100%;
  position: relative;
  height: 120dvh;
  @media screen and (min-width: 768px) {
    height: size(1680);
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
    }
  }
  .t3 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(240);
      top: 110dvb;
    @media screen and (min-width: 768px) {
      width: size(620);
      top: size(1450);
    }
  }
  .t4 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    width: sizem(340);
      top: 115dvh;
    @media screen and (min-width: 768px) {
      width: size(1520);
      top: size(1520);
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    background: linear-gradient(to top, #0b2a49 0%, rgba(45, 156, 215, 0) 100%);
    pointer-events: none;
    height: sizem(400);
    @media screen and (min-width: 768px) {
      height: size(550);
    }
  }
}
</style>
<script setup>
</script>
