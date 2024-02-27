import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import PaginationSection from "./components/PaginationSection";

function App() {
  const [characters, setCharacters] = useState(null);
  const [currentURL, setCurrentURL] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );

  const handleNext = () => {
    setCurrentURL(characters?.info?.next);
  };
  const handlePrev = () => {
    setCurrentURL(characters?.info?.prev);
  };
  const handleInput = async (input) => {
    console.log(input);
    const data = await fetch(currentURL+ '&name='+ input);
    const response = await data.json();

    setCharacters(response);
  };

  const getCharacter = async () => {
    const data = await fetch(currentURL);
    const response = await data.json();

    setCharacters(response);
  };
  useEffect(() => {
    console.log(currentURL);
    getCharacter();
  }, [currentURL]);
  return (
    <section className="h-screen">
      <Header />
      <Search handleInput={handleInput} />
      <CardList characters={characters?.results} />
      <PaginationSection
        isFirst={characters && characters?.info?.prev === null}
        isLast={characters && characters?.info?.next === null}
        handleNext={handleNext}
        handlePrev={handlePrev}
        pages={characters && characters?.info?.pages}
        page={currentURL.split("=")[1]}
      />
    </section>
  );
}

export default App;
