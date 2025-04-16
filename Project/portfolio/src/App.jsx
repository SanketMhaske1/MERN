import "./App.css";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="w-full h-auto">
      <div className="max-w-screen-xl mx-auto px-16">
        <Navbar />
        <Home />
        <Features />
        <Projects />
        <Resume />
      </div>
    </div>
  );
}

export default App;
