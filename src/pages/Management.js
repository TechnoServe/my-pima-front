import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import AssignProjects from "../components/AssignProjects";
import Users from "./Users";
import Permissions from "./Permissions";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/queries/usersRequests";
import { GET_ALL_PERMISSIONS } from "../graphql/queries/permissionsRequests";
import { GET_ALL_ROLES } from "../graphql/queries/rolesRequests";

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Management({ allProjects }) {
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);
  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData"));

  const getAllUsers = useQuery(GET_ALL_USERS);

  const getAllPermissions = useQuery(GET_ALL_PERMISSIONS);

  const getAllRoles = useQuery(GET_ALL_ROLES);

  useEffect(() => {
    if (getAllUsers.data) {
      setUsers(getAllUsers.data.getUsers.users);
    }
  }, [getAllUsers.data]);

  useEffect(() => {
    if (getAllPermissions.data) {
      setPermissions(getAllPermissions.data.getPermissions.permissions);
    }
  }, [getAllPermissions.data]);

  useEffect(() => {
    if (getAllRoles.data) {
      setRoles(getAllRoles.data.getRoles.roles);
    }
  }, [getAllRoles.data]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {userDetails.role !== "super_admin" &&
      userDetails.role !== "ci_leadership" ? (
        <Typography variant="h4" component="h2" sx={{ marginTop: "20px" }}>
          You are not authorized to access this page.
        </Typography>
      ) : (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="management tabs"
            >
              <Tab label="Assign Projects" {...a11yProps(0)} />
              <Tab label="Assign Permissions" {...a11yProps(1)} />
              <Tab label="Users" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <AssignProjects allProjects={allProjects} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Permissions
              permissions={permissions}
              roles={roles}
              setRoles={setRoles}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Users users={users} setUsers={setUsers} />
          </CustomTabPanel>
        </Box>
      )}
    </>
  );
}
