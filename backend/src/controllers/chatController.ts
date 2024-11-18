import { Context } from "@deps";

function responseHandler(ctx: Context, response: any) {
  ctx.response.status = 200;
  ctx.response.body = { message: response };
}

export const handleChat = async (ctx: Context) => {
  try {
    // get the request body:
    const body = await ctx.request.body().value;
    const message = body.message;
    responseHandler(ctx, message);
  } catch (error) {
    console.error("Error handling chat request:", error);
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal Server Error" };
  }
};
