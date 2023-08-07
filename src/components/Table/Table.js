import { useState } from "react";
import { useEffect } from "react";
import { useTable } from "react-table";
import { TablePagination } from "@mui/material";
import "./table.css";
import Exportbutton from "../Export/Export";
import FilterContainer from "../Filter/FilterContainer";
import { useNavigate } from "react-router-dom";

const Table = ({
  columns,
  data,
  filter,
  setFilter,
  setFilteredGroups,
  setFilteredSessions,
  tableRowItem,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    const id =
      tableRowItem === "trainsession"
        ? row.original.ts_id
        : tableRowItem === "traingroup"
        ? row.original.tg_id
        : tableRowItem === "participants"
        ? row.original.p_id
        : row.original.ts_id;

    navigate(`/${tableRowItem}/${id}`);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
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
    <div>
      <div
        style={{
          overflow: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <FilterContainer
          filter={filter}
          setFilter={setFilter}
          setFilteredGroups={setFilteredGroups}
          setFilteredSessions={setFilteredSessions}
          data={data}
        />
        <Exportbutton columns={columns} data={data} pathName={tableRowItem} />
      </div>
      <div className="table__container">
        <table {...getTableProps()} className="table__head">
          <thead className="table__header">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()} className="table__body">
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => handleRowClick(row)}
                  >
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length} //
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          borderTop: "1px solid #EEEEF2",

          borderBottom: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: "14px",
        }}
      />
    </div>
  );
};

export default Table;
