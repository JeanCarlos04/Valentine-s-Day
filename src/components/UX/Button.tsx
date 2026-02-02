import { useState } from "react";
import GloveSelect from "./GloveSelect";

type ButtonProps = {
  buttonText: string;
  showGlove?: boolean;
};

function Button({ buttonText }: ButtonProps) {
  const [gloveSelect, setGloveSelect] = useState(Boolean);

  return (
    <>
      <div className="flex gap-4 items-center relative">
        <button
          onMouseLeave={() => {
            setGloveSelect(false);
          }}
          onMouseEnter={() => {
            setGloveSelect(true);
          }}
          className="bg-white w-30 h-7.5 shadow opacity-100 px-4 py-3 flex items-center justify-center rounded-md text-[#f67b90] border-3 border-pink-200 cursor-pointer"
        >
          {buttonText}
        </button>
        <div className="absolute right-[-70px] translate-y-[10px]">
          <GloveSelect direction="left" show={gloveSelect} />
        </div>
      </div>
    </>
  );
}

export default Button;
