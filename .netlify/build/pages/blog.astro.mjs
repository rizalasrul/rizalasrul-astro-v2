/* empty css                                  */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, u as unescapeHTML, d as renderTemplate, e as renderHead } from '../chunks/astro/server_DlwuNNAk.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$AtFormattedDate, b as $$AtBaseHead, c as $$MvHeader, d as $$MvFooter } from '../chunks/AtFormattedDate_DGhoZ8UX.mjs';
import { g as getCollection } from '../chunks/_astro_content_Dz-_eQdN.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_pymCaDPq.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$OrBlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OrBlogList;
  const url = new URL(Astro2.request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const allPosts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const limit = 8;
  const totalPages = Math.ceil(allPosts.length / limit);
  const posts = allPosts.slice((page - 1) * limit, page * limit);
  const bgClasses = [
    "bg-pgreen rounded-full",
    "bg-pblue rounded-2xl",
    "bg-ppink ",
    "bg-pyellow rounded-md"
  ];
  const getRandomClass = () => {
    return bgClasses[Math.floor(Math.random() * bgClasses.length)];
  };
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col text-center gap-4"> <p class="text-pblack">Documenting the journey.</p> <h2 class="text-4xl font-bold">Tech insights & life reflections.</h2> <ul id="post-list" class="flex flex-wrap justify-center md:justify-start gap-8 py-20"> ${posts.map((post) => {
    const randomClass = getRandomClass();
    const icon = `${Math.floor(Math.random() * 5) + 1}`;
    return renderTemplate`<li class="w-72 text-left rounded-3xl border-1 border-black shadow-card group hover:shadow-hover transition px-4 py-6 flex flex-col gap-6"> <a${addAttribute(`/blog/${post.id}/`, "href")} class="flex flex-col gap-4"> <div${addAttribute(`${randomClass} text-4xl p-2 self-start border-1 border-black shadow-card1 group-hover:shadow-card transition`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon })} </div> <h4 class="text-xl font-semibold">${post.data.title}</h4> <p class="date -mt-4 text-sm font-light"> ${renderComponent($$result, "FormattedDate", $$AtFormattedDate, { "date": post.data.pubDate })} </p> </a> <div>${unescapeHTML(post.data.description)}</div> </li>`;
  })} </ul> <!-- Pagination --> <div class="pagination flex justify-center gap-4 mt-10"> ${page > 1 && renderTemplate`<a${addAttribute(`/blog?page=${page - 1}`, "href")} class="prev-page px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition duration-200 text-sm font-medium">
← Previous
</a>`} ${page < totalPages && renderTemplate`<a${addAttribute(`/blog?page=${page + 1}`, "href")} class="next-page px-5 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition duration-200 text-sm font-medium">
Next →
</a>`} </div> </section>`;
}, "/home/rizalasrul/rizalasrul-astro-v2/src/components/organisms/OrBlogList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "AtBaseHead", $$AtBaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "MvHeader", $$MvHeader, {})} <main class="container mx-auto md:px-10 py-20"> ${renderComponent($$result, "OrBlogList", $$OrBlogList, {})} </main> ${renderComponent($$result, "MvFooter", $$MvFooter, {})} </body></html>`;
}, "/home/rizalasrul/rizalasrul-astro-v2/src/pages/blog/index.astro", void 0);

const $$file = "/home/rizalasrul/rizalasrul-astro-v2/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
