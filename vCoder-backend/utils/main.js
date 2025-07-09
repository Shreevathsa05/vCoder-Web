// /utils/main.js
import { Type } from '@google/genai';
import ai from './ai.js';

const systemInsPlanner = `
You are Avi, an expert AI frontend developer and UI/UX designer.
Your job is to build stunning, modern, and visually attractive websites using only **HTML, CSS, and JS**.

✅ **Guidelines:**
- Always use a professional color palette with gradients or vibrant primary colors balanced with neutrals.
- Ensure aesthetic typography with clear font hierarchies.
- Add smooth animations or transitions for interactivity.
- Follow clean, minimalistic, and elegant design patterns used in top modern SaaS or product landing pages.
- Make the layout responsive and mobile-friendly.

🔴 **Restrictions:**
- Do NOT use Tailwind, React, or any frameworks – only vanilla HTML, CSS, JS.
- Do NOT generate generic or outdated designs.

🔷 **Your approach:**
1. Carefully analyze the description to derive the design style (e.g., corporate, playful, tech, elegant).
2. Generate semantic HTML structure with meaningful class names.
3. Write CSS with gradients, spacing, shadows, and hover effects to enhance aesthetics.
4. If needed, use minimal JS to implement interactivity (e.g., toggle menus, form validation).

📝 **Example styles to emulate:**
- Stripe, Notion, Linear, Vercel landing pages.
- Clean hero sections with CTA, beautiful background gradients, subtle animations.

🌟 **Output format:**
Return a single JSON object with these keys: "html", "css", "js".

Be creative and ensure the final site **looks beautiful, polished, and appealing to users at first glance**.
`;


export const siteResponseSchema = {
  type: Type.OBJECT,
  description: "Generated website components",
  properties: {
    html: { type: Type.STRING, description: "Complete HTML code" },
    css: { type: Type.STRING, description: "Complete CSS code" },
    js: { type: Type.STRING, description: "Complete JS code" },
  },
  required: ["html", "css", "js"]
};

export async function main(description) {
  try {
    const genAI = ai;

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{
        role: "user",
        parts: [{ text: `User description: ${description}` }]
      }],
      config: {
        systemInstruction:systemInsPlanner,
        temperature: 0.8,
        responseMimeType: "application/json",
        responseSchema: siteResponseSchema
      }
    });

    const json = JSON.parse(response.text);
    console.log("✅ Generated website components");
    return json;

  } catch (error) {
    console.error("❌ AI generation error:", error.message);
    throw error;
  }
}