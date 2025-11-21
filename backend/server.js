import "dotenv/config"
import express from "express";
import cors from "cors";
import "./mongodb.js";
import router from "./routes/routeManager.js";

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
