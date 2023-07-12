import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateFilter = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <p
        style={{
          fontSize: "10px",
          fontStyle: "italic",
          textTransform: "lowercase",
        }}
      >
        filter by date when the training session was conducted
      </p>
      <div style={{ marginTop: "10px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker defaultValue={dayjs("2022-04-17")} format="LL" />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DateFilter;
