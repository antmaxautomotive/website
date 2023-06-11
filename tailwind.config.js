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
        "./components/**/*.{js,vue,ts}",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ]
})