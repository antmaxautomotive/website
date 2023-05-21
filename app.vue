<template>
  <div>
      <div class="background"/>
      <div>
          <nav-bar ref="navBar"/>
      </div>
      <div class="absolute body p-6 top-[80px] h-max">
          <section class="bg-img body place-content-center mx-auto">

              <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 padding-nav">
                  <frosted-card
                          class="card-height text-slate-400 col-span-3 md:col-start-2 lg:col-start-2 xl:col-start-2 h-auto"
                          title="About Us"
                  >
                      <p class="text-slate-300 text-base">
                        <div class="relative slide float-left pr-5"  style="width: 50%">
                            <image-carousel/>
                        </div>
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
                  <frosted-card
                          class="card-height text-slate-400 md:col-start-5 lg:col-start-5 xl:col-start-5 h-auto"
                          title="How to find us?"
                  >
                      <div id="map-wrap" style="height: 300px">
                          <client-only>
                              <l-map :zoom=50 :center="[53.339483271389895, -6.27155181614453]">
                                  <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                                  <l-marker :lat-lng="[53.339483271389895, -6.27155181614453]"></l-marker>
                              </l-map>
                          </client-only>
                      </div>
                      <br>
                      <address>
                          67 Victoria Terrace<br>
                          Stafford<br>
                          ST16 1FA<br>
                          UK
                      </address>
                  </frosted-card>
              </div>
          </section>
      </div>
  </div>
</template>
<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import ImageCarousel from "~/components/ImageCarousel.vue";

const navBar = ref(null)
const navBarHeight = useElementSize(navBar).height
const windowHeight = useWindowSize().height

const bodyHeight = computed (() => {
    return (windowHeight.value - navBarHeight.value)
})

</script>
<style scoped>
.background {
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size:  cover;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: -1;
}

</style>