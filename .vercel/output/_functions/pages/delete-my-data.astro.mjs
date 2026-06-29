/* empty css                                         */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ozBOI2Jp.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_pPwNGeqP.mjs';
import { $ as $$Header } from '../chunks/Header_Cg6cuwN0.mjs';
export { renderers } from '../renderers.mjs';

const $$DeleteMyData = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Senpai | Dating App for Anime Lovers",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-hidden"> ${renderComponent($$result2, "Header", $$Header, {})} <form action="https://staging.senpaiapp.com/delete_my
    _data"> <input type="text" id="user_cell_phone" placeholder="Cell Phone Number"> <button type="submit"></button> </form> </main> ` })}`;
}, "C:/Users/kingherb/Projects/senpai-marketing-site/src/pages/delete-my-data.astro", void 0);

const $$file = "C:/Users/kingherb/Projects/senpai-marketing-site/src/pages/delete-my-data.astro";
const $$url = "/delete-my-data";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DeleteMyData,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
