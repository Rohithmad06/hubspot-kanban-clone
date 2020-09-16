import React, { createContext } from "react";
import styles from "./kanban.module.css";
import Droppable from "../../components/Droppable/Droppable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import _ from "lodash";

export const CardContext = createContext({
  isDraggingOver: null,
});

const Kanban = (props) => {
  const droppables = props.droppableColumns.map((column, index) => {
    return (
      <Droppable
        key={index}
        data={props.data}
        label={column.label}
        droppableKey={props.droppableKey}
      />
    );
  });
  const isDraggingOver = (draggableId, droppableId) => {
    const tempData = _.cloneDeep(props.data);
    const draggable = tempData.find((val) => val.id === draggableId.id);
    draggable[props.droppableKey] = droppableId;
    const draggableIndex = tempData.findIndex(
      (val) => val.id === draggableId.id
    );
    console.log(draggableIndex);
    tempData.splice(draggableIndex, 1);
    tempData.splice(0, 0, draggable);
    props.setData(tempData);
  };
  return (
    <CardContext.Provider value={{ isDraggingOver }}>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.kanbanContainer}>{droppables}</div>
      </DndProvider>
    </CardContext.Provider>
  );
};
export default Kanban;
