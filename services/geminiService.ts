import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please contact the front desk.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am having trouble connecting to the network. Please try again later.";
  }
};