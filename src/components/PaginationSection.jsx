import React from "react";

const PaginationSection = ({
  handleNext,
  handlePrev,
  isFirst,
  isLast,
  pages,
  page,
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        disabled={isFirst}
        onClick={handlePrev}
        className={
          "border-2 border-black p-2 m-2 rounded-md w-20 " +
          (!isFirst && "hover:bg-slate-400")
        }
      >
        Prev
      </button>
      <p className="p-2 mx-2">{"Page " + page + " of " + pages} </p>
      <button
        disabled={isLast}
        onClick={handleNext}
        className={
          "border-2 border-black p-2 m-2 rounded-md w-20 " +
          (!isLast && "hover:bg-slate-400")
        }
      >
        Next
      </button>
    </div>
  );
};

export default PaginationSection;
