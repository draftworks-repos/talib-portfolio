import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import leadHandler from "./api/lead.ts";

dotenv.config({ path: ".env.local" });

const app = express();
app.use(cors());
app.use(express.json());

// Proxy requests to the Vercel Serverless Function
app.all("/api/lead", async (req, res) => {
  try {
    // Vercel Request/Response are essentially decorated Express Request/Response
    // For local dev, this direct pass-through works perfectly for basic REST.
    await leadHandler(req as any, res as any);
  } catch (err) {
    console.error("Error executing serverless function locally:", err);
    res.status(500).json({ error: "Internal Dev Server Error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 API Dev server running on http://localhost:${PORT}`);
});
