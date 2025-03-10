import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  imageSrc?: string;
  url?: string;
  isRoot?: boolean;
}

const baseURL = 'https://recruit-gdsc-uos-page.vercel.app';

function Helmet({ title, description, url, isRoot = false }: Props) {
  return (
    <Head>
      {/* for google publish seo */}
      <meta name="article:published_time" content="2022-08-05T00:00:00.000Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            datePublished: '2022-08-05T00:00:00.000Z',
            dateModified: '2022-08-05T00:00:00.000Z',
            author: {
              '@type': 'Person',
              name: 'Lee SangMin',
            },
          }),
        }}
      />
      {/* favicon */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <title>{`GDSC | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="GDSC,UOS,RECRUIT,GDSC UOS" />
      {/* for mobile */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`GDSC | ${title}`} />
      <meta property="og:site_name" content="GDSC-UOS-RECRUIT-PAGE" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo128.png" />
      <meta property="og:url" content={url} />
      {isRoot && <link rel="canonical" href={baseURL} />}
    </Head>
  );
}

export default Helmet;
