import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 p-2">
      {characters && characters?.map((c) => <Card key={c.id} character={c} />)}
    </div>
  );
};

export default CardList;
