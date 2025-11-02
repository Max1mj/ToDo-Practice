import React, { useState, type FC } from "react";

import { CategoryContext } from "../Contexts/CategoryContext";
import type { categoryType } from "../utils/Categories";

type CategoryProviderType = {
  children: React.ReactNode;
};

const CategoryProvider: FC<CategoryProviderType> = ({ children }) => {
  const [category, setCategory] = useState<categoryType["category"] | string>(
    "All"
  );

  const handleCategory = (item: string) => {
    setCategory(item);
  };

  return (
    <CategoryContext value={{ category, handleCategory }}>
      {children}
    </CategoryContext>
  );
};

export default CategoryProvider;
