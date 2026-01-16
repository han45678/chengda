<template>
  <article class="s1 relative" id="s1">
    <!--  <img src="./s1/1.jpg" class="t0">
      <img src="./s1/mo.jpg" class="t0">
      <img src="./s1/0.jpg" class="t0">  -->
      <img src="./s1/t1m.svg" class="t1" data-aos="zoom-out" data-aos-delay="0" v-if="isMobile">
      <img src="./s1/t1.svg" class="t1" data-aos="zoom-out" data-aos-delay="0" v-else>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;
    top:15px;left: 0;right: 0;margin: auto;
    pointer-events: none;z-index: 9;opacity: .0;}
  .s1 {
  height:sizem(750);
  min-height: sizem(750);
  max-height: sizem(750);
 // background: url("./s1/bgm.jpg") center center;
  background-size: cover; 
  
  color: #fff;
  font-size: sizem(17);
  line-height: 1.3;
  
@media screen and (min-width: 768px) {
 // background-image: url("./s1/bg.jpg");
    height:100vh;
    min-height: size(900);
    max-height: size(1080);
    padding: 0;
    font-size: size(40);
}
.t1{
  position: absolute;
  left: 0;right: 0;margin: auto;
  width:sizem(213);
  top:sizem(164);
@media screen and (min-width: 768px) {
  width:size(915);
  // top:size(507);
  top:calc(50% + #{size(507 - 1080 * .5)} );

}
}

}

 
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>