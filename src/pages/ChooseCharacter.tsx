import type { CharacterType } from "../types/CharacterType";
import Characters from "../components/Characters";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";

function ChooseCharacter() {
  const { setCharacter } = useContext(MainContext);
  const characters: CharacterType[] = [
    { name: "Gatito", avatar: "/Valentin/imgs/Characters/CatCharacter.gif" },
    {
      name: "Cinamorol",
      avatar: "/Valentin/imgs/Characters/CinamorolCharacter.gif",
    },
    {
      name: "Hello Kitty",
      avatar: "/Valentin/imgs/Characters/HelloKittyCharacter.gif",
    },
  ];

  return (
    <>
      <section className="w-full h-full bg-[url('/Valentin/imgs/Scenery/ChooseCharacterBackground.jpg')] bg-cover bg-pink-300 p-2">
        <header className="pt-4">
          <h1 className="text-white stroke-chooseCharacter-text text-6xl text-center">
            PERSONAJES
          </h1>
        </header>
        <div className="grid grid-cols-3 p-6 justify-center items-center">
          {characters.map((character) => {
            return (
              <div
                className="h-full"
                key={character.name}
                onClick={() => setCharacter(character)}
              >
                {" "}
                <Characters name={character.name} avatar={character.avatar} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ChooseCharacter;
