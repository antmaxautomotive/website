<template>
    <frosted-card
        class="text-slate-400 lg:col-start-3 lg:col-span-6 xl:col-start-4 xl:col-span-4 h-auto"
        title="Diagnostics"
    >
        <p class="text-slate-300 pr-3 text-base text-justify">
            With years of experience working on Land Rover we have the necessary skills to solve any problems quickly, efficiently and at an affordable price.
            <br/><br/>
        </p>
        <div class="relative mx-auto pr-5" style="width: 99%">
            <image-carousel/>
        </div>
    </frosted-card>
</template>
<script setup lang="ts">
import ImageCarousel from "~/components/ImageCarousel.vue";
const title = ref('Diagnostics')

useHead({
    title
})
</script>