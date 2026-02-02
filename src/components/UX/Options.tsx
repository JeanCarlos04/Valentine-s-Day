import { useState } from "react";
import type { OptionsType } from "../../types/OptionsType";

type OptionsProp = {
  img: string;
  name: string;
  setSelectOption: React.Dispatch<
    React.SetStateAction<OptionsType | undefined>
  >;
};

function Options({ img, name, setSelectOption }: OptionsProp) {
  const [hoverAnimation, setHoverAnimation] = useState("");

  return (
    <>
      <div
        onClick={() => {
          setSelectOption({ name, img });
        }}
        onMouseEnter={() => {
          setHoverAnimation("movingAnimation");
        }}
        onMouseLeave={() => {
          setHoverAnimation("");
        }}
        className=" flex cursor-pointer flex-col items-center content-between py-2 justify-center rounded-lg bg-pink-200/60"
      >
        <img className={`${hoverAnimation} w-42`} src={img} />
        <h2 className="text-xl text-white">{name}</h2>
      </div>
    </>
  );
}

export default Options;
