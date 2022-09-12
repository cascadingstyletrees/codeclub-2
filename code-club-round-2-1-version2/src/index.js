/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request) {
    const postmessage = {
      message: "This response has a POST method",
    };

    const notpost = {
      message: "Hello worker!",
    };

    if (request.method == "POST") {
      return new Response(JSON.stringify(postmessage), {
        headers: { "content-type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(notpost), {
        headers: { "content-type": "application/json" },
      });
    }
  },
};
