import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: transparent;
  width: ${(props) => `${props.width}px` || "320px"};
  height: ${(props) => `${props.height}px` || "240px"};
  perspective: 1000px;
  cursor: pointer;
`;

// const InnerCard = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   transition: transform 1s;
//   transform-style: preserve-3d;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// `;

// const FrontCardStyles = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   background-color: #bbb;
//   color: black;
//   z-index: 2;
//   border-radius: 5px;
//   padding: 5px;
// `;

// const BackCardStyles = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   background-color: #2980b9;
//   color: white;
//   transform: rotateY(180deg);
//   z-index: 1;
//   border-radius: 5px;
// `;

const FlipCard = (props) => {
  const { FrontCard, BackCard, height, width } = props;
  return (
    // <Root width={width} height={height}>
    <div class="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FrontCard />
        </div>
        <div className="flip-card-back">
          <BackCard />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
