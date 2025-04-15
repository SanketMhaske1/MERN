import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
  const [tag, setTag] = useState("code");
  const { gif, loading, getRadomGif } = useGif(tag);
  const generateRandomGifHandler = () => {
    getRadomGif(tag);
  };

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} />}
      <input
        className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center"
        type="text"
        placeholder="Enter a tag"
        onChange={() => setTag(event.target.value)}
        value={tag}
      />
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={generateRandomGifHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
