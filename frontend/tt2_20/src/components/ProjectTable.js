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


import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    console.log(myUserid.id);
    var API_URL = "http://localhost:5000/projects/"+ myUserid.id;
    fetch(API_URL, {
      method: "get",
    }).then((res) =>
      res.json().then((res) => {
        console.log(res);
        var data_list = [];
        
        for(var x=0; x < res.projects.length; x++){
          var test1 = [{
            id: x,
            proj_name: res.projects[x].name,
            description: res.projects[x].description,
            budget: res.projects[x].budget,
          },];
          console.log(test1);
          data_list.push(test1);

        }
        console.log(data_list[0]);
        /*var data_list = [
          {

            id: res.projects[0].id,
            proj_name: res.projects[0].name,
            description: res.projects[0].description,
            budget: res.projects[0].budget,
          },
        ];*/
        set_project_data(data_list);
      })
    );
    
  }, []);

  return (
    <div>
      <TopNavBar />
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
            {project_data[0].map((row_data) => (
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
                    onClick={() => {
                      navigate(`/expenses/${row_data.id}`);
                    }}
                  >
                    View Expenses
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BottomNavBar />
    </div>
  );
};

export default ProjectTable;
