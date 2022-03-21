import React from "react";
import { Container, Box } from "@mui/material";
import "./App.css";
import Header from "./Header/Header";
import useStyles from "./style";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
const App = () => {
  const { head, main } = useStyles();
  return (
    <Container>
      <Box className={head}>
        <Header />
      </Box>
      <Box className={main}>
        <Sidebar />
        <Body />
      </Box>
      <Box>
        <Cards title={"Recommended Products for you"} />
      </Box>
      <Box>
        <Cards title={"Similer Products"} />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default App;
