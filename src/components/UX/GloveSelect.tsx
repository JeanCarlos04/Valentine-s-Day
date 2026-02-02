type GloveSelectType = {
  show: boolean;
  direction: "right" | "left" | "top" | "bottom";
};

function GloveSelect({ show, direction }: GloveSelectType) {
  const directionClass =
    direction === "right"
      ? "rotate-[-90deg]"
      : direction === "left"
        ? "scale-x-[-1] rotate-[-90deg]"
        : direction === "top"
          ? ""
          : "rotate-[90deg]";

  return (
    <>
      {" "}
      {show && (
        <img
          className={`${directionClass} MoveForwardAnimation size-20`}
          src="/imgs/GloveSelect.png"
        />
      )}
    </>
  );
}

export default GloveSelect;
