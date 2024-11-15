import { Context } from "@deps";

export const handleReservation = async (ctx: Context) => {
  const { date, time, guests } = await ctx.request.body().value;
  // Save to database (simulate saving)
  console.log(`Reservation made for ${guests} guests on ${date} at ${time}.`);
  ctx.response.body = { message: "Reservation confirmed!" };
};

/*
curl -X POST localhost:8000/reservation \
-H "Content-Type: application/json" \
-d '{
  "date": "2023-10-01",
  "time": "18:00",
  "guests": 4
}'
*/