// Keep the Lovable defaults for the app, but target Vercel through Nitro rather
// than emitting a Cloudflare Workers build.
import { nitro } from "nitro/vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  plugins: [nitro()],
});
