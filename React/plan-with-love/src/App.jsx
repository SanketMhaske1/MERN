import "./App.css";
import data from "./data";
import { useState } from "react";
import Tours from "./Tours";

function App() {
  const [toursData, setToursData] = useState(data);
  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-screen">
      {toursData.length > 0 ? (
        <div>
          <Tours
            className="App"
            toursData={toursData}
            removeTour={removeTour}
          />
        </div>
      ) : (
        <div className="refresh">
          <h2>No Tour Left</h2>
          <button className="btn-white" onClick={() => setToursData(data)}>
            Reset Tour
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
