import React, { useState } from "react";
import styles from "./app.module.css";
import Kanban from "./containers/Kanban/Kanban";
import AddDeal from "./containers/Kanban/AddDeal/AddDeal";
import { Button } from "@material-ui/core";
import moment from "moment";
import _ from "lodash";
const App = (props) => {
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
    { value: "Appointment Scheduled", label: "Appointment Scheduled" },
    { value: "Qualified to Buy", label: "Qualified to Buy" },
    { value: "Presentation Scheduled", label: "Presentation Scheduled" },
    { value: "Decision maker brought in", label: "Decision maker brought in" },
    { value: "Contract Sent", label: "Contract Sent" },
    { value: "Closed Won", label: "Closed Won" },
    { value: "Closed Lost", label: "Closed Lost" },
  ]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [stage, setStage] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const droppableKey = "stage";

  const addDealHandler = () => {
    console.log(name, total, stage, closeDate);
    let tempData = _.cloneDeep(data);
    tempData.push({
      id: Math.random(),
      stage: stage,
      name: name,
      total: total,
      closeDate: moment(closeDate),
    });
    setData(tempData);
    setModalOpen(false);
  };
  return (
    <div className={styles.App}>
      <Button
        variant="contained"
        onClick={() => setModalOpen(true)}
        style={{ margin: "10px", background: "#1891ff" }}
      >
        Add Deal
      </Button>
      <Kanban
        data={data}
        setData={setData}
        droppableColumns={droppableColumns}
        droppableKey={droppableKey}
      />
      {modalOpen && (
        <AddDeal
          open={modalOpen}
          options={droppableColumns}
          stage={stage}
          setStage={setStage}
          total={total}
          setTotal={setTotal}
          name={name}
          setName={setName}
          closeDate={closeDate}
          setCloseDate={setCloseDate}
          addDealHandler={addDealHandler}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default App;
