export interface Entity {
  id: number;
  name: string;
}

export type Category = Entity;

export type Tag = Entity;

export interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: "available" | "sold";
  price: number;
}

export interface User {
  id: 0;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: 0;
}

export interface CartItem extends Pet {
  quantity: number;
}
