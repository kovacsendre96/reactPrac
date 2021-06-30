import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";



const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children})</ModalOverLay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
export default Modal;
