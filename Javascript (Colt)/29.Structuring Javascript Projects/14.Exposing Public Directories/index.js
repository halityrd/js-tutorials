const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouther = require("./routes/admin/auth");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ["lkasld235j"]
}));
app.use(authRouther);

app.listen(3000, () => {
  console.log("Listening");
});
