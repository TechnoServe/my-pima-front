import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { UPDATE_ROLE } from "../graphql/queries/rolesRequests";
import toast from "react-hot-toast";

const PermissionsList = ({ roles, role, permissions, setRoles }) => {
  const [selectedPermission, setSelectedPermission] = useState(
    role.permissions[0]
  );

  const [saveLoading, setSaveLoading] = useState(false);

  const [updateRole] = useMutation(UPDATE_ROLE);

  const handlePermissionChange = (event) => {
    setSelectedPermission(event.target.value);
  };

  const handlePermissionsUpdate = async () => {
    setSaveLoading(true);

    await updateRole({
      variables: {
        roleId: role.role_id,
        permissions: [selectedPermission],
      },
    })
      .then((res) => {
        if (res.data.updateRole.status === 200) {
          setRoles((prevRoles) => {
            const newRoles = [...prevRoles];
            const index = newRoles.findIndex(
              (newRole) => newRole.role_id === role.role_id
            );

            role.permissions = [selectedPermission];
            newRoles[index] = role;

            return newRoles;
          });

          setSaveLoading(false);

          toast.success("Permissions updated successfully!");
        } else {
          setSaveLoading(false);

          toast.error("Something went wrong! Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error("Something went wrong! Please try again.");
        setSaveLoading(false);
      });
  };

  useEffect(() => {
    setSelectedPermission(role.permissions[0]);
  }, [role]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#000000",
          }}
        >
          Permissions for{" "}
          {role.role_name
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {permissions &&
            permissions.length > 0 &&
            permissions.map((permission) => (
              <FormControlLabel
                key={permission.perm_id}
                value={permission.perm_id}
                control={
                  <Radio
                    onChange={handlePermissionChange}
                    name={permission.perm_name}
                    checked={selectedPermission === permission.perm_id}
                  />
                }
                label={permission.perm_name}
              />
            ))}
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        sx={{ width: "150px", mt: 5 }}
        onClick={handlePermissionsUpdate}
        disabled={selectedPermission === role.permissions[0] || saveLoading}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default PermissionsList;
