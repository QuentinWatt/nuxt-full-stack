import { expect, test } from "vitest";
import index from "./index.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

test("It renders hello world on the home page", async () => {
  const component = await mountSuspended(index);
  expect(component.html()).toContain("Hello world!");
});

test("It matches the snapshot", async () => {
  const component = await mountSuspended(index);
  expect(component.html()).matchSnapshot();
});
