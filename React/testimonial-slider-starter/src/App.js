import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;

// const App = () => {
//   const [index, setIndex] = React.useState(0);
//   const modIndex = (newIndex) => {
//     newIndex = newIndex % reviews.length;
//     if (newIndex < 0) {
//       newIndex = reviews.length - 1;
//     }
//     if (newIndex > reviews.length - 1) {
//       newIndex = 0;
//     }
//     setIndex(newIndex);
//   };
//   const surpriseHandler = () => {
//     let randomIndex = Math.floor(Math.random() * reviews.length);
//     modIndex(randomIndex);
//   };
//   return (
//     <div>
//       <h1>Our Testimonials</h1>
//       <div className="review">
//         <h2>{reviews[index].name}</h2>
//         <button onClick={() => modIndex(index - 1)}>
//           <MdNavigateBefore />
//         </button>
//         <button onClick={() => modIndex(index + 1)}>
//           <MdNavigateNext />
//         </button>
//         <button onClick={surpriseHandler}>Surprise Me</button>
//       </div>
//     </div>
//   );
// };

// export default App;
