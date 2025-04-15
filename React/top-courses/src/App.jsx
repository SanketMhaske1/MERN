import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data/data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "./components/Loader.Jsx";

function App() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    console.log("App component mounted");
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCourses(data.data);
        toast.success("Data Fetched Successfully");
        console.log("Data Fetched Successfully", data.data);
      } catch (error) {
        console.log("Fail To fetch Data", error.message);
        toast.error("Fail To fetch Data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-700">
        <Filter
          filters={filterData}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[100vh]">
          {courses && category ? (
            <Cards courses={courses} category={category} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
