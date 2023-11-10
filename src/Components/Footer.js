import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Button from "./Button";
// Icons
import LinkedInIcon from "../../public/img/social-icons/linkedin.svg";
import FBIcon from "../../public/img/social-icons/facebook.svg";
import instaIcon from "../../public/img/social-icons/instagram.svg";
import mailIcon from "../../public/img/social-icons/mail-icon.svg";
import telephoneIcon from "../../public/img/social-icons/telephone-icon.svg";
const Footer = (props) => {
  return (
    <div className={`${styles.FooterWrapper} vertical-padding2`}>
      <div className={`${styles.innerContainer} outer-grid`}>
        <div className={styles.emailPhone}>
          {/* <div>
            <Image src={telephoneIcon} alt="Telephone Icon" />
            <span>077 954 0606</span>
          </div> */}
          <div>
            <Button
              type="1"
              target="_blank"
              refferer="no-referrer"
              href="https://cal.com/sonal-mendis-awdbhl/30min"
            >
              Book a meeting now!
            </Button>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright © 2023 VSS-BOX (PVT) LTD All rights reserved
          {/* COMPANY NO: P V 00278687 */}
        </div>
        <div className={styles.socialIconsContainer}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/vssbox/"
          >
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/people/VSS-BOX/61551259347879/"
          >
            <Image src={FBIcon} alt="Facebook Icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/vssbox.sl/"
          >
            <Image src={instaIcon} alt="Facebook Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
