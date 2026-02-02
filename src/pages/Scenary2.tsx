import Dialogues from "../components/Dialogues";
import Options from "../components/UX/Options";
import { MainContext } from "../Context/MainContext";
import { useContext, useEffect, useState } from "react";

function Scenary2() {
  const {
    setSelectFlowersOption,
    selectFlowersOption,
    setNextScenery,
    nextScenery,
  } = useContext(MainContext);

  const dialog = [
    "🤩 Bien, esa ha sido una buena eleccion; también me gustaría comprarles una flores bonitas 💐, sé que le gustan mucho ese tipo de detalles, será mejor echar un vistazo a la florería.",

    "Wow, hay tantas flores tan lindas, si no mal recuerdo a ella les gustaban las...",

    `Exacto!, ${selectFlowersOption?.name} es una excelente opción, me la rifé con está 🤑.`,

    "Será mejor que me vaya poniendo en marcha, está oscureciendo y no quiero tener problemas por el camino... 😥",
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
      e.stopPropagation();
      setPass((prev) => prev + 1);
    } else {
      setNextScenery({ ...nextScenery, scenery2: "hideScenery" });
    }
  };

  return (
    <>
      <div className="bg-[url('/imgs/Scenery/FlowerShopp.jpg')] h-full relative max-h-85 pt-6 bg-cover">
        {pass === 1 && (
          <div className="flex gap-6 px-4 justify-center">
            <div
              onClick={() => {
                setPass((prev) => prev + 1);
              }}
            >
              <Options
                setSelectOption={setSelectFlowersOption}
                name="Girasoles"
                img="/Valentin/imgs/Flowers/Girasoles.png"
              />
            </div>
            <div
              onClick={() => {
                setPass((prev) => prev + 1);
              }}
            >
              <Options
                setSelectOption={setSelectFlowersOption}
                name="Rosas"
                img="/Valentin/imgs/Flowers/Rosa.png"
              />
            </div>
            <div
              onClick={() => {
                setPass((prev) => prev + 1);
              }}
            >
              <Options
                setSelectOption={setSelectFlowersOption}
                name="Tulipanes"
                img="/Valentin/imgs/Flowers/Tulip.png"
              />
            </div>
          </div>
        )}

        <Dialogues handleNextDialog={handleNextText} text={displayText} />
      </div>
    </>
  );
}

export default Scenary2;
