<template>
    <frosted-card
        class="text-slate-400 lg:col-start-3 lg:col-span-6 xl:col-start-4 xl:col-span-4 h-auto"
        title="About Us"
    >
        <p class="text-slate-300 pr-3 text-base text-justify">
            Grzegorz Barnowski known as "Greg" a vehicle technician with multiple skills (MOT tester since 2012), excellent comprehensive technical and mechanical expertise with attention to details. Capable, with an ability to diagnose faults on vehicles using specialist diagnostic equipment. We are specialising in Land Rover and Range Rover, but also we can carry on servicing and repairs on other brands.
            <br><br>
            We are located in Unit 5B St Albans Rd Industrial Estate, ST16 3DR Stafford (back of A-Z motor spares).
            <br/><br/>
        </p>
        <div class="relative mx-auto pr-5" style="width: 99%">
            <image-carousel/>
        </div>
    </frosted-card>
</template>
<script setup lang="ts">
import ImageCarousel from "~/components/ImageCarousel.vue";

const title = ref('Home')

useHead({
    title
})
</script>
