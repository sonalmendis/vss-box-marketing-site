import React from "react";
import Link from "next/link";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
// import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
// import Image from "next/image";

const ButtonStyled = styled.div`
  text-align: ${(props) => props.center && "center"};
  .button-inner-container {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0);

    font-size: 0.82rem;
    font-family: var(--font1), sans-serif;
    margin-top: 1em;
    outline: none;
    border: 1px solid white;

    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 100vw;
    line-height: 1;
    transition: background-color 0.15s linear, transform 0.15s,
      background-position 2s ease;
    color: white;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
    &:active {
      transform: scale(0.95);
    }
    // If button type 2 apply different styles:
    ${(props) =>
      props.type == "2" &&
      `
      // background: linear-gradient(135deg, rgba(42,106,181,1) 0%, rgba(37,88,144,1) 30%, rgba(79,64,156,1) 60%, rgba(77,60,182,1) 100%);
      background: linear-gradient(100deg, rgba(39,66,132,1) 0%, rgba(25,45,94,1) 30%, rgba(41,41,129,1) 60%, rgba(40,31,93,1) 100%);
      // background: linear-gradient(135deg, rgba(50,114,205,1) 0%, rgba(22,62,124,1) 30%, rgba(69,54,144,1) 60%, rgba(40,29,110,1) 100%);
      border: 1px solid #405698;
      background-size:400% 400%;
        background-position:left;
 
        &:hover{
          background-position:right;
          background-color: initial;
          transform:scale(1.05);

        }
    `};
  }

  a {
    padding: 1.4rem 2rem;
    display: block;
    width: 100%;
    cursor: pointer;
    height: 100%;
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled
      className={props.className}
      center={props.center}
      type={props.type}
    >
      <div className="button-inner-container">
        {props.href ? (
          <Link onClick={props.onClick} href={props.href} target={props.target}>
            {
              props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
            }
          </Link>
        ) : (
          <button onClick={props.onClick} target={props.target}>
            {
              props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
            }
          </button>
        )}
      </div>
    </ButtonStyled>
  );
};

export default Button;
