import { useState } from "react";

import { HiFilter } from "react-icons/hi";
import { styled} from "@mui/material/styles";
import { Button } from "@mui/material";
import FilterContent from "./FilterContent";

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  marginRight: "10px",
  textTransform: "initial",
  backgroundColor: "rgba(0, 165, 163, 1)",

  "&:hover": {
    backgroundColor: "rgba(0, 165, 163, 0.5)",
    transition: "background-color 0.3s ease-in-out",
  },
}));

const FilterContainer = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false);
  }

  return (
    <>
      {" "}
      <StyledButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={<HiFilter />}
      >
        Filter
      </StyledButton>
      {open && <FilterContent open={open} handleClose={handleClose} />}
    </>
  );
};

export default FilterContainer;
