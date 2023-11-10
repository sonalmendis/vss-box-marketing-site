import React from "react";
// import * as GlobalVariables from "@/styles/GlobalVariables";
// import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
// import Image from "next/image";
const GradientBorder = (props) => {
  // const [isSomeState, setSomeState] = useState(false);

  // useEffect(() => {

  //   return () => {

  //   };
  // }, []);

  return (
    <div className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the GradientBorder component and put your own text */
      }
    </div>
  );
};

export default GradientBorder;
