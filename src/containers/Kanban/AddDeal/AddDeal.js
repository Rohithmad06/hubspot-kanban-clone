import React from "react";
import styles from "./addDeal.module.css";
import { Dialog, DialogActions, TextField, Button } from "@material-ui/core";
const AddDeal = (props) => {
  return (
    <Dialog open={props.open}>
      <div className={styles.addDealContainer}>
        <TextField
          placeholder={"Deal Name"}
          label="Deal Name"
          value={props.name}
          onChange={(event) =>props.setName(event.target.value)}
          type="text"
          variant="outlined"
          margin="dense"
          style={{ width: "95%", marginTop: "10px" }}
        />
        <TextField
          placeholder="Expected Revenue"
          label="Expected Revenue"
          value={props.total}
          onChange={(event) => props.setTotal(event.target.value)}
          type="text"
          variant="outlined"
          margin="dense"
          style={{ width: "95%", marginTop: "10px" }}
        />
        <TextField
          placeholder="Deal Stage"
          label="Deal Stage"
          value={props.stage}
          onChange={(event) =>props.setStage(event.target.value)}
          select
          variant="outlined"
          margin="dense"
          style={{ width: "95%", marginTop: "10px" }}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <input
          type="date"
          onChange={(event)=>props.setCloseDate(event.target.value)}
          style={{ width: "95%", marginTop: "10px" }}
        />
      </div>
      <DialogActions>
        <Button autoFocus onClick={() => props.setModalOpen(false)} color="primary">
          Cancel
        </Button>
        <Button autoFocus onClick={props.addDealHandler} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddDeal;
