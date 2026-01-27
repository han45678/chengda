<template>
    <div class="nav fixed z-[100]" v-bind:class="{ 'r16-9': higherScreen }">
        <!-- <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div> -->
        <div class="menu-btn cursor-pointer flex items-center gap-3" @click="menuOpen = !menuOpen"
            v-bind:class="{ 'open': menuOpen }">
            <!-- <p class="uppercase text-color2 z-10">menu</p> -->
            <div class="bar"></div>
        </div>
        <div class="menu flex items-center justify-center" v-bind:class="{ open: menuOpen }">
            <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div>
            <template v-for="item, i in info.navList" :key="item">
                <div class="menu-item cursor-pointer text-white" v-bind:class="{ btn2: item.type }"
                    @click="scrollTo(item.target, $isMobile() ? item.offsetmo ? item.offsetmo : item.offset : item.offset)"
                    v-if="!(item.name === '地圖導航' && !info.address) && !(item.name === '立即來電' && !info.phone)">
                    <span>{{ item.name }}</span>
                </div>
            </template>
            <div class="close" @click="menuOpen = !menuOpen">
            </div>
        </div>
    </div>
    <div class="gotop fixed z-[98] cursor-pointer" v-bind:class="{ show: scrollPos > 100 }" @click="scrollTo('.s1')">
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.nav {
    right: 0;
    top: 0;
    height: auto;
    font-size: size(20);

    .logo {
        width: size(145);
        height: size(50);
        position: absolute;
        left: 1em;
    }

    .menu-btn {
        background-color: transparent;
        height: 2em;
        width: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        padding: 0;
        margin: .5em;

        .bar {
            width: 1.7em;
            height: 2px;
            background-color: currentColor;
            position: relative;
            transition: all .5s;
            color: #fff;
            box-shadow: 0 3px 0 #0366;

            &::after {
                content: '';
                width: 100%;
                height: 2px;
                bottom: -.5em;
                position: absolute;
                background-color: currentColor;
                box-shadow: 0 3px 0 #0366;
                //transform: translateX(-10%);
            }

            &::before {
                content: '';
                width: 100%;
                height: 2px;
                top: -.5em;
                position: absolute;
                background-color: currentColor;
                box-shadow: 0 3px 0 #0366;
                //transform: translateX(-10%);
            }
        }

    }

    .menu {
        position: fixed;
        flex-direction: row;
        top: 0;
        right: 0;
        background: #FFF9;
        width: size(375);
        height: 100%;
        z-index: 5;
        padding: 0;
        gap: 2em;
        padding: 0;
        font-weight: 700;
        height: 100%;
        transform: translateX(150%);
        transition: all .5s;
        backdrop-filter: blur(2px);
        justify-content: center;
        flex-direction: column;

        .menu-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            // gap: size(10);
            letter-spacing: 0.1em;
            white-space: nowrap;
            color: #262626;

            img {
                width: size(43);
            }

            &:after {
                content: '';
                position: absolute;
                bottom: -5px;
                width: 0%;
                height: 2px;
                background-color: currentColor;
                transition: all .35s;
            }

            &:hover {

                &:after {
                    width: 100%;
                }
            }

            &.btn2 {
                background: #EF8200;
                border-radius: 2em;
                margin-right: -1em;
                padding: .7em 1.5em;

                &:hover {
                    background: #df6400;

                    &:after {
                        width: 0;
                    }
                }
            }

        }

        &.open {
            transform: translateX(0);
        }

        .close {
            position: absolute;
            left: unset;
            bottom: 0;
            transform: translateX(0);
            top: .5em;
            right: .5em;
            width: 2em;
            height: 2em;
            cursor: pointer;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &::before,
            &::after {
                content: "";
                background: #262626;
                height: 2px;
                width: 100%;
                display: block;
            }

            &::before {
                transform: rotate(45deg);
                margin-bottom: -2px;
            }

            &::after {
                transform: rotate(-45deg);
            }
        }

        .decor {
            position: absolute;
            width: size(330);
            top: -#{size(170)};
            left: size(22);
            z-index: 1;
            animation: rotate 10s infinite linear;

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        }

    }
}

.gotop {
    width: size(49.4);
    height: size(49.4);
    right: size(20);
    bottom: size(50);
    background-image: url('@/assets/top.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(200%);
    transition: all .5s;

    &.show {
        transform: translateY(0%);
    }
}

@media screen and (max-width:768px) {

    .gotop {
        width: sizem(34.24);
        height: sizem(34.24);
        right: sizem(20);
        bottom: sizem(80);
    }

    .nav {
        right: 0;
        top: 0;
        height: auto;
        font-size: sizem(20);
        //   border-radius: 9999px;

        .logo {
            width: sizem(80);
            height: sizem(42);
            transition: all .2s;
            top: sizem(13);
            left: sizem(10);

            &.open {}
        }

        .menu-btn {
        }

        .menu {
            width: 100%;
            .menu-item {

                img {
                    width: sizem(30);
                }

                &.btn2 {
                    margin: 0 auto -.5em auto;
                    padding: 0.4em 4em;
                }

            }

            &.open {
                transform: translateX(0);
                left: unset;
            }

            .decor {
                width: 30vh;
                left: 50%;
                margin-left: -15vh;
                top: -15vh;
                animation: rotate 10s infinite linear;
            }

        }
    }
}
</style>

<script setup>
import { inject, computed, getCurrentInstance, onMounted, ref } from 'vue';
import info from "@/info"

const menuOpen = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const higherScreen = ref(true)

const scrollPos = ref(0)

onMounted(() => {
    const ratio = window.innerHeight / window.innerWidth

    // if (!globals.$isMobile() && ratio > 0.46875) {
    //     higherScreen.value = true
    // }

    window.addEventListener('scroll', (event) => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        scrollPos.value = scroll
    });
})


const smoothScroll = inject('smoothScroll')
const scrollTo = (el, offset) => {
    const targetElement = document.querySelector(el);
    if (targetElement) {
        const numericOffset = parseInt(offset) ? parseInt(offset) : 0;
        const elementRect = targetElement.getBoundingClientRect();
        const topPosition = window.pageYOffset + elementRect.top + numericOffset;

        smoothScroll({
            scrollTo: topPosition
        });
    }
    menuOpen.value = false;
}
</script>