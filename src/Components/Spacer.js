import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
const Spacer = styled.div`
  margin-bottom: ${(props) => props.space};

  @media (${GlobalVariables.device.laptop}) {
    margin-bottom: ${(props) => props.desktopspace};
  }

  // Here are some examples of props being used
  /*

order: ${(props) => (props.side === "left" ? "1" : "2")};

background: url("${(props) => props.bg}");

${(props) => props.type === "outline" && `background: none;`}

*/
`;

const YourComponentNameHere = (props) => {
  return (
    <Spacer
      className={props.className}
      space={props.space}
      desktopspace={props.desktopspace}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the YourComponentNameHere component and put your own text */
      }
    </Spacer>
  );
};

export default YourComponentNameHere;
