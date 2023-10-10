import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react"; // Animated hamburger icon#
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo.svg";

// The mobile menu container is both offset by a negative margin AND has 0 opacity, that way it is not visible and does not take up space on the page

const Header = () => {
  // Define state variable to keep track of whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define state variable to keep track of the background opacity
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  // Define a function to toggle the menu state when the button is clicked
  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);

    // Toggle the body overflow to prevent scrolling when the menu is open
    isMenuOpen
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
  };

  // Define the menu link tags as a function so each one gets an OnClick (to close the mobile menu when a link has been pressed)
  function MobileLink({ href, children }) {
    return (
      <Link href={href} onClick={handleMenuButtonClick}>
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
    }

    // Add the scroll event listener and return a cleanup function to remove the listener when the component unmounts
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a style object for the background with the calculated opacity
  const backgroundStyle = {
    backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
  };

  // This function is used to offset the scroll to the contact form when the contact link is clicked, it uses the react-router-hash-link package
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // This is the offset, change this if you need to
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className={`${styles.HeaderWrapper} header`}>
      <div
        className={`${styles["top-container"]} ${
          isMenuOpen ? styles["open"] : ""
        } vertical-padding-small`}
        style={backgroundStyle}
      >
        <div className={`outer-grid ${styles["inner-container"]}`}>
          <div className={`${styles["left-column"]}`}>
            <Image className={`${styles.logo}`} src={Logo} alt="logo" />
          </div>

          <div className={`${styles["right-column"]}`}>
            <Link href="/#contact-form">CONTACT</Link>
            <Link href="/page2">Page 2</Link>
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
        } outer-grid`}
      >
        <MobileLink href="/">Home</MobileLink>
        <MobileLink href="/#contact-form">CONTACT</MobileLink>
        <MobileLink href="/page2">Page 2</MobileLink>
      </div>
    </div>
  );
};

export default Header;
