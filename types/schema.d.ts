import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["site"]?: typeof import("D:/Projects/website/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["D:/Projects/website/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   "nuxt-simple-sitemap": {
      version: string,

      moduleConfig: {
         autoLastmod: boolean,

         xsl: string,

         xslTips: boolean,

         cacheTtl: number,

         runtimeCacheStorage: string,

         autoAlternativeLangPrefixes: any,

         credits: boolean,

         defaults: any,

         xslColumns: Array<{

         }>,

         include: Array<any>,

         exclude: Array<any>,

         sitemaps: boolean,

         sitemapName: string,

         dynamicUrlsApiEndpoint: string,

         urls: Array<any>,

         debug: boolean,

         discoverImages: boolean,
      },

      buildTimeMeta: {
         isNuxtContentDocumentDriven: boolean,

         hasApiRoutesUrl: boolean,

         hasPrerenderedRoutesPayload: boolean,

         prerenderSitemap: boolean,

         version: string,
      },
   },
  }
  interface PublicRuntimeConfig {
   site: {
      _context: {
         defaultLocale: string,

         trailingSlash: string,

         titleSeparator: string,

         name: string,

         indexable: string,

         debug: string,

         url: string,
      },

      defaultLocale: string,

      trailingSlash: boolean,

      titleSeparator: string,

      name: string,

      indexable: boolean,

      debug: boolean,

      url: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }