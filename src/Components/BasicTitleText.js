import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";

const BasicTitleTextStyled = styled.div`
  z-index: 5;
  position: relative;
  ${(props) =>
    props.border
      ? "border-top: 1px solid #64667e; border-bottom: 1px solid #64667e"
      : "none"};
  .title-container {
    text-align: ${(props) => (props.center ? "center" : "left")};
    h2 {
      margin-bottom: 0.5em;
    }
    @media ${GlobalVariables.device.tablet} {
      text-align: center;
    }
    @media (min-width: 1024px) {
      h2,
      p {
        text-align: center;
      }
    }
    h2 {
      font-size: 3rem;
    }
  }

  // Cropped Title
  // Currently only on laptop as very rarely used on mobile
  @media ${GlobalVariables.device.laptop} {
    &.cropped-title {
      .inner-container {
        width: 50%;
      }
    }
  }

  // Specifically for the process section on the front page
  &.process-text {
    margin-bottom: 2rem;
    .title-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      @media ${GlobalVariables.device.laptop} {
        flex-direction: row;
      }
    }
    p {
      margin-bottom: 1.2rem;
      &:last-child {
        margin-bottom: 0;
      }
      @media ${GlobalVariables.device.laptop} {
        margin-bottom: 0;
        margin-right: 2.5rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    img.icon {
      width: 1.5rem;
      height: auto;
      display: block;
      margin-bottom: 0.5rem;
      @media ${GlobalVariables.device.laptop} {
        margin-bottom: 0;
        margin-right: 0.5rem;
      }
    }
  }
`;

const BasicTitleText = (props) => {
  return (
    <BasicTitleTextStyled
      className={props.className}
      center={props.center}
      border={props.border}
      style={props.style}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the BasicTitleText component and put your own text */
      }
    </BasicTitleTextStyled>
  );
};

export default BasicTitleText;
