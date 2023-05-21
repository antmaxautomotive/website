import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
    faHouse,
    faGears,
    faScrewdriverWrench,
    faMagnifyingGlassChart,
    faFileSignature,
    faPhone,
    faAt,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faFacebookF,
    faInstagram,
    faYoutube,
    faTwitter,
    faHouse,
    faGears,
    faScrewdriverWrench,
    faMagnifyingGlassChart,
    faFileSignature,
    faPhone,
    faAt,
    faLocationDot
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})