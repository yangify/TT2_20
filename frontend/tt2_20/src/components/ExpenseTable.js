import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { myUserid } from "./global";

import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from "@material-ui/core";
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
const useStyles = makeStyles({
  tableRow: {
    "&:hover": {
      backgroundColor: "#EEEEEE !important",
    },
  },
});

const ExpenseTable = () => {
  const classes = useStyles();
  const [expense_data, set_expense_data] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  let { id } = useParams();
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const [currentItem, setCurrentItem] = useState();

  const handleEditDialogOpen = (name, des, budget) => {
    let item = { expense_name: name, description: des, budget: budget };
    setCurrentItem(item);
    setOpenEdit(true);
  };

  useEffect(async () => {
    var API_URL = `http://localhost:5000/expenses/${id}/1`;
    let data = []
    var data_list = await fetch(API_URL, {
      method: "get",
    }).then((res) =>
      res.json().then((res) => {
        console.log(res);
        if (res.status === true) {
          data = res.expenses
          console.log(res.expenses);
        }
      })
    );
    console.log(data)
    var data_list = [
      {
        id: 1,
        expense_name: "Project 1",
        description: "this is expense 1",
        budget: 5000.0,
        date_added: "11 Nov",
        created_by: "USer1",
        date_updated: "11 Nov",
        updated_by: "User1",
      },
    ];
    set_expense_data(data);
  }, []);

  const AddDialog = (props) => {
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [budget, setBudget] = useState(props.budget);

    const handleSubmit = () => {
      //create expense
      let currentData = expense_data;
      currentData.push({
        name: name,
        description: description,
        amount: budget,
      });
      set_expense_data(currentData)
      setOpen(false);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Typography>Expenses Name:</Typography>
              <TextField
                style={{ marginLeft: "auto", width: 200 }}
                variant="outlined"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Typography>Description:</Typography>
              <TextField
                style={{ marginLeft: "auto", width: 200 }}
                variant="outlined"
                multiline
                rows={4}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Typography>Budget:</Typography>
              <TextField
                style={{ marginLeft: "auto", width: 200 }}
                variant="outlined"
                onChange={(e) => {
                  setBudget(e.target.value);
                }}
                value={budget}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit}>Done</Button>
            <Button onClick={handleClose}>Discard</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  const EditDialog = (props) => {
    const [name, setName] = useState(props.expense_name);
    const [description, setDescription] = useState(props.description);
    const [budget, setBudget] = useState(props.budget);

    const handleSubmit = () => {
      //create expense
      console.log(name);
      setOpen(false);
    };

    const handleClose = () => {
      setOpen(false);
      setOpenEdit(false);
    };

    return (
      <>
        <Dialog open={openEdit} onClose={handleClose}>
          <DialogTitle>Edit Expense</DialogTitle>

          <DialogContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Typography>Expenses Name:</Typography>
              <TextField
                style={{ marginLeft: "auto", width: 200 }}
                variant="outlined"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Typography>Description:</Typography>
              <TextField
                style={{ marginLeft: "auto", width: 200 }}
                variant="outlined"
                multiline
                rows={4}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Typography>Budget:</Typography>
              <TextField
                style={{ marginLeft: "auto", width: 200 }}
                variant="outlined"
                onChange={(e) => {
                  setBudget(e.target.value);
                }}
                value={budget}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit}>Done</Button>
            <Button onClick={handleClose}>Discard</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };


  return (
    <>
      <div>
        <TopNavBar />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#4341A1",
            color: "white",
            marginTop: 10,
          }}
          onClick={() => {
            navigate("/projects");
          }}
        >
          Back
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h2>Expenses</h2>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4341A1",
              color: "white",
              height: 30,
              marginLeft: "Auto",
            }}
            onClick={handleClickOpen}
          >
            Add Expenses
          </Button>
        </div>
        <AddDialog name="" description="" budget={0} />
        <EditDialog/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell align="right">Expense Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Budget</TableCell>
                <TableCell align="right">Date Added</TableCell>
                <TableCell align="right">Created By</TableCell>
                <TableCell align="right">Date Updated</TableCell>
                <TableCell align="right">Updated By</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expense_data.map((row_data) => (
                <TableRow
                  key={row_data.project_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className={classes.tableRow}
                >
                  <TableCell component="th" align="left">
                    {row_data.project_id}
                  </TableCell>
                  <TableCell align="right">{row_data.name}</TableCell>
                  <TableCell align="right">{row_data.description}</TableCell>
                  <TableCell align="right">{row_data.amount}</TableCell>
                  <TableCell align="right">{row_data.created_at}</TableCell>
                  <TableCell align="right">{row_data.created_by}</TableCell>
                  <TableCell align="right">{row_data.updated_at}</TableCell>
                  <TableCell align="right">{row_data.updated_by}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#4341A1", color: "white" }}
                      onClick={() => {
                        handleEditDialogOpen(
                          row_data.expense_name,
                          row_data.description,
                          row_data.budget
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#D1675A", color: "white" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <BottomNavBar />
      </div>
    </>
  );
};

export default ExpenseTable;
