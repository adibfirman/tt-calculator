import React from "react";

import { useStore } from "../store";

function Result() {
  const { data } = useStore();

  return (
    <div className="text-right text-white font-bold text-3xl tracking-wider pt-24 mb-4">
      {data.join("") || "0"}
    </div>
  );
}

export default Result;
