import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const OverlayModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const createElements = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        createElements
      )}
      {ReactDOM.createPortal(
        <OverlayModal>{props.children}</OverlayModal>,
        createElements
      )}
    </>
  );
};

export default Modal;
