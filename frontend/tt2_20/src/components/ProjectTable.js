import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/styles";
import {
  Table,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const ProjectTable = () => {
  const [project_data, set_project_data] = useState([]);
  useEffect(() => {
    var data_list = [
      {
        id: 2,
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

  //   const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //     [`&.${tableCellClasses.head}`]: {
  //       backgroundColor: theme.palette.common.black,
  //       color: theme.palette.common.white,
  //     },
  //     [`&.${tableCellClasses.body}`]: {
  //       fontSize: 14,
  //     },
  //   }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
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
            >
              <TableCell component="th" align="right">
                {row_data.id}
              </TableCell>
              <TableCell align="right">{row_data.proj_name}</TableCell>
              <TableCell align="right">{row_data.description}</TableCell>
              <TableCell align="right">{row_data.budget}</TableCell>
              <Button variant="contained">View Expenses</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
