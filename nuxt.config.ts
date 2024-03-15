import { defineNuxtConfig } from "nuxt/config";
import Vue from "@vitejs/plugin-vue";

export default defineNuxtConfig({
  plugins: [Vue()],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/test-utils/module"],
});
