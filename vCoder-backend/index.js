import express from "express";
import { main } from "./utils/main.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

//  GET route for generating website components
app.get("/generate", async (req, res) => {
  const description = req.query.description;

  if (!description) {
    return res.status(400).json({ success: false, error: "Missing 'description' query parameter." });
  }

  try {
    const result = await main(description);
    res.json({ success: true, components: result });
  } catch (error) {
    console.error("❌ API Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Activate
app.get("/", (req, res) => {
  res.send("🟢 AI Website Generator API is running");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 API server running on port ${PORT}`));
