import * as React from "react";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#25245D", 
    fontWeight: "600", 
  },
}));

const Breadcrumb = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ fontSize: "12px", cursor: "pointer" }}
      >
        <CustomLink to="/traingroup">Training group</CustomLink>
        <CustomLink href="" aria-current="page">
          Tegbar Masaya
        </CustomLink>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
