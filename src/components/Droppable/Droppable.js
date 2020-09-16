import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { CardContext } from "../../containers/Kanban/Kanban";
import { ItemTypes } from "../utils";
import styles from "./droppable.module.css";
import Draggable from "../Draggable/Draggable";

const Droppable = (props) => {
  const { isDraggingOver } = useContext(CardContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => isDraggingOver(item, props.label),
    collect: (monitor) => ({
      isOver: !!monitor,
    }),
  });
  const filterDraggablesByDroppableId = (
    data,
    droppableColumnKey,
    droppableColumnValue
  ) => {
    return data
      .filter(
        (value, index) => value[droppableColumnKey] === droppableColumnValue
      )
      .map((val, index) => (
        <Draggable key={index} id={val.id} name={val.name} />
      ));
  };

  return (
    <div className={styles.droppableContainer}>
      <header className={styles.droppableHeader}>{props.label}</header>
      <main className={styles.droppableMain} ref={drop}>
        {filterDraggablesByDroppableId(
          props.data,
          props.droppableKey,
          props.label
        )}
      </main>
      <footer className={styles.droppableFooter}> Total</footer>
    </div>
  );
};
export default Droppable;
