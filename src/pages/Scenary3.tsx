import Dialogues from "../components/Dialogues";
import { useEffect, useState } from "react";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";

function Scenary3() {
  const { setNextScenery, nextScenery, audioRefPokemon } =
    useContext(MainContext);
  const [selectDirection, setSelectDirection] = useState<
    "izquierda" | "derecha" | undefined
  >(undefined);
  const dialog = [
    "No tengo mucho tiempo, tengo que cruzar por el bosque para llegar a tiempo 😨",

    "Mierda, estoy perdido, no sé en que dirección estaba su casa. 😵‍💫",

    "¿Qué dirección debería tomar Jean? 🤔",

    "OSTIA PUTA 💀, UN OSO, JUYE, CORRE PARA LA IZQUIERDA! ⚠️",

    "Ya me acordé!, si no estoy mal era por este lado, soy el mejor 🤑.",
  ];

  const [displayText, setDisplayText] = useState(dialog[0]);
  const [pass, setPass] = useState(0);

  useEffect(() => {
    const handlePassText = () => {
      setDisplayText(dialog[pass]);
    };

    handlePassText();
  }, [pass]);

  useEffect(() => {
    const controlDialogLeft = () => {
      setDisplayText(dialog[4]);
      setTimeout(() => {
        setNextScenery({ ...nextScenery, scenery3: "hideScenery" });
      }, 4000);
    };

    const controlDialogRight = () => {
      setDisplayText(dialog[3]);
    };

    if (selectDirection === "izquierda") {
      controlDialogLeft();
    } else if (selectDirection === "derecha") {
      controlDialogRight();
    }
  }, [selectDirection]);

  const handleNextText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && pass < dialog.length - 1) {
      e.stopPropagation();

      setPass((prev) => prev + 1);
    } else {
      setNextScenery({ ...nextScenery, scenery3: "hideScenery" });
    }
  };

  console.log(selectDirection);

  return (
    <>
      <div className="bg-[url('/Valentin/imgs/Scenery/Forest.jpg')] h-full relative max-h-85 pt-6 bg-cover">
        {(pass === 2 || pass === 3) && (
          <div className="flex w-full gap-6 px-4 justify-between absolute top-[50%] translate-y-[-50%]">
            <div className="flex cursor-pointer justify-center flex-col items-center">
              <button
                className="sidwwaysAnimation"
                onClick={() => {
                  setSelectDirection("izquierda");
                  setTimeout(() => {
                    audioRefPokemon.current?.play();
                  }, 4000);
                }}
              >
                <img className="w-12" src="/Valentin/imgs/Arrow.png" />
              </button>
              <p className="text-white text-sm">Ir a la izquierda</p>
            </div>
            {selectDirection !== "derecha" && (
              <div className="flex cursor-pointer justify-center flex-col items-center">
                {" "}
                <button
                  className="sidwwaysAnimation"
                  onClick={() => setSelectDirection("derecha")}
                >
                  <img
                    className="w-12 rotate-180"
                    src="/Valentin/imgs/Arrow.png"
                  />
                </button>
                <p className="text-white text-sm">Ir a la derecha</p>
              </div>
            )}
          </div>
        )}

        {selectDirection === "derecha" && <img src="/Valentin/imgs/Bear.png" />}

        <Dialogues handleNextDialog={handleNextText} text={displayText} />
      </div>
    </>
  );
}

export default Scenary3;
