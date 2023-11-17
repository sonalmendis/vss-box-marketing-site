/* eslint-disable react/no-unescaped-entities */
import * as GlobalVariables from "@/styles/GlobalVariables";
import Spline from "@splinetool/react-spline";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import Modal from "@/Components/Modal";

// IMAGES

//COMPONENTS
import BasicTitleText from "@/Components/BasicTitleText";
import ContactForm from "@/Components/ContactForm";
import PricingTableDesktop from "@/Components/PricingTableDesktop";
import PricingTableMobile from "@/Components/PricingTableMobile";

// images
import Spacer from "@/Components/Spacer";

const PricingStyled = styled.div`
  h1 {
    @media ${GlobalVariables.device.laptop} {
      text-align: center;
    }
  }
  .typeAnimationHidden {
    opacity: 0;
    @keyframes postTypeAnimationfadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.75;
      }
    }
    animation: postTypeAnimationfadein 1s linear forwards;
    &.typeAnimationDelay {
      @keyframes postTypeAnimationfadeinDelay {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      animation: postTypeAnimationfadeinDelay 1s linear 0.75s forwards;
    }
  }

  .background-top {
    background: linear-gradient(
      135deg,
      rgb(56 31 108) 0%,
      rgba(16, 23, 88, 0) 100%
    );
    position: absolute;
    top: 0;
    right: 0;
    width: 37rem;
    height: 37rem;
    z-index: -1;
    border-radius: 100%;

    transform: scale(1);
    @keyframes bgscale {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    animation: bgscale 14s linear infinite;
    @media ${GlobalVariables.device.tablet} {
      top: -14rem;
      right: -18rem;
      width: 40rem;
      height: 40rem;
      background: linear-gradient(
        218deg,
        rgb(56 31 108) 0%,
        rgba(16, 23, 88, 0) 100%
      );
      opacity: 0.9;
    }
    @media ${GlobalVariables.device.laptop} {
      background: linear-gradient(
        135deg,
        rgb(56 31 108) 0%,
        rgba(16, 23, 88, 0) 100%
      );

      top: -26rem;
      left: -30rem;
      width: 65rem;
      height: 65rem;
    }
  }
  // Carousel styles
  .btn-cta-carousel {
    display: none !important;
  }

  // Form styles
  input[type="radio"] {
    display: none;
  }

  label {
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
    outline: 1px solid #2f2f6d;
    display: inline-block;
    // styles for a basic minimal rounded corner button
    /* background: rgba(255, 255, 255, 0.1); */
    background: linear-gradient(to right, var(--myColor1), var(--myColor2));
    transition: --myColor1 0.5s, --myColor2 0.5s, outline 2s;
    padding: 1.4em 2em;

    font-size: 0.8rem;
    font-family: var(--font2);
    font-weight: 700;

    // low opacity white background:
    backdrop-filter: blur(0.5em);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 0.8em;

    color: white;
    @media ${GlobalVariables.device.tablet} {
      width: 100%;
    }
  }

  input[type="radio"]:checked + label {
    outline: 1px solid #4e4ead;
    --myColor1: rgba(26, 56, 132, 0.85);
    --myColor2: rgba(103, 12, 191, 0.85);
  }

  // Price Calculator Styles
  #price-calculator {
    position: fixed;

    bottom: 0;
    top: initial;
    left: 0;

    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .inner-container {
      display: flex;
      width: 100%;
      background: white;
      padding: 1em 1em;
      justify-content: space-between;
      h3 {
        color: black;
        letter-spacing: 0.1em;
      }
      p.large {
        color: #2b2b2b;
        margin-bottom: 0;
      }
      > div {
        margin-right: 0.1em;
      }
    }
    button {
      outline: none;
      border: 1px solid #a2a2a2;
      padding: 1em;
      background: #f4f4f4;
      border-radius: 0.7em;
      font-size: 0.9em;
      cursor: pointer;
    }
    @media ${GlobalVariables.device.laptop} {
      bottom: 1em;
      right: -2em;
      transform: scale(0.8);
      width: initial;
      left: initial;
      .inner-container {
        border-radius: 0.4em;
        display: block;
        width: initial;
        padding: 2em 3em 2em 2em;
        p.large {
          margin-bottom: 0.5em;
        }
      }
    }
  }

  .price-calculator-form-container {
    h3 {
      margin-bottom: 2em;
    }
    p.question-title {
      color: white;
    }
    .price-subtext p {
      margin-top: 0.4em;
      color: white;
      font-size: 1em;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      span.non-int-text {
        text-transform: initial;
        letter-spacing: 0;
      }
    }
    .question-group-container {
      margin-bottom: 4em;
    }
    .individual-question-container {
      margin-bottom: 1em;
    }

    @media ${GlobalVariables.device.tablet} {
      text-align: center;
      .question-group-container {
        display: grid;

        grid-auto-flow: column;
        grid-template-rows: 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 0px;
        justify-content: center;
      }
      .individual-question-container {
        margin-bottom: 0;
      }
      .price-subtext p {
        max-width: 19em;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  // URGENT SECTION
  #urgent-section {
    h2.main-title {
      background: #d63030;
      background: linear-gradient(to bottom, #d63030 0%, #f77b1e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .grid-container {
      @media ${GlobalVariables.device.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }
    }
    .grid-item {
      h2 {
        font-size: 1.6em;
        text-align: center;
      }
      h2.queue {
        background: #ffffff;
        background: linear-gradient(to bottom, #5bef80 0%, #3cad4d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      h3 {
        margin-bottom: 0.8em;
      }
      text-align: center;
      img {
        width: 5em;
        margin-bottom: 1em;
      }

      @media ${GlobalVariables.device.tablet} {
        h2 {
          margin-bottom: 0;
        }
        img {
          width: auto;
          height: 4em;
        }
      }
    }
  }
  .rhombus-bg-outer-counter {
    height: 20rem;
    position: relative;
  }
  #tridiv {
    perspective: 800px;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 100%;
  }
  .face {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 1);
  }
  .scene,
  .shape,
  .face,
  .face-wrapper,
  .cr {
    position: absolute;
    transform-style: preserve-3d;
  }
  .scene {
    -webkit-transform: rotateX(-15deg) rotateY(-319deg);
    -moz-transform: rotateX(-15deg) rotateY(-319deg);
    -ms-transform: rotateX(-15deg) rotateY(-319deg);
    transform: rotateX(-15deg) rotateY(-319deg);
    width: 80em;
    height: 80em;
    top: 50%;
    left: 50%;
    margin: -40em 0 0 -40em;
    @keyframes rhombusRotation {
      0% {
        transform: rotateX(-15deg) rotateY(-319deg);
      }

      100% {
        transform: rotateX(-15deg) rotateY(310deg);
      }
    }
    animation: rhombusRotation 21s linear infinite;
  }
  .shape {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform-origin: 50%;
  }
  .rhombus-container {
    -webkit-transform: rotateX(-15deg) rotateY(-319deg);
    -moz-transform: rotateX(-15deg) rotateY(-319deg);
    -ms-transform: rotateX(-15deg) rotateY(-319deg);
    transform: rotateX(-15deg) rotateY(-319deg);
    width: 80em;
    height: 80em;
    top: 50%;
    left: 50%;
    margin: -40em 0 0 -40em;
    background: white;
    position: absolute;
    transform-style: preserve-3d;
  }
  .face,
  .face-wrapper {
    overflow: hidden;
    transform-origin: 0 0;
    backface-visibility: hidden;
    /* hidden by default, prevent blinking and other weird rendering glitchs */
  }
  .face {
    background-size: 100% 100% !important;
    background-position: center;
  }
  .face-wrapper .face {
    left: 100%;
    width: 100%;
    height: 100%;
  }
  .photon-shader {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .side {
    left: 50%;
  }
  .cr,
  .cr .side {
    height: 100%;
  }
  [class*="pyramid"] .face-wrapper .face {
    transform: rotateZ(45deg) translateX(-35.35%) translateY(35.35%);
  }
  [class*="pyramid"] .bk {
    left: 100%;
  }
  [class*="pyramid"] .bm {
    top: 100%;
    transform: rotateX(-90deg) translateY(-50%);
  }
  [class*="pyramid"] .rt,
  [class*="pyramid"] .lt {
    transform-origin: 50% 0;
  }
  /* .pyr-1 styles */
  .pyr-1 {
    transform: translate3D(0em, 0em, 0em) rotateX(0deg) rotateY(0deg)
      rotateZ(0deg);
    opacity: 1;
    width: 4em;
    height: 5em;
    margin: -2.5em 0 0 -2em;
  }
  .pyr-1 .face-wrapper {
    width: 4em;
    height: 2em;
  }
  .pyr-1 .face-wrapper .face {
    width: 4em;
    height: 4em;
  }
  .pyr-1 .ft {
    transform: scaleZ(2.692582403567252) scaleY(2.692582403567252)
      rotateX(21.801409486351798deg);
  }
  .pyr-1 .bk {
    transform: scaleZ(2.692582403567252) scaleY(2.692582403567252)
      rotateX(-21.801409486351798deg) rotateY(180deg);
  }
  .pyr-1 .rt {
    transform: scaleX(2.692582403567252) scaleY(2.692582403567252)
      rotateZ(21.801409486351798deg) rotateY(-90deg);
  }
  .pyr-1 .lt {
    transform: scaleX(2.692582403567252) scaleY(2.692582403567252)
      rotateZ(-21.801409486351798deg) rotateY(90deg);
  }
  .pyr-1 .bm {
    width: 4em;
    height: 4em;
  }
  .pyr-1 .face {
    background-color: transparent;
  }
  /* .pyr-2 styles */
  .pyr-2 {
    transform: translate3D(0em, 5.0625em, 0em) rotateX(-180deg) rotateY(0deg)
      rotateZ(0deg);
    opacity: 1;
    width: 4em;
    height: 5em;
    margin: -2.5em 0 0 -2em;
  }
  .pyr-2 .face-wrapper {
    width: 4em;
    height: 2em;
  }
  .pyr-2 .face-wrapper .face {
    width: 4em;
    height: 4em;
  }
  .pyr-2 .ft {
    transform: scaleZ(2.692582403567252) scaleY(2.692582403567252)
      rotateX(21.801409486351798deg);
  }
  .pyr-2 .bk {
    transform: scaleZ(2.692582403567252) scaleY(2.692582403567252)
      rotateX(-21.801409486351798deg) rotateY(180deg);
  }
  .pyr-2 .rt {
    transform: scaleX(2.692582403567252) scaleY(2.692582403567252)
      rotateZ(21.801409486351798deg) rotateY(-90deg);
  }
  .pyr-2 .lt {
    transform: scaleX(2.692582403567252) scaleY(2.692582403567252)
      rotateZ(-21.801409486351798deg) rotateY(90deg);
  }
  .pyr-2 .bm {
    width: 4em;
    height: 4em;
  }
  .pyr-2 .face {
    background-color: transparent;
  }

  .refund-container {
    @media ${GlobalVariables.device.laptop} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
  }

  .rhombus-spline-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 6rem;
  }
`;

const Pricing = (props) => {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();
  const methods = useForm();
  const methods2 = useForm();

  const [isUrgent, setIsUrgent] = useState(props.urgent);
  const isSubmitting = methods.formState.isSubmitting;
  const isSubmitSuccessful = methods.formState.isSubmitSuccessful;
  const [Message, setMessage] = React.useState("");

  const [isCMSModalOpen, setIsCMSModalOpen] = useState(false);

  const handleOpen = () => {
    setIsCMSModalOpen(true);
  };
  const handleClose = () => setIsCMSModalOpen(false);

  const onSubmit = async (data, e) => {
    console.log("submit triggered");
    console.log(data);
    methods.setValue(
      "subject",
      `${data.name} sent a message from your website`
    );
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
          methods.reset();
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

  const [websitesOrGraphics, setWebsitesOrGraphics] = useState(false);

  // Website package states
  const [pricePackage, setPackage] = useState("");
  const [price, setPrice] = useState(0);
  const [websiteType, setWebsiteType] = useState(0);
  const [sizeOfSite, setSizeOfSite] = useState(0);
  const [sizeOfSitePrice, setSizeOfSitePrice] = useState(0);
  const [contentUpdateFrequency, setContentUpdateFrequency] = useState(0);
  const [logoRequirement, setlogoRequirement] = useState(0);
  const [customImagesRequirement, setCustomImagesRequirement] = useState(0);
  const [customImagesRequirementPrice, setCustomImagesRequirementPrice] =
    useState(0);
  const [needTextContent, setNeedTextContent] = useState(false);
  const [needTextContentPrice, setNeedTextContentPrice] = useState(0);
  const [domainRequirement, setDomainRequirement] = useState(0);
  const [needServer, setNeedServer] = useState(0);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Graphics package states

  const [typeOfGraphic, setTypeOfGraphic] = useState("other");
  const [typeOfGraphicPrice, setTypeOfGraphicPrice] = useState(0);
  const [complexityOfGraphic, setComplexityOfGraphic] = useState(0);
  const [numberOfGraphics, setNumberOfGraphics] = useState(1);

  //
  const onceAMonthRef = useRef(null);
  const multipleTimesAWeekRef = useRef(null);

  const resetState = () => {
    setPackage("");
    setPrice(0);
    setWebsiteType(0);
    setSizeOfSite(0);
    setSizeOfSitePrice(0);
    setContentUpdateFrequency(0);
    setlogoRequirement(0);
    setCustomImagesRequirement(0);
    setCustomImagesRequirementPrice(0);
    setNeedTextContent(false);
    setNeedTextContentPrice(0);
    setDomainRequirement(0);
    setNeedServer(0);
    setIsSuccess(false);
    setTypeOfGraphic("other");
    setTypeOfGraphicPrice(0);
    setComplexityOfGraphic(0);
    setNumberOfGraphics(1);
    methods.reset(); // Reset the form under "methods" note how this is different from "methods2" which is excluse to two buttons
  };

  const handlePriceChange = (event) => {
    const priceLevel = event.target.value;
    switch (priceLevel) {
      case "Pro Lite":
        setPrice(20000);
        setPackage("Pro Lite");
        break;
      case "Pro":
        setPrice(44000);
        setPackage("Pro");
        break;
      case "Pro Plus":
        setPrice(76000);
        setPackage("Pro Plus");
        break;
      case "Custom":
        setPrice(0);
        setPackage("Custom");
        break;
      default:
        setPrice(0);
        setPackage("Custom");

        break;
    }
  };

  const numberOfSectionsPrices = {
    small: 10000,
    medium: 25500,
    large: 39500,
  };

  const customImagesRequirementPrices = {
    small: 6500,
    medium: 14000,
    large: 25000,
  };

  const textContentPrices = {
    small: 2000,
    medium: 4000,
    large: 6500,
  };

  const priceSubtextforCustomImages = () => {
    if (sizeOfSite === "small") {
      return customImagesRequirementPrices.small;
    } else if (sizeOfSite === "medium") {
      return customImagesRequirementPrices.medium;
    } else if (sizeOfSite === "large") {
      return customImagesRequirementPrices.large;
    } else {
      return customImagesRequirementPrices.small;
    }
  };

  const priceSubtextforCustomText = () => {
    if (sizeOfSite === "small") {
      return textContentPrices.small;
    } else if (sizeOfSite === "medium") {
      return textContentPrices.medium;
    } else if (sizeOfSite === "large") {
      return textContentPrices.large;
    } else {
      return textContentPrices.small;
    }
  };

  const graphicSurveyQuestions = [
    {
      question: "What kind of graphic are you looking for?",
      options: [
        { value: "single-digital", label: "Single Digital", price: 3500 },
        { value: "single-print", label: "Single Print", price: 4500 },
        { value: "social-media-post", label: "Social Media Post", price: 1500 },
        { value: "logo-branding", label: "Logo Branding", price: 3500 },
        { value: "other", label: "Other" },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;

        switch (value) {
          case "single-digital":
            setTypeOfGraphic("digital");
            setTypeOfGraphicPrice(3500);
            break;
          case "single-print":
            setTypeOfGraphic("print");
            setTypeOfGraphicPrice(4500);
            break;
          case "social-media-post":
            setTypeOfGraphic("social-media");
            setTypeOfGraphicPrice(1500);
            break;
          case "logo-branding":
            setTypeOfGraphic("logo");
            setTypeOfGraphicPrice(3500);
            break;
          case "other":
            setTypeOfGraphic("other");
            setTypeOfGraphicPrice(0);
            break;
          default:
            setTypeOfGraphic("other");
            break;
        }
      },
      registervalue: "typeOfGraphic",
    },
    {
      question: "What level of complexity are you looking for?",
      options: [
        { value: "minimal", label: "Minimal", price: 0 },
        { value: "normal", label: "Normal", price: 2500 },
        { value: "complex", label: "Complex", price: 5500 },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;

        switch (value) {
          case "minimal":
            setComplexityOfGraphic(0);
            break;
          case "normal":
            setComplexityOfGraphic(2500);
            break;
          case "complex":
            setComplexityOfGraphic(5500);
            break;
          default:
            setComplexityOfGraphic("minimal");
            break;
        }
      },
      registervalue: "complexityOfGraphic",
    },
    {
      question: "How many graphics do you require?",
      options: [
        { value: "one", label: "1" },
        { value: "two", label: "2" },
        { value: "three", label: "3" },
        { value: "four", label: "4" },
        { value: "fourPlus", label: "4+" },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;

        switch (value) {
          case "one":
            setNumberOfGraphics(1);
            break;
          case "two":
            setNumberOfGraphics(2);
            break;
          case "three":
            setNumberOfGraphics(3);
            break;
          case "four":
            setNumberOfGraphics(4);
            break;
          case "fourPlus":
            setNumberOfGraphics(4);
            break;
          default:
            setNumberOfGraphics(1);
            break;
        }
      },
      registervalue: "numberOfGraphics",
    },
  ];

  const surveyQuestions = [
    {
      question: "What kind of website are you looking for?",
      options: [
        { value: "portfolio", label: "Portfolio" },
        { value: "company-page", label: "Company Page" },
        { value: "other", label: "Other" },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;

        switch (value) {
          case "portfolio":
            setWebsiteType(0);
            break;
          case "company-page":
            setWebsiteType(0);
            break;
          case "other":
            setWebsiteType(0);
            break;
          default:
            setWebsiteType(0);
            break;
        }
      },
      registervalue: "websiteType",
    },
    {
      question: "How many sections/pages do you require?",
      options: [
        {
          value: "small",
          label: "3-4 Minimal (Small)",
          price: numberOfSectionsPrices.small,
        },
        {
          value: "medium",
          label: "5-7 (Medium)",
          price: numberOfSectionsPrices.medium,
        },
        {
          value: "large",
          label: "7+ (Large)",
          price: numberOfSectionsPrices.large,
        },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;
        console.log(customImagesRequirement);
        switch (value) {
          case "small":
            setSizeOfSite("small");
            setSizeOfSitePrice(numberOfSectionsPrices.small);
            if (customImagesRequirement) {
              setCustomImagesRequirementPrice(
                customImagesRequirementPrices.small
              );
            }
            if (needTextContent) {
              setNeedTextContentPrice(textContentPrices.small);
            }
            break;
          case "medium":
            setSizeOfSite("medium");
            setSizeOfSitePrice(numberOfSectionsPrices.medium);
            if (customImagesRequirement) {
              setCustomImagesRequirementPrice(
                customImagesRequirementPrices.medium
              );
            }
            if (needTextContent) {
              setNeedTextContentPrice(textContentPrices.medium);
            }
            break;
          case "large":
            setSizeOfSite("large");
            setSizeOfSitePrice(numberOfSectionsPrices.large);
            if (customImagesRequirement) {
              setCustomImagesRequirementPrice(
                customImagesRequirementPrices.large
              );
            }
            if (needTextContent) {
              setNeedTextContentPrice(textContentPrices.large);
            }
            break;
          default:
            setSizeOfSite(0);
            break;
        }
      },
      registervalue: "sizeOfSite",
    },
    {
      question: "How often do you need to add/update content?",
      options: [
        {
          value: "every-few-months",
          label: "Every few months/never",
          price: 0,
        },
        { value: "once-a-month", label: "Once a month", price: 5000 },
        {
          value: "multiple-times-a-week",
          label: "Multiple times a week",
          price:
            "Rs. 20,000 (comes with a CMS for you to update content yourself)",
        },
      ],
      onChangeFunc: function (e) {
        const contentUpdateFrequencyValue = e.target.value;

        switch (contentUpdateFrequencyValue) {
          case "every-few-months":
            setContentUpdateFrequency(0);
            break;
          case "once-a-month":
            setContentUpdateFrequency(5000);
            break;
          case "multiple-times-a-week":
            setContentUpdateFrequency(20000);
            break;
          default:
            setContentUpdateFrequency(0);
            break;
        }
      },
      registervalue: "contentUpdateFrequency",
    },
    {
      question: "Do you need a logo?",
      options: [
        { value: "no-logo", label: "No, I can provide logo files" },
        { value: "yes-logo", label: "Yes", price: 3500 },
      ],
      onChangeFunc: function (e) {
        const logoRequireMentValue = e.target.value;

        switch (logoRequireMentValue) {
          case "no-logo":
            setlogoRequirement(0);
            break;
          case "yes-logo":
            setlogoRequirement(3500);
            break;
          default:
            setlogoRequirement(0);
            break;
        }
      },
      registervalue: "logoRequirement",
    },
    {
      question: "Do you need custom images/photos?",
      options: [
        { value: "no-custom-images", label: "No, I have graphics/photos" },
        {
          value: "yes-custom-images",
          label: "Yes",
          price: priceSubtextforCustomImages(),
        },
      ],
      onChangeFunc: function (e) {
        const requireCustomImagesValue = e.target.value;
        console.log(sizeOfSite);
        switch (requireCustomImagesValue) {
          case "no-custom-images":
            setCustomImagesRequirement(false);
            setCustomImagesRequirementPrice(0);
            break;
          case "yes-custom-images":
            setCustomImagesRequirement(true);
            if (sizeOfSite === "small") {
              setCustomImagesRequirementPrice(
                customImagesRequirementPrices.small
              );
            } else if (sizeOfSite === "medium") {
              setCustomImagesRequirementPrice(
                customImagesRequirementPrices.medium
              );
            } else if (sizeOfSite === "large") {
              setCustomImagesRequirementPrice(
                customImagesRequirementPrices.large
              );
            } else {
              setCustomImagesRequirementPrice(
                customImagesRequirementPrices.small
              );
            }

            break;
          default:
            setCustomImagesRequirement(0);
            break;
        }
      },
      registervalue: "customImagesRequirement",
    },
    {
      question: "Do you need text content for the website?",
      options: [
        { value: "no-text", label: "No, I have text" },
        { value: "yes-text", label: "Yes", price: priceSubtextforCustomText() },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;

        switch (value) {
          case "no-text":
            setNeedTextContent(false);
            setNeedTextContentPrice(0);
            break;
          case "yes-text":
            setNeedTextContent(true);

            if (sizeOfSite === "small") {
              setNeedTextContentPrice(textContentPrices.small);
            } else if (sizeOfSite === "medium") {
              setNeedTextContentPrice(textContentPrices.medium);
            } else if (sizeOfSite === "large") {
              setNeedTextContentPrice(textContentPrices.large);
            } else {
              setNeedTextContentPrice(textContentPrices.small);
            }

            break;
          default:
            setNeedTextContent(0);
            break;
        }
      },
      registervalue: "needTextContent",
    },
    {
      question: "Do you need a domain?",
      options: [
        { value: "no-domain", label: "No, I have a domain" },
        { value: "com-domain", label: "Yes .com", price: 3500 },
        { value: "lk-domain", label: "Yes .lk", price: 4500 },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;

        switch (value) {
          case "no-domain":
            setDomainRequirement(0);
            break;
          case "com-domain":
            setDomainRequirement(3500);
            break;
          case "lk-domain":
            setDomainRequirement(4500);
            break;
          default:
            setDomainRequirement(0);
            break;
        }
      },
      registervalue: "domainRequirement",
    },
    {
      question: "Do you need a server?",
      options: [
        {
          value: "no-server",
          label: "No, I have a server",
          price:
            "NOTE: We reccommend using our servers & we provide server hosting for free.",
        },
        { value: "yes-server", label: "Yes", price: 0 },
      ],
      onChangeFunc: function (e) {
        const value = e.target.value;

        switch (value) {
          case "no-server":
            setNeedServer(0);
            break;
          case "yes-server":
            setNeedServer(0);
            break;
          default:
            setNeedServer(0);
            break;
        }
      },
      registervalue: "needServer",
    },
  ];

  const totalPrice =
    (price +
      typeOfGraphicPrice +
      complexityOfGraphic +
      contentUpdateFrequency +
      logoRequirement +
      customImagesRequirementPrice +
      sizeOfSitePrice +
      needTextContentPrice +
      domainRequirement) *
    numberOfGraphics;

  const [isTypingDone, setTypingStatus] = useState(false);

  const isTabletOrDesktop = useMediaQuery({
    query: `${GlobalVariables.device.tablet}`,
  });

  const isPortrait = useMediaQuery({
    query: `${GlobalVariables.device.portrait}`,
  });
  <p></p>;
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(
  //   25,
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   20000
  // );
  // camera.position.set(1, 1, 20);
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  // // Load Light
  // var ambientLight = new THREE.AmbientLight(0xcccccc);
  // scene.add(ambientLight);

  // var directionalLight = new THREE.DirectionalLight(0xffffff);
  // directionalLight.position.set(0, 1, 1).normalize();
  // scene.add(directionalLight);

  // const loader = new GLTFLoader();
  // // glTf 2.0 Loader

  // loader.load("../../test2.gltf", function (gltf) {
  //   var object = gltf.scene;
  //   // gltf.scene.scale.set(2, 2, 2);
  //   // gltf.scene.position.x = 0; //Position (x = right+ left-)
  //   // gltf.scene.position.y = 0; //Position (y = up+, down-)
  //   // gltf.scene.position.z = 0; //Position (z = front +, back-)

  //   var mixer = new THREE.AnimationMixer(gltf.scene);
  //   var action = mixer.clipAction(gltf.animations[0]);

  //   scene.add(gltf.scene);
  //   action.play();
  // });
  // function animate() {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera);
  // }

  const [
    splineLoadingBreakpointTriggered,
    setSplineLoadingBreakpointTriggered,
  ] = useState(false);
  const [priceData, setPriceData] = useState(null);
  useEffect(() => {
    fetch(
      "https://seashell-app-23kzq.ondigitalocean.app/api/pricings?sort=Rank&populate=*"
    )
      .then((res) => res.json())
      .then((data) => {
        setPriceData(data.data);
      });

    // animate();
    const splineLoadingBreakpointTriggered = document.getElementById(
      "splineLoadingBreakpoint"
    );
    const splineLoadingBreakpointObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSplineLoadingBreakpointTriggered(true);
            splineLoadingBreakpointObserver.unobserve(entry.target);
          }
        });
      }
    );
    splineLoadingBreakpointObserver.observe(splineLoadingBreakpointTriggered);

    console.log("useEffect triggered");

    if (isUrgent) {
      // If the user comes to /pricing#urgent-section directly, scroll to the urgent section
      const urgentSectionRef = document.getElementById("urgent-section");
      // urgentSectionRef.scrollIntoView();

      const yCoordinate =
        urgentSectionRef.getBoundingClientRect().top + window.scrollY;

      const yOffset = -100; // This is the offset, change this if you need to
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      setIsUrgent(false); // Set isUrgent to false so that the user doesn't get redirected to the urgent section every time they navigate to "Pricing"
    }

    // querySelectorAll is used here instead of useRef because useRef doesn't work easily with multiple elements of the same class
    const hiddenElementsRef = document.querySelectorAll(".hidden");

    // Create an IntersectionObserver to observe the hidden elements
    const hiddenElementsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is intersecting the viewport, show it
          if (entry.target.closest(".hidden-parent")) {
            // If the element has a parent with the class "hidden-parent", show the parent element
            /* The .hidden-parent class is an invisible div that acts as an offset marker so that 
                    the element doesn't appear until it's scrolled into view + the offset */
            entry.target.closest(".hidden-parent").classList.add("show");
          } else {
            // Otherwise, show the element itself
            entry.target.classList.add("show");
          }

          // Stop observing the element once its been shown
          // hiddenElementsObserver.unobserve(entry.target);
        } else {
          // If the element is not intersecting the viewport, make sure it doesn't have the "show" class (note this should be defualt but this is just a precaution)
          entry.target.classList.remove("show");
        }
      });
    });

    // Observe all hidden elements
    hiddenElementsRef.forEach((element) => {
      hiddenElementsObserver.observe(element);
    });

    return () => {
      hiddenElementsObserver.disconnect();
      splineLoadingBreakpointObserver.disconnect();
    };
  }, [contentUpdateFrequency, isTypingDone]);

  return (
    <PricingStyled className={props.className}>
      <div className="background-top"></div>
      {/* MODALS
MODALS
MODALS
MODALS */}
      <Modal isOpen={isCMSModalOpen} onClose={handleClose}>
        <h2 className="s1">What is a CMS?</h2>
        <p>
          A CMS, (short for <strong>Content Management System</strong>), is a
          tool that helps you easily create, edit, and manage content on your
          website without needing any assistance from us; for instance, it
          enables you to update articles, images, or product information on your
          website without having to know how to code.
        </p>
      </Modal>
      <BasicTitleText className="inner-grid desktop-inner-grid vertical-padding4 cropped-title">
        <div className="inner-container">
          <h2 className="s3 no-margin vertical-padding2 desktop-vertical-padding1 tablet-vertical-padding1 no-top">
            {isTabletOrDesktop ? (
              <TypeAnimation
                sequence={[
                  "   Pay for what you need and get what you want without the fluff",
                  () => {
                    setTypingStatus(true);
                  },
                ]}
                wrapper="span"
                speed={75}
                style={{
                  minHeight: "10rem",
                  display: "block",
                }}
                repeat={0}
              />
            ) : (
              <TypeAnimation
                sequence={[
                  "   Pay for what you need and get what you want without the fluff",
                  () => {
                    setTypingStatus(true);
                  },
                ]}
                wrapper="span"
                speed={75}
                style={{ minHeight: "11.9375rem", display: "block" }}
                repeat={0}
              />
            )}
          </h2>

          {isTypingDone ? (
            <p className="faded typeAnimationHidden">
              Our tailored website solutions are designed to meet your specific
              needs, ensuring you receive exceptional value for your investment.{" "}
              <strong>
                No hidden fees, no unnecessary expenses, pay for only what you
                need and get results!
              </strong>
            </p>
          ) : (
            <p style={{ opacity: 0 }}>
              We believe every company or person should be able to own a website
              without having to pay exorbitant fees for something they don’t
              need.{" "}
              <strong>
                Our prices are flexible and dependent on what you want.
              </strong>
            </p>
          )}
        </div>
      </BasicTitleText>
      <Spacer desktopspace="4rem"></Spacer>
      {/* <div style={{ height: "50rem", background: "black" }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <Model />
        </Canvas>
      </div> */}
      <div
        className={
          isPortrait ? `hiddenNoIntersection ${isTypingDone && "show"}` : ""
        }
      >
        <PricingTableMobile
          priceData={priceData}
          handleOpen={handleOpen}
        ></PricingTableMobile>
        <PricingTableDesktop
          istypingdone={isTypingDone}
          priceData={priceData}
          handleOpen={handleOpen}
        ></PricingTableDesktop>
        <Spacer space="4rem" desktopspace="5rem"></Spacer>
        <div style={{ position: "relative" }}>
          <div
            style={{ position: "absolute", top: "-70rem" }}
            id="splineLoadingBreakpoint"
          ></div>
        </div>
        <div className="refund-container inner-grid desktop-inner-grid ">
          <BasicTitleText className="vertical-padding4">
            <div className="inner-container">
              <h2 className="s3 no-margin vertical-padding2 desktop-vertical-padding1 tablet-vertical-padding1 no-top">
                Full money back guarantee if you aren’t satisfied with the first
                design draft
              </h2>

              <p>
                Your confidence and satisfaction are our top priorities. We want
                you to feel secure in your decision to choose us and leave no
                room for hesitation!
              </p>
            </div>
          </BasicTitleText>
          {splineLoadingBreakpointTriggered & !isPortrait ? (
            <Spline
              className="rhombus-spline-container"
              scene="https://prod.spline.design/PaxOVLsx3FI1VvtA/scene.splinecode"
            />
          ) : (
            ""
          )}
        </div>
        <Spacer space="4rem" desktopspace="4rem"></Spacer>
        {/* CONTACT US SECTION */}
        {/* CONTACT US SECTION */}
        <ContactForm className="outer-grid tablet-inner-grid desktop-inner-grid4 vertical-padding5" />{" "}
      </div>
    </PricingStyled>
  );
};

export default Pricing;
