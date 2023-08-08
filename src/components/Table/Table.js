import { useState } from "react";
import "./table.css";
import Exportbutton from "../Export/Export";
import FilterContainer from "../Filter/FilterContainer";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { BiSearchAlt } from "react-icons/bi";

const customStyles = {
  rows: {
    style: {
      minHeight: "50px", // override the row height
      cursor: "pointer",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "#00A5A3",
    },
  },
  cells: {
    style: {
      paddingLeft: "5px", // override the cell padding for data cells
      paddingRight: "5px",
    },
  },
};

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
        ? row.ts_id
        : tableRowItem === "traingroup"
        ? row.tg_id
        : tableRowItem === "participants"
        ? row.p_id
        : row.ts_id;

    navigate(`/${tableRowItem}/${id}`);
  };

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;

    const filteredItems = data.filter((item) => {
      return columns.some((column) => {
        const field = item[column.id];
        if (field === null || field === undefined) {
          return false;
        }
        return field.toString().toLowerCase().includes(value.toLowerCase());
      });
    });

    setFilteredData(filteredItems);

    setSearchText(e.target.value);
  };

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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
        />
        <span className="search-icon">
          {/* use search icon from react-icons */}
          <BiSearchAlt />
        </span>
      </div>
      <DataTable
        columns={columns}
        data={searchText.length > 0 ? filteredData : data}
        onRowClicked={handleRowClick}
        pagination
        highlightOnHover
        customStyles={customStyles}
      />
    </div>
  );
};

export default Table;
