import React, { useContext, useState, type FC } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

import { CategoryContext } from "../../Contexts/CategoryContext";

interface SelectorProps {
  theme: string;
}

const Selector: FC<SelectorProps> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { category, handleCategory } = useContext(CategoryContext);

  const categoryList = ["All", "Complete", "Incomplete"];

  const onCategorySelect = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        data-testid="selector"
        onClick={onCategorySelect}
        className={`w-29 h-10 p-2.5 rounded  text-white flex flex-row justify-between items-center cursor-pointer shadow-sm   ${
          theme === "light"
            ? "bg-indigo-600 shadow-indigo-600 focus:bg-indigo-700"
            : "bg-black shadow-white focus:bg-gray-900"
        }`}
      >
        {category}
        {isOpen ? (
          <IoChevronUp className="size-3" />
        ) : (
          <IoChevronDown className="size-3" />
        )}
      </button>

      {isOpen && (
        <div
          data-testid="selector-menu"
          className={`absolute flex flex-col items-start w-29 gap-1 h-21 py-2 border rounded text-sm  z-10 ${
            theme === "light"
              ? "bg-gray-50 border-indigo-600 text-indigo-600 "
              : "bg-gray-900 border-white text-white "
          }`}
        >
          {categoryList.map((item, idx) => (
            <div
              key={idx}
              className={`flex w-29   ${
                theme === "light"
                  ? "hover:bg-indigo-600/10"
                  : "hover:bg-gray-600"
              } `}
              onClick={() => handleCategory(item)}
            >
              <label className="w-full cursor-pointer">{item}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
