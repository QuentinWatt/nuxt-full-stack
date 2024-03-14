import { expect, test } from "vitest";
import about from "./about.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

test("It renders the H1 for the about page", async () => {
  const component = await mountSuspended(about);
  expect(component.text()).toContain("About us");
});
