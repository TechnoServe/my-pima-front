import {
  Table,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    boxShadow: "0px 2px 8px 3px rgba(0, 0, 0, 0.2)", // Customize the box shadow effect
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#F1F5F9",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
  transition: "box-shadow 0.3s ease-in-out", // Add a transition effect
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&:hover": {
    fontWeight: 600,
  },
  transition: "font-weight 0.3s ease-in-out", // Add a transition effect
}));

const DataTable = ({ columns, rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (rows.length > 0) {
      setPage(0);
    }
  }, [rows]);

  return (
    <Paper sx={{ width: "auto", height: "100%", overflow: "auto" }}>
      <div style={{ position: "sticky", top: "0" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns
                .filter((column, columnIndex) => columnIndex !== 0)
                .map((column) => (
                  <TableCell
                    key={column}
                    sx={{
                      fontWeight: "600",
                      color: "#25245D",
                      backgroundColor: "rgba(0, 165, 163, 0.1)",
                    }}
                    align="center"
                  >
                    {column}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
        </Table>
      </div>
      <div style={{ height: "300px", overflow: "auto" }}>
        <TableContainer>
          <Table style={{ tableLayout: "fixed" }}>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <StyledTableRow key={index}>
                      {row
                        .filter((cell, cellIndex) => cellIndex !== 0)
                        .map((cell, cellIndex) => (
                          <StyledTableCell key={cellIndex} align="center">
                            {cell}
                          </StyledTableCell>
                        ))}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
