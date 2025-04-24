import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ASSIGNED_PROJECTS } from "../../../graphql/queries/projectsRequests";
import toast from "react-hot-toast";

export const useAssignedProjects = (userId) => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(
    localStorage.getItem("fav_project") || ""
  );

  const [getProjectsAssigned, { data, error, loading }] = useLazyQuery(GET_ASSIGNED_PROJECTS);

  useEffect(() => {
    if (userId) {
      getProjectsAssigned({ variables: { userId } });
    }
  }, [userId]);

  useEffect(() => {
    if (data?.getProjectsAssigned?.projects?.length > 0) {
      const projects = data.getProjectsAssigned.projects;
      setProjects(projects);

      const stored = localStorage.getItem("fav_project");
      const found = projects.find((p) => p.sf_project_id === stored);
      if (found) {
        setActiveProject(found.sf_project_id);
      } else {
        const fallback = projects[0].sf_project_id;
        setActiveProject(fallback);
        localStorage.setItem("fav_project", fallback);
      }
    }

    if (error) toast.error(error.message);
  }, [data, error]);

  return { projects, activeProject, setActiveProject, loading };
};
