<template>
  <div class="container">
    <section
      class="bg-img body place-content-center mx-auto"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
    >
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 padding-nav">
        <div class="rounded shadow-lg w-full bg-white/75 md:col-start-2 lg:col-start-2 xl:col-start-2 h-auto">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Contact</div>
            <div class="w-full md:w-full md:max-w-full mx-auto">
              <div class="p-6 border border-gray-300 sm:rounded-md form">
                <form method="POST" action="https://herotofu.com/start">
                  <label class="block mb-6">
                    <span class="text-gray-700">Your name</span>
                    <input
                      type="text"
                      name="name"
                      class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                      placeholder="Joe Bloggs"
                    />
                  </label>
                  <label class="block mb-6">
                    <span class="text-gray-700">Email address</span>
                    <input
                      name="email"
                      type="email"
                      class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                      placeholder="joe.bloggs@example.com"
                      required
                    />
                  </label>
                  <label class="block mb-6">
                    <span class="text-gray-700">Message</span>
                    <textarea
                      name="message"
                      class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                      rows="3"
                      placeholder="Tell us what you're thinking about..."
                    ></textarea>
                  </label>
                  <div class="mb-6">
                    <button
                      type="submit"
                      class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                    >
                      Contact Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed, defineComponent, useMeta } from '@nuxtjs/composition-api'
import backgroundImagePath from '~/assets/service.jpg'

export default defineComponent({
  setup() {
    const {title} = useMeta()
    title.value = 'Contact'

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
  padding-top: 230px;
}

.form {
  z-index: 2;
}
</style>
