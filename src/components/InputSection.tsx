import React, { useState, useCallback } from "react";
import cs from "classnames";

import { EInputType } from "../store";

const STRUCTURE = [7, 8, 9, "+", 4, 5, 6, "*", 1, 2, 3, "=", 0, "00", ",", "del"];

function InputSection() {
  const [typeInput, setTypeInput] = useState<EInputType>(EInputType.default);
  const classNameBtn = useCallback(
    (rule: EInputType) => {
      return cs("w-1/2 p-2 flex items-center justify-center", {
        "bg-gray-600": typeInput === rule
      });
    },
    [typeInput]
  );

  function onClickBtn(type: EInputType) {
    return () => {
      if (type === typeInput) setTypeInput(EInputType.default);
      else setTypeInput(type);
    };
  }

  return (
    <section className="bg-gray-700 flex flex-auto flex-wrap">
      <button
        onClick={onClickBtn(EInputType.prime)}
        className={classNameBtn(EInputType.prime)}
      >
        <div className="text-white text-center font-bold text-xs">
          Generate
          <br />
          Prime
        </div>
      </button>
      <button
        onClick={onClickBtn(EInputType.fibonacci)}
        className={classNameBtn(EInputType.fibonacci)}
      >
        <div className="text-white text-center font-bold text-xs">
          Generate
          <br />
          Fibonacci
        </div>
      </button>
      {STRUCTURE.map((no, i) => (
        <button key={i} className="w-1/4 p-2 flex items-center justify-center">
          <div className="text-white text-center text-lg font-bold">{no}</div>
        </button>
      ))}
    </section>
  );
}

export default InputSection;
