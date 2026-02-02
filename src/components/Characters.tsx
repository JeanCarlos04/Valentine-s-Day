import { useState } from "react";
import type { CharacterType } from "../types/CharacterType";
import GloveSelect from "./UX/GloveSelect";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";

type CharactersProps = {
  name: CharacterType["name"];
  avatar: CharacterType["avatar"];
};

function Characters({ name, avatar }: CharactersProps) {
  const [gloveSelect, setGloveSelect] = useState(Boolean);
  const { setNextScenery, nextScenery } = useContext(MainContext);
  return (
    <>
      <div
        onClick={() =>
          setNextScenery({ ...nextScenery, chooseCharacter: "hideScenery" })
        }
        onMouseEnter={() => {
          setGloveSelect(true);
        }}
        onMouseLeave={() => {
          setGloveSelect(false);
        }}
        className="flex flex-col items-center justify-between h-full relative"
      >
        <img className="w-30" src={`${avatar}`} />
        <p className="text-lg">{name}</p>
        <div className="absolute -bottom-17.5">
          <GloveSelect direction="top" show={gloveSelect} />
        </div>
      </div>
    </>
  );
}

export default Characters;
