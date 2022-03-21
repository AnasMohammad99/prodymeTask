import React, { useState } from "react";
import {
  Container,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Button,
} from "@mui/material";
import useStyles from "./style";
import Slider from "../Slider/Slider";

const Sidebar = () => {
  const { sidebar, sidebar__Button, sidebar__tags, sidebar__tagsBtn } =
    useStyles();
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container className={sidebar}>
      <ToggleButtonGroup
        sx={{ paddingBottom: "40px" }}
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          className={sidebar__Button}
          value="left"
          aria-label="left aligned"
        >
          Home
        </ToggleButton>
        <ToggleButton
          className={sidebar__Button}
          value="right"
          aria-label="right aligned"
        >
          Product Deatail Page
        </ToggleButton>
      </ToggleButtonGroup>
      <Box className={sidebar__tags}>
        <Typography>Tags</Typography>
        <Button className={sidebar__tagsBtn}>Kitchen</Button>
        <Button className={sidebar__tagsBtn}>L-Shape</Button>
        <Button className={sidebar__tagsBtn}>Sustainable</Button>
      </Box>
      <Slider />
    </Container>
  );
};

export default Sidebar;
