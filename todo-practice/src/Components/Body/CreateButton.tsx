import React, { type FC } from "react";
import { FiPlus } from "react-icons/fi";

export interface CreateButtonProps {
  onEvent: (state: boolean) => void;
  theme: string;
}

const CreateButton: FC<CreateButtonProps> = ({ onEvent, theme }) => {
  return (
    <button
      className={`size-12.5 rounded-full text-white flex justify-center items-center cursor-pointer shadow-sm  ${
        theme === "light"
          ? "bg-indigo-600 shadow-indigo-600"
          : "bg-black shadow-white"
      }`}
      onClick={() => onEvent(true)}
    >
      <FiPlus className="size-6" />
    </button>
  );
};

export default CreateButton;
