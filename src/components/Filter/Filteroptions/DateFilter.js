import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const DateFilter = ({ setFilter }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
          <DatePicker
            value={dayjs(selectedDate)}
            onChange={(newDate) => {
              setSelectedDate(newDate.format("YYYY-MM-DD"));
              setFilter({
                sessionDate: newDate.format("YYYY-MM-DD"),
              });
            }}
            format="LL"
            maxDate={dayjs(new Date())}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DateFilter;
