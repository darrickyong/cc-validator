import express from "express";
import indexRouter from "./routes/index.ts";
import validatorRouter from "./routes/validator.ts";
import cors from "cors";

const app = express();
const port = process.env.PORT || "5000";

app.use(cors());
app.use("/", indexRouter);
app.use("/validator", validatorRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
