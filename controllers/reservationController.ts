// controllers/reservationController.ts
import { Context } from "../deps.ts";

export const handleReservation = async (ctx: Context) => {
  const { date, time, guests } = await ctx.request.body().value;
  // Save to database (simulate saving)
  console.log(`Reservation made for ${guests} guests on ${date} at ${time}.`);
  ctx.response.body = { message: "Reservation confirmed!" };
};
