import { Subcategory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`;

const getSubcategory = async (): Promise<Subcategory[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSubcategory;
