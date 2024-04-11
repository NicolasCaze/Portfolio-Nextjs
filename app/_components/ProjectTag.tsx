import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black  border-primary-500"
    : "text-[#ADB7BE] dark:text-white border-slate-600 hover:border-primary";
  return (
    <button
      className={`${buttonStyles} text-black  rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;