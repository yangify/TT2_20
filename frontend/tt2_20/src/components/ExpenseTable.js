import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

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

  useEffect(() => {
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
    set_expense_data(data_list);
  }, []);

  return (
    <>
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
        >
          Add Expenses
        </Button>
      </div>
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
                key={row_data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={classes.tableRow}
              >
                <TableCell component="th" align="left">
                  {row_data.id}
                </TableCell>
                <TableCell align="right">{row_data.expense_name}</TableCell>
                <TableCell align="right">{row_data.description}</TableCell>
                <TableCell align="right">{row_data.budget}</TableCell>
                <TableCell align="right">{row_data.date_added}</TableCell>
                <TableCell align="right">{row_data.created_by}</TableCell>
                <TableCell align="right">{row_data.date_updated}</TableCell>
                <TableCell align="right">{row_data.updated_by}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#4341A1", color: "white" }}
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
    </>
  );
};

export default ExpenseTable;
