import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const generateResponse = async (userMessage: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("API_KEY is missing in environment variables.");
    return "I'm currently in basic greeting mode as I wait for my connection to the hotel network. How can I assist you with information about Sareer Hotel?";
  }

  // Always initialize a fresh instance right before the call to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });
    
    return response.text ?? "I apologize, I'm finding it hard to find that information. Is there anything else I can help you with?";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("entity was not found")) {
      return "I'm having trouble connecting to my brain! Please ensure the API Key is set correctly in Vercel settings and redeploy. May your stay be blessed.";
    }
    return "I am currently experiencing a high volume of guest requests. Please try asking again in a moment. May your stay be blessed.";
  }
};