import express from "express";
import { translate } from "./controllers/translateapi/index.js";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("App is working.");
});

app.post("/translate/en-to-fr", translate);

const PORT = 8200;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
