<template>
    <frosted-card
        class="text-slate-400 lg:col-start-3 lg:col-span-6 xl:col-start-4 xl:col-span-4 h-auto"
        title="Service"
    >
        <p class="text-slate-300 pr-3 text-base text-justify">
            We service and repair all modern Land Rover vehicles to the very highest of standards, offering a choice of genuine or quality spare parts. Additionally, we can perform servicing and repairs on other brands of cars.
            <br/><br/>
        </p>
        <div class="relative mx-auto pr-5" style="width: 99%">
            <image-carousel/>
        </div>
    </frosted-card>
</template>
<script setup lang="ts">
import ImageCarousel from "~/components/ImageCarousel.vue";

const title = ref('Service')

useHead({
    title
})
</script>