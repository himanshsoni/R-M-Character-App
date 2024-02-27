import React from "react";
import { useRef } from "react";

const Search = ({ handleInput }) => {
  const inputText = useRef(null);
  return (
    <section className="flex justify-center items-center">
      <input
        onChange={() => {
          handleInput(inputText.current.value);
        }}
        ref={inputText}
        className="w-1/2 p-3 mt-4 border-2 border-black  rounded-md"
        type="search"
        placeholder="Enter any character"
      />
    </section>
  );
};

export default Search;
