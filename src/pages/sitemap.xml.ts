import type { APIRoute } from 'astro';
const routes = ['/', '/projects', '/talks', '/journey'];

export const GET: APIRoute = ({ site }) => {
  const urls = routes
    .map((path) => {
      const fr = new URL(path, site).href;
      const en = new URL(path === '/' ? '/en' : `/en${path}`, site).href;
      const alternates = `<xhtml:link rel="alternate" hreflang="fr" href="${fr}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/>`;
      return [fr, en].map((loc) => `  <url><loc>${loc}</loc>${alternates}</url>`).join('\n');
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
