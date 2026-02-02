import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "../Context/MainContext";

type DialoguesProps = {
  text: string;
  handleNextDialog: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};

function Dialogues({ text, handleNextDialog }: DialoguesProps) {
  const { character } = useContext(MainContext);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (text?.split("").length <= displayText.length || !text) return;

    const timeOut = setTimeout(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 40);

    return () => {
      clearTimeout(timeOut);
    };
  }, [index]);

  useEffect(() => {
    const handleReset = () => {
      setIndex(0);
      setDisplayText("");
    };

    handleReset();
  }, [text]);

  useEffect(() => {
    if (dialogRef.current !== null) dialogRef.current.focus();
  }, []);

  return (
    <>
      {text && (
        <article className="px-4 w-full absolute bottom-0 flex items-end gap-2">
          <div
            tabIndex={0}
            onKeyDown={handleNextDialog}
            ref={dialogRef}
            className="bg-yellow-50/80 outline-none w-full h-auto  mb-6 rounded-xl border-4 border-amber-200 p-1 pl-2"
          >
            <p className="text-xs">{displayText}</p>
          </div>
          <img className="w-36" src={`${character?.avatar}`} />
        </article>
      )}
    </>
  );
}

export default Dialogues;
