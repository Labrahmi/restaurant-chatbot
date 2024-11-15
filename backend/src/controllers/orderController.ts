import { Context } from "@deps";

export const handleOrder = async (ctx: Context) => {
  const order = await ctx.request.body().value;
  console.log("Order received:", order);
  ctx.response.body = { message: "Order placed successfully!" };
};
