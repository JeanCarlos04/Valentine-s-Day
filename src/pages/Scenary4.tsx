import Dialogues from "../components/Dialogues";
import { useState, useEffect } from "react";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";

function Scenary4() {
  const { setNextScenery, nextScenery, setShowCarta, audioRefPokemon } =
    useContext(MainContext);
  const dialog = [
    "Por fin llegué, el momento que tanto he esperado. 😮‍💨",

    "Mirala... está tan bella como siempre 😍, valio toda pena el riesgo con tal de verla 💘.",

    "Estoy muy nervioso, llego la hora de pedirle que sea mi San Valentin, espero que me diga que si...",

    "Jean tiene un regalo para ti!.",

    "Es una carta!, abrela para saber que contiene! 😃",

    "SIIIIIIIII, lo logramos!, quiso ser mi San Valentin! 😍💘",
  ];

  const [displayText, setDisplayText] = useState(dialog[0]);
  const [pass, setPass] = useState(0);

  useEffect(() => {
    const handlePassText = () => {
      setDisplayText(dialog[pass]);
    };

    handlePassText();
  }, [pass]);

  const handleNextText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && pass < dialog.length - 1) {
      audioRefPokemon.current?.play();
      e.stopPropagation();
      setPass((prev) => prev + 1);
    } else {
      setNextScenery({ ...nextScenery, scenery4: "hideScenery" });
    }
  };

  return (
    <>
      <div className="bg-[url('/Valentin/imgs/Scenery/Final.gif')] h-full self-center relative max-h-85 pt-6 bg-cover">
        <div className="flex gap-6 px-4 justify-center">
          {pass === 3 && (
            <img
              onClick={() => {
                setPass((prev) => prev + 1);
              }}
              className={` w-36 movingAnimation cursor-pointer`}
              src="/Valentin/imgs/GiftBox.png"
            />
          )}
          {pass === 4 && (
            <img
              onClick={() => {
                setShowCarta(true);
              }}
              className={` ${pass === 4 ? "showGift" : "hideGift"} w-36 cursor-pointer`}
              src="/Valentin/imgs/Letter.png"
            />
          )}
        </div>

        <Dialogues handleNextDialog={handleNextText} text={displayText} />
      </div>
      <audio ref={audioRefPokemon} src="/musics/PokemonOst.mp3" loop />
    </>
  );
}

export default Scenary4;
