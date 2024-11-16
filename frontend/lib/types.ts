// lib/types.ts

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface Message {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
}

export type { MenuItem, Message };