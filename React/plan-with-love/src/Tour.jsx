import React, { useState } from "react";

function Tour({ data, removeTour }) {
  const [isExpand, setIsExpand] = useState(false);
  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };
  return (
    <div className="card">
      <img src={data.image} className="image" />
      <div className="tour-de">
        <p className="tour-price">${data.price}</p>
        <p className="tour-name">{data.name}</p>
      </div>
      <div className="tour-info">
        {isExpand ? data.info : `${data.info.substring(0, 200)}...`}
        <span className="read-more" onClick={toggleExpand}>
          {isExpand ? " ...Show Less" : " ...Read More"}
        </span>
      </div>
      <button className="btn-red" onClick={() => removeTour(data.id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Tour;
