import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";

const ImgColStyles = (props) => `

display: flex;
justify-content: center;
align-items: center;
margin-bottom:2rem;
img{
    width: 100%;
    height: auto;
}

@media ${GlobalVariables.device.laptop} {
  height: 33rem;
}

`;

const TextColStyles = (props) => `
display: flex;
justify-content: center;
align-items: center;

.text-col-inner-container{


  border-radius: 2.2rem;


  .text-container{
    position:relative;
    z-index:1;
  }
  a{
    position:relative;
    z-index:1;
  }
  .textbg-container{
    z-index:-1;
 position:absolute;
 right: -11rem;
 width: 200vw;
 opacity:0.9;
 top: -18rem;
 filter: blur(1rem) hue-rotate(29deg) saturate(0.75) brightness(0.7);
 @media ${GlobalVariables.device.tablet} {
  width: 122vw;
  top: -36rem;
  right: -17rem;
  z-index: -2;
  filter: blur(2.3rem) hue-rotate(29deg) saturate(0.75) brightness(0.7);
 }
 @media ${GlobalVariables.device.laptop} {
  width: 63vw;
  top: -20rem;
  right: -19rem;
  z-index: -2;
  filter: blur(2.5rem) hue-rotate(29deg) saturate(0.75) brightness(0.7);
 }
  }
  //   background-image:  ${props.textbg ? props.textbg : ""};
  //   background-size: 400% 400%;
  //   background-position: 71% 30%;
  //   @keyframes textColBGAnimation {
  //     0% {
  //       background-position: 71% 30%;
  //     }
  //     100%{
  //       background-position: 71% 72%;
  //     }
  //   }
  //   animation: textColBGAnimation 12s linear infinite alternate;
  // }
}
`;

const TwoColProductStyled = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px; */

  @media ${GlobalVariables.device.tablet} {
    /* grid-template-columns: 1fr; */
    /* grid-template-rows: 1fr 2fr; */
  }
  @media ${GlobalVariables.device.laptop} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    ${(props) => props.side === "right" && `grid-template-columns: 2fr 1fr;`}
    grid-template-rows: 1fr;
    grid-column-gap: 8rem;
    grid-row-gap: 0px;
  }

  .background-container {
    position: absolute;
    width: 100vw;
    left: 0;
    height: 33rem;

    .background-image-overlay {
      mix-blend-mode: color-dodge;
      position: absolute;
      top: 0;
      width: 52%;
      height: auto;
      opacity: 0.3;
      ${(props) =>
        props.side === "right" && `    transform: scaleX(-1);right: 0;`}
    }
  }

  .text-container {
    margin-bottom: 1em;

    h2 {
      :after {
        content: "";
        margin-top: 0.8em;
        display: block;
        width: 2em;
        height: 2px;
        background: ${GlobalVariables.colours.orange};
      }
    }
  }
  .title-container {
    display: none;
    position: relative;
    z-index: 2;
    margin-bottom: 2rem;
    @media ${GlobalVariables.device.tablet} {
      text-align: center;
    }
    @media ${GlobalVariables.device.laptop} {
      display: none;
    }
  }
  .title-container-desktop {
    /* display: none; */
    margin-bottom: 2rem;

    @media ${GlobalVariables.device.tablet} {
      &:after {
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media ${GlobalVariables.device.laptop} {
      display: block;
      &:after {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
  .img-col {
    ${ImgColStyles}
    @media ${GlobalVariables.device.laptop} {
      ${(props) => props.side === "left" && `order:2;`}
      ${(props) => props.side === "right" && `order:1;`}
      ${(props) => (props.side === "right" ? ImgColStyles : TextColStyles)}
    }
    position: relative;
    img {
      position: relative;
      z-index: 2;
    }
    .circles-container {
      position: absolute;
      left: 0px;
      right: 0px;
      margin: auto;
    }
    .sphere {
      position: absolute;
      border-radius: 50%;
    }
    .sphere1 {
      // Purple ball
      height: 24rem;
      width: 24rem;
      bottom: 4rem;

      box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.5);

      ${(props) => (props.circlebg ? `background: ${props.circlebg};` : "")}
      /* transform: translate(9rem, 0); */
      transform: translate(5rem, 0);
      @keyframes sphere1AmbientAnimation {
        0% {
          transform: translate(5rem, 0);
        }

        100% {
          transform: translate(-2rem, 0);
        }
      }

      animation: sphere1AmbientAnimation 9s ease-in-out infinite alternate;
      @media ${GlobalVariables.device.tablet} {
        height: 27rem;
        width: 27rem;
        bottom: 4rem;
      }

      @media ${GlobalVariables.device.laptop} {
        transform: translate(-14rem, 5rem) scale(0.8);
        height: 28rem;
        width: 28rem;
        bottom: 4rem;
        ${(props) =>
          props.side === "left"
            ? `@keyframes sphere1AmbientAnimationLaptopLeft {
          0% {
            transform: translate(-14rem, 5rem) scale(0.8);
          }

          100% {
            transform: translate(-14rem, 5rem) scale(1);
          }
        }
        animation: sphere1AmbientAnimationLaptopLeft 9s ease-in-out infinite
          alternate;`
            : ` @keyframes sphere1AmbientAnimationLaptopRight {
          0% {
            transform: translate(14rem, 5rem) scale(0.8);
          }

          100% {
            transform: translate(14rem, 5rem) scale(1);
          }
        }
        animation: sphere1AmbientAnimationLaptopRight 9s ease-in-out infinite
          alternate;`}
      }
    }

    .sphere2 {
      // Glass ball
      height: 20rem;
      width: 20rem;
      bottom: 3rem;
      box-shadow: inset 0px 4px 18px -7px rgb(255 255 255 / 67%),
        inset -4px -4px 18px -7px rgb(0 0 0 / 63%);

      backdrop-filter: blur(1rem);
      mix-blend-mode: overlay;
      transform: translate(-9rem, 0);
      @keyframes sphere2AmbientAnimation {
        0% {
          transform: translate(-9rem, 0);
        }

        100% {
          transform: translate(5rem, 0);
        }
      }
      animation: sphere2AmbientAnimation 12s ease-in-out infinite alternate;
      @media ${GlobalVariables.device.tablet} {
        height: 27rem;
        width: 27rem;
        bottom: 3rem;
      }

      @media ${GlobalVariables.device.laptop} {
        transform: translate(11rem, -4rem) scale(0.8);
        height: 33rem;
        width: 33rem;
        bottom: 2rem;
        ${(props) =>
          props.side === "left"
            ? `        @keyframes sphere2AmbientAnimationLaptopLeft {
          0% {
            transform: translate(11rem, -4rem) scale(0.8);
          }

          100% {
            transform: translate(11rem, -4rem) scale(1);
          }
        }
        animation: sphere2AmbientAnimationLaptopLeft 12s ease-in-out infinite
          alternate;`
            : `        @keyframes sphere2AmbientAnimationLaptopRight {
          0% {
            transform: translate(-13rem, -4rem) scale(0.8);
          }

          100% {
            transform: translate(-13rem, -4rem) scale(1);
          }
        }
        animation: sphere2AmbientAnimationLaptopRight 12s ease-in-out infinite
          alternate;`}
      }
    }

    .sphere3 {
      display: none;
      @media ${GlobalVariables.device.laptop} {
        display: block;
        ${(props) => (props.circlebg ? `background: ${props.circlebg};` : "")}
        height: 12rem;
        width: 12rem;
        transform: translate(22rem, -12rem) scale(0.8);
        z-index: -1;
        ${(props) =>
          props.side === "left"
            ? `        @keyframes sphere3AmbientAnimationLaptopLeft {
          0% {
            transform: translate(22rem, -12rem) scale(0.8);
          }

          100% {
            transform: translate(22rem, -12rem) scale(1);
          }
        }
        animation: sphere3AmbientAnimationLaptopLeft 12s ease-in-out infinite
          alternate;`
            : `        @keyframes sphere3AmbientAnimationLaptopRight {
          0% {
            transform: translate(-24rem, -12rem) scale(0.8);
          }

          100% {
            transform: translate(-24rem, -12rem) scale(1);
          }
        }
        animation: sphere3AmbientAnimationLaptopRight 12s ease-in-out infinite
          alternate;`}
      }
    }
  }

  .text-col {
    ${TextColStyles}

    @media ${GlobalVariables.device.laptop} {
      ${(props) => props.side === "left" && `order:1;`}
      ${(props) => props.side === "right" && `order:2;`}
    }
  }
  img.illustraiton {
    width: 100%;
    margin-bottom: 2em;
  }
  .text-col-inner-container {
    text-align: left;
    @media ${GlobalVariables.device.tablet} {
      text-align: center;
      button {
        width: 100%;
      }
    }
    @media ${GlobalVariables.device.laptop} {
      text-align: left;
      /* width: 55%; */
      padding: 3rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(0.1rem);
      border: 1px solid white;
    }
  }

  // Here are some examples of props being used
  /*

order: ${(props) => (props.side === "left" ? "1" : "2")};

background: url("${(props) => props.bg}");

${(props) => props.type === "outline" && `background: none;`}

*/
`;

const TwoColProduct = (props) => {
  return (
    <TwoColProductStyled
      className={props.className}
      side={props.side}
      bg={props.bg}
      circlebg={props.circlebg}
      textbg={props.textbg}
      textborder={props.textborder}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the TwoColProduct component and put your own text */
      }
    </TwoColProductStyled>
  );
};

export default TwoColProduct;
