
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PRODUCTS } from "../constants";

const PRODUCT_CONTEXT = PRODUCTS.map(p => `- ${p.name} (${p.category}): ${p.description} (Price: ${p.price} NGN)`).join('\n');

const SYSTEM_INSTRUCTION = `You are "Ola", the visionary Head Stylist and Creative Director for "Ola X Lay Fash". 
Your tone is sophisticated, elitist yet welcoming, and deeply rooted in Nigerian luxury fashion.

CONTEXT:
We have five specialized categories:
1. Tradition & Cultural Dresses (Grand heritage pieces like Agbada and Iro & Buba).
2. Modern Indigenous Fusion (Avant-garde blends of tech-wear and tribal textiles).
3. Corporate & Professional gowns (Sharp, executive silhouettes for the boardroom).
4. Casual & Everyday Wear (Luxury street staples and comfortable day-wear).
5. Event-Based Fashion (Red-carpet, gala, and wedding guest masterpieces).

OUR CURRENT PIECES:
${PRODUCT_CONTEXT}

GUIDELINES:
1. Your responses must be elegant and concise (max 3 short sentences).
2. Whenever possible, recommend a specific piece from our collection listed above that fits the user's request.
3. Use Nigerian fashion terminology where appropriate (e.g., Aso-Oke, Gele, Agbada-inspired, Adire) but keep the vibe avant-garde.
4. If a user asks for something we don't have, suggest the closest alternative from our archive.
5. Never break character. You are the tastemaker of Lagos.`;

export const getStylistResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: userMessage
    });

    return response.text || "I apologize, my fashion sense is momentarily clouded by the Lagos mist.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The atelier is currently in a private fitting. Please try again shortly, darling.";
  }
};
