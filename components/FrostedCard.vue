<template>
    <div class="backdrop-blur-lg rounded bg-stone-950/50 shadow-lg border border-white/30 card">
        <div class="px-6 py-4">
            <div
                    v-if="titleValue"
                    class="logo-blue-text font-bold text-xl mb-2"
            >{{ titleValue }}</div>
            <div class="card-height overflow-auto">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String || null,
        default: null
    }
})
const titleValue = ref(props.title);

const bodyHeight = inject("bodyHeight", "50vh");

</script>
<style scoped>
.card-height {
    max-height: v-bind(bodyHeight) !important;
}
</style>