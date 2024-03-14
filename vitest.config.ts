import { defineVitestConfig } from "@nuxt/test-utils/config";
import { fileURLToPath } from "node:url";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    // you can optionally set Nuxt-specific environment options
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL("./playground", import.meta.url)),
        domEnvironment: "jsdom",
        overrides: {
          // other Nuxt config you want to pass
        },
      },
    },
  },
});
