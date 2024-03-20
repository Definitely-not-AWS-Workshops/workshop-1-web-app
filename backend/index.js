import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import animeRoutes from "./routes/anime.js";
import healthCheckRoutes from "./routes/health-check.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/anime", animeRoutes);
app.use("/health", healthCheckRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
