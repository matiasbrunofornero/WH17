import { expect, test } from "@playwright/test";

test("api test - work in progress", async ({ request }) => {
  let response = await request.get("/todos/1");
  expect(response.status()).toBe(304);
  expect(response.statusText()).toBe("Not Modified");

  response = await request.get("/posts/1");
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  response = await request.post("/posts", {
    data: { userId: 1, id: 1, title: "foo", body: "bar" },
  });

  expect(response.status()).toBe(201);
  expect(response.statusText()).toBe("Created");

  response = await request.put("/posts/1", {
    data: { userId: 1, id: 1, title: "foo", body: "bar" },
  });

  expect(response.status()).toBe(200);
  // console.log(response.body());

  expect(response.statusText()).toBe("OK");

  response = await request.delete("/posts/1");
  expect(response.status()).toBe(200);
  // console.log(response.body());

  expect(response.statusText()).toBe("OK");
});
