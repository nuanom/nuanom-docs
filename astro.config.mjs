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
          label: "Nuanom",
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
							label: "Start here",
							link: "/guides/merchant/",
						},
            {
              label: 'Shop information',
              link: '/guides/merchant/shop-info/'
            },
            {
              label: 'Delivery options',
              link: '/guides/merchant/delivery-options/'
            },
            {
              label: 'Customize your shop',
              link: '/guides/merchant/customize-shop/'
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
							label: 'Managing orders',
							link: '/guides/merchant/managing-orders/'
						},
						{
							label: 'Create orders',
							link: '/guides/merchant/create-orders/'
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
