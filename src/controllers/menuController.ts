// controllers/menuController.ts
import { Context } from "@deps"

const menu = [
  { id: 1, name: "Margherita Pizza", price: 10 },
  { id: 2, name: "Caesar Salad", price: 8 },
  { id: 3, name: "Spaghetti Bolognese", price: 12 },
];

export const handleMenu = (ctx: Context) => {
  ctx.response.body = menu;
};
