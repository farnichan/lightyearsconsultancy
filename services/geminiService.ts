
import { GoogleGenAI, Type } from "@google/genai";
import { AIAdvisorResponse } from "../types";

/**
 * Fetches education advice from Nova, the AI Admissions Expert.
 * Uses gemini-3-flash-preview for specialized education consulting.
 */
export async function getEducationAdvice(userProfile: string): Promise<AIAdvisorResponse> {
  // Fix: Always use process.env.API_KEY directly when initializing GoogleGenAI.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As an elite education consultant at Lightyears, analyze this student profile and provide tailored university/major recommendations: ${userProfile}`,
    config: {
      systemInstruction: "You are 'Nova', the Lightyears AI Admissions Expert. Your tone is professional, encouraging, and insightful. You specialize in global university admissions (US, UK, Canada, Australia, etc.).",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: {
            type: Type.STRING,
            description: "A professional summary of the student's strengths and potential path.",
          },
          recommendations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                location: { type: Type.STRING },
                reason: { type: Type.STRING },
                matchScore: { type: Type.NUMBER, description: "A score from 0 to 100" }
              },
              required: ["name", "location", "reason", "matchScore"]
            }
          }
        },
        required: ["summary", "recommendations"]
      }
    }
  });

  try {
    // Fix: Access the .text property directly (do not call as a function).
    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    return JSON.parse(text) as AIAdvisorResponse;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    throw new Error("Could not process the recommendation. Please try again.");
  }
}
