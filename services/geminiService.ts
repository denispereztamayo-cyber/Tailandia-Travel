import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Initializes or retrieves the existing chat session.
 * This ensures conversation history is maintained during the user's session.
 */
export const getChatSession = (): Chat | null => {
  if (chatSession) return chatSession;

  const ai = getAIClient();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to create chat session:", error);
    return null;
  }
};

/**
 * Sends a message to the Gemini AI and returns the text response.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  const chat = getChatSession();
  
  if (!chat) {
    return "I'm sorry, I cannot connect to the AI service at the moment. Please check your API key configuration.";
  }

  try {
    const response = await chat.sendMessage({ message });
    return response.text || "I didn't receive a response. Please try again.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having a little trouble connecting to the spirits of travel right now. Please try again in a moment.";
  }
};
