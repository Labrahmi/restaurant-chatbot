// services/nlpService.ts
import axios from "https://cdn.skypack.dev/axios";

export async function processMessage(message: string): Promise<string> {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    },
    {
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.choices[0].message.content;
}
