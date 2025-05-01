/* empty css                                  */
import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlwuNNAk.mjs';
import 'kleur/colors';
import { $ as $$BlogDetail } from '../chunks/BlogDetail_DCrgzVkH.mjs';
export { renderers } from '../renderers.mjs';

const $$Now = createComponent(($$result, $$props, $$slots) => {
  const description = "";
  return renderTemplate`${renderComponent($$result, "BlogDetail", $$BlogDetail, { "icon": "beach", "title": "Now \u2014 What's Happening?", "description": description, "pubDate": /* @__PURE__ */ new Date("May 01, 2025"), "heroImage": "/src/assets/now.png" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is my "Now Page," where I share what I'm up to lately. I'll try to keep it updated, but I might forget — hopefully not!</p> <h2>Latest Update</h2> <p>Right now, I'm working as a <strong>Software Engineer, Frontend</strong> at <strong>Tiket</strong>. I've been to Japan three times, spent 45 days there, and visited 14 prefectures. I'm also preparing for my <strong>relocation to Japan</strong> soon.</p> <h2>Work</h2> <p>I'm focused on improving my frontend skills and contributing to projects at Tiket.</p> <h2>Personal</h2> <p>When I'm not coding, I'm playing <strong>Coral Island</strong>, a game from Indonesia. I'm also running 5 km a day as part of <strong>#zaljalan</strong>, though I've been a bit inconsistent lately. Hoping to get back on track!</p> ` })}`;
}, "/home/rizalasrul/rizalasrul-astro-v2/src/pages/now.astro", void 0);

const $$file = "/home/rizalasrul/rizalasrul-astro-v2/src/pages/now.astro";
const $$url = "/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Now,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
