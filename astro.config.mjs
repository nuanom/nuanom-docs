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
      title: "Nuanom Guides",
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
					label: "Merchant",
					items: [
						{
							label: "Introduction",
							link: "/guides/merchant/",
						},
            {
							label: 'Departments and categories',
							link: '/guides/merchant/departments-categories/'
						},
						{
							label: 'Upload products',
							link: '/guides/merchant/upload-products/'
						},
						{
							label: 'Sell on social media',
							link: '/guides/merchant/sharing-links',
						},
						{
							label: 'Create orders',
							link: '/guides/merchant/create-orders/'
						},
						{
							label: 'POS',
							link: '/guides/merchant/pos/'
						}
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
