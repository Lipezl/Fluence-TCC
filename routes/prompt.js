import express from 'express';
import { GoogleGenAI } from '@google/genai';

const router = express.Router();

const apiKey = process.env.APIKEY;

const ai = new GoogleGenAI({
  apiKey,
});

router.post('/prompt', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ error: 'Prompt é obrigatório' });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      maxTokens: 200,
    });

    const reply = response.text;
    res.json({ prompt, reply });
  } catch (error) {
    console.error('Erro ao gerar texto:', error);
    res.status(500).json({ error: 'Erro ao gerar texto' });
  }
});

export default router;
