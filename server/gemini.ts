import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function translateToEnglish(indonesianText: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) {
    console.log('[Gemini] No API key, returning original text');
    return indonesianText;
  }

  try {
    const prompt = `Translate the following Indonesian text to English. Only return the translated text, nothing else. If the text is already in English or contains mixed languages, just clean it up and return proper English.

Text to translate:
${indonesianText}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text?.trim() || indonesianText;
  } catch (error) {
    console.error('[Gemini] Translation error:', error);
    return indonesianText;
  }
}
