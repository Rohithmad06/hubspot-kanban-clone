import React from "react";
import styles from "./app.module.css";
import Kanban from "./containers/Kanban/Kanban";
const App = (props) => {
  return (
    <div className={styles.App}>
      <Kanban />
    </div>
  );
};

export default App;
