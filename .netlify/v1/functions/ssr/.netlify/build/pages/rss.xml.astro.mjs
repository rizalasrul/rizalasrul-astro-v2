import { g as getCollection } from '../chunks/_astro_content_Dz-_eQdN.mjs';
import rss from '@astrojs/rss';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_pymCaDPq.mjs';
export { renderers } from '../renderers.mjs';

// astro

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
