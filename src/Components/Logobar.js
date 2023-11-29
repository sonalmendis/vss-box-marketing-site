import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";

const LogobarStyled = styled.div`
  text-align: center;
  .inner-container {
  }
  .logo-container {
    margin-bottom: 3.5rem;
    img {
      width: 4rem;
      height: auto;
      margin-bottom: 1rem;
    }
    h3 {
      display: block;
      font-weight: 300;
      opacity: 0.8;
    }
  }

  .price-container {
    padding: 2rem;
    border-radius: 1.5rem;
    text-align: left;
    width: 19rem;
    margin-left: auto;
    margin-right: auto;
    .price-title {
      font-size: 1.5rem;
      margin-bottom: 0.4rem;
    }
    .s3 {
      margin-bottom: 0;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.3rem;
    }
    &.basic {
      background: linear-gradient(
        135deg,
        rgba(21, 33, 61, 1) 0%,
        rgba(37, 42, 89, 1) 100%
      );
    }
    &.pro {
      background: linear-gradient(130deg, #1a173d 0%, #342859 100%);
    }
    &.bespoke {
      background-image: linear-gradient(130deg, #2d1b37 0%, #512b53 100%);
    }
  }

  @media ${GlobalVariables.device.tablet} {
    .inner-container {
      display: flex;
      justify-content: space-between;
      flex-direction: ${(props) =>
        props.landscape === "tablet" ? "row" : "column"};
    }
    .logo-container {
      img {
        width: 3rem;
      }
    }
  }

  @media ${GlobalVariables.device.laptop} {
    .inner-container {
      flex-direction: ${(props) =>
        props.landscape === "laptop" ? "row" : "inherit"};
    }
    .logo-container {
      img {
        width: 3.5rem;
      }
    }
  }
`;

const Logobar = (props) => {
  return (
    <LogobarStyled
      landscape={props.landscape}
      className={props.className}
      center={props.center}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the Logobar component and put your own text */
      }
    </LogobarStyled>
  );
};

export default Logobar;
