export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://clipping-gents-salon.vercel.app/sitemap.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
