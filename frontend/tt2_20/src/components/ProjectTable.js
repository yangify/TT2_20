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
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import { myUserid } from './global';


const useStyles = makeStyles({
  tableRow: {
    "&:hover": {
      backgroundColor: "#EEEEEE !important",
    },
  },
});
const ProjectTable = () => {
  const classes = useStyles();
  const [project_data, set_project_data] = useState([]);

  useEffect(() => {
    console.log(myUserid.id);
    var API_URL = "http://localhost:5000/projects";
    fetch(
      API_URL,{
          method:"get"
      }
      ).then(
          res => res.json().then(
              res=>{console.log(res)
              if(res.status === true){
                  console.log(res.user);
                  this.setState({ redirect: true });
              }
          })
      )
    var data_list = [
      {
        id: 1,
        proj_name: "Project 1",
        description: "this is proj 1",
        budget: 5000.0,
      },
      {
        id: 2,
        proj_name: "Project 2",
        description: "this is proj 2",
        budget: 5000.0,
      },
      {
        id: 3,
        proj_name: "Project 3",
        description: "this is proj 3",
        budget: 5000.0,
      },
    ];
    set_project_data(data_list);
  }, []);

  return (
    <div>
      <TopNavBar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell align="right">Project Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Budget</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {project_data.map((row_data) => (
              <TableRow
                key={row_data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={classes.tableRow}
              >
                <TableCell component="th" align="left">
                  {row_data.id}
                </TableCell>
                <TableCell align="right">{row_data.proj_name}</TableCell>
                <TableCell align="right">{row_data.description}</TableCell>
                <TableCell align="right">{row_data.budget}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#4341A1", color: "white" }}
                  >
                    View Expenses
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BottomNavBar/>
    </div>
  );
};

export default ProjectTable;
