// The docs as plain text for AI tools (llms.txt, llms-full.txt): Nuanom
// admin's content writer reads them, so what it writes matches how Nuanom
// really works, and so can any assistant that looks for them.
import { getCollection } from "astro:content";

export const SITE = "https://docs.nuanom.com";

export const INTRO =
  "How to use Nuanom: the merchant app, POS and carrier apps, orders, products, delivery, payments and settlement, the WhatsApp AI assistant, and customising a shop.";

// A page's address from its id ("guides/merchant/index" → /guides/merchant/).
const pathOf = (id: string) => {
  const path = id.replace(/(^|\/)index$/, "");
  return path ? `/${path}/` : "/";
};

// The words: MDX imports and components dropped, links made full addresses.
const textOf = (body = "") =>
  body
    .replace(/^(import|export) .*$/gm, "")
    .replace(/<[A-Z][^>]*\/>/g, "")
    .replace(/<\/?[A-Z][^>]*>/g, "")
    .replace(/\]\(\//g, `](${SITE}/`)
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export const docsPages = async () =>
  (await getCollection("docs"))
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((page) => ({
      title: page.data.title,
      description: page.data.description ?? "",
      url: `${SITE}${pathOf(page.id)}`,
      text: textOf(page.body),
    }));

export const textResponse = (text: string) =>
  new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
