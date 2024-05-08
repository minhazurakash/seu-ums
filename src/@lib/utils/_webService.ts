export const lastModifiedDate = new Date().toISOString();

export interface ISitemapRoute {
  url: string;
  lastModified?: string;
}
export const createSitemap = (routes: ISitemapRoute[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes
          .map((route) => {
            return `
                <url>
                    <loc>${route.url}</loc>
                    <lastmod>${route.lastModified || lastModifiedDate}</lastmod>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

export interface IRssFeed {
  options: {
    title: string;
    link: string;
    description: string;
    lastBuildDate: Date;
    language: string;
    copyright: string;
    generator?: string;
  };
  items: {
    title: string;
    link: string;
    guid: string;
    pubDate: Date;
    media: string;
    description?: string;
  }[];
}

export const generateRssFeed = async (options: IRssFeed['options'], items: IRssFeed['items'] = []) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" >
        <channel>
            <title>${options.title}</title>
            <link>${options.link}</link>
            <atom:link href="${options.link + '/feed.xml'}" rel="self" type="application/rss+xml"/>
            <description>${options.description}</description>
            <lastBuildDate>${options.lastBuildDate.toUTCString()}</lastBuildDate>
            <language>${options.language}</language>
            <copyright>${options.copyright}</copyright>
            ${options.generator ? `<generator>${options.generator}</generator>` : ''}
            ${items
              ?.map((item) => {
                return `
                      <item>
                        <title><![CDATA[ ${item.title} ]]></title>
                        <link>${item.link}</link>
                        <description><![CDATA[ ${item.description ?? ''} ]]></description>
                        <guid isPermaLink="false">${item.guid}</guid>
                        <pubDate>${item.pubDate.toUTCString()}</pubDate>
                        <media:content url="${item.media}"  medium="image" width="820" height="461" />
                        <media:thumbnail url="${item.media}" width="160" height="92"/>
                      </item>
                  `;
              })
              .join('')}
        </channel>
      </rss>
  `;
};
