import React, { createContext, useState, useRef } from "react";
import type { CharacterType } from "../types/CharacterType";
import type { OptionsType } from "../types/OptionsType";

type ContextProps = {
  children: React.ReactNode;
};

type SceneryClass = "showScenery" | "hideScenery" | "disappearScenery";

type ContextTypes = {
  setCharacter: React.Dispatch<React.SetStateAction<CharacterType | undefined>>;
  character: CharacterType | undefined;
  setSelectFoodOption: React.Dispatch<
    React.SetStateAction<OptionsType | undefined>
  >;
  selectFoodOption: OptionsType | undefined;
  setSelectFlowersOption: React.Dispatch<
    React.SetStateAction<OptionsType | undefined>
  >;
  selectFlowersOption: OptionsType | undefined;
  setNextScenery: React.Dispatch<
    React.SetStateAction<Record<string, SceneryClass> | undefined>
  >;
  nextScenery: Record<string, SceneryClass> | undefined;
  setShowCarta: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  audioRefPokemon: React.RefObject<HTMLAudioElement | null>;
};

const defaultContext: ContextTypes = {
  setCharacter: () => {},
  character: undefined,
  setSelectFoodOption: () => {},
  selectFoodOption: undefined,
  setSelectFlowersOption: () => {},
  selectFlowersOption: undefined,
  setNextScenery: () => {},
  nextScenery: {
    intro: "showScenery",
    chooseCharacter: "disappearScenery",
    scenery1: "disappearScenery",
    scenery2: "disappearScenery",
    scenery3: "disappearScenery",
    scenery4: "disappearScenery",
  },
  setShowCarta: () => {},
  showCart: false,
  audioRef: { current: null },
  audioRefPokemon: { current: null },
};

const MainContext = createContext(defaultContext);

function MainContextProvider({ children }: ContextProps) {
  const [character, setCharacter] = useState<CharacterType>();
  const [selectFoodOption, setSelectFoodOption] = useState<OptionsType>();
  const [selectFlowersOption, setSelectFlowersOption] = useState<OptionsType>();
  const [showCart, setShowCarta] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRefPokemon = useRef<HTMLAudioElement | null>(null);
  const [nextScenery, setNextScenery] = useState<
    Record<string, SceneryClass> | undefined
  >({
    intro: "showScenery",
    chooseCharacter: "disappearScenery",
    scenery1: "disappearScenery",
    scenery2: "disappearScenery",
    scenery3: "disappearScenery",
    scenery4: "disappearScenery",
  });

  return (
    <MainContext.Provider
      value={{
        character,
        setCharacter,
        selectFoodOption,
        setSelectFoodOption,
        selectFlowersOption,
        setSelectFlowersOption,
        nextScenery,
        setNextScenery,
        showCart,
        setShowCarta,
        audioRef,
        audioRefPokemon,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContextProvider, MainContext };
