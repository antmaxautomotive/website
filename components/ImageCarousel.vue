<template>
    <Carousel :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in shuffledArray" :key="slide">
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
import image1 from '~/assets/carousel/eng.01.jpg'
import image2 from '~/assets/carousel/eng.02.jpg'
import image3 from '~/assets/carousel/eng.03.jpg'
import image4 from '~/assets/carousel/eng.04.jpg'
import image5 from '~/assets/carousel/eng.05.jpg'
import image6 from '~/assets/carousel/eng.06.jpg'
import image7 from '~/assets/carousel/eng.07.jpg'
import image9 from '~/assets/carousel/eng.09.jpg'
import image10 from '~/assets/carousel/eng.10.jpg'
import image11 from '~/assets/carousel/eng.11.jpg'
import image12 from '~/assets/carousel/eng.12.jpg'
import image13 from '~/assets/carousel/eng.13.jpg'
import image14 from '~/assets/carousel/eng.14.jpg'
import image15 from '~/assets/carousel/eng.15.jpg'
import image16 from '~/assets/carousel/eng.16.jpg'
import image17 from '~/assets/carousel/eng.17.jpg'
import image18 from '~/assets/carousel/eng.18.jpg'

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18
]

const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const shuffledArray = shuffle(images);


</script>
<style scoped>
Navigation :deep(.carousel__pagination-button) {
    background-color: white !important;
}
</style>