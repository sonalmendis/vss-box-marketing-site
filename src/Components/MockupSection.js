import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
import { Carousel } from "react-responsive-carousel";
import Button from "./Button";
import TwoColProduct from "./TwoColProduct";
import Image from "next/image";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity

//portfolio mockup images
import aaqillMockupLand from "../../public/img/bitmaps/portfolio-section/aaqill-land.webp";
import aaqillMokckupPortrait from "../../public/img/bitmaps/portfolio-section/aaqill-port.webp";
import dayaMockupLand from "../../public/img/bitmaps/portfolio-section/daya-land.webp";
import dayaMockupPortrait from "../../public/img/bitmaps/portfolio-section/daya-port.webp";
import dwellantMockupLand from "../../public/img/bitmaps/portfolio-section/dwellant-land.webp";
import dwellantMockupPort from "../../public/img/bitmaps/portfolio-section/dwellant-port.webp";
import inboxIQMockupLand from "../../public/img/bitmaps/portfolio-section/inboxiq-land.webp";
import inboxIQMokcupPortrait from "../../public/img/bitmaps/portfolio-section/inboxiq-portrait.webp";
import mynottMockLand from "../../public/img/bitmaps/portfolio-section/mynott-land.webp";
import mynottMockPort from "../../public/img/bitmaps/portfolio-section/mynott-port.webp";
import roarMockLand from "../../public/img/bitmaps/portfolio-section/roar-land.webp";
import roarMockupPortrait from "../../public/img/bitmaps/portfolio-section/roar-port.webp";
const MockupSectionStyled = styled.div`
  .carousel.carousel-slider {
    overflow: visible;
  }
  .slider-wrapper.axis-horizontal {
    overflow: visible;
  }
  .carousel .control-dots {
    bottom: -3.5rem;
    @media ${GlobalVariables.device.laptop} {
      bottom: -5.5rem;
    }
  }
`;

const MockupSection = (props) => {
  const isPortrait = useMediaQuery({
    query: `${GlobalVariables.device.portrait}`,
  });
  return (
    <MockupSectionStyled className={props.className}>
      <Carousel
        interval={10000}
        autoPlay={false}
        transitionTime={1000}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={isPortrait ? 150 : 120}
        useKeyboardArrows={true}
        showArrows={isPortrait ? false : true}
      >
        <TwoColProduct
          side="left"
          className="inner-grid tablet-inner-grid4 desktop-inner-grid"
          textbg="radial-gradient(circle,  rgb(80 68 177) 0%, rgb(22 4 45 / 80%) 23%, rgba(9,5,22,0) 37%)"
          circlebg="radial-gradient(
            circle at 75% 15%,
            #8b4beb 35%,
            #5753e4 75%,
            #5753e4 100%
          )"
        >
          <h2 className="s3 title-container">inboxIQ</h2>
          <div className="img-col">
            {isPortrait ? (
              <Image
                quality={100}
                src={inboxIQMokcupPortrait}
                alt="InboxIQ Mockup"
              />
            ) : (
              <Image
                quality={100}
                src={inboxIQMockupLand}
                alt="InboxIQ Mockup"
              />
            )}

            {/* <Parallax speed={-8} className="circles-container"> */}
            <div className="sphere sphere1"></div>

            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>
            {/* </Parallax> */}
          </div>

          <div className="text-col">
            {/* <Parallax speed={20}> */}
            <div className="text-col-inner-container ">
              <div className="textbg-container">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      id="b1"
                      gradientTransform="rotate(155 .5 .5)"
                    >
                      <stop offset="0%" stop-color="#2b3457"></stop>
                      <stop offset="100%" stop-color="#090516"></stop>
                    </linearGradient>
                    <linearGradient
                      id="b2"
                      gradientTransform="rotate(155 .5 .5)"
                    >
                      <stop offset="0%" stop-color="#090516"></stop>
                      <stop offset="100%" stop-color="#2b3457"></stop>
                    </linearGradient>
                  </defs>
                  <path stroke="none" stroke-width="0" fill="url(#b2)">
                    <animate
                      attributeName="d"
                      dur="20s"
                      repeatCount="indefinite"
                      values="
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    M81,67.5Q85,85,67.5,83.5Q50,82,36.5,79.5Q23,77,13,63.5Q3,50,10.5,34Q18,18,34,21Q50,24,60.5,26.5Q71,29,74,39.5Q77,50,81,67.5Z;
                    M80,65Q80,80,65,83.5Q50,87,34,84.5Q18,82,16.5,66Q15,50,20.5,38Q26,26,38,16Q50,6,62.5,15.5Q75,25,77.5,37.5Q80,50,80,65Z;
                    M88.5,66Q82,82,66,86Q50,90,34,86Q18,82,18,66Q18,50,22,38Q26,26,38,21.5Q50,17,67,16.5Q84,16,89.5,33Q95,50,88.5,66Z;
                    M79.5,62Q74,74,62,85Q50,96,36.5,86.5Q23,77,13.5,63.5Q4,50,16,39Q28,28,39,23Q50,18,63,21Q76,24,80.5,37Q85,50,79.5,62Z;
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
              <div className="text-container">
                <h2 className="s3 underline title-container-desktop">
                  inboxIQ
                </h2>
                <p>
                  InboxIQ is a startup aiming to provide analytics to businesses
                  in regards to their emails. We setup their marketing site and
                  made the accompanying graphics in 2021.
                </p>
              </div>

              <Button type="outline" href="https://getinboxiq.com">
                Visit Site
              </Button>
            </div>
            {/* </Parallax> */}
          </div>
        </TwoColProduct>

        {/* DWELLANT
DWELLANT
DWELLANT
DWELLANT */}

        <TwoColProduct
          side="right"
          className="inner-grid tablet-inner-grid4 desktop-inner-grid "
          circlebg="radial-gradient(   circle at 75% 15%,   #eb9f4b 35%,   #e47e53 75%,   #ff7a00 100%   )"
        >
          <h2 className="s3 title-container">Dwellant</h2>
          <div className="img-col">
            {isPortrait ? (
              <Image
                quality={100}
                src={dwellantMockupPort}
                alt="InboxIQ Mockup"
              />
            ) : (
              <Image
                quality={100}
                src={dwellantMockupLand}
                alt="Dwellant Mockup"
              />
            )}

            {/* <Parallax speed={-8} className="circles-container"> */}

            <div className="sphere sphere1"></div>

            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>

            {/* </Parallax> */}
          </div>

          <div className="text-col">
            {/* <Parallax speed={20}> */}
            <div className="text-col-inner-container ">
              <div className="textbg-container">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="url(#b1)">
                    <animate
                      attributeName="d"
                      dur="20s"
                      repeatCount="indefinite"
                      values="
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    M81,67.5Q85,85,67.5,83.5Q50,82,36.5,79.5Q23,77,13,63.5Q3,50,10.5,34Q18,18,34,21Q50,24,60.5,26.5Q71,29,74,39.5Q77,50,81,67.5Z;
                    M80,65Q80,80,65,83.5Q50,87,34,84.5Q18,82,16.5,66Q15,50,20.5,38Q26,26,38,16Q50,6,62.5,15.5Q75,25,77.5,37.5Q80,50,80,65Z;
                    M88.5,66Q82,82,66,86Q50,90,34,86Q18,82,18,66Q18,50,22,38Q26,26,38,21.5Q50,17,67,16.5Q84,16,89.5,33Q95,50,88.5,66Z;
                    M79.5,62Q74,74,62,85Q50,96,36.5,86.5Q23,77,13.5,63.5Q4,50,16,39Q28,28,39,23Q50,18,63,21Q76,24,80.5,37Q85,50,79.5,62Z;
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
              <div className="text-container">
                <h2 className="s3 underline title-container-desktop">
                  Dwellant
                </h2>
                <p>
                  Dwellant is a property management software based in the UK. We
                  were tasked with re-creating their website in 2019 and have
                  since worked on various side-projects with them
                </p>
              </div>

              <Button type="outline" href="https://getinboxiq.com">
                Visit Site
              </Button>
            </div>
            {/* </Parallax> */}
          </div>
        </TwoColProduct>

        {/* 
        DAYA
             DAYA
                  DAYA
                       DAYA
                            DAYA
        */}

        <TwoColProduct
          side="left"
          className="inner-grid tablet-inner-grid4 desktop-inner-grid "
          circlebg="radial-gradient(   circle at 75% 15%,   #8cbc63 35%,   #3c731c 75%,   #1b2906 100%   )"
        >
          <h2 className="s3 title-container">Daya</h2>
          <div className="img-col">
            {isPortrait ? (
              <Image quality={100} src={dayaMockupPortrait} alt="Daya Mockup" />
            ) : (
              <Image quality={100} src={dayaMockupLand} alt="Daya Mockup" />
            )}

            {/* <Parallax speed={-8} className="circles-container"> */}

            <div className="sphere sphere1"></div>

            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>

            {/* </Parallax> */}
          </div>

          <div className="text-col">
            {/* <Parallax speed={20}> */}
            <div className="text-col-inner-container ">
              <div className="textbg-container">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="url(#b1)">
                    <animate
                      attributeName="d"
                      dur="20s"
                      repeatCount="indefinite"
                      values="
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    M81,67.5Q85,85,67.5,83.5Q50,82,36.5,79.5Q23,77,13,63.5Q3,50,10.5,34Q18,18,34,21Q50,24,60.5,26.5Q71,29,74,39.5Q77,50,81,67.5Z;
                    M80,65Q80,80,65,83.5Q50,87,34,84.5Q18,82,16.5,66Q15,50,20.5,38Q26,26,38,16Q50,6,62.5,15.5Q75,25,77.5,37.5Q80,50,80,65Z;
                    M88.5,66Q82,82,66,86Q50,90,34,86Q18,82,18,66Q18,50,22,38Q26,26,38,21.5Q50,17,67,16.5Q84,16,89.5,33Q95,50,88.5,66Z;
                    M79.5,62Q74,74,62,85Q50,96,36.5,86.5Q23,77,13.5,63.5Q4,50,16,39Q28,28,39,23Q50,18,63,21Q76,24,80.5,37Q85,50,79.5,62Z;
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
              <div className="text-container">
                <h2 className="s3 underline title-container-desktop">Daya</h2>
                <p>
                  Daya Group of Companies is the conglomerate managed by Daya
                  Gamage. We were tasked with re-creating their website in 2018
                  to give a fresh modern look.
                </p>
              </div>

              <Button type="outline" href="https://getinboxiq.com">
                Visit Site
              </Button>
            </div>
            {/* </Parallax> */}
          </div>
        </TwoColProduct>

        {/* 
ROAR
  ROAR
    ROAR
      ROAR
        */}

        <TwoColProduct
          side="right"
          className="inner-grid tablet-inner-grid4 desktop-inner-grid "
          circlebg="radial-gradient(   circle at 75% 15%,   #ffffff 35%,   #95a3a2 75%,   #000000 100%   )"
        >
          <h2 className="s3 title-container">Roar</h2>
          <div className="img-col">
            {isPortrait ? (
              <Image quality={100} src={roarMockupPortrait} alt="Roar Mockup" />
            ) : (
              <Image quality={100} src={roarMockLand} alt="Roar Mockup" />
            )}

            {/* <Parallax speed={-8} className="circles-container"> */}

            <div className="sphere sphere1"></div>

            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>

            {/* </Parallax> */}
          </div>

          <div className="text-col">
            {/* <Parallax speed={20}> */}
            <div className="text-col-inner-container ">
              <div className="textbg-container">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="url(#b1)">
                    <animate
                      attributeName="d"
                      dur="20s"
                      repeatCount="indefinite"
                      values="
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    M81,67.5Q85,85,67.5,83.5Q50,82,36.5,79.5Q23,77,13,63.5Q3,50,10.5,34Q18,18,34,21Q50,24,60.5,26.5Q71,29,74,39.5Q77,50,81,67.5Z;
                    M80,65Q80,80,65,83.5Q50,87,34,84.5Q18,82,16.5,66Q15,50,20.5,38Q26,26,38,16Q50,6,62.5,15.5Q75,25,77.5,37.5Q80,50,80,65Z;
                    M88.5,66Q82,82,66,86Q50,90,34,86Q18,82,18,66Q18,50,22,38Q26,26,38,21.5Q50,17,67,16.5Q84,16,89.5,33Q95,50,88.5,66Z;
                    M79.5,62Q74,74,62,85Q50,96,36.5,86.5Q23,77,13.5,63.5Q4,50,16,39Q28,28,39,23Q50,18,63,21Q76,24,80.5,37Q85,50,79.5,62Z;
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
              <div className="text-container">
                <h2 className="s3 underline title-container-desktop">
                  roar.media
                </h2>
                <p>
                  Roar Media is one of the most popular multi-lingual news sites
                  in South Asia, reaching the top #100 websites in Bangladesh.
                  We were the tech leads from 2012-2016 and worked on numerous
                  projects.
                </p>
              </div>

              <Button type="outline" href="https://getinboxiq.com">
                Visit Site
              </Button>
            </div>
            {/* </Parallax> */}
          </div>
        </TwoColProduct>
        {/* 
MYNOTT
  MYNOTT
    MYNOTT
      MYNOTT
        */}

        <TwoColProduct
          side="left"
          className="inner-grid tablet-inner-grid4 desktop-inner-grid "
          circlebg="radial-gradient(   circle at 75% 15%,   #364e82 35%,   #0f1931 75%,   #0e092b 100%   )"
        >
          <h2 className="s3 title-container">Mynott Bowers</h2>
          <div className="img-col">
            {isPortrait ? (
              <Image quality={100} src={mynottMockPort} alt="Mynott Mockup" />
            ) : (
              <Image quality={100} src={mynottMockLand} alt="Mynott Mockup" />
            )}

            {/* <Parallax speed={-8} className="circles-container"> */}

            <div className="sphere sphere1"></div>

            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>

            {/* </Parallax> */}
          </div>

          <div className="text-col">
            {/* <Parallax speed={20}> */}
            <div className="text-col-inner-container ">
              <div className="textbg-container">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="url(#b1)">
                    <animate
                      attributeName="d"
                      dur="20s"
                      repeatCount="indefinite"
                      values="
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    M81,67.5Q85,85,67.5,83.5Q50,82,36.5,79.5Q23,77,13,63.5Q3,50,10.5,34Q18,18,34,21Q50,24,60.5,26.5Q71,29,74,39.5Q77,50,81,67.5Z;
                    M80,65Q80,80,65,83.5Q50,87,34,84.5Q18,82,16.5,66Q15,50,20.5,38Q26,26,38,16Q50,6,62.5,15.5Q75,25,77.5,37.5Q80,50,80,65Z;
                    M88.5,66Q82,82,66,86Q50,90,34,86Q18,82,18,66Q18,50,22,38Q26,26,38,21.5Q50,17,67,16.5Q84,16,89.5,33Q95,50,88.5,66Z;
                    M79.5,62Q74,74,62,85Q50,96,36.5,86.5Q23,77,13.5,63.5Q4,50,16,39Q28,28,39,23Q50,18,63,21Q76,24,80.5,37Q85,50,79.5,62Z;
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
              <div className="text-container">
                <h2 className="s3 underline title-container-desktop">
                  Mynott Bowers
                </h2>
                <p>
                  Mynott Bowers is a quantity surveying firm based in the UK,
                  Australia and Sri Lanka. We were tasked with re-creating their
                  website in 2019.
                </p>
              </div>

              <Button type="outline" href="https://getinboxiq.com">
                Visit Site
              </Button>
            </div>
            {/* </Parallax> */}
          </div>
        </TwoColProduct>
        {/* 
AAQILL
  AAQILL
    AAQILL
      AAQILL
        */}

        <TwoColProduct
          side="right"
          className="inner-grid tablet-inner-grid4 desktop-inner-grid "
          circlebg="radial-gradient(   circle at 75% 15%,   #fffaa3 35%,   #e4a153 75%,   #8b4b11 100%   )"
        >
          <h2 className="s3 title-container">Aaqill Photography</h2>
          <div className="img-col">
            {isPortrait ? (
              <Image
                quality={100}
                src={aaqillMokckupPortrait}
                alt="Aaqill Mockup"
              />
            ) : (
              <Image quality={100} src={aaqillMockupLand} alt="Aaqill Mockup" />
            )}

            {/* <Parallax speed={-8} className="circles-container"> */}

            <div className="sphere sphere1"></div>

            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>

            {/* </Parallax> */}
          </div>

          <div className="text-col">
            {/* <Parallax speed={20}> */}
            <div className="text-col-inner-container ">
              <div className="textbg-container">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="url(#b1)">
                    <animate
                      attributeName="d"
                      dur="20s"
                      repeatCount="indefinite"
                      values="
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    M81,67.5Q85,85,67.5,83.5Q50,82,36.5,79.5Q23,77,13,63.5Q3,50,10.5,34Q18,18,34,21Q50,24,60.5,26.5Q71,29,74,39.5Q77,50,81,67.5Z;
                    M80,65Q80,80,65,83.5Q50,87,34,84.5Q18,82,16.5,66Q15,50,20.5,38Q26,26,38,16Q50,6,62.5,15.5Q75,25,77.5,37.5Q80,50,80,65Z;
                    M88.5,66Q82,82,66,86Q50,90,34,86Q18,82,18,66Q18,50,22,38Q26,26,38,21.5Q50,17,67,16.5Q84,16,89.5,33Q95,50,88.5,66Z;
                    M79.5,62Q74,74,62,85Q50,96,36.5,86.5Q23,77,13.5,63.5Q4,50,16,39Q28,28,39,23Q50,18,63,21Q76,24,80.5,37Q85,50,79.5,62Z;
                    M77.5,59.5Q69,69,59.5,79.5Q50,90,38.5,81.5Q27,73,21,61.5Q15,50,21.5,39Q28,28,39,17.5Q50,7,67.5,11Q85,15,85.5,32.5Q86,50,77.5,59.5Z;
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
              <div className="text-container">
                <h2 className="s3 underline title-container-desktop">
                  Aaqill Photography
                </h2>
                <p>
                  Mynott Bowers is a quantity surveying firm based in the UK,
                  Australia and Sri Lanka. We were tasked with re-creating their
                  website in 2019.
                </p>
              </div>

              <Button type="outline" href="https://getinboxiq.com">
                Visit Site
              </Button>
            </div>
            {/* </Parallax> */}
          </div>
        </TwoColProduct>
      </Carousel>
    </MockupSectionStyled>
  );
};

export default MockupSection;
