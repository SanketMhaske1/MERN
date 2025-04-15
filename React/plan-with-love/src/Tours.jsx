import React from "react";
import Tour from "./Tour";

function Tours({ toursData, removeTour }) {
  return (
    <div className="container">
      <div className="title">
        <h2>Plan With Love</h2>
      </div>
      <div className="cards">
        {toursData.map((tour) => (
          <Tour key={tour.id} data={tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
