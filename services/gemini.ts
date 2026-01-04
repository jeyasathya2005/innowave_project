
import { GoogleGenAI } from "@google/genai";
import { COMPANY_NAME } from "../constants";
import { KnowledgeState } from "../types";

/**
 * PRODUCTION RAG SERVICE
 * This service takes the current dynamic state of the knowledge base
 * and uses it to ground the LLM's response.
 */
export const getGeminiResponse = async (userMessage: string, knowledge: KnowledgeState) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
You are the "InnoWave Smart Employee Onboarding Assistant". 
Your goal is to help new employees at ${COMPANY_NAME} find information from the provided Knowledge Base.

GROUNDING CONTEXT (DYNAMICALLY INJECTED FROM BACKEND):
--- EMPLOYEE HANDBOOK ---
${knowledge.handbook}

--- EMPLOYEE DIRECTORY ---
${knowledge.directoryCsv}

RESPONSE PROTOCOL:
1. ONLY use information from the provided context. 
2. If you find the info, cite the source (e.g., "According to the IT policy...").
3. If information is missing, refer them to hr-support@innowave.ai.
4. Use professional formatting with Markdown.
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.1,
      },
    });

    return response.text || "No response received from model.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Backend Error: The AI service is currently unavailable.";
  }
};
