import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/translate", async (req, res) => {
  const { text, target_lang } = req.body;

  if (!text || !target_lang) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${process.env.DEEP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: [text],
        target_lang: target_lang,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error en la solicitud de traducción:", error);
    res.status(500).json({ error: "Error al traducir el texto" });
  }
});

// Add a test GET route
app.get("/translate", (req, res) => {
  res.send("Translation service is running. Please use POST for translations.");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
