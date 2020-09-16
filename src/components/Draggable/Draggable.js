import React from "react";
import styles from "./draggable.module.css";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils";
const Draggable = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id: props.id, type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      className={
        isDragging
          ? [
              styles.draggableContainer,
              styles.draggableContainerIsDragging,
            ].join(" ")
          : styles.draggableContainer
      }
      ref={drag}
    >
      {props.name}
    </div>
  );
};
export default Draggable;
