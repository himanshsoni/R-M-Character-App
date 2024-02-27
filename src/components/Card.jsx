import React from "react";

const Card = ({ character }) => {
  return (
    <div className="w-96 flex flex-col justify-center items-center border-black border-2 m-2 rounded-md px-2">
      <h1 className="font-bold text-md my-2 py-2">{character.name}</h1>
      <p>{character.status === "Alive" ? "🟢" : "🔴"}</p>
      <img className="object-contain my-2 py-2" src={character.image} alt="" />
      <p className="text-lg">{character.species}</p>
    </div>
  );
};

export default Card;
