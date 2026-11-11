import type { APIRoute } from "astro";
import { INTRO, docsPages, textResponse } from "../lib/llms";

// Every page in full.
export const GET: APIRoute = async () => {
  const pages = await docsPages();
  return textResponse(
    [
      "# Nuanom Docs — Full Reference",
      `> ${INTRO}`,
      ...pages.map((page) =>
        [
          `## ${page.title}`,
          `URL: ${page.url}`,
          page.description,
          page.text,
        ]
          .filter(Boolean)
          .join("\n\n")
      ),
    ].join("\n\n---\n\n")
  );
};
