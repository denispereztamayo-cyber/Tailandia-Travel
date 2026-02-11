import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants.ts";

let chatSession: Chat | null = null;

const getAIClient = () => {
  // Verificación segura para evitar ReferenceError en el navegador
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
  
  if (!apiKey) {
    console.error("Critical Error: API_KEY is not defined in environment variables. Please set it in your hosting provider (e.g. Vercel Dashboard).");
    return null;
  }
  
  return new GoogleGenAI({ apiKey });
};

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
    console.error("Failed to initialize chat session:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const chat = getChatSession();
  
  if (!chat) {
    return "Lo siento, la configuración del chat no está completa. Por favor, asegúrate de que la API Key esté configurada en el panel de Vercel.";
  }

  try {
    const response = await chat.sendMessage({ message });
    return response.text || "No recibí una respuesta clara. Por favor, intenta de nuevo.";
  } catch (error) {
    console.error("Error communicating with Gemini AI:", error);
    return "He tenido un pequeño problema técnico conectando con mi base de conocimientos. ¿Podrías intentar preguntarme de nuevo en unos segundos?";
  }
};