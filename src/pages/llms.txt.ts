import type { APIRoute } from "astro";
import { INTRO, SITE, docsPages, textResponse } from "../lib/llms";

// The index: every page with a line about it.
export const GET: APIRoute = async () => {
  const pages = await docsPages();
  return textResponse(
    [
      "# Nuanom Docs",
      "",
      `> ${INTRO}`,
      "",
      "## Pages",
      "",
      ...pages.map(
        (page) =>
          `- [${page.title}](${page.url})${page.description ? `: ${page.description}` : ""}`
      ),
      "",
      "## Optional",
      "",
      `- [Full text of every page](${SITE}/llms-full.txt)`,
      "- [Nuanom](https://nuanom.com/llms.txt): the product, plans and prices",
      "",
    ].join("\n")
  );
};
