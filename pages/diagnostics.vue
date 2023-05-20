<template>
  <div class="container">
    <section
      class="bg-img body place-content-center mx-auto"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
    >
      <div class="p-10  padding-nav">
        <div class="rounded shadow-lg w-full  bg-white/75 overflow-auto">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Diagnostics</div>
            <p class="text-black text-base">
              Ultimate 4x4 Specialists offer a comprehensive premium and budget service that will give you a significant saving without compromising on quality and workmanship.

              Our fully trained factory qualified technicians each have over 20 years experience in franchised main dealerships and each specialising solely in Land Rover's since 1995.

              We service and repair all modern Land Rover vehicles to the very highest of standards, offering a choice of genuine or quality pattern spares and parts as well as a T4 Diagnostics service that significantly undercuts main dealership prices.

              Our fixed price menu servicing follows the original Land Rover specification for each model with a labour rate less than half that charged by the main dealers.

              Ultimate 4x4 Specialists offer a collection and delivery service to most parts of the West Midlands area. For an informal enquiry with absolutely no commitment please call us now on 01384 211688, email  Ultimate 4x4 Specialists or fill out the contact form here you will not be disappointed with our quality standards, service and price.

              Ultimate 4x4 Specialists

              Ultimate 4x4 Specialists offer a viable alternative to main dealerships with a modern functional workshop and fully trained and qualified technicians.

              Our substantial client database contains thousands of satisfied customers from all over the central England area.

              Find out more about Ultimate 4x4 Specialists and how we can help you save money without comprimising on quality and workmanship by calling us now on 01384 211688, emailing us by clicking here or filling out the contact form here.

              We can guarantee that you will not be disappointed with our expert knowledge and attention to detail. Ultimate 4x4 Specialists are based in the heart of the Black Country with easy access from the M5, M6 and M42 motorways - click here to find us.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed, defineComponent, useMeta } from '@nuxtjs/composition-api'
import backgroundImagePath from '~/assets/diagnostics.jpg'

export default defineComponent({
  setup() {
    const {title} = useMeta()
    title.value = 'Diagnostics'

    const { height } = useWindowSize();

    const containerHeight = computed(() => ( height.value - 160 ) + 'px' );

    return {
      backgroundImagePath,
      containerHeight
    }
  },
  head: {}
});
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1;
}

.bg-img {
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size:  cover;
  background-color: #999;

}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.padding-nav {
  padding-top: 130px;
}
</style>
