import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DlxWxIHH.mjs';
import { manifest } from './manifest_DVyRKbIw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cookie-policy.astro.mjs');
const _page2 = () => import('./pages/delete-my-data.astro.mjs');
const _page3 = () => import('./pages/privacy-policy.astro.mjs');
const _page4 = () => import('./pages/privacy-policy-jp.astro.mjs');
const _page5 = () => import('./pages/terms-of-service.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cookie-policy.astro", _page1],
    ["src/pages/delete-my-data.astro", _page2],
    ["src/pages/privacy-policy.astro", _page3],
    ["src/pages/privacy-policy-jp.astro", _page4],
    ["src/pages/terms-of-service.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e42223ef-2674-45bc-8a47-0a9e4c2ac141",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
