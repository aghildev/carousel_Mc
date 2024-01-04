import React, { useState } from "react";

import bird from "./assets/svg/bird.svg";
import cat from "./assets/svg/cat.svg";
import cow from "./assets/svg/cow.svg";
import dog from "./assets/svg/dog.svg";
import horse from "./assets/svg/horse.svg";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [bird, cat, cow, dog, horse];
  const totalImages = images.length;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        border: "1px solid red",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <div className="carousel">
        <button onClick={handlePrev}>Previous</button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
