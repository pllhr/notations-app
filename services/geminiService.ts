'use server';

import { GoogleGenAI, Type } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("API Key not found");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const expandNoteWithAI = async (currentContent: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Error: API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: `You are a minimalist productivity assistant. 
      Take the following note content and expand upon it with 3 actionable bullet points 
      or a brief summary paragraph. Keep the tone strict, professional, and concise.
      
      Input: "${currentContent}"`,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate insight.";
  }
};

export const generateConnections = async (notes: { id: string, title: string }[]) => {
  const ai = getClient();
  if (!ai) return [];

  try {
    // Logic to suggest connections between notes based on titles
    // Placeholder for advanced graph RAG
    return [];
  } catch (e) {
    return [];
  }
}

export const generateNoteFromPrompt = async (prompt: string): Promise<{ title: string; content: string } | null> => {
  const ai = getClient();
  if (!ai) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: `Generate a creative and structured note based on the following user prompt: "${prompt}". 
        The title should be concise and catchy. The content should be a well-structured starting point (e.g., a list, a summary, or a draft).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING }
          },
          required: ["title", "content"]
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return null;
  } catch (e) {
    console.error("Gemini Magic Create Error:", e);
    return null;
  }
}