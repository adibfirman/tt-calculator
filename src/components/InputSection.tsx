import React, { useState, useCallback } from "react";
import cs from "classnames";

import { EInputType, TData, useStore } from "../store";

const STRUCTURE = [7, 8, 9, "+", 4, 5, 6, "*", 1, 2, 3, "=", 0, "00", ".", "C"];

function InputSection() {
  const { setData, data } = useStore();
  const [typeInput, setTypeInput] = useState<EInputType>(EInputType.default);
  const disabledBtn = useCallback(
    code => {
      if (typeInput === EInputType.fibonacci || typeInput === EInputType.prime) {
        const val = data[0] || "";
        if (code === "*" || code === "+" || code === ".") return true;
        if (val.search(/,/g) !== -1 && code !== "C") return true;
      }

      return false;
    },
    [data, typeInput]
  );
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
      setData([]);

      if (type === typeInput) setTypeInput(EInputType.default);
      else setTypeInput(type);
    };
  }

  function calculate(str: string) {
    try {
      str = eval(str); // eslint-disable-line no-eval
    } catch (e) {
      console.log(e);
    }

    return str || "";
  }

  function onClickNumber(code: string) {
    return () => {
      if (code === "=") {
        const copyData = [...data];
        const removeComma = copyData.map(val => val.replace(/,/gi, ""));
        const result = calculate(removeComma.join(""));

        if (typeInput === EInputType.prime) generatePrimeNumer(parseInt(result));
        else setData([result.toLocaleString()]);
      } else if (code === "C") setData([]);
      else {
        setData((prevData: TData) => {
          const copyData = [...prevData];
          if (prevData.length === 1 && prevData[0] === "0") {
            copyData.pop();
          }

          return [...copyData, code];
        });
      }
    };
  }

  function generatePrimeNumer(num: number) {
    const arrNum: Array<number> = [];
    const isPrime = (num: number) => {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return num > 1;
    };

    let i = 0;
    while (arrNum.length !== num) {
      if (isPrime(i)) arrNum.push(i);

      i += 1;
    }

    setData([arrNum.join(", ")]);
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
          Prime Number
        </div>
      </button>
      <button
        onClick={onClickBtn(EInputType.fibonacci)}
        className={classNameBtn(EInputType.fibonacci)}
      >
        <div className="text-white text-center font-bold text-xs">
          Generate
          <br />
          Fibonacci Number
        </div>
      </button>
      {STRUCTURE.map((code, i) => (
        <button
          key={i}
          onClick={onClickNumber(code.toString())}
          className="w-1/4 p-2 flex items-center justify-center"
          disabled={disabledBtn(code)}
        >
          <div className="text-white text-center text-lg font-bold">{code}</div>
        </button>
      ))}
    </section>
  );
}

export default InputSection;
