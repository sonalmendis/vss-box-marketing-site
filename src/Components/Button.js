import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
// import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
// import Image from "next/image";

const Button = (props) => {
  return (
    <Link
      className={`${styles.ButtonWrapper} ${styles[props.type]}`}
      onClick={props.onClick}
      href={props.href}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </Link>
  );
};

export default Button;
