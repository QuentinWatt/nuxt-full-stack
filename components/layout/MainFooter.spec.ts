import { expect, test } from "vitest";
import MainFooter from "./MainFooter.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

test("It has a copyright with the current year", async () => {
  const component = await mountSuspended(MainFooter);
  expect(component.html()).toContain("© 2024");
});

test("It has a logo", async () => {
  const component = await mountSuspended(MainFooter);
  expect(component.html()).toContain("MyLogo");
});

test("It matches the snapshot", async () => {
  const component = await mountSuspended(MainFooter);
  expect(component.html()).matchSnapshot();
});
