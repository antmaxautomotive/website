import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    important: true,
    theme: {
        extend: {
            maxWidth: {
                '4/5': '80%',
            },
            spacing: {
                '120px': '120px',
            }
        }
    },
    content: [
        './src/**/*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    plugins: [
        require('tw-elements/dist/plugin')
    ]
})