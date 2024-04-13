init = require("./init");

app = require("./app");

const port = 5550;
app.listen(port, () => {
  init;
  console.log("Connected on http://localhost:" + port);
});
