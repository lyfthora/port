import fetch from "node-fetch";

export const translate = async (req, res) => {
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
};
