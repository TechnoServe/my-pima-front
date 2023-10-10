// UsersForm.js
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ADD_USER, UPDATE_USER } from "../graphql/queries/usersRequests";
import { GET_ALL_ROLES } from "../graphql/queries/rolesRequests";
import toast from "react-hot-toast";

const UsersForm = ({ onSubmit, selectedUser, onSelect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userEmail: "",
    mobileNo: "",
    roleId: "",
    accountStatus: "active",
  });

  const [updateUser] = useMutation(UPDATE_USER);
  const [addUser] = useMutation(ADD_USER);

  const getRoles = useQuery(GET_ALL_ROLES);

  useEffect(() => {
    if (
      getRoles.data &&
      getRoles.data.getRoles &&
      getRoles.data.getRoles.roles &&
      getRoles.data.getRoles.roles.length > 0
    ) {
      const roles = getRoles.data.getRoles.roles.map((role) => {
        return {
          value: role.role_id,
          label: role.role_name,
        };
      });

      setRoles(roles);

      if (selectedUser) {
        const selectedRole = roles.find(
          (role) => role.value === selectedUser.role.role_id
        );

        setSelectedRole(selectedRole);
      }
    }
  }, [getRoles.data]);

  useEffect(() => {
    if (selectedUser) {
      setUserInfo({
        userName: selectedUser.user_name,
        userEmail: selectedUser.user_email || "",
        mobileNo: selectedUser.mobile_no || "",
        roleId: selectedUser.role.role_id,
        accountStatus: selectedUser.account_status,
      });
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (selectedUser) {
      const { data } = await updateUser({
        variables: {
          userId: selectedUser.user_id,
          accountStatus: userInfo.accountStatus,
          userEmail: userInfo.userEmail,
          mobileNo: userInfo.mobileNo,
          userName: userInfo.userName,
          roleId: userInfo.roleId,
        },
      });

      if (data && data.updateUser && data.updateUser.status === 200) {
        toast.success("User updated successfully");

        onSubmit(data.updateUser.user);
      } else {
        toast.error(data.updateUser.message);
      }
    } else {
      const { data } = await addUser({
        variables: {
          userEmail: userInfo.userEmail,
          mobileNo: userInfo.mobileNo,
          userName: userInfo.userName,
          roleId: userInfo.roleId,
          userPassword: "MP@1234",
        },
      });

      if (data && data.addUser && data.addUser.status === 201) {
        toast.success("User added successfully");
        onSubmit(data.addUser.user);
      } else {
        toast.error(data.addUser.message);
      }
    }

    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        {selectedUser ? "Edit User" : "Add User"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={userInfo.userName}
          onChange={(e) =>
            setUserInfo({ ...userInfo, userName: e.target.value })
          }
          variant="standard"
          fullWidth
        />
        <TextField
          label="Email"
          value={userInfo.userEmail}
          onChange={(e) =>
            setUserInfo({ ...userInfo, userEmail: e.target.value })
          }
          variant="standard"
          fullWidth
        />
        <TextField
          label="Mobile No."
          value={userInfo.mobileNo}
          onChange={(e) =>
            setUserInfo({ ...userInfo, mobileNo: e.target.value })
          }
          variant="standard"
          fullWidth
        />
        <Box sx={{ marginTop: "10px" }}>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Role
          </Typography>
          <Select
            name="role"
            value={selectedRole}
            options={roles}
            onChange={(e) => {
              setSelectedRole(e);
              setUserInfo({ ...userInfo, roleId: e.value });
            }}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </Box>
        {selectedUser && (
          <Box sx={{ marginTop: "10px" }}>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              Account Status
            </Typography>
            <Select
              name="status"
              value={{
                value: userInfo.accountStatus,
                label: userInfo.accountStatus,
              }}
              options={[
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
              onChange={(e) =>
                setUserInfo({ ...userInfo, accountStatus: e.value })
              }
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </Box>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            marginTop: "20px",
          }}
          disabled={isLoading || !userInfo.userName || !userInfo.roleId}
        >
          {selectedUser ? "Modify" : "Save New"}
        </Button>
        {selectedUser && (
          <Button
            type="submit"
            variant="standard"
            color="secondary"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
            onClick={() => {
              onSelect(null);
              setUserInfo({
                userName: "",
                userEmail: "",
                mobileNo: "",
                roleId: "",
                accountStatus: "active",
              });
            }}
            disabled={isLoading}
          >
            Cancel
          </Button>
        )}
      </form>
    </Box>
  );
};

export default UsersForm;
