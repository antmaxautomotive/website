<template>
  <div id="app">
    <nav-bar/>
    <div
      class="bg-img body place-content-center mx-auto"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
    />
    <nuxt/>
    <page-footer/>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import NavBar from "~/components/NavBar.vue";
import PageFooter from "~/components/PageFooter.vue";
import backgroundImagePath from '~/assets/service.jpg'

export default defineComponent({
  components: {
    NavBar,
    PageFooter
  },

  setup() {
    const { titleTemplate } = useMeta()
    titleTemplate.value = '%s - AntMax Automotive Ltd.'

    return {
      backgroundImagePath
    }
  },
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',  // <-- moved this over from index.vue
        content:
          'Land Rover service plans and repairs with T4 diagnostics. Independent Land Rover and Range Rover specialists.'
      }
    ]
  }
});
</script>

<style scoped>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.bg-img {
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size:  cover;
  background-color: #999;

}
</style>
