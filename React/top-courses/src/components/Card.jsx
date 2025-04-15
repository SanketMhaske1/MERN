import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course }) {
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike(!like);
    if (!like) {
      toast.success("Course liked successfully!");
    } else {
      toast.warning("Course unliked successfully!");
    }
  };

  return (
    <div className="w-[300px] bg-gray-800 rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="w-[40px] h-[40px] absolute bg-white rounded-full bottom-0.5 right-1 flex items-center justify-center ">
          <button onClick={likeHandler}>
            {like ? (
              <FcLike fontSize="1.75em" />
            ) : (
              <FcLikePlaceholder fontSize="1.75em" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4 text-white">
        <p className="font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2">
          {course.description.length > 150
            ? course.description.substring(0, 150) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
