import { Category } from "./types/product";

export const getProductCateggories = async (): Promise<Category[]> =>
  await fetch(`http:localhost:4000/categories`, {
    cache: "no-store",
  }).then((res) => res.json());
