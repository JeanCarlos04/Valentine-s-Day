import { useEffect, useState } from "react";
import Dialogues from "../components/Dialogues";
import Options from "../components/UX/Options";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";

const dialog = [
  "(BOSTEZA), estoy muy nervioso, hoy es el dia en el que le pido a la chica que me gusta (Norkys) que sea mi San Valentin.",

  "Espero que acepte ser mi San Valentin 😔, pero para eso debo prepararme y hacerle un regalo un bonito, espero que le guste. 💘",

  "Primero me gustaria llevarle algo muy rico de comer, pero estoy muy dudoso de que llevarle... ",

  "¿Qué debería llevarle Jean a Norkys? 🤔 ",

  "Excelente!, estoy seguro de que le va a encantar 😍.",
];

function Scenary1() {
  const { setSelectFoodOption, setNextScenery, nextScenery } =
    useContext(MainContext);
  const [displayText, setDisplayText] = useState(dialog[0]);
  const [pass, setPass] = useState(0);

  useEffect(() => {
    setDisplayText(dialog[pass]);
  }, [pass]);

  const handleNextText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && pass < dialog.length - 1) {
      e.stopPropagation();
      setPass((prev) => prev + 1);
    } else {
      setNextScenery({ ...nextScenery, scenery1: "hideScenery" });
    }
  };

  return (
    <>
      <div className="bg-[url('/Valentin/imgs/Scenery/LivingRoom.jpg')] h-full relative max-h-85 pt-6 bg-cover">
        {pass === 3 && (
          <div className="flex gap-6 px-4 justify-center">
            <div
              onClick={() => {
                setPass((prev) => prev + 1);
              }}
            >
              <Options
                setSelectOption={setSelectFoodOption}
                name="Cake"
                img="/Valentin/imgs/Foods/Cake2.png"
              />
            </div>
            <div
              onClick={() => {
                setPass((prev) => prev + 1);
              }}
            >
              <Options
                setSelectOption={setSelectFoodOption}
                name="Pasta"
                img="/Valentin/imgs/Foods/Pasta2.png"
              />
            </div>
          </div>
        )}

        <div>
          <Dialogues handleNextDialog={handleNextText} text={displayText} />
        </div>
      </div>
    </>
  );
}

export default Scenary1;
