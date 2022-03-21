import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import useStyles from "./style";
import {
  Add,
  ArrowDropDown,
  FavoriteBorder,
  Remove,
  Star,
} from "@mui/icons-material";

const Body = () => {
  const {
    body,
    body__top,
    body__topBtn,
    body__title,
    body__titleInfo,
    body__productInfo,
    body__productOptions,
    body__product,
  } = useStyles();
  return (
    <Container className={body}>
      <Box className={body__top}>
        <Button className={body__topBtn} endIcon={<ArrowDropDown />}>
          Navigation Category A
        </Button>
        <Typography>Navigation Item A</Typography>
      </Box>
      <Box className={body__title}>
        <Typography variant="h4">Product Name ABC</Typography>
        <Typography>Product category name (example: plywood)</Typography>
        <FavoriteBorder
          sx={{ position: "relative", bottom: "50px", left: "97%" }}
        />
        <Box className={body__titleInfo}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Star />
            <Star />
            <Star />
            <Star />
            <Star sx={{ color: "#d1d1d1" }} />
            <Typography sx={{ color: "black" }}>
              4.4 <span>(328 reviews)</span>
            </Typography>
          </Box>
          <Typography
            sx={{ textDecorationLine: "underline", cursor: "pointer" }}
          >
            Build my project
          </Typography>
          <Typography
            sx={{ color: "black", fontWeight: "700", fontSize: "20px" }}
          >
            ₹2110.00 <sub>per sheet</sub>
          </Typography>
        </Box>
      </Box>
      <Box className={body__product}>
        <Typography sx={{ fontWeight: "700", margin: "15px" }}>
          Product Description
        </Typography>
        <Typography fontSize={"15px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id
          vitae sunt dolorem vel. Rerum ipsam, architecto aperiam at nesciunt
          repellendus reiciendis minus, dolore eos commodi corrupti quo facere
          fugiat.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci id vitae sunt dolorem vel. Rerum ipsam, architecto aperiam at
          nesciunt repellendus reiciendis minus, dolore eos commodi corrupti quo
          facere fugiat.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci id vitae sunt dolorem vel. Rerum ipsam, architecto aperiam at
          nesciunt repellendus reiciendis minus, dolore eos commodi corrupti quo
          facere fugiat.
        </Typography>
        <Box className={body__productOptions}>
          <Typography>Available online 189</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "33%",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Quantity</Typography>
            <Remove />1<Add />
          </Box>
          <Button
            sx={{
              backgroundColor: "#ff7a34",
              color: "white",
              borderRadius: "100px",
              "&:hover": {
                backgroundColor: "#ff7a34",
              },
            }}
          >
            Add to cart
          </Button>
        </Box>
        <TableContainer className={body__productInfo}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product specification</TableCell>
                <TableCell align="right">Reviews</TableCell>
                <TableCell align="right">FAQs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3}>Category title A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Find name</TableCell>
                <TableCell colSpan={2}>Field Values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Find name</TableCell>
                <TableCell colSpan={2}>Field Values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Find name</TableCell>
                <TableCell colSpan={2}>Field Values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>Category title B</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Find name</TableCell>
                <TableCell colSpan={2}>Field Values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>Category title C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Find name</TableCell>
                <TableCell colSpan={2}>Field Values</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Body;
