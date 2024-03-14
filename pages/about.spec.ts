import { expect, test } from "vitest";
import about from "./about.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

test("It renders the H1 for the about page", async () => {
  const component = await mountSuspended(about);
  expect(component.html()).toContain("About us");
});

test("It matches the snapshot", async () => {
  const component = await mountSuspended(about);
  expect(component.html()).matchSnapshot();
});
