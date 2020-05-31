import { equal, assert } from "https://deno.land/std/testing/asserts.ts";

  Deno.test("Test Assertion", () => {
    assert({ hello: "world" } === { hello: "world" });
  });

  Deno.test("Test Equal", () => {
    equal({ hello: "world" }, { hello: "world" });
  });
