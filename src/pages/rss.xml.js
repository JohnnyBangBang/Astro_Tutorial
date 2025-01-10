import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Heiii Bloggen <3',
    description: 'Jeg skal bli med på Bloggerne på TV2',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>nb-no</language>`,
  });
}