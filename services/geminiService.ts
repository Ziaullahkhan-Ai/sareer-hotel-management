import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const generateResponse = async (userMessage: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
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
    
    // Using .text property directly as per latest SDK guidelines
    return response.text ?? "I apologize, I'm finding it hard to find that information. Is there anything else I can help you with?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing a high volume of guest requests. Please try asking again in a moment or visit our front desk. May your stay be blessed.";
  }
};