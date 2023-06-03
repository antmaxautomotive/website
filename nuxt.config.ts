// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/main.css'
    ],
    build: {
        transpile: [
            '@fortawesome/vue-fontawesome'
        ]
    },
    runtimeConfig: {
        public: {
            baseURL: 'https://Qbiak-code.github.io/',
        }
    },
    app: {
        baseURL: '/antmax/' // baseURL: '/<repository>/'
    }
})
