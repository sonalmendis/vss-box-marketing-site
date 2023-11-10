/* eslint-disable react/no-unescaped-entities */
import * as GlobalVariables from "@/styles/GlobalVariables";
import homeStyles from "@/styles/index.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { Parallax, useParallax } from "react-scroll-parallax";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Spline from "@splinetool/react-spline";
// IMAGES
import background from "../../public/img/background3.webp";
import LogoMiddle from "../../public/img/dark-middle-logo.svg";
import leftCircle from "../../public/img/vectors/leftCircle.svg";
// intro section images
import gem1 from "../../public/img/bitmaps/intro-section/gem1.png";
import gem2 from "../../public/img/bitmaps/intro-section/gem2.png";
import gem3 from "../../public/img/bitmaps/intro-section/gem3.png";
import gem4 from "../../public/img/bitmaps/intro-section/gem4.png";
import gem1Outline from "../../public/img/vectors/gem1-outline.svg";
import gem2Outline from "../../public/img/vectors/gem2-outline.svg";
import gem3Outline from "../../public/img/vectors/gem3-outline.svg";
import gem4Outline from "../../public/img/vectors/gem4-outline.svg";
import pyramid1 from "../../public/img/bitmaps/pyramid1.png";

//3 step
import step1Illustration from "../../public/img/vectors/step-design.svg";

import step2Illustration from "../../public/img/vectors/step-develop.svg";

import step3Illustration from "../../public/img/vectors/step-deploy.png";

//COMPONENTS
import AlternatingRow from "@/Components/AlternatingRow";
import Button from "@/Components/Button";
import ContactForm from "@/Components/ContactForm";
import GradientBorder from "@/Components/GradientBorder";
import GradientBorderStyles from "@/Components/GradientBorder.module.scss";
import IntroSection from "@/Components/IntroSection";
import IntroSectionStyles from "@/Components/IntroSection.module.scss";
import OpeningSection from "@/Components/OpeningSection";
import OpeningSectionStyles from "@/Components/OpeningSection.module.scss";
import ScrollDownArrow from "@/Components/ScrollDownArrow2";
import Spacer from "@/Components/Spacer";
import ThreeColSection from "@/Components/ThreeColSection";
import TwoColProduct from "@/Components/TwoColProduct";
import BasicTitleText from "../Components/BasicTitleText";
import MockupSection from "@/Components/MockupSection";

export default function Home(props) {
  const disableOpeningAnimation = true; // For development purposes
  const sethasAnimationPlayedOnce = props.sethasAnimationPlayedOnce;
  const hasAnimationPlayedOnce = disableOpeningAnimation
    ? true
    : props.hasAnimationPlayedOnce;
  const isPortrait = useMediaQuery({
    query: `${GlobalVariables.device.portrait}`,
  });

  // const gem1ref = useRef(null);

  const triggerAnimations = () => {
    const cube = document.querySelector(
      `.${OpeningSectionStyles.cubeInnerContainer}`
    );
    const elements = document.querySelectorAll(".reTrigger");
    const elements2 = document.querySelectorAll(".reTrigger2");

    cube.style.animation = "none";
    cube.classList.add("scaleOnClick");
    setTimeout(() => {
      cube.classList.remove("scaleOnClick");
    }, 500); // Delay of the animation duration
    elements.forEach((element) => {
      element.classList.add("reTriggerAnimation");
      setTimeout(() => {
        element.classList.remove("reTriggerAnimation");
      }, 100); // Delay of 1
      element.classList.add("reTriggerPulse");

      // scaleOnClick;
    });

    elements2.forEach((element) => {
      element.classList.add("reTriggerAnimation");
      setTimeout(() => {
        element.classList.remove("reTriggerAnimation");
      }, 100); // Delay of 1
      element.classList.add("reTriggerPulse2");

      // scaleOnClick;
    });
  };
  const gem1parallax = useParallax({
    speed: 12,
  });
  const gem2parallax = useParallax({
    speed: 8,
  });
  const gem3parallax = useParallax({
    speed: 4,
  });
  const gem4parallax = useParallax({
    speed: 35,
  });
  // const gem4bparallax = useParallax({
  //   speed: 38,
  // });

  const gem1OutlineParallax = useParallax({
    speed: 8,
  });
  const gem2OutlineParallax = useParallax({
    speed: 10,
  });
  const gem3OutlineParallax = useParallax({
    speed: 5,
  });
  const gem4OutlineParallax = useParallax({
    speed: 32,
  });

  // const mockupParallax = useParallax({
  //   speed: 15,
  // });

  // const theparallax = useParallax({
  //   speed: 15,
  // });
  // const theparallax2 = useParallax({
  //   speed: 15,
  // });

  useEffect(() => {
    // Handle the intro animation and remove the event listener once the animation is done
    // Once animation is done, the hasAnimationPlayedOnce becomes true and the animation is frozen at the last frame if the user navigates between pages
    // Also makes the page scrollable once complete

    // HTML tag is fixed here that way the effets on the tag are only limited to the animation's scope
    // (otherwise the HTML tag will be perma-fixed on other pages if you use CSS)

    if (!hasAnimationPlayedOnce) {
      const htmlTag = document.querySelector("html");
      htmlTag.style.overflowY = "scroll";
      htmlTag.style.position = "fixed";
      const introAnimationContainer = document.querySelector(
        `.${OpeningSectionStyles.OpeningSectionWrapper}`
      );
      console.log(introAnimationContainer);

      const handleAnimationEnd = (event) => {
        console.log(event);
        if (event.animationName.includes("scaleIn")) {
          // console.log("Scale in animation ended");
          htmlTag.style.overflowY = "auto";
          htmlTag.style.position = "static";
          sethasAnimationPlayedOnce(true);
          introAnimationContainer.removeEventListener(
            "animationend",
            handleAnimationEnd
          );
        }
      };

      introAnimationContainer.addEventListener(
        "animationend",
        handleAnimationEnd
      );
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
          hiddenElementsObserver.unobserve(entry.target);
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
    };
  }, []);

  return (
    <>
      <div className={`${homeStyles.HomeWrapper}`}>
        {/* OPENING SECTION
        OPENING SECTION
        OPENING SECTION
        OPENING SECTION */}

        <OpeningSection
          className={`${OpeningSectionStyles.OpeningSectionWrapper} ${
            hasAnimationPlayedOnce && "freezeAtLastFrame"
          }`}
        >
          <div className={OpeningSectionStyles.backgroundContainer}>
            <Image
              src={background}
              className={OpeningSectionStyles.background}
              alt="background"
              sizes="100vw"
              quality={100}
              priority
            />
            <ScrollDownArrow></ScrollDownArrow>
            {/* Cube container */}
            <div className={OpeningSectionStyles.cubeContainer}>
              <div
                className={`${OpeningSectionStyles.cubeInnerContainer} ${
                  hasAnimationPlayedOnce && "freezeAtLastFrame"
                }`}
                onClick={() => {
                  triggerAnimations();
                }}
              >
                <div className={OpeningSectionStyles.cube}>
                  <div
                    className={`${OpeningSectionStyles.face} ${
                      hasAnimationPlayedOnce && "freezeAtLastFrame"
                    } ${OpeningSectionStyles.top}`}
                  ></div>
                  <div
                    className={`${OpeningSectionStyles.face} ${
                      hasAnimationPlayedOnce && "freezeAtLastFrame"
                    } ${OpeningSectionStyles.bottom}`}
                  ></div>
                  <div
                    className={`${OpeningSectionStyles.face} ${
                      hasAnimationPlayedOnce && "freezeAtLastFrame"
                    } ${OpeningSectionStyles.left}`}
                  ></div>
                  <div
                    className={`${OpeningSectionStyles.face} ${
                      hasAnimationPlayedOnce && "freezeAtLastFrame"
                    } ${OpeningSectionStyles.right}`}
                  ></div>
                  <div
                    className={`${OpeningSectionStyles.face} ${
                      hasAnimationPlayedOnce && "freezeAtLastFrame"
                    } ${OpeningSectionStyles.front}`}
                  ></div>
                  <div
                    className={`${OpeningSectionStyles.face} ${
                      hasAnimationPlayedOnce && "freezeAtLastFrame"
                    } ${OpeningSectionStyles.back}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className={OpeningSectionStyles.screenContainer}>
              <div className={OpeningSectionStyles.innerContainer}>
                {/* Text container */}
                <div className={OpeningSectionStyles.textContainer}>
                  <div
                    className={`${OpeningSectionStyles.textInnerContainer} desktop-inner-grid4`}
                  >
                    <Image
                      src={LogoMiddle}
                      alt="Logo"
                      className={`${OpeningSectionStyles.logoMiddle} ${
                        hasAnimationPlayedOnce && "freezeAtLastFrame"
                      }`}
                      priority
                    />

                    <div className={OpeningSectionStyles.centerText}>
                      <h3
                        className={`${
                          hasAnimationPlayedOnce && "freezeAtLastFrame"
                        }`}
                      >
                        We Create
                      </h3>
                      <h1
                        className={`${
                          hasAnimationPlayedOnce && "freezeAtLastFrame"
                        }`}
                      >
                        Beautiful<br></br>Websites & <br></br>Graphics
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Circles container */}
                <div className={OpeningSectionStyles.circlesContainer}>
                  <div className={OpeningSectionStyles.circlesInnerContainer}>
                    <div
                      className={`${OpeningSectionStyles.circle} ${
                        hasAnimationPlayedOnce && "freezeAtLastFrame"
                      }`}
                    ></div>
                    <div
                      className={`${OpeningSectionStyles.circle} ${
                        hasAnimationPlayedOnce && "freezeAtLastFrame"
                      }`}
                    ></div>
                  </div>
                </div>
                {/* Dots container */}
                <div className={OpeningSectionStyles.dotsContainer}>
                  <div className={OpeningSectionStyles.dotsInnerContainer}>
                    <div
                      className={`${OpeningSectionStyles.dots} ${OpeningSectionStyles.white} reTrigger`}
                    ></div>
                    <div
                      className={`${OpeningSectionStyles.dots} ${OpeningSectionStyles.magenta} ${OpeningSectionStyles.m1} reTrigger`}
                    ></div>
                    <div
                      className={`${OpeningSectionStyles.dots} ${OpeningSectionStyles.magenta} ${OpeningSectionStyles.m2} reTrigger`}
                    ></div>
                    <div
                      className={`${OpeningSectionStyles.dots} ${OpeningSectionStyles.magenta} ${OpeningSectionStyles.m3} reTrigger`}
                    ></div>
                  </div>
                </div>

                {/* Outlined circles container */}
                <div className={OpeningSectionStyles.outlinedCirclesContainer}>
                  <Image
                    src={leftCircle}
                    alt="Left Circle"
                    className={`${OpeningSectionStyles.leftCircle} reTrigger`}
                  />
                  <svg className={`${OpeningSectionStyles.outlinedCircle}`}>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className={`${OpeningSectionStyles.rightCircle} reTrigger2`}
                    />
                  </svg>
                </div>
                {/* Bottom outlined circles container */}

                <div
                  className={`${OpeningSectionStyles.bottomOutlinedCirclesContainer}`}
                >
                  <div
                    className={`${OpeningSectionStyles.bottomOutlinedCirclesInnerContainer} `}
                  >
                    <svg
                      className={`${OpeningSectionStyles.bottomOutlinedCircle} ${OpeningSectionStyles.leftCircle} `}
                    >
                      <circle className="reTrigger2" />
                    </svg>
                    <svg
                      className={`${OpeningSectionStyles.bottomOutlinedCircle} ${OpeningSectionStyles.rightCircle} `}
                    >
                      <circle className="reTrigger2" />
                    </svg>
                  </div>
                </div>

                {/* UI Wireframe container */}

                <div className={OpeningSectionStyles.uiWireframeContainer}>
                  <div
                    className={`${OpeningSectionStyles.uiWireframeInnerContainer}`}
                  >
                    <svg className={OpeningSectionStyles.uiLine}>
                      <rect className="reTrigger2" />
                    </svg>

                    <svg className={OpeningSectionStyles.uiField}>
                      <rect className="reTrigger2" />
                    </svg>
                    <svg className={OpeningSectionStyles.uiField}>
                      <rect className="reTrigger2" />
                    </svg>
                    <svg className={OpeningSectionStyles.uiField}>
                      <rect className="reTrigger2" />
                    </svg>
                    <svg className={OpeningSectionStyles.uiField}>
                      <rect className="reTrigger2" />
                    </svg>
                    <svg className={OpeningSectionStyles.uiSubmit}>
                      <rect className="reTrigger2" />
                    </svg>
                  </div>
                </div>
                {/* Crosses container */}
                <div className={OpeningSectionStyles.crossesContainer}>
                  <div
                    className={`${OpeningSectionStyles.crossesInnerContainer} reTrigger`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </OpeningSection>
        <GradientBorder
          className={GradientBorderStyles.GradientBorder}
        ></GradientBorder>
        <IntroSection
          className={`${IntroSectionStyles.IntroSection} inner-grid desktop-inner-grid vertical-padding9`}
        >
          <div className={`${IntroSectionStyles.textContainer} `}>
            <h1 className="">From Pixels to</h1>
            <div className={`${IntroSectionStyles.animatedTextContainer} `}>
              <h1 className={`${IntroSectionStyles.AnimatedText} `}>
                Possibilities
              </h1>
              <h1 className={IntroSectionStyles.AnimatedText2}>
                Possibilities
              </h1>
            </div>
            <div className={`${IntroSectionStyles.GemsContainer}`}>
              <Image
                className={`${IntroSectionStyles.gemone}`}
                src={gem1}
                alt="gem1"
                ref={gem1parallax.ref}
              />

              <Image
                className={`${IntroSectionStyles.gem1Outline}`}
                src={gem1Outline}
                alt="gem1 outline"
                ref={gem1OutlineParallax.ref}
              />
              <Image
                className={`${IntroSectionStyles.gem2}`}
                src={gem2}
                alt="gem2"
                ref={gem2parallax.ref}
              />

              <Image
                className={`${IntroSectionStyles.gem2Outline}`}
                src={gem2Outline}
                alt="gem2 outline"
                ref={gem2OutlineParallax.ref}
              />
              <Image
                className={`${IntroSectionStyles.gem3}`}
                src={gem3}
                alt="gem3"
                ref={gem3parallax.ref}
              />
              <Image
                className={`${IntroSectionStyles.gem3Outline}`}
                src={gem3Outline}
                alt="gem3 outline"
                ref={gem3OutlineParallax.ref}
              />
              <Image
                className={`${IntroSectionStyles.gem4}`}
                src={gem4}
                alt="gem4"
                ref={gem4parallax.ref}
              />

              <Image
                className={`${IntroSectionStyles.gem4Outline}`}
                src={gem4Outline}
                alt="gem4 outline"
                ref={gem4OutlineParallax.ref}
              />
            </div>
          </div>
        </IntroSection>
        <BasicTitleText className="inner-grid desktop-inner-grid4">
          <div className="title-container">
            <p className="large">
              We’re bridging the gap between complicated expensive websites,
              basic templates and messy site builders to bring you a simple
              website-as-product service so you can get an awesome expert-made
              website tailored to your vision
            </p>
          </div>
          <Button
            type="2"
            target="_blank"
            refferer="no-referrer"
            center="true"
            href="https://cal.com/sonal-mendis-awdbhl/30min"
            className="vertical-padding2"
          >
            Book a meeting now!
          </Button>
        </BasicTitleText>

        <BasicTitleText className="inner-grid desktop-inner-grid3 vertical-padding6 desktop-vertical-padding11">
          <div className="title-container">
            <h2 className="s3">Check our work out!</h2>
          </div>
        </BasicTitleText>
        <Spacer space="" />
        {/* MOCKUP SECTION
        MOCKUP SECTION
        MOCKUP SECTION
        MOCKUP SECTION */}
        <MockupSection className="vertical-padding7 no-top desktop-vertical-padding12"></MockupSection>
        {/* FOR X SECTION
        FOR X SECTION
        FOR X SECTION
        FOR X SECTION
        FOR X SECTION
        FOR X SECTION
        FOR X SECTION */}
        <BasicTitleText className="inner-grid desktop-inner-grid3">
          <div className="title-container">
            <h2 className="s3">Who is VSS-BOX for?</h2>
          </div>
        </BasicTitleText>

        <div>
          <AlternatingRow
            side="right"
            className="vertical-padding-normal hidden-parent for-x-section"
          >
            <div className="hidden hidden-offset"></div>

            <>
              <picture>
                <source
                  srcSet={`
         
                  https://ik.imagekit.io/kx65wqg4n/63880d4661c776c1905a042424f9624b.webp 2048w,
                  https://ik.imagekit.io/kx65wqg4n/63880d4661c776c1905a042424f9624b.webp?tr=w-1870 1870w,
                  https://ik.imagekit.io/kx65wqg4n/63880d4661c776c1905a042424f9624b.webp?tr=w-1660 1660w,
                  https://ik.imagekit.io/kx65wqg4n/63880d4661c776c1905a042424f9624b.webp?tr=w-1430 1430w,
                  https://ik.imagekit.io/kx65wqg4n/63880d4661c776c1905a042424f9624b.webp?tr=w-1150 1150w,
                  https://ik.imagekit.io/kx65wqg4n/63880d4661c776c1905a042424f9624b.webp?tr=w-780 780w,
        
            
                  `}
                  media={`(orientation: portrait) and ${GlobalVariables.device.tablet}`}
                  sizes="100vw"
                />
                <source
                  srcSet={`
         
    
                  https://ik.imagekit.io/kx65wqg4n/abd7d40d8bb988c63f073e65d92f80f4.webp?tr=w-1520 1520w,
                  https://ik.imagekit.io/kx65wqg4n/abd7d40d8bb988c63f073e65d92f80f4.webp?tr=w-1320 1320w,
                  https://ik.imagekit.io/kx65wqg4n/abd7d40d8bb988c63f073e65d92f80f4.webp?tr=w-1070 1070w,
                  https://ik.imagekit.io/kx65wqg4n/abd7d40d8bb988c63f073e65d92f80f4.webp?tr=w-760 760w,
                  https://ik.imagekit.io/kx65wqg4n/abd7d40d8bb988c63f073e65d92f80f4.webp?tr=w-300 300w,
        
            
                  `}
                  media="(orientation: portrait)"
                  sizes="100vw"
                />

                <source
                  srcSet={`
         
                  https://ik.imagekit.io/kx65wqg4n/34ecb2a672138099e9886f8724d26900.webp 2048w,
                  https://ik.imagekit.io/kx65wqg4n/34ecb2a672138099e9886f8724d26900.webp?tr=w-1870 1870w,
                  https://ik.imagekit.io/kx65wqg4n/34ecb2a672138099e9886f8724d26900.webp?tr=w-1680 1680w,
                  https://ik.imagekit.io/kx65wqg4n/34ecb2a672138099e9886f8724d26900.webp?tr=w-1470 1470w,
                  https://ik.imagekit.io/kx65wqg4n/34ecb2a672138099e9886f8724d26900.webp?tr=w-1210 1210w,
                  https://ik.imagekit.io/kx65wqg4n/34ecb2a672138099e9886f8724d26900.webp?tr=w-880 880w,
        
            
                  `}
                  media="(orientation: landscape)"
                  sizes="100vw"
                />
                <img
                  className="container-bg mockup-section"
                  src="https://ik.imagekit.io/kx65wqg4n/34ecb2a672138099e9886f8724d26900.webp"
                  loading={"lazy"}
                  alt="Dart"
                />
              </picture>

              <div className="inner-content-container tablet-inner-grid desktop-inner-grid">
                <div className="text-container outer-grid mockup-section">
                  <div className="inner-container">
                    <h1 className="">For Creatives</h1>

                    <p className="">
                      Show off your work in style! Whether you’re a
                      photographer, graphic designer, musician or even a
                      programmer you’ll definitely stand out amongst the crowd
                      with a professional site.
                    </p>
                  </div>
                </div>

                <div className="image-container outer-grid mockup">
                  <picture>
                    <source
                      srcSet={`
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp 2137w,
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp?tr=w-2048 2048w,
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp?tr=w-1860 1860w,
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp?tr=w-1640 1640w,
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp?tr=w-1400 1400w,
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp?tr=w-1100 1100w,
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp?tr=w-800 800w,
                        https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp?tr=w-256 256w,
                        
                        `}
                      sizes="(min-width: 1040px) calc(38.98vw - 71px), (min-width: 780px) 71.67vw, (min-width: 540px) 441px, calc(90.91vw - 32px)"
                    />
                    <img
                      src="https://ik.imagekit.io/kx65wqg4n/ae3cec60e2615c7ef796b3cb1f4b7744.webp"
                      alt="Creative Mockup"
                      loading={"lazy"}
                    />
                  </picture>
                </div>
              </div>
            </>
          </AlternatingRow>

          <AlternatingRow
            side="left"
            className="vertical-padding-normal hidden-parent for-x-section"
          >
            <div className="hidden hidden-offset"></div>

            <>
              <picture>
                <source
                  srcSet={`
           
                    https://ik.imagekit.io/kx65wqg4n/31740360ea27c7c1598fcbf5c6a8df3f.webp 2048w,
                    https://ik.imagekit.io/kx65wqg4n/31740360ea27c7c1598fcbf5c6a8df3f.webp?tr=w-1870 1870w,
                    https://ik.imagekit.io/kx65wqg4n/31740360ea27c7c1598fcbf5c6a8df3f.webp?tr=w-1660 1660w,
                    https://ik.imagekit.io/kx65wqg4n/31740360ea27c7c1598fcbf5c6a8df3f.webp?tr=w-1430 1430w,
                    https://ik.imagekit.io/kx65wqg4n/31740360ea27c7c1598fcbf5c6a8df3f.webp?tr=w-1150 1150w,
                    https://ik.imagekit.io/kx65wqg4n/31740360ea27c7c1598fcbf5c6a8df3f.webp?tr=w-780 780w,
          
              
                    `}
                  media={`(orientation: portrait) and ${GlobalVariables.device.tablet}`}
                  sizes="100vw"
                />
                <source
                  srcSet={`
           
      
                    https://ik.imagekit.io/kx65wqg4n/b08a39efce3ce730f5979ea2e59e7437.webp?tr=w-1520 1520w,
                    https://ik.imagekit.io/kx65wqg4n/b08a39efce3ce730f5979ea2e59e7437.webp?tr=w-1320 1320w,
                    https://ik.imagekit.io/kx65wqg4n/b08a39efce3ce730f5979ea2e59e7437.webp?tr=w-1070 1070w,
                    https://ik.imagekit.io/kx65wqg4n/b08a39efce3ce730f5979ea2e59e7437.webp?tr=w-760 760w,
                    https://ik.imagekit.io/kx65wqg4n/b08a39efce3ce730f5979ea2e59e7437.webp?tr=w-300 300w,
          
              
                    `}
                  media="(orientation: portrait)"
                  sizes="100vw"
                />

                <source
                  srcSet={`
           
                    https://ik.imagekit.io/kx65wqg4n/e487b709dbda430f4925bfc634521ee4.webp 2048w,
                    https://ik.imagekit.io/kx65wqg4n/e487b709dbda430f4925bfc634521ee4.webp?tr=w-1870 1870w,
                    https://ik.imagekit.io/kx65wqg4n/e487b709dbda430f4925bfc634521ee4.webp?tr=w-1680 1680w,
                    https://ik.imagekit.io/kx65wqg4n/e487b709dbda430f4925bfc634521ee4.webp?tr=w-1470 1470w,
                    https://ik.imagekit.io/kx65wqg4n/e487b709dbda430f4925bfc634521ee4.webp?tr=w-1210 1210w,
                    https://ik.imagekit.io/kx65wqg4n/e487b709dbda430f4925bfc634521ee4.webp?tr=w-880 880w,
          
              
                    `}
                  media="(orientation: landscape)"
                  sizes="100vw"
                />

                <img
                  className="container-bg mockup-section"
                  src="https://ik.imagekit.io/kx65wqg4n/e487b709dbda430f4925bfc634521ee4.webp"
                  alt="Dart"
                  loading={"lazy"}
                />
              </picture>

              <div className="inner-content-container tablet-inner-grid desktop-inner-grid">
                <div className="text-container outer-grid mockup-section">
                  <div className="inner-container">
                    <h1>For Companies</h1>

                    <p>
                      Every company needs a landing page! Not just to impress
                      customers but potential investors also. A company page is
                      a like a home for the company’s vision.
                    </p>
                  </div>
                </div>

                <div className="image-container outer-grid mockup">
                  <Parallax speed={0}>
                    <picture>
                      <source
                        srcSet={`
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp 2137w,
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp?tr=w-2048 2048w,
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp?tr=w-1860 1860w,
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp?tr=w-1640 1640w,
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp?tr=w-1400 1400w,
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp?tr=w-1100 1100w,
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp?tr=w-800 800w,
                        https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp?tr=w-256 256w,
                        
                        `}
                        sizes="(min-width: 1040px) calc(38.98vw - 71px), (min-width: 780px) 71.67vw, (min-width: 540px) 441px, calc(90.91vw - 32px)"
                      />
                      <img
                        src="https://ik.imagekit.io/kx65wqg4n/32aa3557e13183202530f8bba930445b.webp"
                        alt="Company mockup"
                        loading={"lazy"}
                      />
                    </picture>
                  </Parallax>
                </div>
              </div>
            </>
          </AlternatingRow>
        </div>
        {/* <iframe
          src="https://my.spline.design/untitled-769349b090d92e092469cbc979329017/"
          style={{ height: "50rem" }}
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe> */}
        {/* 3 STEP PROCESS SECTION */}
        {/* 3 STEP PROCESS SECTION */}
        <BasicTitleText className="outer-grid desktop-inner-grid3 vertical-padding5">
          <div className="title-container">
            <h2>Simple 3-step Process</h2>
          </div>
        </BasicTitleText>
        <ThreeColSection
          darktheme="true"
          leftalign="true"
          className="vertical-padding-normal no-top outer-grid tablet-inner-grid4 desktop-inner-grid2"
          spacing="12rem"
        >
          <div className="container hidden">
            <div className="image-container">
              <h2 className="step-number">1</h2>

              <Image src={step1Illustration} alt="Site preview" />
            </div>

            <div className="text-container">
              <h2>Design</h2>
              <p className="faded">
                We provide you with a form so you can easily give us all the
                details about the website you want us to make including basic
                details, what type of website, does it need a domain? etc.
              </p>
            </div>
            <div className="connector-line-graphic"></div>
          </div>

          <div className="container hidden desktop-delayMini">
            <div className="image-container">
              <h2 className="step-number">2</h2>

              <Image src={step2Illustration} alt="Site preview" />
            </div>

            <div className="text-container">
              <h2>Develop</h2>
              <p className="faded">
                Once your details have been provided we will immediately produce
                4-6 visual directions as a first draft so you can choose the
                direction you like the most. Once you have chosen a direction we
                will finalize the design and code it!
              </p>
            </div>
            <div className="connector-line-graphic"></div>
          </div>

          <div className="container hidden desktop-delay">
            <div className="image-container">
              <h2 className="step-number">3</h2>

              <Image
                className="step-deploy"
                src={step3Illustration}
                alt="Site preview"
                quality={100}
                sizes="100vw"
              />
            </div>

            <div className="text-container">
              <h2>Deploy</h2>
              <p className="faded">
                Once the design + code is complete we will wrap up the site for
                you with all the details, documentation, server details and
                domain info so you know exactly what’s going on<br></br>
                <br></br> We will give you the keys to the site while also
                maintaining it after project completion so it stays up and
                running smoothly.
              </p>
            </div>
          </div>
          {/* <Button href="/pricing" inline="true" size="small">
            View Full Process
          </Button> */}
        </ThreeColSection>
        {/* 
        <div
          className={`${homeStyles.mockupContainer} vertical-padding2 outer-grid desktop-inner-grid5`}
        >
          <h2>This image changes on mobile/desktop</h2>
          {isPortrait ? (
            <Image src={mockupPortrait} alt="Mockup portrait" />
          ) : (
            <Image src={mockuipLandscape} alt="Mockup landscape" />
          )}
        </div> */}
        {/* 
        CONTACT section
        CONTACT section
        CONTACT section
        CONTACT section
         */}
        <ContactForm className="inner-grid tablet-inner-grid desktop-inner-grid4 vertical-padding5" />
      </div>
    </>
  );
}
