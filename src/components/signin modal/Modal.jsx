"use client";

import React from "react";
import styles from "./style.module.css";
const Modal = () => {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.box}></div>
      </div>
    </>
  );
};

export default Modal;
