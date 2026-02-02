import Button from "../components/UX/Button";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";

function Home() {
  const { setNextScenery, nextScenery, audioRef } = useContext(MainContext);

  return (
    <section
      className={` p-4 bg-[url('/Valentin/imgs/minimoss.gif')] h-full bg-cover bg-black-50/20 rounded-md items-center left-24 flex flex-col gap-10`}
    >
      <header className="relative flex flex-col gap-1 text-5xl ">
        <h1 className="floatingAnimation text-center text-[#f67b90] stroke-text ">
          HEART
        </h1>
        <h2 className="floatingAnimation flex items-center gap-2 text-center text-4xl text-[#f67b90] stroke-text ">
          QUEST <img className="size-8" src="/Valentin/imgs/HeartLogo.png" />
        </h2>
        {/* <p className="text-center">¿Estás lista para una aventura?</p> */}
      </header>

      <div className="flex flex-col gap-4">
        <div
          onClick={() => {
            setNextScenery({ ...nextScenery, intro: "hideScenery" });
            if (audioRef.current !== null) audioRef.current.play();
          }}
          className="flex flex-col px-8 rounded-lg"
        >
          <Button buttonText="Start" />
        </div>

        {/* <div className="flex flex-col px-8 rounded-lg">
          {" "}
          <Button buttonText="Volver" />
        </div> */}
      </div>
    </section>
  );
}

export default Home;
