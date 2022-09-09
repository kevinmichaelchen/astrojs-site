import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import Unocss from "unocss/astro";
import presetWind from "@unocss/preset-wind";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetTypography from "@unocss/preset-typography";
import image from "@astrojs/image";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://kchen.io",
  integrations: [
    mdx(),
    sitemap(),
    Unocss({
      // https://github.com/unocss/unocss#presets
      presets: [
        // Tailwind / Windi CSS compact preset for UnoCSS.
        // https://github.com/unocss/unocss/tree/main/packages/preset-wind
        presetWind(), // Use any icons with Pure CSS
        // https://github.com/unocss/unocss/tree/main/packages/preset-icons
        presetIcons(), // https://github.com/unocss/unocss/tree/main/packages/preset-typography
        presetTypography(), // Attributify Mode for UnoCSS.
        // Useful for when the class="" string gets really long.
        // https://github.com/unocss/unocss/tree/main/packages/preset-attributify
        presetAttributify(), // Web fonts support for UnoCSS.
        presetWebFonts({
          // default provider is 'google', but 'bunny' is also supported:
          // https://fonts.bunny.net/ -- a privacy-friendly Google drop-in replacement
          provider: "google",
          fonts: {
            // these will extend the default theme
            sans: "DM Sans",
            serif: "Source Serif Pro",
            mono: ["Fira Code", "Fira Mono:400,700"],
          },
        }),
      ],
    }),
    image(),
    preact(),
  ],
});
