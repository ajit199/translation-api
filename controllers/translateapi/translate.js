import translator from "translate-google";
import { eld } from "eld";

async function translate(req, res) {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({
        error: "Missing Required Field",
        message: "The {text} field is required for translation.",
      });
    }

    if (eld.detect(text).language !== "en") {
      return res.status(400).json({
        error: "Invalid language",
        message: "This API supports English to French translation only.",
      });
    }

    const result = await translator(text, { to: "fr" });
    res.json({ translation: result });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default translate;
