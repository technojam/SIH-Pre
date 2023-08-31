import React, { useState } from "react";
import "./perk_prize.css";

function Carousel({ items }) {
  const total = items.length; // Number of carousel items
  const [current, setCurrent] = useState(0);

  const handleMoveRight = () => {
    const next = (current + 1) % total;
    setCurrent(next);
  };

  const handleMoveLeft = () => {
    const prev = (current - 1 + total) % total;
    setCurrent(prev);
  };

  return (
    <section className="perks_prizes">
      <div className="carousel">
        <div className="ribbon"></div>
        <div className="carousel__nav">
          <span
            id="moveLeft"
            className="carousel__arrow"
            onClick={handleMoveLeft}
          >
            <svg
              className="carousel__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
            </svg>
          </span>
          <span
            id="moveRight"
            className="carousel__arrow"
            onClick={handleMoveRight}
          >
            <svg
              className="carousel__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </span>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${current === index ? "active" : ""}`}
          >
            <div className="carousel-item__image">
              <img src={item.image} alt={`image-${index}`} />
            </div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">{item.subtitle}</h2>
                <h1 className="carousel-item__title">{item.title}</h1>
                <p className="carousel-item__description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
