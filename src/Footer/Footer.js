import React from "react";
import { Box, Container, Typography } from "@mui/material";
import useStyles from "./style";

const Footer = () => {
  const { footer, footer__bottom, footer__body } = useStyles();
  return (
    <Container className={footer}>
      <Box className={footer__body}>body</Box>
      <Box className={footer__bottom}>
        <Typography sx={{ color: "#c1c1c1", fontSize: "13px" }}>
          Copyright 2021 wrhouze. All rights reserved | Terms of us | Privacy
          Policy
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
