import { defineConfig, squooshImageService } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [
    starlight({
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/nn-logo-mob.png",
      },
      title: "Nuanom Docs",
      social: {
        email: "https://nuanom.com/support",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introduction",
              link: "/intro/",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Merchant",
              items: [
                {
                  label: "Intro",
                  link: "/guides/merchant/",
                },
								{
									label: 'Upload Products',
									link: '/guides/merchant/upload-products/'
								},
								{
									label: 'Departments & Categories',
									link: '/guides/merchant/departments-categories/'
								}
              ],
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
