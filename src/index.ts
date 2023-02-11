import express from "express";
import { paths } from "./paths";
import { verifyJwtMiddleware } from "./auth";
import { pull, push } from "./sync";
import { getUser, login } from "./user";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/api" + paths.sync.pull, verifyJwtMiddleware, pull);
app.post("/api" + paths.sync.push, verifyJwtMiddleware, push);

app.post("/api" + paths.user.login, login);
app.get("/api" + paths.user.get_user, verifyJwtMiddleware, getUser);


if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}
