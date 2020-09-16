import React from "react";
import styles from "./draggable.module.css";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils";
const Draggable = (props) => {
  const [DragginProps, drag] = useDrag({
    item: { id: props.id, type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  console.log(DragginProps);
  return (
    <div
      className={
        DragginProps.isDragging
          ? [
              styles.draggableContainer,
              styles.draggableContainerIsDragging,
            ].join(" ")
          : styles.draggableContainer
      }
      ref={drag}
    >
      <div>
        <a href="#" className={styles.name}>{props.name}</a>
      </div>
      <div>Close Date: {props.closeDate.format("LL")}</div>
    </div>
  );
};
export default Draggable;
