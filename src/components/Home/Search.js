import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "60%",
        height: "2.5rem",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ "aria-label": "search google maps" }}
      />
      <div style={{ backgroundColor: "#c8904a" }}>
        <IconButton
          onClick={() => {
            console.log("x");
          }}
          type="button"
          sx={{
            backgroundColor: "#c8904a",
            margin: "0",
          }}
          aria-label="search"
        >
          <SearchIcon></SearchIcon>
        </IconButton>
      </div>
      <Divider sx={{ height: 28 }} orientation="vertical" />
    </Paper>
  );
}
