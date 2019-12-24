import React from "react";

import InputSection from "./components/InputSection";
import Result from "./components/Result";
import { Provider } from "./store";

function App() {
  return (
    <Provider>
      <div className="bg-gray-800 min-h-screen flex flex-col">
        <h1 className="text-white text-center font-black uppercase tracking-widest border-b-2 p-3">
          Smart Calculator
        </h1>
        <Result />
        <InputSection />
      </div>
    </Provider>
  );
}

export default App;
