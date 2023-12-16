/* eslint-disable react/no-unescaped-entities */
import * as GlobalVariables from "@/styles/GlobalVariables";
import homeStyles from "@/styles/index.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Parallax, useParallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

// IMAGES
import backgroundPort from "../../public/img/background-portrait.png";
import background from "../../public/img/background4.png";
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

//3 step
import step3Illustration from "../../public/img/vectors/step-deploy.png";
import step1Illustration from "../../public/img/vectors/step-design.svg";
import step2Illustration from "../../public/img/vectors/step-develop.svg";
import wiseIcon from "../../public/img/vectors/wise-icon.svg";
import slackIcon from "../../public/img/vectors/slack-icon.svg";

//for x section
import creativesBGMobile from "../../public/img/bitmaps/creatives-bg-mobile.webp";
import creativesBGDesktop from "../../public/img/bitmaps/creatives-bg-desktop.webp";
import creativesBGTablet from "../../public/img/bitmaps/creatives-bg-tablet.webp";
import creativesMockupPort from "../../public/img/bitmaps/creatives-mockup-port.webp";
import companiesBGMobile from "../../public/img/bitmaps/companies-bg-mobile.webp";
import companiesBGDesktop from "../../public/img/bitmaps/companies-bg-desktop.webp";
import companiesBGTablet from "../../public/img/bitmaps/companies-bg-tablet.webp";
import companiesMockupPort from "../../public/img/bitmaps/companies-mockup-port.webp";

//tools
import adobeIcon from "../../public/img/tools-icons/adobe.svg";
import digitaloceanIcon from "../../public/img/tools-icons/digitalocean.svg";
import nextjsIcon from "../../public/img/tools-icons/nextjs.svg";
import reactIcon from "../../public/img/tools-icons/react.svg";
import strapiIcon from "../../public/img/tools-icons/strapi.svg";

//COMPONENTS
import AlternatingRow from "@/Components/AlternatingRow";
import Button from "@/Components/Button";
import ContactForm from "@/Components/ContactForm";
import FaqSection from "@/Components/FaqSection";
import GradientBorder from "@/Components/GradientBorder";
import GradientBorderStyles from "@/Components/GradientBorder.module.scss";
import IntroSection from "@/Components/IntroSection";
import IntroSectionStyles from "@/Components/IntroSection.module.scss";
import Logobar from "@/Components/Logobar";
import MockupSection from "@/Components/MockupSection";
import OpeningSection from "@/Components/OpeningSection";
import OpeningSectionStyles from "@/Components/OpeningSection.module.scss";
import ScrollDownArrow from "@/Components/ScrollDownArrow2";
import Spacer from "@/Components/Spacer";
import ThreeColSection from "@/Components/ThreeColSection";
import BasicTitleText from "../Components/BasicTitleText";
import Modal from "@/Components/Modal";

// import { getServerSideProps } from "next/dist/build/templates/pages";

export default function Home(props) {
  const [priceData, setPriceData] = useState(null);
  const [isCMSModalOpen, setIsCMSModalOpen] = useState(false);
  const [hasIntroImageLoaded, sethasIntroImageLoaded] = useState(false);

  const handleOpen = () => {
    setIsCMSModalOpen(true);
  };
  const handleClose = () => setIsCMSModalOpen(false);

  const disableOpeningAnimation =
    process.env.NEXT_PUBLIC_INTRO_ANIMATION_ENABLED === "true" ? false : true; // For development purposes
  const sethasAnimationPlayedOnce = props.sethasAnimationPlayedOnce;
  if (disableOpeningAnimation == true) {
    sethasAnimationPlayedOnce(true);
  }
  const hasAnimationPlayedOnce = disableOpeningAnimation
    ? true
    : props.hasAnimationPlayedOnce;
  const isPortrait = useMediaQuery({
    query: `${GlobalVariables.device.portrait}`,
  });

  const isTablet = useMediaQuery({
    query: `${GlobalVariables.device.tablet}`,
  });

  const isLaptop = useMediaQuery({
    query: `${GlobalVariables.device.laptop}`,
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
    speed: 22,
    startScroll: 0,
    endScroll: 1700,
  });
  const gem2parallax = useParallax({
    speed: 18,
    startScroll: 0,
    endScroll: 1500,
  });
  const gem3parallax = useParallax({
    speed: 14,
    startScroll: 0,
    endScroll: 1500,
  });
  const gem4parallax = useParallax({
    speed: 35,
    startScroll: -300,
    endScroll: 1500,
  });
  // const gem4bparallax = useParallax({
  //   speed: 38,
  // });

  const gem1OutlineParallax = useParallax({
    speed: 18,
    startScroll: 0,
    endScroll: 1700,
  });
  const gem2OutlineParallax = useParallax({
    speed: 20,
    startScroll: 0,
    endScroll: 1500,
  });
  const gem3OutlineParallax = useParallax({
    speed: 15,
    startScroll: 0,
    endScroll: 1500,
  });
  const gem4OutlineParallax = useParallax({
    speed: 42,
    startScroll: -300,
    endScroll: 1500,
  });

  useEffect(() => {
    // Handle the animation pause on tab change - INITIAL PAGE LOAD
    if (document.visibilityState === "visible") {
      document.querySelector("html").classList.remove("pause-animation");
    } else {
      document.querySelector("html").classList.add("pause-animation");
    }

    // Handle the animation pause on tab change - TAB CHANGE EVENT LISTENER
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        document.querySelector("html").classList.remove("pause-animation");
      } else {
        document.querySelector("html").classList.add("pause-animation");
      }
    });

    // Handle the intro animation and remove the event listener once the animation is done
    // Once animation is done, the hasAnimationPlayedOnce becomes true and the animation is frozen at the last frame if the user navigates between pages
    // Also makes the page scrollable once complete

    // HTML tag position is "fixed" here that way the effets on the tag are only limited to the animation's scope
    // (otherwise the HTML tag will be perma-fixed on other pages if you use CSS)
    if (!hasAnimationPlayedOnce) {
      const htmlTag = document.querySelector("html");
      htmlTag.style.overflowY = "scroll";
      htmlTag.style.position = "fixed";
      const introAnimationContainer = document.querySelector(
        `.${OpeningSectionStyles.OpeningSectionWrapper}`
      );

      // Handle the animation end event (i.e make HTML scrollable and prevent the animation replaying on page navigation)
      const handleAnimationEnd = (event) => {
        console.log(event.animationName);
        // If the last animation has finished (in this case the cube fade in) then set sethasAnimationPlayedOnce and remove the event listener
        if (event.animationName.includes("cubeIntro")) {
          htmlTag.style.overflowY = "auto";
          htmlTag.style.position = "static";
          sethasAnimationPlayedOnce(true);
          introAnimationContainer.removeEventListener(
            "animationend",
            handleAnimationEnd
          );
        }
      };

      // Check if the <html> tag has overflowY set to scroll after 8 seconds (this is failsafe to make sure its scrollable after 8s)
      setTimeout(() => {
        if (htmlTag.style.position === "fixed") {
          htmlTag.style.overflowY = "auto";
          htmlTag.style.position = "static";
        }
      }, 8000);

      // Add the event listener to the intro animation container
      introAnimationContainer.addEventListener(
        "animationend",
        handleAnimationEnd
      );
    }

    // Load price data:
    fetch(
      "https://seashell-app-23kzq.ondigitalocean.app/api/pricings?sort=Rank&populate=*"
    )
      .then((res) => res.json())
      .then((data) => {
        setPriceData(data.data);
      });

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
          } ${
            hasIntroImageLoaded && OpeningSectionStyles.triggerScaleAnimation
          }`}
        >
          <div className={OpeningSectionStyles.backgroundContainer}>
            {isPortrait & !isTablet ? (
              <Image
                src={backgroundPort}
                className={OpeningSectionStyles.background}
                alt="background"
                sizes="100vw"
                quality={100}
                priority
                onLoadingComplete={() => {
                  sethasIntroImageLoaded(true);
                }}
              />
            ) : (
              <Image
                src={background}
                className={OpeningSectionStyles.background}
                alt="background"
                sizes="100vw"
                quality={100}
                priority
                onLoadingComplete={() => {
                  sethasIntroImageLoaded(true);
                }}
              />
            )}

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
                      {/* <h3
                        className={`${
                          hasAnimationPlayedOnce && "freezeAtLastFrame"
                        }`}
                      >
                        We Create
                      </h3> */}
                      <h1
                        className={`${
                          hasAnimationPlayedOnce && "freezeAtLastFrame"
                        }`}
                      >
                        We Create
                        <TypeAnimation
                          sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Beautiful",
                            1200, // wait 1s before replacing "Mice" with "Hamsters"
                            "Functional",
                            1200,
                            "Modern",
                            1200,
                            "Responsive",
                            1200,
                          ]}
                          wrapper="span"
                          speed={75}
                          style={{
                            display: "block",
                            marginLeft: "0.5rem",
                          }}
                          repeat={Infinity}
                        ></TypeAnimation>
                        Websites
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
                sizes="(orientation:landscape) 7vw, 10vw"
              />

              <Image
                className={`${IntroSectionStyles.gem1Outline}`}
                src={gem1Outline}
                alt="gem1 outline"
                ref={gem1OutlineParallax.ref}
                sizes="(orientation:landscape) 7vw, 10vw"
              />
              <Image
                className={`${IntroSectionStyles.gem2}`}
                src={gem2}
                alt="gem2"
                ref={gem2parallax.ref}
                sizes="(orientation:landscape) 7vw, 10vw"
              />

              <Image
                className={`${IntroSectionStyles.gem2Outline}`}
                src={gem2Outline}
                alt="gem2 outline"
                ref={gem2OutlineParallax.ref}
                sizes="(orientation:landscape) 7vw, 10vw"
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
                sizes="(orientation:landscape) 10vw, 15vw"
              />

              <Image
                className={`${IntroSectionStyles.gem4Outline}`}
                src={gem4Outline}
                alt="gem4 outline"
                ref={gem4OutlineParallax.ref}
                sizes="(orientation:landscape) 10vw, 15vw"
              />
            </div>
          </div>
        </IntroSection>

        <BasicTitleText className="inner-grid desktop-inner-grid4">
          <div className="title-container">
            <p className="large">
              No more basic templates or messy site builders! We craft beautiful
              custom websites tailored to your vision. From pixels to
              possibilities, we're here to provide beautiful and highly
              functional websites.
            </p>
          </div>
          <Button
            type="2"
            target="_blank"
            refferer="no-referrer"
            center={isTablet ? true : false}
            href="https://zcal.co/i/QfFFKLqF"
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
        {/* <BasicTitleText className="inner-grid desktop-inner-grid3">
          <div className="title-container">
            <h2 className="s3">Who is VSS-BOX for?</h2>
          </div>
        </BasicTitleText> */}

        <div>
          <AlternatingRow
            side="right"
            className="vertical-padding-normal for-x-section"
          >
            <div className=""></div>

            <>
              <Image
                className="container-bg mockup-section"
                src={
                  (isPortrait & !isTablet && creativesBGMobile) ||
                  (isPortrait & isTablet && creativesBGTablet) ||
                  (isLaptop && creativesBGDesktop)
                }
                alt="Creatives BG"
                quality={100}
                sizes="100vw"
              />

              <div className="inner-content-container tablet-inner-grid desktop-inner-grid">
                <div className="text-container inner-grid mockup-section">
                  <div className="inner-container">
                    <h1 className="">For Creatives</h1>

                    <p className="faded">
                      Show off your work in style! Whether you’re a
                      photographer, graphic designer, musician or even a
                      programmer you’ll definitely stand out amongst the crowd
                      with a professional portfolio.
                    </p>
                  </div>
                </div>

                <div className="image-container outer-grid mockup">
                  <Image
                    src={creativesMockupPort}
                    alt="Creatives Mockup"
                    quality={85}
                    sizes="(orientation:landscape) 35vw, 85vw"
                  />
                </div>
              </div>
            </>
          </AlternatingRow>

          <AlternatingRow
            side="left"
            className="vertical-padding-normal for-x-section"
          >
            <div className=""></div>

            <>
              <Image
                className="container-bg mockup-section"
                src={
                  (isPortrait & !isTablet && companiesBGMobile) ||
                  (isPortrait & isTablet && companiesBGTablet) ||
                  (isLaptop && companiesBGDesktop)
                }
                alt="Creatives BG"
                quality={100}
                sizes="100vw"
              />

              <div className="inner-content-container tablet-inner-grid desktop-inner-grid">
                <div className="text-container inner-grid mockup-section">
                  <div className="inner-container">
                    <h1>For Companies</h1>

                    <p className="faded">
                      Every company needs a landing page! Not just to impress
                      customers but potential investors also. A company page is
                      a like a home for the company’s vision.
                    </p>
                  </div>
                </div>

                <div className="image-container outer-grid mockup">
                  <Parallax speed={0}>
                    <Image
                      src={companiesMockupPort}
                      alt="Companies Mockup"
                      quality={95}
                      sizes="(orientation:landscape) 35vw, 85vw"
                    />
                  </Parallax>
                </div>
              </div>
            </>
          </AlternatingRow>
        </div>

        <Spacer space="4rem" />

        {/* 3 STEP PROCESS SECTION */}
        {/* 3 STEP PROCESS SECTION */}
        <BasicTitleText
          center="true"
          className="inner-grid desktop-inner-grid vertical-padding2"
        >
          <div className="title-container">
            <h3>How it works</h3>
            <h2>Simple 3-step Process</h2>
          </div>
        </BasicTitleText>
        <ThreeColSection
          darktheme="true"
          leftalign="false"
          className="vertical-padding-normal no-top inner-grid2 tablet-inner-grid4 desktop-inner-grid2"
          spacing="12rem"
        >
          <div className="container hidden">
            <div className="image-container">
              <h2 className="step-number">1</h2>

              <Image src={step1Illustration} alt="Site preview" />
            </div>

            <div className="text-container">
              <h2>
                <span className="step-number-inline">1. </span>Design
              </h2>
              <p className="faded">
                First we collect all the info about your site and then provide
                you with design directions to choose from
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
              <h2>
                <span className="step-number-inline">2. </span>Develop
              </h2>
              <p className="faded">
                Once a design direction has been chosen we will go ahead and
                code it in!
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
              <h2>
                <span className="step-number-inline">3. </span>Deploy
              </h2>
              <p className="faded">
                Once coding is finalized we will deploy the site live while
                maintaining it on our server
              </p>
            </div>
          </div>
          {/* <Button href="/pricing" inline="true" size="small">
            View Full Process
          </Button> */}
        </ThreeColSection>
        <BasicTitleText
          border="true"
          center="true"
          className="process-text outer-grid vertical-padding2 inner-grid desktop-inner-grid3"
        >
          <div className="title-container">
            <Image className="icon" src={wiseIcon} alt="Wise Icon" />
            <p className="small">Payments done securely through Wise</p>
            <Image className="icon" src={slackIcon} alt="Slack Icon" />
            <p className="small">Communication through email + Slack</p>
          </div>
        </BasicTitleText>

        <BasicTitleText center="true" className="outer-grid vertical-padding2">
          <div className="title-container">
            <h3 className="vertical-padding no-top">Tools we use</h3>
          </div>
        </BasicTitleText>

        <Logobar
          landscape="tablet"
          className="outer-grid tablet-inner-grid2 desktop-inner-grid4"
        >
          <div className="inner-container">
            <div className="logo-container">
              <Image src={adobeIcon} alt="Adobe icon" />
              <h3>Adobe</h3>
            </div>
            <div className="logo-container">
              <Image src={reactIcon} alt="React icon" />
              <h3>React</h3>
            </div>
            <div className="logo-container">
              <Image src={nextjsIcon} alt="Nextjs icon" />
              <h3>Nextjs</h3>
            </div>
            <div className="logo-container">
              <Image src={strapiIcon} alt="Strapi icon" />
              <h3>Strapi</h3>
            </div>
            <div className="logo-container">
              <Image src={digitaloceanIcon} alt="DigitalOcean icon" />
              <h3>
                Digital<br></br>Ocean
              </h3>
            </div>
          </div>
        </Logobar>

        <BasicTitleText center="true" className="outer-grid vertical-padding2">
          <div className="title-container">
            <h3 className="vertical-padding no-top">Pricing</h3>
          </div>
        </BasicTitleText>

        <Logobar
          landscape="laptop"
          className="outer-grid tablet-inner-grid2 desktop-inner-grid3"
        >
          <div className="inner-container">
            <div className="logo-container">
              <div className="price-container basic">
                <h2 className="price-title">
                  {priceData && priceData[0].attributes.price_class}
                </h2>
                <p>{priceData && priceData[0].attributes.price_desc}</p>
                <h2 className="s3">
                  {priceData && priceData[0].attributes.price}
                </h2>
              </div>
            </div>
            <div className="logo-container">
              <div className="price-container pro">
                <h2 className="price-title">
                  {priceData && priceData[1].attributes.price_class}
                </h2>
                <p
                  style={{
                    cursor: "pointer",
                    fontstyle: "italic",
                    textDecoration: "underline",
                    marginTop: "0.5rem",
                    marginBottom: ".5rem",
                    color: "#b8d0ff",
                  }}
                  onClick={handleOpen}
                >
                  What is a CMS?
                </p>
                <p> {priceData && priceData[1].attributes.price_desc}</p>
                <h2 className="s3">
                  {priceData && priceData[1].attributes.price}
                </h2>
              </div>
            </div>
            <div className="logo-container">
              <div className="price-container bespoke">
                <h2 className="price-title">
                  {priceData && priceData[2].attributes.price_class}
                </h2>
                <p> {priceData && priceData[2].attributes.price_desc}</p>
                <h2 className="s3">
                  {priceData && priceData[2].attributes.price}
                </h2>
              </div>
            </div>
          </div>
        </Logobar>
        <BasicTitleText
          border="true"
          center="true"
          className="outer-grid vertical-padding2 desktop-inner-grid3"
          style={{ marginBottom: "2rem" }}
        >
          <div className="title-container">
            <p className="small">
              All packages include free server hosting, .com domain, custom
              graphics, SSL security and basic SEO{" "}
            </p>
          </div>
        </BasicTitleText>
        <Button center="true" href="/pricing">
          View full pricing
        </Button>
        <Spacer space="5rem" />
        <FaqSection className="inner-grid"></FaqSection>
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
        <ContactForm
          noform="true"
          className="inner-grid tablet-inner-grid desktop-inner-grid4 vertical-padding5 no-bottom"
        />

        {/* MODALS
MODALS
MODALS
MODALS */}
        <Modal isOpen={isCMSModalOpen} onClose={handleClose}>
          <h2 className="s1">What is a CMS?</h2>
          <p className="small">
            A CMS, (short for <strong>Content Management System</strong>), is a
            tool that helps you easily create, edit, and manage content on your
            website without needing any assistance from us; for instance, it
            enables you to update articles, images, or product information on
            your website without having to know how to code.
            <br></br>
            <br></br>
            We use{" "}
            <strong>
              <a
                href="https://strapi.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  color: GlobalVariables.colours.lightpurple,
                }}
              >
                Strapi
              </a>
            </strong>{" "}
            as a CMS for our websites. Wordpress is also another popular CMS,
            however we prefer Strapi as it is more modern and handles React
            websites better.
          </p>
        </Modal>
      </div>
    </>
  );
}
