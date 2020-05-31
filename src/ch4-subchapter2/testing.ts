import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test({
  name: "testing example",
  fn(): void {
    assertEquals(1, "1");
    assertEquals({ hello: "world" }, { hello: "worlds" });
  },
});
