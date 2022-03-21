import React from "react";
import useStyles from "./style";
import {
  Add,
  ChevronLeft,
  ChevronRight,
  FavoriteOutlined,
  Star,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

const Cards = ({ title }) => {
  const { card, card__body } = useStyles();
  let items = [1, 2, 3, 4, 5, 6];
  return (
    <Container sx={{ padding: "0px!important", bgcolor: "#f8f8f8" }}>
      <Typography sx={{ padding: "20px 30px" }}>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ChevronLeft />
        <ImageList
          cols={items.length + 2}
          sx={{ width: "100%" }}
          className={card}
        >
          {items.map((i) => (
            <ImageListItem key={i} sx={{ boxShadow: 3 }} className={card__body}>
              <FavoriteOutlined
                sx={{
                  position: "relative",
                  left: "181px",
                  bottom: "5px",
                }}
              />

              <img src="http://placehold.jp/100x100.png" alt="" />
              <Typography fontSize={"15px"}>Product Name ABC</Typography>
              <Box>
                <Star sx={{ height: "20px", color: "#ff7a34" }} />
                <Star sx={{ height: "20px", color: "#ff7a34" }} />
                <Star sx={{ height: "20px", color: "#ff7a34" }} />
                <Star sx={{ height: "20px", color: "#ff7a34" }} />
                <Star sx={{ height: "20px", color: "#d1d1d1" }} />
              </Box>
              <Typography fontSize={"10px"}>
                Quas cum sunt labore quod et, natus dicta magnam accusamus fugit
                debitis, perspiciatis voluptatem ab voluptatum iste nesciunt ut.
                Ut, in magni.
              </Typography>
              <Typography
                sx={{ color: "black", fontWeight: "700", fontSize: "20px" }}
              >
                ₹21.58 <sub>per box</sub>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Checkbox />
                <Add sx={{ color: "#ff7a34" }} />
              </Box>
              <Button
                sx={{
                  backgroundColor: "#ff7a34",
                  margin: "10px 15px",
                  color: "white",
                  borderRadius: "100px",
                  "&:hover": {
                    backgroundColor: "#ff7a34",
                  },
                }}
              >
                Quick Look
              </Button>
            </ImageListItem>
          ))}
        </ImageList>
        <ChevronRight />
      </Box>
    </Container>
  );
};

export default Cards;
