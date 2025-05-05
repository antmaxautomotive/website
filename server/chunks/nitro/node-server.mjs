globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, getRequestHost, getRequestProtocol, setHeader, getHeader, getQuery as getQuery$1, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn, defu as defu$1 } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, hasProtocol, withBase, withTrailingSlash, withHttps } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/website/",
    "buildAssetsDir": ".nuxt",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/.nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "site": {
      "_context": {
        "defaultLocale": "defaults",
        "trailingSlash": "defaults",
        "titleSeparator": "defaults",
        "name": "package.json",
        "indexable": "system",
        "debug": "nuxt:config:site",
        "url": "nuxt:config:site"
      },
      "defaultLocale": "en",
      "trailingSlash": false,
      "titleSeparator": "|",
      "name": "antmaxautomotive",
      "indexable": true,
      "debug": false,
      "url": "https://antmaxautomotive.co.uk"
    }
  },
  "nuxt-simple-sitemap": {
    "version": "3.0.8",
    "moduleConfig": {
      "autoLastmod": true,
      "xsl": "/__sitemap__/style.xsl",
      "xslTips": true,
      "cacheTtl": 3600000,
      "runtimeCacheStorage": "default",
      "autoAlternativeLangPrefixes": "",
      "credits": true,
      "defaults": {},
      "xslColumns": [
        {
          "label": "URL",
          "width": "50%"
        },
        {
          "label": "Images",
          "width": "25%",
          "select": "count(image:image)"
        },
        {
          "label": "Last Updated",
          "width": "25%",
          "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
        }
      ],
      "include": [],
      "exclude": [],
      "sitemaps": false,
      "sitemapName": "sitemap.xml",
      "dynamicUrlsApiEndpoint": "/api/_sitemap-urls",
      "urls": [],
      "debug": false,
      "discoverImages": true
    },
    "buildTimeMeta": {
      "isNuxtContentDocumentDriven": false,
      "hasApiRoutesUrl": false,
      "hasPrerenderedRoutesPayload": true,
      "prerenderSitemap": false,
      "version": "3.0.8"
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-1qnvltcTkRBgxqyqz4SBW1hfU5Q\"",
    "mtime": "2023-07-08T12:25:35.941Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/.nuxt/diagnostics.67da75e1.js": {
    "type": "application/javascript",
    "etag": "\"2e8-EDQyt/gTtJaT8fWmnSfDPYRQXCw\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 744,
    "path": "../public/.nuxt/diagnostics.67da75e1.js"
  },
  "/.nuxt/eng.01.c44cc03d.jpg": {
    "type": "image/jpeg",
    "etag": "\"52226-Do5GseDXJYqfwZR98c1hhdqQE5c\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 336422,
    "path": "../public/.nuxt/eng.01.c44cc03d.jpg"
  },
  "/.nuxt/eng.02.226bd387.jpg": {
    "type": "image/jpeg",
    "etag": "\"4904f-jri08S3wehPAvEGdWd+jukBkMS4\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 299087,
    "path": "../public/.nuxt/eng.02.226bd387.jpg"
  },
  "/.nuxt/eng.03.b1749100.jpg": {
    "type": "image/jpeg",
    "etag": "\"516c8-uTBqtMjE7oPPR3hBOFXT3qek6dk\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 333512,
    "path": "../public/.nuxt/eng.03.b1749100.jpg"
  },
  "/.nuxt/eng.04.79581856.jpg": {
    "type": "image/jpeg",
    "etag": "\"4809e-+nDB/sFU6aQmoYj0f5Y3CSROaBM\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 295070,
    "path": "../public/.nuxt/eng.04.79581856.jpg"
  },
  "/.nuxt/eng.05.049d81b5.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c7e3-nG4s37Dc1V4zvM7ipFIWDUiSSRI\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 247779,
    "path": "../public/.nuxt/eng.05.049d81b5.jpg"
  },
  "/.nuxt/eng.06.a691a5fe.jpg": {
    "type": "image/jpeg",
    "etag": "\"39115-zhSuyqxMPbmqfbwQHJFSec0O0j0\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 233749,
    "path": "../public/.nuxt/eng.06.a691a5fe.jpg"
  },
  "/.nuxt/eng.07.5dacff09.jpg": {
    "type": "image/jpeg",
    "etag": "\"36b64-foHu6WpzWfED4GPA8Q3pwOre6go\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 224100,
    "path": "../public/.nuxt/eng.07.5dacff09.jpg"
  },
  "/.nuxt/eng.08.e0679364.jpg": {
    "type": "image/jpeg",
    "etag": "\"431b9-x07ejO8DH8T/c1NIK30jQd81VVo\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 274873,
    "path": "../public/.nuxt/eng.08.e0679364.jpg"
  },
  "/.nuxt/eng.09.47c0658f.jpg": {
    "type": "image/jpeg",
    "etag": "\"40ea0-xpVOxOmfpvgx9NwAUd0PFV+1dQI\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 265888,
    "path": "../public/.nuxt/eng.09.47c0658f.jpg"
  },
  "/.nuxt/eng.10.acf454d5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2facd-RHfV+z4lSnsR0IRCnypM0C4NVjI\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 195277,
    "path": "../public/.nuxt/eng.10.acf454d5.jpg"
  },
  "/.nuxt/eng.11.60b34a5e.jpg": {
    "type": "image/jpeg",
    "etag": "\"3a781-xuZU77YlNemqs9zcb0DTwvE34ns\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 239489,
    "path": "../public/.nuxt/eng.11.60b34a5e.jpg"
  },
  "/.nuxt/eng.12.2305fc77.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f519-oRaPEXPRrqsUztEiQK5Hq42Hqe0\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 193817,
    "path": "../public/.nuxt/eng.12.2305fc77.jpg"
  },
  "/.nuxt/eng.13.b8780f3b.jpg": {
    "type": "image/jpeg",
    "etag": "\"39e41-bO6GBAkb/Q1C8MP3DC5xfgvyvyg\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 237121,
    "path": "../public/.nuxt/eng.13.b8780f3b.jpg"
  },
  "/.nuxt/eng.14.58c2ab0f.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c787-r6CYMCnnEANnApGvTNyh8mzvPQE\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 247687,
    "path": "../public/.nuxt/eng.14.58c2ab0f.jpg"
  },
  "/.nuxt/eng.15.52c3705f.jpg": {
    "type": "image/jpeg",
    "etag": "\"3cbab-hkBY4O2ohkKnvQ8KliATK5rA9WY\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 248747,
    "path": "../public/.nuxt/eng.15.52c3705f.jpg"
  },
  "/.nuxt/eng.16.ed21bdab.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e073-V7PLKKU8hl89mShXprBzrLFYTdQ\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 254067,
    "path": "../public/.nuxt/eng.16.ed21bdab.jpg"
  },
  "/.nuxt/eng.17.c26969f4.jpg": {
    "type": "image/jpeg",
    "etag": "\"47f9e-g3QW/esEB/RXW5T3I4vXLepnDHw\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 294814,
    "path": "../public/.nuxt/eng.17.c26969f4.jpg"
  },
  "/.nuxt/eng.18.2f3965eb.jpg": {
    "type": "image/jpeg",
    "etag": "\"40e1d-wW1A191mssYktw182TYGyC8uMKI\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 265757,
    "path": "../public/.nuxt/eng.18.2f3965eb.jpg"
  },
  "/.nuxt/entry.60c7c377.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"314-v5zDl+1hqXo3iImjhn7fPlt7B7k\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 788,
    "path": "../public/.nuxt/entry.60c7c377.css"
  },
  "/.nuxt/entry.6228b695.js": {
    "type": "application/javascript",
    "etag": "\"3a7ec-rv7uH/umiJQeK40PRekKtCkXu4U\"",
    "mtime": "2025-05-05T22:34:16.734Z",
    "size": 239596,
    "path": "../public/.nuxt/entry.6228b695.js"
  },
  "/.nuxt/error-404.7e564fce.js": {
    "type": "application/javascript",
    "etag": "\"8ad-dQa21JrKV1uhMsou+PO85Te/ZJ8\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 2221,
    "path": "../public/.nuxt/error-404.7e564fce.js"
  },
  "/.nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 3696,
    "path": "../public/.nuxt/error-404.8bdbaeb8.css"
  },
  "/.nuxt/error-500.304cdf2b.js": {
    "type": "application/javascript",
    "etag": "\"756-VG8VVVcA52+2su7PCSF6eZFXBxk\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 1878,
    "path": "../public/.nuxt/error-500.304cdf2b.js"
  },
  "/.nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 2016,
    "path": "../public/.nuxt/error-500.b63a96f5.css"
  },
  "/.nuxt/ico.d97269fd.png": {
    "type": "image/png",
    "etag": "\"124c71-PcHAUCfurc9etvlYG96ruO/4kG4\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 1199217,
    "path": "../public/.nuxt/ico.d97269fd.png"
  },
  "/.nuxt/ico32.aaaa4fd0.png": {
    "type": "image/png",
    "etag": "\"177f-GHIlKk88yy+lH2jy6zObkNCz74Y\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 6015,
    "path": "../public/.nuxt/ico32.aaaa4fd0.png"
  },
  "/.nuxt/ico512.ddb824ca.png": {
    "type": "image/png",
    "etag": "\"992a4-1Nlop4p9TeUFmeRMsCbt/3B5i60\"",
    "mtime": "2025-05-05T22:34:16.723Z",
    "size": 627364,
    "path": "../public/.nuxt/ico512.ddb824ca.png"
  },
  "/.nuxt/ImageCarousel.2cd0e968.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ae3-WlxnkygDCxbZMLm7Jk+BzBkpSwM\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 2787,
    "path": "../public/.nuxt/ImageCarousel.2cd0e968.css"
  },
  "/.nuxt/ImageCarousel.baaa7c13.js": {
    "type": "application/javascript",
    "etag": "\"3492-gIJEIQWZrcjdgi3TjCObvxVcVn8\"",
    "mtime": "2025-05-05T22:34:16.734Z",
    "size": 13458,
    "path": "../public/.nuxt/ImageCarousel.baaa7c13.js"
  },
  "/.nuxt/index.e77e0d52.js": {
    "type": "application/javascript",
    "etag": "\"472-eDaWljh/dMk1rMAknxICiFai5NM\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 1138,
    "path": "../public/.nuxt/index.e77e0d52.js"
  },
  "/.nuxt/logo.feadf02e.png": {
    "type": "image/png",
    "etag": "\"638e-t30E9AX316LKn0H+9eGjhpPImTM\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 25486,
    "path": "../public/.nuxt/logo.feadf02e.png"
  },
  "/.nuxt/repairs.0517813c.js": {
    "type": "application/javascript",
    "etag": "\"308-dSwrzw+u2WS/25R11bH2OSjzkdI\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 776,
    "path": "../public/.nuxt/repairs.0517813c.js"
  },
  "/.nuxt/service.de786130.js": {
    "type": "application/javascript",
    "etag": "\"321-E5Bmoc4CYKrvowQZAetj32FgSc8\"",
    "mtime": "2025-05-05T22:34:16.729Z",
    "size": 801,
    "path": "../public/.nuxt/service.de786130.js"
  },
  "/__sitemap__/routes.json": {
    "type": "application/json",
    "etag": "\"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w\"",
    "mtime": "2025-05-05T22:34:17.989Z",
    "size": 2,
    "path": "../public/__sitemap__/routes.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/.nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

function createSiteConfigStack() {
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    stack.push(input);
  }
  function get() {
    const siteConfig = {
      _context: {}
    };
    for (const o in stack) {
      for (const k in stack[o]) {
        const key = k;
        const val = stack[o][k];
        if (!k.endsWith("context") && typeof val !== "undefined") {
          siteConfig[k] = val;
          siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined")
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  return config;
}
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base);
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const origin = options.absolute ? options.siteUrl : "";
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const parsed = parseURL(pathOrUrl);
  const isFileUrl = parsed.pathname.includes(".");
  if (isFileUrl)
    return pathOrUrl;
  return trailingSlash ? withTrailingSlash(pathOrUrl) : withoutTrailingSlash(pathOrUrl);
}

function useSiteConfig(e) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  return e.context.siteConfig.get();
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = process.env.NITRO_PORT || process.env.PORT || (false);
  let protocol = cert && key || !false ? "https" : "http";
  if (!e) ; else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return `${protocol}://${host}${port}/`;
}

function updateSiteConfig(e, input) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  e.context.siteConfig.push(input);
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig().app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const _3ZwFMy = defineEventHandler((e) => {
  if (!e.context.siteConfig) {
    const appConfig = useAppConfig();
    const nitroOrigin = useNitroOrigin(e);
    e.context.siteConfigNitroOrigin = nitroOrigin;
    const { public: publicRuntimeConfig } = useRuntimeConfig();
    updateSiteConfig(e, {
      _context: "nitro:init",
      url: nitroOrigin
    });
    updateSiteConfig(e, publicRuntimeConfig.site);
    if (appConfig.site) {
      updateSiteConfig(e, {
        _context: "app:config",
        ...appConfig.site
      });
    }
    if (e.context._nitro.routeRules.site) {
      updateSiteConfig(e, {
        _context: "route-rules",
        ...e.context._nitro.routeRules.site
      });
    }
  }
});

const _s5s9FK = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/xslt+xml");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { version, moduleConfig } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || void 0;
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the  <a href="nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it.',
    `URLs missing? Check the <a href="${withQuery("/api/__sitemap__/debug", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...moduleConfig.xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-5">${siteName} XML Sitemap</h1>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

async function resolveUrls(urls) {
  if (typeof urls === "function")
    urls = urls();
  urls = await urls;
  return urls;
}
async function resolveAsyncDataSources(input) {
  const { hasPrerenderedRoutesPayload, isNuxtContentDocumentDriven } = input.buildTimeMeta;
  const entries = [];
  entries.push({
    context: "pages",
    urls: input.pages
  });
  if (input.prerenderUrls) {
    entries.push({
      context: "prerender",
      urls: input.prerenderUrls
    });
  }
  entries.push({
    context: "nuxt-config",
    path: "urls",
    urls: await resolveUrls(input.moduleConfig.urls)
  });
  function doFetch(url) {
    const context = "api";
    const start = Date.now();
    let isHtmlResponse = false;
    return globalThis.$fetch(url, {
      responseType: "json",
      headers: {
        Accept: "application/json"
      },
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    }).then((urls) => {
      const timeTakenMs = Date.now() - start;
      if (isHtmlResponse) {
        entries.push({
          context,
          timeTakenMs,
          urls: [],
          path: url,
          error: "Received HTML response instead of JSON"
        });
      } else {
        entries.push({
          context,
          timeTakenMs,
          path: url,
          urls
        });
      }
    }).catch((err) => {
      entries.push({
        context,
        urls: [],
        path: url,
        error: err
      });
    });
  }
  const waitables = [];
  async function loadSitemapSources(sitemap) {
    if (sitemap.urls) {
      entries.push({
        context: "nuxt-config",
        path: `sitemaps.${sitemap.sitemapName}.urls`,
        urls: await resolveUrls(sitemap.urls)
      });
    }
    if (sitemap.dynamicUrlsApiEndpoint)
      waitables.push(doFetch(sitemap.dynamicUrlsApiEndpoint));
  }
  if (input.buildTimeMeta.hasApiRoutesUrl)
    waitables.push(doFetch(input.moduleConfig.dynamicUrlsApiEndpoint));
  if (!input.sitemap && typeof input.moduleConfig.sitemaps === "object") {
    for (const entry of Object.entries(input.moduleConfig.sitemaps)) {
      const [sitemapName, sitemap] = entry;
      await loadSitemapSources({
        sitemapName,
        ...sitemap
      });
    }
  } else if (input.sitemap) {
    await loadSitemapSources(input.sitemap);
  }
  if (hasPrerenderedRoutesPayload)
    waitables.push(doFetch(input.nitroUrlResolver("/__sitemap__/routes.json")));
  if (isNuxtContentDocumentDriven)
    waitables.push(doFetch("/api/__sitemap__/document-driven-urls"));
  await Promise.all(waitables);
  return entries;
}

function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = defu$1(item, res[k] || {});
  });
  return Object.values(res);
}

async function normaliseSitemapData(data, options) {
  const {
    defaults,
    exclude,
    include,
    autoLastmod,
    autoAlternativeLangPrefixes
  } = options.moduleConfig;
  const combinedInclude = [...options.sitemap?.include || [], ...include || []];
  const combinedExclude = [...options.sitemap?.exclude || [], ...exclude || []];
  const urlFilter = createFilter({ include: combinedInclude, exclude: combinedExclude });
  function resolve(s) {
    if (!s)
      return;
    s = typeof s === "string" ? s : s.toString();
    if (hasProtocol(s, { acceptRelative: true, strict: false }))
      return s;
    return options.canonicalUrlResolver(s);
  }
  const defaultEntryData = { ...defaults || {} };
  if (autoLastmod)
    defaultEntryData.lastmod = defaultEntryData.lastmod || /* @__PURE__ */ new Date();
  const entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = parseURL(e.loc).pathname;
    e = defu$1(e, defaultEntryData);
    return e;
  }).map((e) => {
    const routeRules = options.getRouteRulesForPath(e.loc);
    if (routeRules.index === false)
      return false;
    return defu$1(routeRules.sitemap || {}, e);
  }).filter((e) => e && urlFilter(e.loc));
  if (Array.isArray(autoAlternativeLangPrefixes)) {
    entries.map((e) => {
      e.alternatives = e.alternatives || autoAlternativeLangPrefixes.map((prefix) => ({
        hreflang: prefix,
        href: joinURL(prefix, e.loc)
      }));
      return e;
    });
  }
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((a) => {
        a = { ...a };
        a.href = resolve(typeof a.href === "string" ? a.href : a.href.href);
        return a;
      }), "href");
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        v.contentLoc = resolve(v.contentLoc);
        return v;
      });
    }
    return e;
  }
  function normaliseEntries(entries2) {
    return mergeOnKey(entries2.map(normaliseEntry), "loc").sort((a, b) => {
      if (a.loc > b.loc)
        return 1;
      if (a.loc < b.loc)
        return -1;
      return 0;
    }).sort((a, b) => {
      const aSegments = a.loc.split("/").length;
      const bSegments = b.loc.split("/").length;
      if (aSegments > bSegments)
        return 1;
      if (aSegments < bSegments)
        return -1;
      return 0;
    });
  }
  const ctx = { urls: normaliseEntries(entries), sitemapName: options.sitemap?.sitemapName || "sitemap" };
  if (options.callHook)
    await options.callHook(ctx);
  return normaliseEntries(ctx.urls);
}
function normaliseDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date))
    return false;
  const z = (n) => `0${n}`.slice(-2);
  return `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}+00:00`;
}

const MaxSitemapSize = 1e3;

function wrapSitemapXml(input, { xsl, credits, version }) {
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by Nuxt Simple Sitemap V${version} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemap(options) {
  const sitemapsConfig = options.moduleConfig.sitemaps;
  const sources = await resolveAsyncDataSources(options);
  let entries = await normaliseSitemapData(sources.map((e) => e.urls).flat(), options);
  if (sitemapsConfig === true)
    entries = entries.slice(Number(options.sitemap?.sitemapName) * MaxSitemapSize, (Number(options.sitemap?.sitemapName) + 1) * MaxSitemapSize);
  const ctx = { urls: entries, sitemapName: options?.sitemap?.sitemapName || "sitemap" };
  await options.callHook?.(ctx);
  const resolveKey = (k) => {
    switch (k) {
      case "images":
        return "image";
      case "videos":
        return "video";
      default:
        return k;
    }
  };
  const handleArray = (key, arr) => {
    if (arr.length === 0)
      return false;
    key = resolveKey(key);
    if (key === "alternatives") {
      return arr.map((obj) => [
        `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
      ].join("\n")).join("\n");
    }
    return arr.map((obj) => [
      `        <${key}:${key}>`,
      ...Object.entries(obj).map(([sk, sv]) => `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`),
      `        </${key}:${key}>`
    ].join("\n")).join("\n");
  };
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...ctx.urls?.map((e) => `    <url>
${Object.keys(e).map((k) => Array.isArray(e[k]) ? handleArray(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`).filter((l) => l !== false).join("\n")}
    </url>`) ?? [],
    "</urlset>"
  ], {
    xsl: options.relativeBaseUrlResolver(options.moduleConfig.xsl),
    credits: options.moduleConfig.credits,
    version: options.buildTimeMeta.version
  });
}

async function setupCache(e, key) {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const useCache = moduleConfig.runtimeCacheStorage && moduleConfig.cacheTtl && moduleConfig.cacheTtl > 0;
  const baseCacheKey = moduleConfig.runtimeCacheStorage === "default" ? `/cache/nuxt-simple-sitemap${buildTimeMeta.version}` : `/nuxt-simple-sitemap/${buildTimeMeta.version}`;
  const cache = prefixStorage(useStorage(), `${baseCacheKey}/sitemaps`);
  let xSitemapCacheHeader = "MISS";
  let xSitemapCacheExpires = 0;
  const purge = typeof getQuery$1(e).purge !== "undefined";
  let cachedSitemap = false;
  if (useCache && await cache.hasItem(key)) {
    const { value, expiresAt } = await cache.getItem(key);
    if (expiresAt > Date.now()) {
      if (purge) {
        xSitemapCacheHeader = "PURGE";
        await cache.removeItem(key);
      } else {
        xSitemapCacheHeader = "HIT";
        xSitemapCacheExpires = expiresAt;
        cachedSitemap = value;
      }
    } else {
      await cache.removeItem(key);
    }
  }
  setHeader(e, "x-sitemap-cache", xSitemapCacheHeader);
  setHeader(e, "x-sitemap-cache-expires", xSitemapCacheExpires.toString());
  return {
    cachedSitemap,
    cache: async (sitemap) => {
      if (useCache)
        await cache.setItem(key, { value: sitemap, expiresAt: Date.now() + (moduleConfig.cacheTtl || 0) });
    }
  };
}

const pages = [
  {
    "loc": "/diagnostics",
    "lastmod": "2025-05-05T12:43:50.454Z"
  },
  {
    "loc": "/",
    "lastmod": "2025-05-05T19:24:59.750Z"
  },
  {
    "loc": "/repairs",
    "lastmod": "2025-05-05T12:43:48.813Z"
  },
  {
    "loc": "/service",
    "lastmod": "2025-05-05T12:43:52.389Z"
  }
];

const _TGM9Xy = defineEventHandler(async (e) => {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (moduleConfig.sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  const { cachedSitemap, cache } = await setupCache(e, "sitemap", getQuery$1(e).purge);
  let sitemap = cachedSitemap;
  if (!cachedSitemap) {
    const nitro = useNitroApp();
    const callHook = async (ctx2) => {
      await nitro.hooks.callHook("sitemap:resolved", ctx2);
    };
    const canonicalQuery = getQuery$1(e).canonical;
    const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
    sitemap = await buildSitemap({
      moduleConfig,
      buildTimeMeta,
      nitroUrlResolver: createSitePathResolver(e, { canonical: false, absolute: true, withBase: true }),
      canonicalUrlResolver: createSitePathResolver(e, { canonical: isShowingCanonical || !false, absolute: true, withBase: true }),
      relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true }),
      getRouteRulesForPath,
      callHook,
      pages
    });
    const ctx = { sitemap, sitemapName: "sitemap" };
    await nitro.hooks.callHook("sitemap:output", ctx);
    sitemap = ctx.sitemap;
    await cache(sitemap);
  }
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  return sitemap;
});

const _lazy_ixFyRk = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ixFyRk, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _3ZwFMy, lazy: false, middleware: true, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _s5s9FK, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _TGM9Xy, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ixFyRk, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
