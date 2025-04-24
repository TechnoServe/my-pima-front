import { useEffect, useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_TRAINING_MODULES_PER_PROJECT } from "../../../graphql/queries/trainingModulesRequests";

export const useDashboardData = (
  trainingGroups = [],
  projectStats = {},
  selectedProject = ""
) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  const { data, loading, error } = useQuery(GET_TRAINING_MODULES_PER_PROJECT, {
    variables: { projectId: selectedProject },
    skip: !selectedProject,
  });

  const modules = useMemo(() => {
    const mods = data?.getTrainingModulesByProject?.training_modules || [];
    return mods.map((mod) => ({
      title: mod.tm_date || "No date",
      cardTitle: mod.tm_is_current ? `${mod.tm_title} (Current)` : mod.tm_title,
      cardSubtitle: `Session Number: ${mod.tm_module_number}`,
      isCurrent: mod.tm_is_current,
    }));
  }, [data]);

  const statsData = useMemo(() => {
    const trainingModules = data?.getTrainingModulesByProject?.training_modules || [];

    return [
      {
        name: "total_training_groups",
        heading: "Total FFGs",
        figures: trainingGroups.length,
        iconName: "MdGroups",
        color: "#25245D",
        path: "/in/traingroup",
      },
      {
        name: "total_training_modules",
        heading: "Completed Sessions",
        figures: trainingModules.length,
        iconName: "VscFileSubmodule",
        color: "#25245D",
      },
      {
        name: "total_completed_training_modules",
        heading: "Completed Topics",
        figures: trainingModules.filter((m) => !m.tm_is_current).length,
        iconName: "VscFileSubmodule",
        color: "#25245D",
        path: "/in/trainsession",
      },
      {
        name: "total_participants",
        heading: "Registered Farmers",
        figures: trainingGroups
          .map((g) => g.total_participants || 0)
          .reduce((a, b) => a + b, 0)
          .toLocaleString(),
        iconName: "BsPersonBoundingBox",
        color: "#087C8F",
        path: "/in/participants",
      },
      {
        name: "total_households",
        heading: "Registered Households",
        figures: trainingGroups
          .map((g) => g.total_households || 0)
          .reduce((a, b) => a + b, 0)
          .toLocaleString(),
        iconName: "GiFarmer",
        color: "#F46700",
      },
      {
        name: "trained_farmers",
        heading: "Trained Farmers",
        figures: "N/A",
        iconName: "GiFarmer",
        color: "#F46700",
      },
      {
        name: "total_bas",
        heading: "Agronomy Advisors",
        figures: projectStats?.total_bas || 0,
        iconName: "FaTripadvisor",
        color: "#F46700",
      },
      {
        name: "total_fts",
        heading: "Farmer Trainers",
        figures: projectStats?.total_fts || 0,
        iconName: "GiFarmer",
        color: "#F46700",
      },
    ];
  }, [trainingGroups, data, projectStats]);

  const openList = (e, name) => {
    e.preventDefault();

    const map = {
      total_bas: {
        title: "Business Advisors",
        list: [...new Set(trainingGroups.map((g) => g.business_advisor).filter(Boolean))],
      },
      total_fts: {
        title: "Farmer Trainers",
        list: [...new Set(trainingGroups.map((g) => g.farmer_trainer).filter(Boolean))],
      },
    };

    if (map[name]) {
      setOpen(true);
      setTitle(map[name].title);
      setList(map[name].list);
    }
  };

  return {
    modules,
    statsData,
    open,
    setOpen,
    list,
    title,
    loading,
    error,
    openList,
  };
};
