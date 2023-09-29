import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, params }) => {
  return new Response(
    JSON.stringify({
      hello: "world",
      t: new Date(),
    }),
    {
      status: 200,
      headers: {
        "Cache-Control": "public max-age=10; ",
      },
    }
  );
};
