import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 1 + 2;
  console.log(assertEquals(x, 3));
  console.log(x);
});
