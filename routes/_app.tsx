import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />
        <link href="https://esm.sh/aos@2.3.4/dist/aos.css" rel="stylesheet" />
        <link href="/extra-aos-animations.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Inter:wght@100..900&family=Press+Start+2P&family=Sofia+Sans+Extra+Condensed:ital,wght@0,1..1000;1,1..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
