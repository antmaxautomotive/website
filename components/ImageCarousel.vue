<template>
    <Carousel :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in images" :key="slide">
            <div class="carousel__item">
                <img :src="slide" alt="AntMax Automotive Limited">
            </div>
        </Slide>

        <template #addons>
            <Navigation class="text-white" />
            <Pagination class="text-white" />
        </template>
    </Carousel>
</template>

<script lang="ts" setup>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import image1 from '~/assets/carousel/eng.01.png'
import image2 from '~/assets/carousel/eng.02.png'
import image3 from '~/assets/carousel/eng.03.png'
import image4 from '~/assets/carousel/eng.04.png'

const images = [
    image1,
    image2,
    image3,
    image4
]
</script>
<style scoped>
Navigation :deep(.carousel__pagination-button) {
    background-color: white !important;
}
</style>