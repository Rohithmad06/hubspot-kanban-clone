import React from "react";
import styles from "./droppable.module.css";
const Droppable = (props) => {
  return (
    <div className={styles.droppableContainer}>
      <header className={styles.droppableHeader}>Appointment Scheduled</header>
      <main className={styles.droppableMain}>{props.children}</main>
      <footer className={styles.droppableFooter}> Total</footer>
    </div>
  );
};
export default Droppable;
