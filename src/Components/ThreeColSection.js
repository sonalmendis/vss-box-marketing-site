import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";

const ThreeColSectionStyled = styled.div`
  position: relative;
  z-index: 1;
  color: ${(props) => (props.darktheme ? "white" : "black")};
  .container {
    margin-bottom: 5rem;
    position: relative;
  }
  .image-container {
    position: relative;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: 62vw;
    @media ${GlobalVariables.device.tablet} {
      width: 75%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
    }
    img {
      height: 100%;
      width: 100%;
      &.step-deploy {
        transform: scale(
          1.1
        ); // This is scaled up slightly as the "deploy" image has a blurry background and ends up appearing smaller
        z-index: 0;
      }
    }

    .step-number {
      font-size: 4rem;
      position: absolute;
      top: 0rem;
      left: 6rem;
      font-family: var(--font3);
      z-index: 2;
      display: none;
      @media ${GlobalVariables.device.laptop} {
        display: none;
      }
    }
  }

  .text-container {
    text-align: ${(props) => (props.leftalign === "true" ? "left" : "center")};
    h3 {
      text-transform: uppercase;
      margin-bottom: 1em;
    }
    p {
      margin-bottom: 1em;
    }
    h3,
    p {
    }
    button {
      margin-left: auto;
      margin-right: auto;
    }
    &.price-details {
      * {
        text-align: left;
      }
      button {
        margin: 0;
      }
      p.large {
        margin-bottom: 0.7em;
      }
      p:not(.large) {
        font-weight: 300;
        min-height: 4em;
      }
    }
    .step-number-inline {
      @media ${GlobalVariables.device.laptop} {
      }
    }
    @media ${GlobalVariables.device.laptop} {
      &.price-details {
        p:not(.large) {
          padding-right: 1em;
        }
      }
    }
  }

  .connector-line-graphic {
    display: none;
    @media ${GlobalVariables.device.landscape} {
      display: block;
      position: absolute;

      height: 1px;
      background: #323044;
      width: 50%;
      top: 5.7rem;
      right: -63%;
    }
  }

  @media ${GlobalVariables.device.landscape} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2em; // This is the default spacing
    // Using the "spacing" prop if you want a custom one
  }

  @media ${GlobalVariables.device.landscape} {
    ${(props) => props.spacing && `grid-column-gap: ${props.spacing};`};
  }
`;

const ThreeColSection = (props) => {
  return (
    <ThreeColSectionStyled
      darktheme={props.darktheme}
      className={props.className}
      leftalign={props.leftalign}
      spacing={props.spacing}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </ThreeColSectionStyled>
  );
};

export default ThreeColSection;
