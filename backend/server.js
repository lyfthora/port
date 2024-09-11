const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.post("https://api-free.deepl.com/v2/translate", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        auth_key: process.env.API_KEY,
        text: text,
        target_lang: "ES",
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al traducir" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
