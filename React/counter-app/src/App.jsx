import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const resetHandler = () => {
    setCount(0);
  };
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-700">
        <div className="flex flex-col items-center justify-center gap-10 bg-[#344151] ">
          <h3 className="text-[#0398d4] font-medium text-2xl">
            Increment & Decrement
          </h3>
          <div className="bg-white flex items-center justify-center gap-10 py-2 rounded-sm shadow-lg text-[25px] text-[#344151]cursor-pointer">
            <p
              className="border-r-3  text-center w-15 border-[#bfbfbf] text-3xl"
              onClick={decrementHandler}
            >
              -
            </p>
            <p>{count}</p>
            <p
              className="border-l-3  text-center w-20 border-[#bfbfbf] text-3xl "
              onClick={incrementHandler}
            >
              +
            </p>
          </div>
          <button
            className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
