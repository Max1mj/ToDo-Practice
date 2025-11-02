import { createContext } from "react";

type CategoryContextType = {
  category: string;
  handleCategory: (item: string) => void;
};

export const CategoryContext = createContext<CategoryContextType>({
  category: "All",
  handleCategory: () => {},
});
