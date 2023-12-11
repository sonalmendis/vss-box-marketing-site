import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
import GreenBullet from "../../public/img/vectors/green-bullet.svg";
import YellowBullet from "../../public/img/vectors/yellow-bullet.svg";
import Redbullet from "../../public/img/vectors/red-bullet.svg";
import TriangleRight from "../../public/img/vectors/triangle-right.svg";
import PriceTableBgDesktop from "../../public/img/bitmaps/pricetable-bg-desktop.jpg";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import blueBullet from "../../public/img/vectors/blue-bullet.svg";
import brushIcon from "../../public/img/vectors/brush.svg";
import codeIcon from "../../public/img/vectors/code.svg";
import serverIcon from "../../public/img/vectors/server.svg";
import starIcon from "../../public/img/vectors/star.svg";
import Spacer from "./Spacer";
import Modal from "./Modal";
const PricingTableDesktopStyled = styled.div`
  display: none;

  @media ${GlobalVariables.device.laptop} {
    display: block;
    position: relative;
    h2 {
      margin: 0;
    }

    > .inner-container {
      position: relative;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: 1fr;

      grid-column-gap: 0px;
      grid-row-gap: 0px;
      background-image: url(${PriceTableBgDesktop});
      background-size: cover;
      background-repeat: no-repeat;
    }
    .divider-row {
      img.graphicIcon {
        width: 2rem;
        height: auto;
        margin-right: 1rem;
      }
      border-bottom: 1px solid white;
      h2 {
        font-size: 1.5rem;
      }
    }
    .row {
      position: relative;
      > .inner-container {
        display: grid;
        height: 100%;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        img.bullet {
          width: 1.1rem;
          height: auto;
        }
        .col:first-child {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          flex-direction: row;
          text-align: left;
        }

        .col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
          text-align: center;

          flex-direction: column;
          p {
          }
          span {
            display: block;
            font-size: 0.78rem;
            color: #c3cbea;
            line-height: 1.2rem;
            letter-spacing: -0.04rem;
          }
        }
        .superscript-plus {
          position: absolute;
          right: 8.8rem;
          font-weight: 700;
        }
      }

      @keyframes gradientBackgroundPricingTableDesktop {
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
      @keyframes glowPricingTableDesktop {
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

      &.first {
        > .inner-container {
          align-items: start;
          h2.price-title {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
          }
          p {
            font-size: 0.9rem;
            line-height: 1.1rem;
          }
          .col:first-child {
            background: ${GlobalVariables.colours.main};
          }
          .col {
            display: grid;
            grid-template-columns: 1fr;
            /* grid-template-rows: 1fr repeat(2, 2fr); */
            grid-template-rows: auto;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            border: none;
            text-align: left;
            padding: 2rem;
            border-radius: 1rem;
            margin-right: 1rem;
            h2 {
            }
          }
        }
        .pro-container {
          h3 {
            z-index: 4;
          }
        }
        .pro-container {
          background: linear-gradient(130deg, #1a173d 0%, #342859 100%);
        }
        .basic-plan-container {
          background: linear-gradient(130deg, #15213d 0%, #252a59 100%);
        }
        .bespoke-plan-container {
          background-image: linear-gradient(130deg, #2d1b37 0%, #512b53 100%);
        }
      }
      .basic-plan-container {
      }
      .bespoke-plan-container {
      }
    }
    .btn-cta-carousel {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    button.offer-label-container {
      background: rgb(232, 151, 77);
      background-image: linear-gradient(
        135deg,
        rgba(232, 151, 77, 1) 0%,
        rgba(217, 79, 64, 1) 100%
      );
      position: absolute;
      z-index: 2;
      border: none;
      right: -3vw;
      transform: rotate(356deg);
      top: 7rem;
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      padding: 1.2rem 1.2rem;
      cursor: default;
      &:before {
        opacity: 1;
        background-image: linear-gradient(
          135deg,
          rgba(232, 151, 77, 1) 0%,
          rgba(217, 79, 64, 1) 100%
        );
      }
      &:after {
        background-image: linear-gradient(
          135deg,
          rgba(232, 151, 77, 1) 0%,
          rgba(217, 79, 64, 1) 100%
        );
      }
    }
    .offer-striked-text {
      text-decoration: line-through;
      font-size: 0.7rem;
      margin-bottom: 0.3rem;
    }
    .disclaimer-container {
      display: flex;
      justify-content: flex-end;
      p:last-of-type {
        opacity: 0.5;
        margin-left: 1rem;
        font-size: 0.9rem;
      }
    }
  }
`;

const PricingTableDesktop = (props) => {
  const isTypeingDone = props.istypingdone;
  const priceData = props.priceData;

  const handleOpen = props.handleOpen;
  console.log(handleOpen);

  useEffect(() => {}, []);

  return (
    <PricingTableDesktopStyled className={props.className}>
      <div className="inner-container desktop-inner-grid">
        <div className="row first">
          <div className="inner-container">
            <div className="col"></div>
            <div
              className={`col basic-plan-container hiddenNoIntersection ${
                isTypeingDone && "show"
              }`}
            >
              <h2 className="price-title">
                {priceData && priceData[0].attributes.price_class}
              </h2>
              <p>{priceData && priceData[0].attributes.price_desc}</p>
              <h2 className="s3">
                {priceData && priceData[0].attributes.price}
              </h2>
            </div>
            <div
              className={`col pro-container hiddenNoIntersection ${
                isTypeingDone && "show"
              } delayMini `}
            >
              <h2 className="price-title">
                {priceData && priceData[1].attributes.price_class}
              </h2>
              <div>
                <p
                  style={{
                    cursor: "pointer",
                    fontstyle: "italic",
                    textDecoration: "underline",
                    marginTop: "0rem",
                    marginBottom: ".5rem",
                    color: "#b8d0ff",
                  }}
                  onClick={handleOpen}
                >
                  What is a content manager?
                </p>
                <p>{priceData && priceData[1].attributes.price_desc}</p>
              </div>
              <h2 className="s3">
                {priceData && priceData[1].attributes.price}
              </h2>
            </div>
            <div
              className={`col bespoke-plan-container hiddenNoIntersection delay ${
                isTypeingDone && "show"
              }`}
            >
              <h2 className="price-title">
                {priceData && priceData[2].attributes.price_class}
              </h2>
              <p>{priceData && priceData[2].attributes.price_desc}</p>
              <h2 className="s3">
                {priceData && priceData[2].attributes.price}
              </h2>
            </div>
          </div>
        </div>

        <div
          className={`divider-row  delay2 hiddenNoIntersection row ${
            isTypeingDone && "show"
          }`}
        >
          <div className={`divider-row  delay2 row `}>
            <div className="inner-container">
              <div className="col">
                <Image
                  className="graphicIcon"
                  src={brushIcon}
                  alt="brush icon"
                />
                <h2 className="">Design</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Design directions</p>
              </div>
              <div className="col">
                <p className="amount">
                  <strong>2</strong>
                </p>
              </div>
              <div className="col">
                <p className="amount">
                  <strong>4</strong>
                </p>
              </div>
              <div className="col">
                <p className="amount">
                  <strong>4-6</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Sections/Pages</p>
              </div>
              <div className="col">
                <p className="amount">
                  <strong>3-4</strong>
                </p>
              </div>
              <div className="col">
                <p className="amount">
                  <strong>5-7</strong>
                </p>
              </div>
              <div className="col">
                <p className="amount">
                  <strong>5-7+</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Custom graphics</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="divider-row row">
            <div className="inner-container">
              <div className="col">
                <Image className="graphicIcon" src={codeIcon} alt="code icon" />
                <h2 className="">Code</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Responsive</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Basic SEO</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">
                  CMS{" "}
                  <span onClick={handleOpen} style={{ cursor: "pointer" }}>
                    (what is a CMS?)
                  </span>
                </p>
              </div>
              <div className="col">
                <p className="amount">-</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>
          <div className="divider-row row">
            <div className="inner-container">
              <div className="col">
                <Image
                  className="graphicIcon"
                  src={serverIcon}
                  alt="server icon"
                />
                <h2 className="">Server + Hosting</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Free server hosting + maintenance</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">SSL/HTTPS secure site</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">.com/.[anything] domain</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="divider-row row">
            <div className="inner-container">
              <div className="col">
                <Image className="graphicIcon" src={starIcon} alt="star icon" />
                <h2 className="">Optionals/After care</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Free after-care support</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Free minor content updates</p>
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Custom email</p>
              </div>
              <div className="col">
                <p className="superscript-plus">+</p>
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="inner-container">
              <div className="col">
                <p className="offer">Analytics</p>
              </div>
              <div className="col">
                <p className="superscript-plus">+</p>
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
              <div className="col">
                <Image src={blueBullet} className="bullet" alt="green bullet" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer-container inner-grid desktop-inner-grid">
        <p style={{ fontWeight: "700" }}>+</p>
        <p>additional cost</p>
      </div>

      {/* <Button href="/pricing" className="btn-cta-carousel" type="button2">
        Customize your price
        <Image src={TriangleRight} className="triangle-right" alt="Triangle" />
      </Button> */}
    </PricingTableDesktopStyled>
  );
};

export default PricingTableDesktop;
