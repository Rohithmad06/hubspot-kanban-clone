import React, { createContext, useState } from "react";
import styles from "./kanban.module.css";
import Droppable from "../../components/Droppable/Droppable";
// import Draggable from "../../components/Draggable/Draggable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import _ from "lodash";

export const CardContext = createContext({
  isDraggingOver: null,
});

const Kanban = (props) => {
  const droppableKey = "stage";
  const [data, setData] = useState([
    { id: "1", stage: "Upcoming", name: "Clean the vessels" },
    { id: "2", stage: "In Progress", name: "Go to the gym" },
    { id: "3", stage: "Completed", name: "Pay Gym Membership" },
    { id: "4", stage: "In Progress", name: "Get the car service done" },
    { id: "5", stage: "Completed", name: "Call the Manager" },
  ]);
  const [droppableColumns, setDroppableColumns] = useState([
    "Upcoming",
    "In Progress",
    "Completed",
  ]);
  //   const droppableColumns = [];
  //   for (let i = 0; i < data.length; i++) {
  //     if (droppableColumns.some((val) => val.id === data[i].stage)) {
  //       continue;
  //     } else {
  //       droppableColumns.push({ id: data[i].stage, label: data[i].stage });
  //     }
  //   }

  const droppables = droppableColumns.map((column, index) => {
    return (
      <Droppable
        key={index}
        data={data}
        label={column}
        droppableKey={droppableKey}
      />
    );
  });
  const isDraggingOver = (draggableId, droppableId) => {
    const tempData = _.cloneDeep(data);
    const draggable = tempData.find((val) => val.id === draggableId.id);
    draggable[droppableKey] = droppableId;
    const draggableIndex = tempData.findIndex(
      (val) => val.id === draggableId.id
    );
    tempData[draggableIndex] = draggable;
    setData(tempData);
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
