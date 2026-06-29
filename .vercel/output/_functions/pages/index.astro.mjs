/* empty css                                         */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as addAttribute, r as renderComponent } from '../chunks/astro/server_ozBOI2Jp.mjs';
import 'piccolore';
import { S as SITE, c as calculateLaunchDate, $ as $$Layout } from '../chunks/Layout_pPwNGeqP.mjs';
import { $ as $$Header } from '../chunks/Header_Cg6cuwN0.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Footer } from '../chunks/Footer_Cs9T-gHd.mjs';
export { renderers } from '../renderers.mjs';

const $$Step = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="step-container sm:p-12 p-0" data-astro-cid-5vkjc2f4> <div class="step-headers" data-astro-cid-5vkjc2f4> <div class="step-header-1" data-astro-cid-5vkjc2f4> <div class="text-neutral-200" data-astro-cid-5vkjc2f4>Step 1</div> <div class="h3 mt-4" data-astro-cid-5vkjc2f4>Sign Up</div> </div> <div class="step-header-2 step-header" data-astro-cid-5vkjc2f4> <div class="text-neutral-200" data-astro-cid-5vkjc2f4>Step 2</div> <div class="h3 mt-4" data-astro-cid-5vkjc2f4>Set your photos & bio</div> </div> <div class="step-header-3 step-header" data-astro-cid-5vkjc2f4> <div class="text-neutral-200" data-astro-cid-5vkjc2f4>Step 3</div> <div class="h3 mt-4" data-astro-cid-5vkjc2f4>Set your Location</div> </div> <div class="step-header-4 step-header" data-astro-cid-5vkjc2f4> <div class="text-neutral-200" data-astro-cid-5vkjc2f4>Step 4</div> <div class="h3 mt-4" data-astro-cid-5vkjc2f4>Pick your top 10 anime!</div> </div> <div class="step-header-5 step-header" data-astro-cid-5vkjc2f4> <div class="text-neutral-200" data-astro-cid-5vkjc2f4>Step 5</div> <div class="h3 mt-4" data-astro-cid-5vkjc2f4>Get Verified</div> </div> </div> <div class="step-content sm:h-[600px] h-[460px]" data-astro-cid-5vkjc2f4> <!-- Background --> <!-- <img src="/assets/images/step-gradient.png" alt="step-bg" class="step-bg"> --> <div class="absolute top-[200px] w-full flex justify-around" data-astro-cid-5vkjc2f4> <div class="step-bg-pink inline-block" data-astro-cid-5vkjc2f4></div> <div class="step-bg-blue inline-block" data-astro-cid-5vkjc2f4></div> </div> <!-- Dot circles --> <div class="step-dot-circle-1" data-astro-cid-5vkjc2f4> <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5vkjc2f4> <circle cx="300" cy="300" r="300" stroke="url(#paint0_linear_482_91)" stroke-width="0.919743" stroke-dasharray="7.36 7.36" data-astro-cid-5vkjc2f4></circle> <defs data-astro-cid-5vkjc2f4> <linearGradient id="paint0_linear_482_91" x1="300" y1="0" x2="300" y2="600" gradientUnits="userSpaceOnUse" data-astro-cid-5vkjc2f4> <stop stop-color="#DE0BC9" data-astro-cid-5vkjc2f4></stop> <stop offset="1" stop-color="#1286F0" data-astro-cid-5vkjc2f4></stop> </linearGradient> </defs> </svg> </div> <div class="step-dot-circle-2" data-astro-cid-5vkjc2f4> <svg width="460" height="460" viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5vkjc2f4> <circle cx="230" cy="230" r="230" stroke="url(#paint0_linear_482_91)" stroke-width="0.919743" stroke-dasharray="7.36 7.36" data-astro-cid-5vkjc2f4></circle> <defs data-astro-cid-5vkjc2f4> <linearGradient id="paint0_linear_482_91" x1="230" y1="0" x2="230" y2="460" gradientUnits="userSpaceOnUse" data-astro-cid-5vkjc2f4> <stop stop-color="#DE0BC9" data-astro-cid-5vkjc2f4></stop> <stop offset="1" stop-color="#1286F0" data-astro-cid-5vkjc2f4></stop> </linearGradient> </defs> </svg> </div> <!-- Devices --> <div class="step-device-container sm:flex hidden" data-astro-cid-5vkjc2f4> <div class="step-device step-device-1 w-[280px]" data-astro-cid-5vkjc2f4></div> <div class="step-device step-device-2 w-[240px]" data-astro-cid-5vkjc2f4></div> </div> <div class="step-device-container sm:hidden flex" data-astro-cid-5vkjc2f4> <div class="step-device step-mobile-device-1 w-[200px]" data-astro-cid-5vkjc2f4></div> <div class="step-device step-mobile-device-2 w-[170px]" data-astro-cid-5vkjc2f4></div> </div> </div> </div> `;
}, "C:/Users/kingherb/Projects/senpai-marketing-site/src/components/Step.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="how-it-works"> <div class="container text-center sm:p-24 px-4 py-20"> <div class="h2">How it Works</div> <div class="sm:mt-4 mt-2"> <img src="/assets/images/line.png" alt="line"${addAttribute(157, "width")} class="mx-auto"> <div class="steps mt-10"> ${renderComponent($$result, "Step", $$Step, {})} </div> </div> </div> </div>`;
}, "C:/Users/kingherb/Projects/senpai-marketing-site/src/components/HowItWorks.astro", void 0);

const $$Join = createComponent(($$result, $$props, $$slots) => {
  let launchDate = new Date(SITE.launchDate);
  const { months, days, hours } = calculateLaunchDate(launchDate);
  let launched = months == days && days == hours && hours == 0;
  return renderTemplate`${maybeRenderHead()}<div class="join bg-neutral-600 sm:h-[570px] h-[470px]" data-astro-cid-ud2ht4zz> <div class="header-bg-pink" data-astro-cid-ud2ht4zz></div> <div class="header-bg-blue" data-astro-cid-ud2ht4zz></div> ${launched && renderTemplate`<div class="container text-center sm:p-20 px-4 py-20 content" data-astro-cid-ud2ht4zz> <div class="h2" data-astro-cid-ud2ht4zz>Download Now</div> <div class="sm:mt-4 mt-2" data-astro-cid-ud2ht4zz> <img src="/assets/images/line.png" alt="line"${addAttribute(157, "width")} class="mx-auto" data-astro-cid-ud2ht4zz> </div> <div class="flex items-center gap-8 mt-8 justify-center flex-wrap" data-astro-cid-ud2ht4zz> <div class="ios" data-astro-cid-ud2ht4zz> <a href="https://apps.apple.com/us/app/senpai-dating-for-anime-fans/id6464066826" data-astro-cid-ud2ht4zz> <img src="/assets/images/appstore.png" alt="appstore" data-astro-cid-ud2ht4zz> </a> </div> <div class="android" data-astro-cid-ud2ht4zz> <a href="https://play.google.com/store/apps/details?id=makeshift.software.inc.senpai" data-astro-cid-ud2ht4zz> <img src="/assets/images/playstore.png" alt="playstore" data-astro-cid-ud2ht4zz> </a> </div> </div> </div>`} ${!launched && renderTemplate`<div class="container text-center sm:p-24 px-4 py-20 content" data-astro-cid-ud2ht4zz> <div class="h2" data-astro-cid-ud2ht4zz>Join the Waitlist</div> <div class="sm:mt-4 mt-2" data-astro-cid-ud2ht4zz> <img src="/assets/images/line.png" alt="line"${addAttribute(157, "width")} class="mx-auto" data-astro-cid-ud2ht4zz> </div> <form action="/" method="POST" class="mt-16 max-w-[528px] mx-auto flex flex-col" data-astro-cid-ud2ht4zz> <input type="text" id="email" name="email" placeholder="Email address" class="text-input txt-input" required data-astro-cid-ud2ht4zz> <button class="action-btn btn-caption mt-6" data-astro-cid-ud2ht4zz>Join the waitlist</button> </form> </div>`} </div> `;
}, "C:/Users/kingherb/Projects/senpai-marketing-site/src/components/Join.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Senpai | Dating App for Anime Lovers",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-hidden"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Join", $$Join, {})} <!-- <Track /> --> <hr class="color-white opacity-10"> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "C:/Users/kingherb/Projects/senpai-marketing-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/kingherb/Projects/senpai-marketing-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
