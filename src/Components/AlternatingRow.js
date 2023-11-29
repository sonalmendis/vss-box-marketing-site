import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
import GreenBullet from "../../public/img/vectors/green-bullet.svg";

const AlternatingRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .text-container {
    order: 2;

    @media ${GlobalVariables.device.tablet} {
      text-align: center;
    }
    @media ${GlobalVariables.device.laptop} {
      text-align: left;
      order: ${(props) => (props.side === "left" ? "1" : "2")};
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 75%;
    }
    button {
      margin-left: auto;
      margin-right: auto;
      @media ${GlobalVariables.device.laptop} {
        margin-left: 0;
      }
    }
    .details-container {
      margin-top: 2em;
      display: flex;
      flex-wrap: wrap;
      .text-container {
        display: flex;
        order: 1;
        width: 100%;
      }
      .text-container > div {
        margin-right: 1em;
      }
      .button-container {
        margin-top: 2em;
        order: 2;
      }
      p {
        font-weight: 700;
      }

      @media ${GlobalVariables.device.tablet} {
        justify-content: center;
        align-items: center;
        .text-container {
          justify-content: center;
          align-items: center;
        }
      }
      @media ${GlobalVariables.device.laptop} {
        justify-content: flex-start;

        .text-container {
          flex-direction: row;
          justify-content: flex-start;
        }
      }
    }
  }

  .text-container.mockup-section .inner-container {
    text-align: center;

    position: relative;
    /* background: rgba(255, 255, 255, 0.05); */

    /* backdrop-filter: blur(0.8rem); */
    /* box-shadow: -8px 10px 19px 0px rgba(0, 0, 0, 0.35); */
    h1 {
      /* &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        bottom: -1.5rem;
        left: 0;
      } */
      margin-bottom: 1rem;
    }
    &:before {
      content: "";
      position: absolute;
      border-radius: 1.8rem;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: linear-gradient(
        140deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      mix-blend-mode: overlay;
      z-index: -1;
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: none; //change this to block if you want an opaque glassy backgrounf
    }
    p {
      /* margin-bottom: 2em; */
    }
    @media ${GlobalVariables.device.laptop} {
      text-align: left;
    }
  }
  h2 {
    margin-bottom: 0.2em;
  }
  .inner-content-container {
    display: flex;
    flex-direction: column;
    @media ${GlobalVariables.device.laptop} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      grid-template-rows: 1fr;
      grid-column-gap: 5em;
      grid-row-gap: 0px;
    }
  }
  .image-container {
    order: 1;
    margin-bottom: 3em;
    position: relative;
    @media ${GlobalVariables.device.laptop} {
      margin-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.mockup {
      margin-left: auto;
      margin-right: auto;
      display: block;
      @media ${GlobalVariables.device.laptop} {
        width: 100%;
      }
    }
    #dart-illustration {
      margin-left: 30em;

      filter: blur(0.5em);
      transition: margin 2s ease-out, filter 2s;
      @media ${GlobalVariables.device.tablet} {
        width: 130%;
      }
      @media ${GlobalVariables.device.laptop} {
        position: absolute;
        left: 32em;
        transition: left 1.5s ease-out, filter 1.5s;
        top: -28%;
        width: 60vw;
      }
      @media ${GlobalVariables.device.laptopL} {
        width: 58vw;
      }
      &.showDart {
        filter: blur(0);
        margin-left: 0em;
        @media ${GlobalVariables.device.laptop} {
          left: -12vw;
        }
      }
    }

    img#price-illustration {
      @media ${GlobalVariables.device.laptop} {
        width: 120%;
        margin-left: -3vw;
      }
    }
    #diamond-illustration {
      z-index: 1;
      position: relative;
    }
    #diamond-illustration-glow {
      position: absolute;
      z-index: 0;
      top: 0;
      bottom: 0;
      left: 0;
      margin-top: auto;
      margin-bottom: auto;
      animation: glow 3.5s linear infinite;
      transform: scale(1.1);
    }
    .metrics-container {
      position: absolute;
      z-index: 2;
      display: flex;
      margin: 0;
      bottom: 0;

      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      img {
        border-radius: 1em;
      }
      #google-img-container {
        position: relative;
        width: 63%;
        margin-bottom: 1em;
        top: -1em;
        left: 1.8em;
        &:before {
          content: "";
          height: 100%;
          width: 100%;
          background: red;

          display: block;
          z-index: -1;
          position: absolute;
          transform: scaleX(1.05) scaleY(1.08);
          border-radius: 1em;
          top: -0.1em;
          opacity: 1;
          background: linear-gradient(
            135deg,
            rgb(232 77 123 / 85%) 0%,
            rgb(217 79 64 / 12%) 100%
          );
        }
        @media ${GlobalVariables.device.laptop} {
          width: 21em;
          left: -4em;
          top: 2em;
        }
      }
      #google-img {
      }
      #gtmetrix-img-container {
        position: absolute;
        top: 6em;
        width: 73%;
        z-index: 2;
        right: 1.8em;
        &:before {
          content: "";
          height: 100%;
          width: 100%;
          background: red;

          display: block;
          z-index: -1;
          position: absolute;
          transform: scaleX(1.03) scaleY(1.1);
          border-radius: 1em;
          top: -0.1em;
          opacity: 1;
          background: linear-gradient(
            135deg,
            rgb(40 138 208 / 77%) 0%,
            rgb(48 99 228 / 8%) 100%
          );
        }
        @media ${GlobalVariables.device.laptop} {
        }
      }
      #gtmetrix-img {
      }
      @media ${GlobalVariables.device.laptop} {
        margin-top: 13em;
        bottom: initial;
      }
    }
    #diamond-illustration-front-glow {
      z-index: 2;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin-top: auto;
      margin-bottom: auto;
      mix-blend-mode: plus-lighter;
      filter: blur(2em);
      animation: front-glow 3.5s linear infinite;
    }

    @keyframes glow {
      0% {
        filter: hue-rotate(35deg) blur(1em);
      }
      /* 25% {
        filter: hue-rotate(0deg) blur(2em);
      } */
      50% {
        filter: hue-rotate(0deg) blur(2.5em);
      }
      /* 75% {
        filter: hue-rotate(0deg) blur(2em);
      } */
      100% {
        filter: hue-rotate(35deg) blur(1em);
      }
    }

    @keyframes front-glow {
      0% {
        opacity: 0;
      }

      50% {
        opacity: 0.4;
      }

      100% {
        opacity: 0;
      }
    }
  }
  .container-bg {
    position: absolute;
    z-index: -1;
    top: 0;

    margin-top: auto;
    margin-bottom: auto;
    width: 100%;

    @media ${GlobalVariables.device.tablet} {
    }
    @media ${GlobalVariables.device.laptop} {
      bottom: 0;
    }
  }

  .quality-mockups {
    position: absolute;
    left: 0;
    &.front {
      z-index: 2;
      bottom: 0;
    }
    &.back {
      z-index: 0;
      bottom: 0;
    }
  }

  .container-bg#dart-container-bg {
    opacity: 0;
    top: -20%;
    bottom: initial;
    width: 110%;
    filter: blur(0.5em);
    transition: opacity 1.5s ease-in, filter 1.5s;
    transition-delay: 0.5s;
    transition-property: opacity, filter;
    @media ${GlobalVariables.device.tablet} {
      top: -37vw;
      width: 100%;
    }
    @media ${GlobalVariables.device.laptop} {
      right: 0;
      top: -24%;
      width: 100%;
    }
    &.showBg {
      filter: blur(0em);
      opacity: 1;
    }
  }
  img {
    height: auto;
    width: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    background-image: url(${GreenBullet});
    background-repeat: no-repeat;
    background-position: 0% 0.5em;
    background-size: 0.6em;
    list-style-type: none;
    padding-left: 1.1em;
  }

  &.for-x-section {
    .inner-content-container {
      margin-top: -29em;
    }

    .container-bg.mockup-section {
      position: relative;
      opacity: 0.25;
    }
    .image-container.mockup {
      img {
        filter: drop-shadow(0px 0.5rem 0.5rem rgba(0, 0, 0, 0.75));
      }
    }
    @media ${GlobalVariables.device.laptop} {
      .inner-content-container {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 100%;
        justify-content: center;
        align-items: center;
        position: absolute;
        grid-template-columns: 2fr 2fr;
        ${(props) =>
          props.side === "right" && "grid-template-columns: 2fr 2fr;"}
      }
    }

    &.portfolio-section {
      .text-container.mockup-section {
        text-align: left;
      }
      h3 {
        margin-bottom: 0.5em;
      }
      li {
        margin-bottom: 0.5em;
      }
      @media ${GlobalVariables.device.laptop} {
        .inner-content-container {
          grid-template-columns: 2fr 3fr;
          grid-template-rows: 1fr;

          ${(props) =>
            props.side === "right" && "grid-template-columns: 3fr 2fr;"}
        }
      }
    }
  }
`;

const AlternatingRow = (props) => {
  return (
    <AlternatingRowStyled
      className={props.className}
      side={props.side}
      top={props.top}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the AlternatingRow component and put your own text */
      }
    </AlternatingRowStyled>
  );
};

export default AlternatingRow;
