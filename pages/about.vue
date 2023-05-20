<template>
  <div class="container">
    <section
      class="bg-img body place-content-center mx-auto"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
    >
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 padding-nav">
        <frosted-card class="w-full md:col-start-1 lg:col-start-1 xl:col-start-1 h-auto">
          <div class="relative slide">
            <div class="carousel-indicators absolute bottom-0 flex h-24 w-full justify-center items-center">
              <ol class="z-50 flex w-4/12 justify-center">
                <li v-for="(img, i) in images" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
              </ol>
            </div>
            <div class="carousel-inner relative overflow-hidden w-full">
              <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
                <img style="width: 100%; height: 310px; object-fit: cover;" class="block w-full" :src="img" alt="First slide" />
              </div>
            </div>
          </div>
        </frosted-card>
        <frosted-card
          class="card-height text-slate-500 col-span-2 md:col-start-2 lg:col-start-2 xl:col-start-2 h-auto"
          title="About Us"
        >
          <p class="text-stone-900 text-base">
            <font-awesome-icon icon="fa-solid fa-user-secret" />
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
        </frosted-card>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed, defineComponent, onMounted, useMeta, ref } from '@nuxtjs/composition-api'
import frostedCard from "~/components/FrostedCard.vue";
import backgroundImagePath from '~/assets/background.jpg'
import backgroundImagePath1 from '~/assets/about.jpg'
import backgroundImagePath2 from '~/assets/contact.jpg'
import backgroundImagePath3 from '~/assets/diagnostics.jpg'
import backgroundImagePath4 from '~/assets/repairs.jpg'


export default defineComponent({
  components: {
    frostedCard
  },
  setup() {
    const { title } = useMeta()
    title.value = 'About Us'

    const { height } = useWindowSize();

    const containerHeight = computed(() => ( height.value - 200 ) + 'px' );

    const images = [
      backgroundImagePath1,
      backgroundImagePath2,
      backgroundImagePath3,
      backgroundImagePath4
    ]
    const active = ref(0)

    onMounted(() => {
      let i = 0;
      setInterval(() => {
        if (i > images.length - 1) {
          i = 0;
        }
        active.value = i;
        i++;
      }, 5000);
    })

    return {
      backgroundImagePath,
      containerHeight,
      images,
      active
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
  background-color: #000000;
  background-image: linear-gradient(147deg, #ffffff 0%, #2c3e50 74%);
}

.padding-nav {
  padding-top: 130px;
}

.card-height {
  height: v-bind(containerHeight);
}

.mt-15 {
  margin-top: 84px;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
