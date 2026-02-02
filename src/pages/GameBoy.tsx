import Home from "./Home";
import PowerLight from "../components/PowerLight";
import ChooseCharacter from "./ChooseCharacter";
import Scenary1 from "./Scenary1";
import Scenary2 from "./Scenary2";
import Scenary3 from "./Scenary3";
import Scenary4 from "./Scenary4";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";
import Carta from "../components/UX/Carta";

function GameBoy() {
  const { nextScenery, setNextScenery, showCart, audioRef } =
    useContext(MainContext);

  return (
    <main className="w-full flex flex-col gap-14 justify-center items-center h-screen bg-pink-100 bg-cover p-12">
      <div className="w-[40%] relative bg-pink-200 h-1750 rounded-md border-4 border-pink-300 flex flex-col gap-8 items-center  shadow py-8">
        <PowerLight />
        <section className="w-[90%] border-8 border-pink-300 min-h-87.5 max-h-87.5 shadow rounded overflow-hidden">
          {nextScenery && nextScenery.intro !== "disappearScenery" && (
            <div
              onAnimationEnd={(e) => {
                if (e.animationName === "transitionHide") {
                  setNextScenery({
                    ...nextScenery,
                    intro: "disappearScenery",
                    chooseCharacter: "showScenery",
                  });
                }
              }}
              className={`${nextScenery.intro} relative h-full`}
            >
              <Home />
            </div>
          )}

          {nextScenery &&
            nextScenery.chooseCharacter !== "disappearScenery" && (
              <div
                onAnimationEnd={(e) => {
                  if (e.animationName === "transitionHide") {
                    setNextScenery({
                      ...nextScenery,
                      chooseCharacter: "disappearScenery",
                      scenery1: "showScenery",
                    });
                  }
                }}
                className={`${nextScenery.chooseCharacter} h-full`}
              >
                <ChooseCharacter />
              </div>
            )}

          {nextScenery && nextScenery.scenery1 !== "disappearScenery" && (
            <div
              onAnimationEnd={(e) => {
                if (e.animationName === "transitionHide") {
                  setNextScenery({
                    ...nextScenery,
                    scenery1: "disappearScenery",
                    scenery2: "showScenery",
                  });
                }
              }}
              className={`${nextScenery.scenery1} h-full`}
            >
              <Scenary1 />
            </div>
          )}

          {nextScenery && nextScenery.scenery2 !== "disappearScenery" && (
            <div
              onAnimationEnd={(e) => {
                if (e.animationName === "transitionHide") {
                  setNextScenery({
                    ...nextScenery,
                    scenery2: "disappearScenery",
                    scenery3: "showScenery",
                  });
                }
              }}
              className={`${nextScenery.scenery2} h-full`}
            >
              <Scenary2 />
            </div>
          )}

          {nextScenery && nextScenery.scenery3 !== "disappearScenery" && (
            <div
              onAnimationEnd={(e) => {
                if (e.animationName === "transitionHide") {
                  setNextScenery({
                    ...nextScenery,
                    scenery3: "disappearScenery",
                    scenery4: "showScenery",
                  });
                }
              }}
              className={`${nextScenery.scenery3} h-full`}
            >
              <Scenary3 />
            </div>
          )}

          {nextScenery && nextScenery.scenery4 !== "disappearScenery" && (
            <div
              onAnimationEnd={(e) => {
                if (e.animationName === "transitionHide") {
                  setNextScenery({
                    ...nextScenery,
                    scenery4: "disappearScenery",
                  });
                }
              }}
              className={`${nextScenery.scenery4} h-full`}
            >
              <Scenary4 />
            </div>
          )}
        </section>

        <div className="w-full min-h-7.5 shadow border-2 border-pink-300  rounded-2xl"></div>

        <section className="w-full flex items-center justify-between h-full px-6 ">
          <div className="relative w-25 h-25 flex items-center justify-center">
            <div className="w-22.5 h-6.25 bg-white justify-between flex px-3 rounded absolute shadow">
              <label className="rotate-90">|</label>
              <label className="rotate-90">|</label>
            </div>
            <div className="w-6.25 h-22.5 bg-white rounded flex flex-col justify-between items-center py-1 absolute">
              {" "}
              <label>|</label>
              <label>|</label>
            </div>
          </div>

          <div className="w-62.5 h-50 border-3 border-pink-300 shadow rounded-md">
            <img
              src="/Valentin/imgs/HelloKittyLove.jpg"
              className="bg-cover h-full w-full"
            />
          </div>

          <div className="relative w-17.5 h-17.5 flex items-center justify-center">
            <button className="size-8 bg-white rounded-full absolute top-0 right-0 shadow-md text-lg">
              A
            </button>
            <button className="size-8 bg-white rounded-full absolute bottom-0 left-0 shadow-md text-lg">
              B
            </button>
          </div>
        </section>
      </div>
      {showCart && <Carta />}{" "}
      {nextScenery && nextScenery.scenery4 !== "disappearScenery" ? (
        ""
      ) : (
        <audio ref={audioRef} src="/musics/Zelda.mp3" loop />
      )}
    </main>
  );
}

export default GameBoy;
