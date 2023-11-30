import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Loader from "../../public/img/loader.svg";
import Image from "next/image";
import contactBg from "../../public/img/bitmaps/contact-bg cube.webp";
import * as GlobalVariables from "@/styles/GlobalVariables";
import telephoneIcon from "../../public/img/vectors/phone-icon.svg";
import mailIcon from "../../public/img/vectors/mail-icon.svg";
import Button from "./Button";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity

const FormStyled = styled.div`
  @property --myColor1 {
    syntax: "<color>";
    initial-value: rgba(11, 11, 48, 0.64);
    inherits: false;
  }

  @property --myColor2 {
    syntax: "<color>";
    initial-value: rgba(11, 11, 48, 0.64);
    inherits: false;
  }

  width: 100%; //change this to your liking
  @media ${GlobalVariables.device.laptop} {
    /* width: 50vh; //change this to your liking */
  }
  .text-container {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  h2 {
    margin-bottom: 0.2em;
    text-align: center;
  }
  p {
    text-align: center;
  }
  .image-container {
    margin-top: -8rem;
    position: relative;
    z-index: -1;
    overflow: hidden;
    img {
      margin-left: 50%;
      transform: translateX(-50%);
      width: 200vw;
      height: auto;
    }
    @media ${GlobalVariables.device.tablet} {
      margin-top: -12rem;
      img {
        margin-bottom: -10rem;
      }
    }
    @media ${GlobalVariables.device.laptop} {
      img {
        width: 100vw;
        margin-bottom: -12rem;
      }
    }
  }
  .contact-details-container {
    margin-bottom: 3em;
  }
  #contact-form {
    ${(props) => props.noform === "true" && `display: none;`}
  }
  input,
  textarea {
    border-radius: 0.8em;
    border: 1px solid #2f2f6d;
    /* outline: 1px solid #2f2f6d; */
    /* border: none; */

    background: linear-gradient(
      to right,
      rgba(11, 11, 48, 0.64),
      rgba(11, 11, 48, 0.64)
    );
    background: linear-gradient(
      to right,
      var(--myColor1, rgba(11, 11, 48, 0.64)),
      var(--myColor2, rgba(11, 11, 48, 0.64))
    );
    outline: none;
    padding: 1.7em 1.4em;
    resize: none;
    width: 100%;
    color: white;
    font-family: var(--font1);
    transition: --myColor1 1s, --myColor2 1s, outline 4s;
    &::placeholder {
      color: white;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    &:focus {
      /* border: 1px solid #4e4ead; */
      /* outline: 1px solid #4e4ead; */
      border: rgb(78, 78, 173) solid 1px;
      --myColor1: rgba(26, 56, 132, 0.85);
      --myColor2: rgba(103, 12, 191, 0.85);
      /* background: linear-gradient(
        90deg,
        rgba(26, 56, 132, 1) 0%,
        rgba(103, 12, 191, 1) 100%
      ); */
    }
  }
  textarea {
    height: 200px;
  }

  .button-loader-container {
    position: relative;
  }
  button {
    border-radius: 0.7em;
    border: 1px solid #2f2f6d;
    background: #0b0b30;
    color: white;
    padding: 1.5em 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    resize: none;
    width: 100%;
    z-index: 2;
    position: relative;
    cursor: pointer;
    opacity: 1;
    transition: all 0.25s;
    &.loading {
      opacity: 0;
      visibility: hidden;
    }
  }

  .loader-container {
    top: 0;
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .loader {
    width: 3em;
    opacity: 0;
    transition: opacity 0.5s;
    &.loading {
      opacity: 1;
    }
  }

  .input-container {
    margin-bottom: 1.8rem;
  }
  .cta {
    transform: scale(1.2);
    transform-origin: top;
  }
`;

/*
A React component that displays a contact form.
Uses useForm hook from react-hook-form library to manage form state and validation.
Uses useState hook to manage state of form submission and success/error messages.
Submits form data to web3forms API endpoint.
*/
export default function ContactForm(props) {
  const isTablet = useMediaQuery({
    query: `${GlobalVariables.device.tablet}`,
  });

  return (
    <>
      <div id="contact-form">
        <FormStyled noform={props.noform}>
          <div className={props.className}>
            <div className="text-container">
              <h2 className="s4">Reach Us!</h2>
              <p>
                Want to enquire more about our packages? Feel free to contact us
                right away!
              </p>
              <Button
                type="2"
                target="_blank"
                refferer="no-referrer"
                center={isTablet ? true : false}
                href="https://cal.com/sonal-mendis-awdbhl/30min"
                className="vertical-padding2 no-top cta"
              >
                Book a meeting now!
              </Button>
            </div>
          </div>
          <div className="image-container">
            <Image
              quality={95}
              src={contactBg}
              alt="Contact background"
              sizes="100vw"
            />
          </div>
        </FormStyled>
      </div>
    </>
  );
}
