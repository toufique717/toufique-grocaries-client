 import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


import image1 from "../assets/g1.jpg"
import image2 from "../assets/g2.jpg"
import image3 from "../assets/g3.jpg"
import image4 from "../assets/g4.jpg"
import image5 from "../assets/g5.jpg"
import image6 from "../assets/g6.jpg"

const Arrow = ({ left, onClick, disabled }) => {
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"} ${
        disabled ? "arrow--disabled" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        width: 30,
        height: 30,
        cursor: disabled ? "not-allowed" : "pointer",
        fill: "#333",
        position: "absolute",
        top: "50%",
        left: left ? 10 : "auto",
        right: left ? "auto" : 10,
        transform: "translateY(-50%)",
        opacity: disabled ? 0.3 : 1,
        pointerEvents: disabled ? "none" : "auto",
        userSelect: "none",
        zIndex: 10,
      }}
    >
      {left ? (
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      ) : (
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      )}
    </svg>
  );
};

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div style={{ position: "relative", maxWidth: "1100px", margin: "auto" }}>
       

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1" style={{ background: "#f44336", color: "white", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}> 



   <img
    src={image1}
    alt="Slide 1"
     
  />





        </div>
        <div className="keen-slider__slide number-slide2" style={{ background: "#2196f3", color: "white", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}> 

             <img
             src={image2}
             alt="Slide 1"
     
            />
        </div>
        <div className="keen-slider__slide number-slide3" style={{ background: "#4caf50", color: "white", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}> 

          <img
             src={image3}
             alt="Slide 1"
     
            />



        </div>
        <div className="keen-slider__slide number-slide4" style={{ background: "#ff9800", color: "white", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>


           <img
             src={image4}
             alt="Slide 1"
     
            />




        </div>
        <div className="keen-slider__slide number-slide5" style={{ background: "#9c27b0", color: "white", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}> 




         <img
             src={image5}
             alt="Slide 1"
     
            />





        </div>
        <div className="keen-slider__slide number-slide6" style={{ background: "#607d8b", color: "white", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}> 



          <img
             src={image6}
             alt="Slide 1"
     
            />






        </div>
      </div>

      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current.prev();
            }}
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current.next();
            }}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}

      {loaded && instanceRef.current && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current.moveToIdx(idx);
              }}
              style={{
                border: "none",
                background: currentSlide === idx ? "#333" : "#ccc",
                borderRadius: "50%",
                width: 12,
                height: 12,
                margin: "0 5px",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
