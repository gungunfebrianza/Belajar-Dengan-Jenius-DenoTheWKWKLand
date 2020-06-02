import { denock } from "https://deno.land/x/denock/mod.ts";

denock({
  method: "POST",
  protocol: "http",
  host: "127.0.0.1:8000",
  headers: [
    {
      header: "content-type",
      value: "application/json",
    },
  ],
  path: "/api/v1/signup",
  requestBody: {
    name: "balagendir",
    email: "asepkumis@gmail.com",
    password: "tosblong",
  },
  replyStatus: 201,
  responseBody: { example: "My mocked response" },
});

const urlObject = new URL("http://127.0.0.1:8000/api/v1/signup");

const response = await fetch(urlObject, {
  method: "POST",
  headers: new Headers({
    "content-type": "application/json",
  }),
  body: JSON.stringify({
    name: "balagendir",
    email: "asepkumis@gmail.com",
    password: "tosblong",
  }),
});

const body = await response.json();

console.log(body); // ==> { example: 'My mocked response' } instead of the real response.
