import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
const ScrollDownArrowStyled = styled.div`
  // Here are some examples of props being used
  /*

order: ${(props) => (props.side === "left" ? "1" : "2")};

background: url("${(props) => props.bg}");

${(props) => props.type === "outline" && `background: none;`}

*/
  position: absolute;
  top: 0;
  height: 100vh;

  width: 100vw;

  z-index: 2;
  .arrow {
    position: absolute;
    &.left {
      bottom: 12rem;
      left: 2rem;
    }
    &.right {
      bottom: 12rem;
      right: 2rem;
    }
    @media ${GlobalVariables.device.laptop} {
      &.left {
        bottom: 17rem;
        left: 10rem;
      }
      &.right {
        bottom: 17rem;
        right: 10rem;
      }
    }
  }
  .line {
    height: 3rem;
    background: white;
    width: 0.1rem;

    transform: scaleY(0);
    transform-origin: top;
    @keyframes lineScale {
      0% {
        transform: scaleY(0);
      }
      50% {
        transform: scaleY(1);
      }
      75% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0);
      }
    }
    animation: lineScale 2s infinite 0s;
  }
  .arrowhead {
    bottom: 0.25rem;
    /* left: 0.1rem; */
    position: absolute;
    bottom: 0.45rem;

    .headLine {
      @keyframes headLineScaleLeft {
        0% {
          transform: rotate(-45deg) scaleY(0);
        }
        25% {
          transform: rotate(-45deg) scaleY(0);
        }
        50% {
          transform: rotate(-45deg) scaleY(1);
        }
        75% {
          transform: rotate(-45deg) scaleY(0);
        }

        100% {
          transform: rotate(-45deg) scaleY(0);
        }
      }
      @keyframes headLineScaleRight {
        0% {
          transform: rotate(45deg) scaleY(0);
        }
        25% {
          transform: rotate(45deg) scaleY(0);
        }
        50% {
          transform: rotate(45deg) scaleY(1);
        }
        75% {
          transform: rotate(45deg) scaleY(0);
        }

        100% {
          transform: rotate(45deg) scaleY(0);
        }
      }
    }
    .headLineLeft {
      height: 0.5rem;
      background: white;
      width: 0.1rem;
      position: absolute;
      /* right: 0.35rem; */
      transform: rotate(-45deg) scaleY(0);
      transform-origin: bottom right;
      animation: headLineScaleLeft 2s infinite 0s;
    }
    .headLineRight {
      height: 0.5rem;
      background: white;
      width: 0.1rem;
      position: absolute;
      /* left: 0.2rem; */
      transform: rotate(45deg) scaleY(0);
      transform-origin: bottom left;
      animation: headLineScaleRight 2s infinite 0s;
    }
  }
`;

const ScrollDownArrow = (props) => {
  return (
    <ScrollDownArrowStyled className={props.className}>
      <div className="arrow right">
        <div className="line"></div>
        <div className="arrowhead">
          <div className="headLine headLineLeft"></div>
          <div className="headLine headLineRight"></div>
        </div>
      </div>

      <div className="arrow left">
        <div className="line"></div>
        <div className="arrowhead">
          <div className="headLine headLineLeft"></div>
          <div className="headLine headLineRight"></div>
        </div>
      </div>
    </ScrollDownArrowStyled>
  );
};

export default ScrollDownArrow;
