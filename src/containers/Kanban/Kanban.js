import React, { createContext, useState } from "react";
import styles from "./kanban.module.css";
import Droppable from "../../components/Droppable/Droppable";
// import Draggable from "../../components/Draggable/Draggable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import _ from "lodash";
import moment from "moment";

export const CardContext = createContext({
  isDraggingOver: null,
});

const Kanban = (props) => {
  const droppableKey = "stage";
  const [data, setData] = useState([
    {
      id: "1",
      stage: "Appointment Scheduled",
      name: "Mohith",
      total: "100000",
      closeDate: moment().add(1, "days"),
    },
    {
      id: "2",
      stage: "Qualified to Buy",
      name: "Rohith",
      total: "220000",
      closeDate: moment().add(3, "days"),
    },
    {
      id: "3",
      stage: "Presentation Scheduled",
      name: "Ravi Kumar",
      total: "340000",
      closeDate: moment().add(4, "days"),
    },
    {
      id: "4",
      stage: "Presentation Scheduled",
      name: "Max Payne",
      total: "110000",
      closeDate: moment().add(2, "days"),
    },
    {
      id: "5",
      stage: "Closed Won",
      name: "William George",
      total: "400000",
      closeDate: moment().add(4, "days"),
    },
  ]);
  const [droppableColumns, setDroppableColumns] = useState([
    "Appointment Scheduled",
    "Qualified to Buy",
    "Presentation Scheduled",
    "Decision maker brought in",
    "Contract Sent",
    "Closed Won",
    "Closed Lost",
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
    console.log(draggableIndex);
    tempData.splice(draggableIndex, 1);
    tempData.splice(0, 0, draggable);
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
