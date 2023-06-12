<template>
    <frosted-card
        class="text-slate-400 lg:col-start-3 lg:col-span-6 xl:col-start-4 xl:col-span-4 h-auto"
        title="Repairs"
    >
        <p class="text-slate-300 pr-3 text-base text-justify">
            We offer a viable alternative to main dealerships with a functional workshop and fully trained and qualified technician. Maintenance and repairs on all Land Rover as well as on other brands cars.
            <br/><br/>
        </p>
        <div class="relative mx-auto pr-5" style="width: 99%">
            <image-carousel/>
        </div>
    </frosted-card>
</template>
<script setup lang="ts">
import ImageCarousel from "~/components/ImageCarousel.vue";

const title = ref('Repairs')

useHead({
    title
})
</script>