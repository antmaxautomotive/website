<template>
    <nav class="fixed w-full p-6">
        <div class="flex items-end justify-between">

            <!-- Header logo -->
            <div>
                <img src="~/assets/logo.png" class="max-w-[80%]" width="300px" alt="AntMax Automotive Limited">
            </div>

            <!-- Mobile toggle -->
            <div class="md:hidden fixed top-5 right-5">
                <button @click="drawer">
                    <svg
                        class="h-8 w-8 fill-current text-slate-300"
                        fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Navbar -->
            <div class="hidden md:block pb-10">
                <ul class="flex space-x-8 text-sm font-sans text-slate-300">
                    <li
                        v-for="navBarItem in navBarItems"
                        :key="navBarItem.path"
                        class="hover:text-white">
                        <nuxt-link
                            class="whitespace-nowrap"
                            :class="currentRoute(navBarItem.path)"
                            :to="navBarItem.path"
                        >
                            <span>
                                <font-awesome-icon class="logo-blue-text" :icon="['fas', navBarItem.icon]" />
                            </span>
                            <span class="pl-2"
                                  @click="$emit('openedTab', openedTab)">
                                {{ navBarItem.label }}
                            </span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <!-- Dark Background Transition -->
            <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <div v-show="drawerState.open" class="z-10 fixed inset-0 transition-opacity" @keydown.esc="drawerState.open = false" >
                    <div class="absolute inset-0 bg-white/50" tabindex="0" @click="drawerState.open = false"></div>
                </div>
            </transition>

            <!-- Drawer Menu -->
            <aside class="p-5 transform top-0 left-0 w-64 bg-img fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="drawerState.open ? 'translate-x-0' : '-translate-x-full'">

                <div class="close">
                    <button class="absolute top-0 right-0 mt-4 mr-4 text-sm font-sans text-slate-300" @click=" drawerState.open = false">
                        <svg
                            class="w-6 h-6"
                            fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <span class="flex w-full items-center p-4" @click="drawerState.open = false">
                    <img src="~/assets/logo.png" alt="AntMax Automotive Limited">
                </span>

                <ul class="text-sm font-sans text-slate-300">
                    <li
                        v-for="navBarItem in navBarItems"
                        :key="navBarItem.path"
                        @click="drawer">
                        <nuxt-link
                            :to="navBarItem.path"
                            class="my-4 inline-block">
                            <span>
                                <font-awesome-icon class="logo-blue-text" :icon="['fas', navBarItem.icon]" />
                            </span>
                            <span class="pl-2">
                                {{ navBarItem.label }}
                            </span>
                        </nuxt-link>
                    </li>
                </ul>

                <div class=" absolute bottom-0 left-0">
                    <div class="follow m-4">
                        <p class="italic font-sans text-sm text-slate-300">follow us:</p>
                        <div class="social flex space-x-5 mt-4">
                            <a
                                class="hover:text-white"
                                :href="icon.herf"
                                v-for="icon in drawerIcons"
                            >
                                <span>
                                    <font-awesome-icon
                                        class="h-5 w-5 fill-current text-slate-300"
                                        :icon="['fab', icon.icon]" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    </nav>
</template>

<script lang="ts" setup>
import { useDrawerStore } from '@/store/drawer'

const drawerState = useDrawerStore();

const navBarItems = [
    { path: "/", label: "About", icon: "house" },
    { path: "/service", label: "Service", icon: "gears" },
    { path: "/repairs", label: "Repairs", icon: "screwdriver-wrench" },
    { path: "/diagnostics", label: "Diagnostics", icon: "magnifying-glass-chart" }
]
const drawerIcons = [
    { herf: "#", icon: "twitter" },
    { herf: "#", icon: "facebook-f" },
    { herf: "#", icon: "instagram" },
    { herf: "#", icon: "youtube" }
]

const route = useRoute()

const drawer = () => {
    drawerState.open = !drawerState.open;
}

provide('sideBarState', drawerState.open);

const openedTab = computed(() => navBarItems.filter((x) => x.path === route.fullPath)[0].label)

const currentRoute = (path: string) => {
    if (path === route.fullPath) {
        return "active border-b-2 logo-blue-border pb-1"
    } else {
        return ""
    }
}

onMounted(() => {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && drawerState.open) drawerState.open = false;
    });
})
</script>
<style scoped>
.bg-img {
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size:  cover;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
}
</style>
