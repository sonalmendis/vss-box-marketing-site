import React, { useEffect } from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";

const ModalStyled = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${GlobalVariables.colours.purple};
  .inner-container {
    padding: 3rem;
    position: relative;

    width: 89vw;
    transform: scale(0.9);
    background-color: white;
    z-index: 100;
    border-radius: 1rem;
    opacity: 0;
    animation: fade-in 0.5s forwards;
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @media ${GlobalVariables.device.laptop} {
      width: 50vw;
      transform: scale(1);
    }
  }

  h2 {
    margin-bottom: 1rem !important;
  }

  .close-button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  });

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalStyled>
      <div className="inner-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </ModalStyled>
  );
};

export default Modal;
