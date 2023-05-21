<template>
  <div>
      <div class="background"/>
      <div>
          <nav-bar ref="navBar"/>
      </div>
      <div class="absolute body p-2 top-[80px] h-max" style="z-index: -1">
          <section class="body place-content-center mx-auto">
              <div class="p-3 grid grid-cols-1 lg:grid-cols-10 padding-nav">
                  <div  v-if="!isFinite(windowHeight)"  class=" left-1/2  fixed"  style="transform: translate(-50%);">
                      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                  </div>
                  <NuxtPage v-if="isFinite(windowHeight)" />
              </div>
          </section>
      </div>
      <page-footer/>
  </div>
</template>
<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";

const navBar = ref(null)
const navBarHeight = useElementSize(navBar).height
const windowHeight = useWindowSize().height

const bodyHeight = computed (() => {
    return (isFinite(windowHeight.value) ? (windowHeight.value - navBarHeight.value) - 210 : 0) + 'px'
})

provide("bodyHeight", bodyHeight);


</script>
<style scoped>
::-webkit-scrollbar{
    width: 6px;
}

::-webkit-scrollbar-track-piece{
    background-color: rgba(255, 255, 255, 0);
}

::-webkit-scrollbar-thumb{
    background-color: #626262;
    outline: 2px solid rgba(255, 255, 255, 0);
    outline-offset: -2px;
    border-radius: 5px;
    border: .1px solid #626262;
}

::-webkit-scrollbar-thumb:hover{
    background-color: #909090;
}

.lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
}
.lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
}
.lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
}
.lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
}
.lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
}
.lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
}
.lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
}
.lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
}
.lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
}
@keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>