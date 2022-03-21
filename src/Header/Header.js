import React from "react";
import { Container, Box, Input, Button, Typography } from "@mui/material";
import useStyles from "./style";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";

const Header = () => {
  const { appBar, appBar__search, appBar__button, appBar__iconNote } =
    useStyles();
  return (
    <Container>
      <Box className={appBar}>
        <Box className={appBar__search}>
          <Input placeholder="search" endAdornment={<Search />} />
        </Box>
        <ShoppingCartOutlined />
        <Typography className={appBar__iconNote}>5</Typography>
        <Button fontSize={"15px"} className={appBar__button}>
          Contact Us
        </Button>
        <Button fontSize={"15px"} className={appBar__button}>
          Login/sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Header;
