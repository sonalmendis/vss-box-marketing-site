import { useEffect, useState } from "react";
import * as GlobalVariables from "@/styles/GlobalVariables";
import homeStyles from "@/styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity

// IMAGES
import background from "../../public/img/background.jpg";
import mockupPortrait from "../../public/img/bitmaps/mockup-portrait.webp";
import mockuipLandscape from "../../public/img/bitmaps/mockup-landscape.webp";
//COMPONENTS
import Button from "@/Components/Button";
import OpeningSection from "@/Components/OpeningSection";
import OpeningSectionStyles from "@/Components/OpeningSection.module.scss";
import ContactForm from "@/Components/ContactForm";

export default function Home(props) {
  const isPortrait = useMediaQuery({
    query: `${GlobalVariables.device.portrait}`,
  });

  useEffect(() => {
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
        <OpeningSection className={OpeningSectionStyles.OpeningSectionWrapper}>
          <div className={OpeningSectionStyles.backgroundContainer}>
            <Image
              src={background}
              className={OpeningSectionStyles.background}
              alt="background"
              sizes="100vw"
            />
          </div>
          <div className={`outer-grid desktop-inner-grid3`}>
            <div className={`${OpeningSectionStyles.textContainer} hidden`}>
              <h1>Home Page (H1 with font1)</h1>
              <p>
                This is a barebones React template (made with your folder
                structure etc.) (p with font 2)
              </p>

              <Button href="/page2">Go to Page 2</Button>
            </div>
          </div>
        </OpeningSection>
        <div
          className={`${homeStyles.mockupContainer} vertical-padding-normal outer-grid desktop-inner-grid5`}
        >
          <h2>This image changes on mobile/desktop</h2>
          {isPortrait ? (
            <Image src={mockupPortrait} alt="Mockup portrait" />
          ) : (
            <Image src={mockuipLandscape} alt="Mockup landscape" />
          )}
        </div>

        {/* 
        CONTACT section
        CONTACT section
        CONTACT section
        CONTACT section
         */}
        <div className="outer-grid desktop-inner-grid5 vertical-padding-large">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
