import { Context } from "@deps";
import { processMessage } from "../services/nlpService.ts";

const ConversationHistory: { role: string; content: string; }[] = [];

async function responseHandler(ctx: Context, response: string) {
  ctx.response.status = 200;
  const responseMessage = await processMessage(response, ConversationHistory);
  console.log("Response message:", responseMessage);
  ctx.response.body = { message: responseMessage };
}

export const handleChat = async (ctx: Context) => {
  try {
    // get the request body:
    const body = await ctx.request.body().value;
    const message = body.message;
    await responseHandler(ctx, message);
  } catch (error) {
    console.error("Error handling chat request:", error);
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal Server Error" };
  }
};
