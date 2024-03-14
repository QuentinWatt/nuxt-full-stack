import { expect, test } from "vitest";
import MainHeader from "./MainHeader.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

test("It matches the snapshot", async () => {
  const component = await mountSuspended(MainHeader);
  expect(component.html()).matchSnapshot();
});

test("It has a logo", async () => {
  const component = await mountSuspended(MainHeader);
  expect(component.html()).toContain("MyLogo");
});

test("It has the correct menu items", async () => {
  const component = await mountSuspended(MainHeader);
  expect(component.html()).toContain("Home");
  expect(component.html()).toContain("About");
});
