// src/layouts/hooks/useSustainabilityData.js

import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { GET_WETMILLS } from "../../../graphql/queries/wetmills";

export const useSustainabilityData = (program) => {
  const [wetmills, setWetmills] = useState([]);

  // skip if no program selected (keeps symmetry with useProjectData’s skip logic)
  const { data, loading, error } = useQuery(GET_WETMILLS, {
    skip: !program,
    variables: { program },      // if your query supports filtering by program
    fetchPolicy: "no-cache",
  });

  // surface errors via toast, like you do elsewhere
  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  // map GraphQL payload → [{id,name},…]
  useEffect(() => {
    const list = data?.getWetmills?.wetmills;
    if (list) {
      setWetmills(
        list.map((w) => ({
          id: w.wet_mill_unique_id,
          name: w.name,
        }))
      );
    }
  }, [data]);

  return {
    wetmills,
    loading,
  };
};
