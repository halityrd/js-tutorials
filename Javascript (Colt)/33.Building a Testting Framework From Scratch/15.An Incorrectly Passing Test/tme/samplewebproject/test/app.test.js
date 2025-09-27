const assert = require("assert");

it("has a text input", async () => {
  const dom = await render("index.html");

  const input = dom.windows.document.querySelector("input");

  assert(input);
});
