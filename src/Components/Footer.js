import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
// Icons
import LinkedInIcon from "../../public/img/social-icons/linkedin-icon.svg";
import TwitterIcon from "../../public/img/social-icons/twitter-icon.svg";
import telephoneIcon from "../../public/img/social-icons/telephone-icon.svg";
import mailIcon from "../../public/img/social-icons/mail-icon.svg";
const Footer = (props) => {
  return (
    <div className={`${styles.FooterWrapper} vertical-padding-normal`}>
      <div className={`${styles.innerContainer} outer-grid`}>
        <div className={styles.address}>
          <ul>
            <li>Prime Bella</li>
            <li>Madinnagoda Road</li>
            <li>Rajagiriya</li>
            <li>Sri Lanka</li>
          </ul>
        </div>
        <div className={styles.emailPhone}>
          <div>
            <Image src={telephoneIcon} alt="Telephone Icon" />
            <span>077 954 0606</span>
          </div>
          <div>
            <Image src={mailIcon} alt="Mail Icon" />
            <span>contact@vssbox.com</span>
          </div>
        </div>

        <div className={styles.socialIconsContainer}>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/">
            <Image src={TwitterIcon} alt="Twitter Icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
        </div>

        <div className={styles.copyright}>
          Copyright © 2023 VSS-BOX (PVT) LTD All rights reserved | <br></br>
          COMPANY NO: P V 00278687
        </div>
      </div>
    </div>
  );
};

export default Footer;
