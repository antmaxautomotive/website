<template>
  <div class="backdrop-blur-lg rounded bg-white/50 shadow-lg border border-white/30 card">
    <div class="px-6 py-4">
      <div
        v-if="titleValue"
        class="font-bold text-xl mb-2"
      >{{ titleValue }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String || null,
      default: null
    }
  },
  setup(props) {
    const titleValue = ref(props.title);

    return {
      titleValue
    }
  }
});
</script>
