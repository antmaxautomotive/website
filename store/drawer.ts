import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('counter', {
    state: () => ({
        open: false,
    }),
})