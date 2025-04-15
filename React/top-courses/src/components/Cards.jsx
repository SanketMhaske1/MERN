import React from "react";
import Card from "./card";

function Cards({ courses, category }) {
  if (!courses) return <p>Loading courses...</p>;

  let allCourses = [];

  function getCourses() {
    if (category == "All" && allCourses.length === 0) {
      Object.keys(courses).forEach((category) => {
        courses[category].forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
