import React from "react";
import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import useStyles from "./style";
import { KeyboardArrowDown } from "@mui/icons-material";

const Slider = () => {
  const { slider, slider__image } = useStyles();
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <Container sx={{}}>
      <ImageList className={slider} cols={1}>
        {items.map((item) => (
          <ImageListItem sx={{ width: "35%", height: "35%" }} key={item}>
            <Box className={slider__image}>
              <img src="http://placehold.jp/75x75.png" alt="" />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <KeyboardArrowDown
        sx={{ position: "relative", left: "28px", bottom: "10px" }}
      />
    </Container>
  );
};

export default Slider;
