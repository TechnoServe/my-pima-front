import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_FARM_VISITS_PER_PROJECT } from "../../graphql/queries/farmVisitsRequests";
import Table from "../../components/Table/Table";
import { toast } from "react-hot-toast";
import { Typography } from "@mui/material";
import LoadingScreen from "../../components/LoadingScreen";
import { useOutletContext } from "react-router-dom";

const FarmVisit = () => {

  const { activeProject } = useOutletContext();

  const [farmVisits, setFarmVisits] = useState([]);
  const { data, error, loading } = useQuery(GET_FARM_VISITS_PER_PROJECT, {
    variables: { projectId: activeProject },
  });

  useEffect(() => {
    if (data) {
      const farmVisitsData = data.getFarmVisitsByProject;
      setFarmVisits(
        farmVisitsData.status === 200 ? farmVisitsData.farmVisits : []
      );
    }

    if (error) {
      toast.error(error.message);
    }
  }, [data, error]);

  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "training_group",
      name: "TG Name",
      selector: (row) => row.training_group,
      sortable: true,
    },
    {
      id: "farmer_tns_id",
      name: "TNS Farmer ID",
      selector: (row) => row.farmer_tns_id,
      sortable: true,
    },
    {
      id: "farm_visited",
      name: "Farm Visited",
      selector: (row) => row.farm_visited,
      sortable: true,
    },
    {
      id: "gender",
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    {
      id: "date_visited",
      name: "Date Visited",
      selector: (row) => row.date_visited,
      sortable: true,
    },
  ];
  const tableRowItem = "farmvisit";

  const rows = farmVisits
    ? farmVisits.map((fv, index) => ({
        num: index + 1,
        fv_id: fv.fv_id,
        fv_name: fv.fv_name,
        training_group: fv.training_group,
        training_session: fv.training_session,
        tg_tns_id: fv.tg_tns_id,
        farmer_tns_id: fv.farmer_tns_id,
        household_tns_id: fv.household_tns_id,
        pima_household_id: fv.pima_household_id,
        pima_farmer_id: fv.pima_farmer_id,
        farm_visited: fv.farm_visited,
        household_id: fv.household_id,
        farmer_trainer: fv.farmer_trainer,
        has_training: fv.has_training,
        date_visited: fv.date_visited,
        gender: fv.gender,
      }))
    : [];

  if (error)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography color="error">Error loading data</Typography>
      </div>
    );

  return (
    <div className="page__container">
      <h1 className="module__heading">Farm Visits View</h1>
      {loading ? (
        <LoadingScreen />
      ) : farmVisits.length > 0 ? (
        <Table columns={columns} data={rows} tableRowItem={tableRowItem} />
      ) : (
        <div className="no__data">
          <h1 style={{ fontSize: "20px" }}>No Farm Visit Yet</h1>
        </div>
      )}
    </div>
  );
};

export default FarmVisit;
