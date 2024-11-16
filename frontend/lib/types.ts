// lib/types.ts

export interface Message {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
}
