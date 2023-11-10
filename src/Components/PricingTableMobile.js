import React, { useState } from "react";

import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import * as GlobalVariables from "@/styles/GlobalVariables";
import GreenBullet from "../../public/img/vectors/green-bullet.svg";
import YellowBullet from "../../public/img/vectors/yellow-bullet.svg";
import Redbullet from "../../public/img/vectors/red-bullet.svg";
import TriangleRight from "../../public/img/vectors/triangle-right.svg";
import PriceTableBGMobile from "../../public/img/bitmaps/pricetable-bg-mobile.jpg";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

import blueBullet from "../../public/img/vectors/blue-bullet.svg";
import brushIcon from "../../public/img/vectors/brush.svg";
import codeIcon from "../../public/img/vectors/code.svg";
import serverIcon from "../../public/img/vectors/server.svg";
import starIcon from "../../public/img/vectors/star.svg";
// carousel styles

const CarouselStyled = styled.div`
  .slider-wrapper {
    margin-bottom: 2em;
  }
  .slide {
    padding: 2.2rem;
    padding-bottom: 0;
    @media ${GlobalVariables.device.tablet} {
      padding: 0;
    }
    .outer-wrapper {
      .inner-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }
    }
    .row {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      padding: 1.1em 0.5em;
      flex-direction: column;
      @media ${GlobalVariables.device.tablet} {
        justify-content: flex-start;
        align-items: flex-start;
      }
      p {
        margin-bottom: 0;
      }
      p.amount {
      }
      p.offer {
      }
      .bullet {
        width: 1.2rem;
        height: auto;
      }
      img {
        width: 1.2em;
        margin-bottom: 0.5em;
      }
      @keyframes gradientBackgroundCarousel {
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
      @keyframes glowCarousel {
        0% {
          transform: scaleX(0.95) scaleY(0.8);
        }
        50% {
          transform: scaleX(1) scaleY(1);
        }
        100% {
          transform: scaleX(0.95) scaleY(0.8);
        }
      }
      &.first-row {
        position: relative;
        background: none;
        z-index: 2;
        background: linear-gradient(
          135deg,
          rgba(21, 33, 61, 1) 0%,
          rgba(37, 42, 89, 1) 100%
        );
        border: none;
        text-align: left;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2.2rem 2rem;
        border-radius: 1.2rem;
        p {
          margin-bottom: 1.2rem;
        }
        h2.price-title {
          font-size: 1.4rem;
        }
        h2:last-of-type {
          margin: 0;
        }
      }
      &.divider-row {
        padding-top: 2.75rem;
        border-bottom: 1px solid white;
        &:first-of-type {
          padding-top: 0;
        }
        img {
          width: 2rem;
          height: auto;
        }
      }
    }
    .pro-container {
      .first-row {
        &:before {
          content: "";
          position: absolute;
          top: -6px;
          left: -6px;
          z-index: -1;
          filter: blur(1em);
          width: calc(100% + 12px);
          height: calc(100% + 12px);

          opacity: 1;
          animation: glowCarousel 5s linear infinite,
            gradientBackgroundCarousel 8s linear infinite;

          background-image: linear-gradient(
            135deg,
            rgba(39, 126, 209, 1) 0%,
            rgb(118, 48, 218) 30%,
            rgba(145, 43, 170, 1) 60%,
            rgba(170, 43, 59, 1) 100%
          );
          background-size: 200% 200%;
          background-position: 0% 0%;
          @media ${GlobalVariables.device.tablet} {
            filter: blur(1.4em);
            width: calc(100% + 2em);
            height: calc(100% + 2em);
            top: -1em;
            left: -1em;
          }
        }
        &:after {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;

          background-size: 400% 300%;
          background-position: 0% 0%;
          animation: gradientBackgroundCarousel 8s linear infinite;
          left: 0;
          top: 0;

          background-image: linear-gradient(
            135deg,
            rgba(39, 126, 209, 1) 0%,
            rgb(118, 48, 218) 30%,
            rgba(145, 43, 170, 1) 60%,
            rgba(170, 43, 59, 1) 100%
          );
        }
      }
    }
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${GlobalVariables.device.tablet} {
      margin-bottom: 2rem;
    }
  }
  .button-container button {
    border: 1px solid white;
    background: transparent;
    color: white;
    padding: 1rem 1.2rem;
    border-radius: 0.8rem;
    transform: scale(1);
    transition: transform 0.2s ease;
    &.animate {
      transform: scale(0.9);
    }
    &.prev-button {
      img {
        margin-right: 0.6rem;
      }
    }
    &.next-button {
      img {
        margin-left: 0.6rem;
      }
    }
    p {
      margin: 0;
      display: inline-block;
    }
  }

  .prev-button {
    img {
      transform: rotate(180deg);
    }
  }
  .btn-cta-carousel {
    margin: 0 auto;
    margin-top: 3.5em;
    display: block;
  }
  @media ${GlobalVariables.device.laptop} {
    display: none;
  }
`;

const Carousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = (e) => {
    // add class "animate" to e.target
    e.target.parentNode.classList.add("animate");
    setTimeout(() => {
      e.target.parentNode.classList.remove("animate");
    }, 200);
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prev = (e) => {
    // add class "animate" to e.target
    e.target.parentNode.classList.add("animate");
    setTimeout(() => {
      e.target.parentNode.classList.remove("animate");
    }, 200);

    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <div>
      <CarouselStyled>
        <div className="button-container inner-grid">
          <button className="prev-button" onClick={prev}>
            <Image src={TriangleRight} alt="triangle left" />
            <p>Prev. Plan</p>
          </button>
          <button className="next-button" onClick={next}>
            <p>Next Plan</p> <Image src={TriangleRight} alt="triangle right" />
          </button>
        </div>

        <Carousel
          autoPlay={false}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          swipeable={false}
          showThumbs={false}
        >
          <div className="outer-wrapper pro-lite-container">
            <div className="inner-grid">
              <div className="first-row row">
                <h2 className="price-title">Basic Plan</h2>
                <p>Great if you need a basic site up fast</p>
                <h2>$299+</h2>
              </div>
              <div className="divider-row row">
                <Image src={brushIcon} alt="brush icon" />
                <h2 className="large">Design</h2>
              </div>
              <div className="row">
                <p className="amount">
                  <strong>2</strong>
                </p>
                <p className="offer">Design directions</p>
              </div>
              <div className="row">
                <p className="amount">
                  <strong>3-4</strong>
                </p>
                <p className="offer">Sections/Pages</p>
              </div>
              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Custom graphics</p>
              </div>

              <div className="divider-row row">
                <Image src={codeIcon} alt="Code icon" />
                <h2 className="large">Code</h2>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Responsive</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Basic SEO</p>
              </div>

              <div className="row">
                <p className="amount">
                  <strong>-</strong>
                </p>
                <p className="offer">CMS</p>
              </div>

              <div className="divider-row row">
                <Image src={serverIcon} alt="Server icon" />
                <h2 className="large">Server + Hosting</h2>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Free server hosting</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">SSL/HTTPS secure site</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">.com/.[anything] domain</p>
              </div>

              <div className="divider-row row">
                <Image src={starIcon} alt="Star icon" />
                <h2 className="large">Optionals/After care</h2>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Free after-care support</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Free minor content updates</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Custom email</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Analytics</p>
              </div>
            </div>
          </div>

          <div className="outer-wrapper pro-lite-container">
            <div className="inner-grid">
              <div className="first-row row">
                <h2 className="price-title">Pro Plan</h2>
                <p>Great if you need a basic site up fast</p>
                <h2>$699+</h2>
              </div>
              <div className="divider-row row">
                <Image src={brushIcon} alt="brush icon" />
                <h2 className="large">Design</h2>
              </div>
              <div className="row">
                <p className="amount">
                  <strong>4</strong>
                </p>
                <p className="offer">Design directions</p>
              </div>
              <div className="row">
                <p className="amount">
                  <strong>5-7</strong>
                </p>
                <p className="offer">Sections/Pages</p>
              </div>
              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Custom graphics</p>
              </div>

              <div className="divider-row row">
                <Image src={codeIcon} alt="Code icon" />
                <h2 className="large">Code</h2>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Responsive</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Basic SEO</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">CMS</p>
              </div>

              <div className="divider-row row">
                <Image src={serverIcon} alt="Server icon" />
                <h2 className="large">Server + Hosting</h2>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Free server hosting</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">SSL/HTTPS secure site</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">.com/.[anything] domain</p>
              </div>

              <div className="divider-row row">
                <Image src={starIcon} alt="Star icon" />
                <h2 className="large">Optionals/After care</h2>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Free after-care support</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Free minor content updates</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Custom email</p>
              </div>

              <div className="row">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
                <p className="offer">Analytics</p>
              </div>
            </div>
          </div>
        </Carousel>

        {/* <Button
          href="/pricing"
          className="btn-cta-carousel"
          inline="true"
          type="button2"
        >
          Customize your price
          <Image
            src={TriangleRight}
            className="triangle-right"
            alt="Triangle"
          />
        </Button> */}
      </CarouselStyled>
    </div>
  );
};

export default Carousel2;
