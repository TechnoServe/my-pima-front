import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_WETMILLS, EXPORT_WETMILLS_EXCEL } from "../../graphql/queries/wetmills";
import Table from "../../components/Table/Table";
import { toast } from "react-hot-toast";
import { Typography, Button, CircularProgress } from "@mui/material";
import LoadingScreen from "../../components/LoadingScreen";
import "./Wetmills.css";
import { useOutletContext } from "react-router-dom";

const Wetmills = () => {
  const { program } = useOutletContext();
  const [wetmills, setWetmills] = useState([]);
  const { data, error, loading } = useQuery(GET_WETMILLS, {
    variables: {
      program
    }
  });

  // useLazyQuery for export, matching the actual field name
  const [exportExcel, { loading: exportLoading }] = useLazyQuery(
    EXPORT_WETMILLS_EXCEL,
    {
      variables: { program },
      fetchPolicy: "no-cache",
      onCompleted: ({ exportWetMillsDataExcel }) => {
        // destructure the exact response key
        const { filename, contentBase64 } = exportWetMillsDataExcel;

        try {
          // decode & download
          const byteChars = atob(contentBase64);
          const byteNumbers = Array.from(byteChars, (c) => c.charCodeAt(0));
          const blob = new Blob([new Uint8Array(byteNumbers)], {
            type:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          link.remove();
          URL.revokeObjectURL(url);
          toast.success("Download started");
        } catch (e) {
          console.error(e);
          toast.error("Failed to download file");
        }
      },
      onError: (err) => {
        console.error(err);
        toast.error(err.message || "Export failed");
      },
    }
  );

  useEffect(() => {
    if (data?.getWetmills?.status === 200) {
      setWetmills(data.getWetmills.wetmills);
    }
    if (error) {
      toast.error(error.message);
    }
  }, [data, error]);

  const columns = [
    { id: "num", name: "No.", selector: (r) => r.num, sortable: true },
    {
      id: "wet_mill_unique_id",
      name: "Wetmill ID",
      selector: (r) => r.wet_mill_unique_id,
      sortable: true,
    },
    { id: "name", name: "Wetmill Name", selector: (r) => r.name, sortable: true },
    { id: "country", name: "Country", selector: (r) => r.country, sortable: true },
    {
      id: "mill_status",
      name: "Ownership",
      selector: (r) => r.mill_status || "N/A",
      sortable: true,
    },
    {
      id: "exporting_status",
      name: "Exporting Status",
      selector: (r) => r.exporting_status || "N/A",
      sortable: true,
    },
    {
      id: "registration_date",
      name: "Registered On",
      selector: (r) => r.registration_date,
      sortable: true,
    },
  ];

  const rows = wetmills.map((w, i) => ({ num: i + 1, ...w }));

  if (error)
    return (
      <div className="circular_progress">
        <Typography color="error">Error loading data</Typography>
      </div>
    );

  return (
    <div className="page__container">
      <h1 className="module__heading">Wetmills</h1>

      <div className="page__actions">
        <Button
          className="export__button"
          variant="contained"
          color="primary"
          onClick={() => exportExcel()}
          disabled={exportLoading}
          startIcon={exportLoading ? <CircularProgress size={20} /> : null}
        >
          {exportLoading ? "Exporting..." : "Export Wet Mills Data"}
        </Button>
      </div>

      {loading ? (
        <LoadingScreen />
      ) : rows.length > 0 ? (
        <Table columns={columns} data={rows} tableRowItem="wetmill" />
      ) : (
        <div className="no__data">
          <h1 style={{ fontSize: "20px" }}>No Wetmills Found</h1>
        </div>
      )}
    </div>
  );
};

export default Wetmills;
