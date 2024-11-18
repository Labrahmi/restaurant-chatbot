import { OPENAI_API_URL } from "@env"

const apiKey = OPENAI_API_URL;
const apiUrl = "https://api.openai.com/v1/chat/completions";

const ModifyMessage = (message: string) => {
  return "You are a restaurant chat bot, answer with simple and clear responses: " + message;
}

export async function processMessage(message: string, conversationHistory: { role: string, content: string }[]): Promise<string> {
  try {
    const modifiedMessage = ModifyMessage(message);
    conversationHistory.push({ role: "user", content: modifiedMessage });

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: conversationHistory,
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error("Error from OpenAI API:", await response.text());
      throw new Error("Failed to process message");
    }

    const data = await response.json();
    const botMessage = data.choices[0].message.content.trim();
    conversationHistory.push({ role: "assistant", content: botMessage });

    return botMessage;
  } catch (error) {
    console.error("Error processing message:", error);
    throw new Error("Failed to process message");
  }
}