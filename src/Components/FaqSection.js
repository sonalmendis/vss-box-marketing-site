/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import globe from "../../public/img/bitmaps/globe.webp";
import expandbutton from "../../public/img/vectors/expand-button.svg";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";
const FaqSectionStyled = styled.div`
  .inner-container {
    @media (${GlobalVariables.device.laptop}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
  }
  .image-container {
    img {
      width: 100%;
      height: auto;
    }
    margin-bottom: 2rem;
    @media (${GlobalVariables.device.laptop}) {
      width: auto;
      order: 2;
    }
  }

  .text-container {
    @media (${GlobalVariables.device.laptop}) {
      padding-top: 6rem;
    }
  }

  .accordion {
  }
  .accordion__item {
    border-bottom: 1px solid #373651;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    &:first-child {
      padding-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  .accordion__button {
    padding-right: 4rem;
    position: relative;
    background: transparent;

    p {
    }
    .expand-button {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  .accordion__panel {
    p {
      margin-top: 1rem;
    }
  }
`;

const FaqSection = (props) => {
  return (
    <FaqSectionStyled className={props.className} center={props.center}>
      <div className="inner-container tablet-inner-grid">
        <div className="image-container tablet-inner-grid">
          <Image src={globe} alt="Globe" />
        </div>
        <div className="text-container">
          <h2 className="s2">From England to Sri Lanka we’re here for you!</h2>
          <p>
            Our clients span across the globe, no matter where you are - if you
            need a website we’ve got you covered!
          </p>
          <div className="accordion-container">
            <Accordion allowZeroExpanded="true">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p className="large">Who is behind VSS-BOX?</p>
                    <Image
                      className="expand-button"
                      src={expandbutton}
                      alt="Expand button"
                    />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    VSS-BOX is duo of expert-level web developers with over 10
                    years of experience in the field.We are based in the UK and
                    Sri Lanka and have worked with clients from all over the
                    world including with major companies like Sun Microsystems,
                    Credit Suisse, and BT.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p className="large">
                      How fast can I expect project completion?
                    </p>
                    <Image
                      className="expand-button"
                      src={expandbutton}
                      alt="Expand button"
                    />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    From design to deployment we can have a website up an
                    running within 1-4 weeks depending on complexity. The
                    initial designs usually take 2-4 days.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p className="large">What if I’m not satisfied?</p>
                    <Image
                      className="expand-button"
                      src={expandbutton}
                      alt="Expand button"
                    />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <strong>
                      We offer a 100% money back guarantee if you aren't
                      satisfied with the first design draft.
                    </strong>
                    <br></br>
                    <br></br>
                    We want satisfied customers who want to work with us, if
                    you're not satisfied at the design stage we will happily
                    refund you, we know that hesitations can occur and we
                    believe that the design stage is the best time to figure out
                    if we're a good fit for you.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </FaqSectionStyled>
  );
};

export default FaqSection;
