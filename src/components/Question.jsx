import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showAnswer = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="mt-4 border border-[#00000033] p-2 rounded-md">
      <section className="flex items-start justify-between gap-2">
        <p className="font-bold">{title}</p>
        <span
          onClick={showAnswer}
          className="text-2xl bg-[#164E63] text-white min-w-[2rem] h-8 flex items-center justify-center rounded-full cursor-pointer select-none"
        >
          {showInfo ? "-" : "+"}
        </span>
      </section>
      <p>{showInfo ? info : ""}</p>
    </div>
  );
};
