import React, { useState, useEffect } from "react";
import * as GlobalVariables from "@/styles/GlobalVariables";
import { Squash as Hamburger } from "hamburger-react"; // Animated hamburger icon#
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo-landscape.svg";
import Button from "./Button";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

//images
import telephoneIcon from "../../public/img/vectors/phone-icon.svg";
import mailIcon from "../../public/img/vectors/mail-icon.svg";

// The mobile menu container is both offset by a negative margin AND has 0 opacity, that way it is not visible and does not take up space on the page

const Header = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${GlobalVariables.device.laptop})`,
  });
  // Define state variable to keep track of whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define state variable to keep track of the background opacity
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  const router = useRouter();
  // Define a function to toggle the menu state when the button is clicked
  const handleMenuButtonClick = (el) => {
    if (!isDesktop) {
      if (isMenuOpen === true) {
        setIsMenuOpen(false);
        document.body.style.overflowY = "visible";
      } else {
        if (el.target && el.target.id === "header-logo") {
          document.body.style.overflowY = "visible";
        } else {
          setIsMenuOpen(true);
          document.body.style.overflowY = "hidden";
        }
      }
    } else {
      const regex = /^\/$/;
      if (regex.test(router.pathname)) {
        window.scrollTo(0, 0);
      }
    }
  };

  // Define the menu link tags as a function so each one gets an OnClick (to close the mobile menu when a link has been pressed)
  function MobileLink({ to, children }) {
    return (
      <Link to={to} onClick={handleMenuButtonClick}>
        {children}
      </Link>
    );
  }

  // Use an effect to update the background opacity when the user scrolls
  useEffect(() => {
    function handleScroll() {
      // Define a scroll event handler function to calculate the opacity based on the current scroll position
      const opacity = Math.min(window.pageYOffset / 100, 1);
      setBackgroundOpacity(opacity);

      const headerLogo = document.getElementById("header-logo");
      const header = document.getElementById("header");
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 5) {
        // headerLogo.classList.add("mini");

        header.classList.add(`${styles["headershow"]}`);
      } else {
        // headerLogo.classList.remove("mini");

        header.classList.remove(`${styles["headershow"]}`);
      }
    }

    // Add the scroll event listener and return a cleanup function to remove the listener when the component unmounts
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a style object for the background with the calculated opacity
  const backgroundStyle = {
    background: `#090516`,
  };

  // This function is used to offset the scroll to the contact form when the contact link is clicked, it uses the react-router-hash-link package
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;

    const yOffset = -100; // This is the offset, change this if you need to
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });

    /*
EDIT: FOR SOME REASON THIS WORKS WITH THE STATIC BUILT SITE
IDFK WHY BUT IT DOES SO I'M LEAVING IT AS IS

    IF YOU NEED TO JUMP TO ANOTHER SECTION FROM ANOTHER PAGE USE BELOW
    BUT NOTE THAT ITS BETTER TO HASH JUMP FROM WITHIN THE PAGE
    i.e stick the Contact Form in to every page or have its own page

    setTimeout(function () {
      const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
      console.log(yCoordinate);
      const yOffset = -100; // This is the offset, change this if you need to
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    }, 300);


    For some reason, the small timeout is needed for the scroll to work properly 
    when jumping to a section from another page
    e.g when going to the "Contact Us" section from the pricing page

    If you don't use the timeout, the scroll will jump only haflway down the page

    Checking for the elements existance, the elements height, or the window height
    don't see to work as they all return the same value as soon as the function
    is fired vs a second later

    Even on slow connections this timeout works so its purely a client-side thing
    */
  };
  return (
    <div className={`${styles.HeaderWrapper} header`} id="header">
      <div
        className={`${styles["top-container"]} ${
          isMenuOpen ? styles["open"] : ""
        } `}
        style={backgroundStyle}
      >
        <div className={`outer-grid ${styles["inner-container"]}`}>
          <div className={`${styles["left-column"]}`}>
            <Link href="/" onClick={handleMenuButtonClick}>
              <Image
                className={`${styles.logo}`}
                id="header-logo"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          <div className={`${styles["right-column"]}`}>
            <Link href="/pricing">Pricing</Link>

            <MediaQuery minWidth={1030}>
              <Button
                type="1"
                target="_blank"
                refferer="no-referrer"
                className={`${styles["meetingBtn"]}`}
                href="https://cal.com/sonal-mendis-awdbhl/30min"
                nospace="true"
                size="small"
              >
                Book a meeting
              </Button>
            </MediaQuery>

            {/* Render the menu button*/}

            <div className={styles.hamburger}>
              <Hamburger
                className="test"
                toggled={isMenuOpen}
                toggle={handleMenuButtonClick}
              />
            </div>
          </div>
        </div>
      </div>

      {/* If the menu is open, render a list of links */}
      <div
        className={`${styles["mobile-menu-container"]} ${
          isMenuOpen ? styles.open : ""
        }`}
      >
        <div className={` ${styles["menu-inner-wrapper"]} outer-grid`}>
          <div className={`${styles["individual-link-container"]}`}>
            <Button
              href="/pricing"
              inline="true"
              onClick={handleMenuButtonClick}
            >
              Pricing
            </Button>
          </div>

          <div className={`${styles["contact-details-container"]}`}>
            <div className={`${styles["inner-container"]}`}>
              <div className={`${styles["col"]}`}>
                <Button
                  type="2"
                  target="_blank"
                  refferer="no-referrer"
                  href="https://cal.com/sonal-mendis-awdbhl/30min"
                  className="vertical-padding2"
                >
                  Book a meeting now!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
