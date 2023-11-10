import React from "react";
import { useParallax } from "react-scroll-parallax";
// import * as GlobalVariables from "@/styles/GlobalVariables";
// import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
// import Image from "next/image";
const ParallaxComponent = (props) => {
  // const [isSomeState, setSomeState] = useState(false);

  // useEffect(() => {

  //   return () => {

  //   };
  // }, []);

  const { ref: parallaxRef } = useParallax({ speed: 20 });

  return <div ref={props.ref} />;
};

export default ParallaxComponent;
