import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random() {
  const { gif, loading, getRadomGif } = useGif();

  const generateRandomGifHandler = () => {
    getRadomGif();
  };

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} />}
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={generateRandomGifHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
