// controllers/menuController.ts
import { Context } from "@deps";
import { MenuItem } from "../models/menu.ts";

const menu: MenuItem[] = [
  {
    id: "1",
    name: "Pizza",
    description: "Cheese and tomato pizza",
    price: 9.99,
    category: "Main",
  },
  {
    id: "2",
    name: "Burger",
    description: "Beef burger with cheese",
    price: 5.99,
    category: "Main",
  },
  {
    id: "3",
    name: "Fries",
    description: "Golden and crispy",
    price: 2.99,
    category: "Side",
  },
  {
    id: "4",
    name: "Salad",
    description: "Fresh and healthy",
    price: 4.99,
    category: "Side",
  },
];

export const handleMenu = (ctx: Context) => {
  ctx.response.body = menu;
};
