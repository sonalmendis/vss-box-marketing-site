import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";

const BasicTitleTextStyled = styled.div`
  .title-container {
    text-align: left;
    h2 {
      margin-bottom: 0.5em;
    }
    @media (${GlobalVariables.device.tablet}) {
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
  @media (${GlobalVariables.device.laptop}) {
    &.cropped-title {
      .inner-container {
        width: 50%;
      }
    }
  }
`;

const BasicTitleText = (props) => {
  return (
    <BasicTitleTextStyled className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the BasicTitleText component and put your own text */
      }
    </BasicTitleTextStyled>
  );
};

export default BasicTitleText;
