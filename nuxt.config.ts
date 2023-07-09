// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-simple-sitemap',
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
        ],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    site: {
        url: 'https://antmaxautomotive.co.uk'
    },
    app: {
    head: {
        meta: [
            {
                name: 'og:image',
                content: '@/assets/logo512.png',
            },
        ],
            link: [
            {
                title: 'favicon', rel: 'icon', type: 'image/png', href: '@/assets/logo.png',
            },
            {
                title: 'mobileicon', rel: 'apple-touch-icon', sizes: '512x512', href: '@/assets/logo.png',
            }
        ]
    }
}
})
