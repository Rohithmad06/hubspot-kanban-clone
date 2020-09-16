import React from "react";
import styles from "./kanban.module.css";
import Droppable from "../../components/Droppable/Droppable";
import Draggable from "../../components/Draggable/Draggable";

const Kanban = (props) => {
  const rows = [1, 2, 3, 4, 5, 1, 2];
  const columns = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 6, 4, 3, 1, 1, 2, 2, 1, 1];
  const draggables = columns.map((row, index) => {
    return <Draggable key={index} />;
  });
  const droppables = rows.map((row, index) => {
    return <Droppable key={index}>{draggables}</Droppable>;
  });
  return <div className={styles.kanbanContainer}>{droppables}</div>;
};
export default Kanban;
