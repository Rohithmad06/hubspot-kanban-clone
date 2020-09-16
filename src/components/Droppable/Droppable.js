import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { CardContext } from "../../containers/Kanban/Kanban";
import { ItemTypes } from "../utils";
import styles from "./droppable.module.css";
import Draggable from "../Draggable/Draggable";
import { filter } from "lodash";

const Droppable = (props) => {
  const { isDraggingOver } = useContext(CardContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => isDraggingOver(item, props.label),
    hover: (item, monitor) => isDraggingOver(item, props.label),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
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
        <Draggable key={index} id={val.id} name={val.name} closeDate={val.closeDate}/>
      ));
  };
  const draggables = filterDraggablesByDroppableId(
    props.data,
    props.droppableKey,
    props.label
  );
  const fetchTotalExpectedRevenue = (
    data,
    droppableColumnKey,
    droppableColumnValue
  ) => {
    let tempData = [];
    tempData = data.filter(
      (val, index) => val[droppableColumnKey] === droppableColumnValue
    );
    console.log(tempData);
    // return tempData.reduce((object, val) => ({
    //   total: object.total + val.total,
    // }));
    let total = 0;
    for (let i = 0; i < tempData.length; i++) {
      total = total + Number(tempData[i].total);
    }
    return total;
  };

  const total = fetchTotalExpectedRevenue(
    props.data,
    props.droppableKey,
    props.label
  );
  return (
    <div className={styles.droppableContainer}>
      <header className={styles.droppableHeader}>
        <div className={styles.droppableHeaderDiv}>
          <p className={styles.label}>{props.label.toUpperCase()}</p>
          <p>{draggables.length}</p>
        </div>
      </header>
      <main className={styles.droppableMain} ref={drop}>
        {draggables}
      </main>
      <footer className={styles.droppableFooter}>{`Total $ ${total}`}</footer>
    </div>
  );
};
export default Droppable;
