import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { ExportToCsv } from "export-to-csv";
import { downloadExcel } from "react-export-table-to-excel";

const StyledMenu = styled((props) => <Menu elevation={0} {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 5,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
        "&:hover": {
          backgroundColor: "#f1f5f9",
        },
      },
    },
  })
);

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  marginRight: "10px",
  textTransform: "initial",
  backgroundColor: "transparent",
  color: "rgba(0, 165, 163, 1)",
  borderColor: "rgba(0, 165, 163, 1)", // Change the outline color here


  "&:hover": {
    backgroundColor: "rgba(0, 165, 163, 0.1)",
    color: "rgba(0, 165, 163, 1)",
    transition: "background-color 0.3s ease-in-out",
    borderColor: "rgba(0, 165, 163, 1)", // Change the outline color on hover
  },
  ".MuiButton-outlined": {
    color: " rgba(0, 165, 163, 1)",
  },
}));

export default function Exportbutton({ groups }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isIconUp, setIsIconUp] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsIconUp(!isIconUp);
  };
  const handleClose = (format) => {
    const headers = [
      "Group Name",
      "TNS ID",
      "No of Participants",
      "Business Advisor",
      "Farmer Trainer",
    ];

    try {
      const csvExporter = new ExportToCsv({
        fieldSeparator: ",",
        quoteStrings: '"',
        decimalSeparator: ".",
        showLabels: true,
        useTextFile: false,
        useBom: true,
        filename: `Training Groups ${new Date().toLocaleDateString()}`,
        headers,
      });

      csvExporter.generateCsv(groups.map(({ tg_id, num, ...rest }) => rest));

      if (format === "csv") {
        csvExporter.generateCsv();
      } else if (format === "xls") {
        downloadExcel({
          fileName: `Training Groups ${new Date().toLocaleDateString()}`,
          sheet: "Training Groups",
          tablePayload: {
            headers,
            body: groups.map(({ tg_id, num, ...rest }) => rest),
          },
        });
      }
    } catch (error) {
      console.log(error);
    }

    setAnchorEl(null);
    setIsIconUp(false);
  };

  return (
    <div>
      <StyledButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        variant="outlined"
        onClick={handleClick}
        endIcon={isIconUp ? <FaCaretUp /> : <FaCaretDown />}
      >
        Export
      </StyledButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("csv")} disableRipple>
          Export as CSV
        </MenuItem>
        <MenuItem onClick={() => handleClose("xls")} disableRipple>
          Export as Excel
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
