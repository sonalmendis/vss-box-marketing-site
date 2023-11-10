import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Loader from "../../public/img/loader.svg";
import Image from "next/image";
import contactBg from "../../public/img/bitmaps/contact-bg.webp";
import * as GlobalVariables from "@/styles/GlobalVariables";
import telephoneIcon from "../../public/img/vectors/phone-icon.svg";
import mailIcon from "../../public/img/vectors/mail-icon.svg";
import Button from "./Button";
//  REMEMBER TO SET YOUR ACCES KEY
// <input
//   type="hidden"
//   value="5dc80ba7-d9d1-43bd-9e92-7826a36d3490"
//   {...register("access_key")}
// />

const FormStyled = styled.div`
  background-image: url(${contactBg.src});
  background-size: cover;
  background-position: top;
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
  .contact-details-container {
    margin-bottom: 3em;
    /* position: relative;
    z-index: 1;

    border-radius: 0.8em;
    padding: 2em;
    background: transparent;

    @keyframes gradientBackground {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 0%;
      }
      100% {
        background-position: 0% 0%;
      }
    }
    @keyframes glowContact {
      0% {
        transform: scaleX(0.9) scaleY(0.75);
      }
      50% {
        transform: scaleX(1) scaleY(1);
      }
      100% {
        transform: scaleX(0.9) scaleY(0.75);
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      z-index: -1;
      filter: blur(0.4rem);
      width: calc(100%);
      height: calc(100%);
      border-radius: 0.8em;
      opacity: 1;
      animation: glowContact 5.5s infinite linear,
        gradientBackground 14s linear infinite;

      background-image: linear-gradient(
        90deg,
        rgba(54, 56, 199, 1) 0%,
        rgba(217, 64, 93, 1) 50%,
        rgba(238, 119, 82, 1) 100%
      );
      background-size: 400% 400%;
      background-position: 0% 0%;
      @media ${GlobalVariables.device.tablet} {
        filter: blur(1.4rem);
        width: calc(100%);
        height: calc(100%);
        top: 0;
        left: 0;
      }
    }
    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;

      background-size: 400% 400%;
      background-position: 0% 0%;
      animation: gradientBackground 14s linear infinite;
      left: 0;
      top: 0;
      border-radius: 10px;
      background-image: linear-gradient(
        90deg,
        rgba(54, 56, 199, 1) 0%,
        rgba(217, 64, 93, 1) 50%,
        rgba(238, 119, 82, 1) 100%
      );
    }
    img {
      width: 2em;
      margin-right: 0.8em;
    }
    .col {
      margin-bottom: 1.2em;
      display: flex;

      align-items: center;
      &:last-of-type {
        margin-bottom: 0;
      }
      span {
        font-size: 1.2em;
        font-weight: 700;
      }
      @media ${GlobalVariables.device.tablet} {
        margin-bottom: 0;
        &.col1 {
          margin-right: 2em;
          padding-right: 2em;
          border-right: 4px solid white;
        }
      }
    }

    @media ${GlobalVariables.device.tablet} {
      margin-left: auto;
      width: fit-content;
      margin-right: auto;
      padding: 2em 2.2em;
      .inner-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    } */
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
`;

/*
A React component that displays a contact form.
Uses useForm hook from react-hook-form library to manage form state and validation.
Uses useState hook to manage state of form submission and success/error messages.
Submits form data to web3forms API endpoint.
*/
export default function ContactForm(props) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  //Declares state variables for form submission success and error messages.
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  /*
Handles form submission.
Sets subject field value to "{name} sent a message from your website".
Submits form data to web3forms API endpoint.
Sets success and error messages based on API response.
Resets form on successful submission.

REMEMBER TO SET YOUR ACCES KEY
            <input
              type="hidden"
              value="5dc80ba7-d9d1-43bd-9e92-7826a36d3490"
              {...register("access_key")}
            />
*/
  const onSubmit = async (data, e) => {
    console.log(data);
    setValue("subject", `${data.name} sent a message from your website`);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

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
            </div>

            <div className="contact-details-container">
              <Button
                type="2"
                target="_blank"
                refferer="no-referrer"
                center="true"
                href="https://cal.com/sonal-mendis-awdbhl/30min"
                className="vertical-padding2 no-top"
              >
                Book a meeting now!
              </Button>
              {/* <div className="inner-container">
   

                <div className="col1 col">
     

                  <Image src={telephoneIcon} alt="Phone Icon" />
                  <span>077 954 0606</span>
                </div>
                <div className="col2 col">
   
                  <Image src={mailIcon} alt="Phone Icon" />
                  <span>contact@vssbox.com</span>
                </div>
              </div> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
              {/*Various hidden inputs*/}
              <input
                type="hidden"
                value="5dc80ba7-d9d1-43bd-9e92-7826a36d3490"
                {...register("access_key")}
              />
              <input type="hidden" {...register("subject")} />
              <input
                type="hidden"
                value="Contact Form Submission"
                {...register("from_name")}
              />
              <input
                type="checkbox"
                id=""
                style={{ display: "none" }}
                {...register("botcheck")}
              />

              {/*Input field for Name*/}
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Name"
                  autoComplete="false"
                  required
                  {...register("name")}
                />
              </div>

              {/*Input field for Email*/}
              <div className="input-container">
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="false"
                  required
                  {...register("email")}
                />
              </div>

              {/*Input field for Message*/}
              <div className="input-container">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  {...register("message")}
                />
              </div>

              {/*Submit Button and loader*/}
              <div className="button-loader-container">
                <button
                  type="submit"
                  className={`${
                    isSubmitting || isSubmitSuccessful ? "loading" : ""
                  } `}
                >
                  Submit
                </button>
                {/*Loader*/}
                <div className="loader-container">
                  <Image
                    className={`loader ${isSubmitting ? "loading" : ""}`}
                    src={Loader}
                    alt="Loading Icon"
                  />
                </div>
                {/*Submission message*/}
                <div className="submission-message-container">
                  {/*Successful Submission message*/}
                  {isSubmitSuccessful && isSuccess && (
                    <>
                      <div className="successful-submission">
                        <h3>Success</h3>
                        <h3 className="title-glow">Success</h3>
                        <p>
                          Email sent successfully! We will contact you as soon
                          as possible.
                        </p>
                      </div>
                    </>
                  )}

                  {/*Unsuccessful Submission message*/}
                  {isSubmitSuccessful && !isSuccess && (
                    <div className="error-submission">
                      <h3>Error, something odd happened</h3>

                      <p>
                        Please e-mail us directly as contact@vssbox.com, sorry!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </FormStyled>
      </div>
    </>
  );
}
