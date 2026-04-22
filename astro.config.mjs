import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/nn-logo-mob.png",
      },
      title: "Nuanom Docs",
      social: [
        { icon: "email", label: "Support", href: "https://nuanom.com/support" },
        { icon: "github", label: "GitHub", href: "https://github.com/nuanom" },
        { icon: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@nuanomghana" },
        { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/@nuanom" },
        { icon: "twitter", label: "Twitter", href: "https://x.com/nuanomghana" },
        { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/nuanomghana/" },
      ],
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
              label: 'Update shop info',
              link: '/guides/merchant/shop-info/'
            },
            {
              label: 'Set delivery options',
              link: '/guides/merchant/delivery-options/'
            },
            {
              label: 'Preview storefront',
              link: '/guides/merchant/preview-storefront/'
            },
            {
              label: 'Customize shop',
              link: '/guides/merchant/customize-shop/'
            },
            {
							label: 'Departments & categories',
							link: '/guides/merchant/departments-categories/'
						},
						{
							label: 'Upload products',
							link: '/guides/merchant/upload-products/'
						},
						{
							label: 'Sharing products',
							link: '/guides/merchant/sharing-links',
						},
            {
							label: 'Managing orders',
							link: '/guides/merchant/managing-orders/'
						},
						{
							label: 'Creating orders',
							link: '/guides/merchant/create-orders/'
						},
            {
              label: 'WhatsApp AI Assistant',
              link: '/guides/merchant/whatsapp-ai-assistant/'
            },
             {
              label: 'Settlement',
              link: '/guides/merchant/settlement/'
            },
            {
              label: 'Managing POS devices',
              link: '/guides/merchant/manage-pos-devices/'
            },
					],
				},
        {
          label: "POS",
          items: [
            {
              label: "Start here",
              link: "/guides/pos/",
            },
            {
              label: "Taking orders",
              link: "/guides/pos/take-orders/"
            }
          ],
        },
        {
          label: 'Carrier',
          items: [
            {
              label: 'Start here',
              link: '/guides/carrier/'
            },
            {
              label: 'Managing deliveries',
              link: '/guides/carrier/deliveries/'
            },
          ],
        }
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
