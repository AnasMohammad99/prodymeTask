import React, { useState } from "react";
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  CloudDownload,
  CloudUpload,
  FacebookRounded,
  MessageOutlined,
  PasswordOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  InputBase,
  LinearProgress,
  Typography,
} from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./Right.css";
import { CalendarPicker } from "@mui/lab";
const Right = () => {
  const week = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "stureday",
  ];

  const [date, setDate] = useState(new Date());

  return (
    <div className="right">
      <Grid container p={"0"} rowSpacing={3}>
        <Grid item md={12}>
          <Box
            sx={{
              bgcolor: "#394264",
              color: "white",
              width: "300px",
              height: "230px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <Typography fontWeight={"600"} fontSize={"17px"}>
              JOIN THE NEWSLETTER
            </Typography>
            <InputBase
              sx={{
                color: "white",
                border: "solid 1px #1f253d",
                padding: "10px 20px",
                bgcolor: "#50597b",
                borderRadius: "5px",
                ":focus": {
                  border: "solid 10px #11a8ab",
                },
              }}
              id="input-with-icon-adornment"
              placeholder="yourmail@gmail.com"
              startAdornment={
                <InputAdornment position="start">
                  <MessageOutlined
                    sx={{
                      color: "#9099b7",
                    }}
                  />
                </InputAdornment>
              }
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#11a8ab",
                p: "0",
                width: "175px",
                height: "50px",
                margin: " 0 auto",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box
            sx={{
              bgcolor: "#394264",
              color: "white",
              width: "300px",
              height: "390px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <Typography fontWeight={"600"} fontSize={"17px"}>
              SIGN IN TO YOUR ACCOUNT
            </Typography>
            <InputBase
              sx={{
                color: "white",
                border: "solid 1px #1f253d",
                padding: "10px 20px",
                bgcolor: "#50597b",
                borderRadius: "5px",
                ":focus": {
                  border: "solid 10px #11a8ab",
                },
              }}
              id="input-with-icon-adornment"
              placeholder="yourmail@gmail.com"
              startAdornment={
                <InputAdornment position="start">
                  <MessageOutlined
                    sx={{
                      color: "#9099b7",
                    }}
                  />
                </InputAdornment>
              }
            />
            <InputBase
              sx={{
                color: "white",
                border: "solid 1px #1f253d",
                padding: "10px 20px",
                bgcolor: "#50597b",
                borderRadius: "5px",
                ":focus": {
                  border: "solid 10px #11a8ab",
                },
              }}
              id="input-with-icon-adornment"
              placeholder="Password"
              startAdornment={
                <InputAdornment position="start">
                  <PasswordOutlined
                    sx={{
                      color: "#9099b7",
                    }}
                  />
                </InputAdornment>
              }
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#e64c65",
                p: "0",
                width: "175px",
                height: "50px",
                margin: " 0 auto",
              }}
            >
              SIGN UP
            </Button>
            <Typography fontSize={"15px"} sx={{ opacity: ".5" }}>
              Forgot Password?
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0 0 5px 5px",
                position: "relative",
                bgcolor: "#3468af",
                p: "0",
                width: "100%",
                height: "50px",
                margin: " 0",
                top: "20px",
              }}
              startIcon={<FacebookRounded />}
            >
              Sign in with Facebook
            </Button>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box
            sx={{
              bgcolor: "#394264",
              color: "white",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignContent: "center",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                margin: "auto",
              }}
            >
              <LinearProgress
                sx={{
                  width: "100%",
                  height: "25px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
                variant="determinate"
                value={81}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CloudDownload />
                <Typography>Downloading...</Typography>
                <Typography>
                  81<sup>%</sup>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                margin: "auto",
              }}
            >
              <LinearProgress
                sx={{
                  width: "100%",
                  height: "25px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
                variant="determinate"
                value={45}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CloudUpload />
                <Typography>Uploading...</Typography>
                <Typography>
                  45<sup>%</sup>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box
            sx={{
              width: "300px",
              height: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "#3468af",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#1a4e95",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <ChevronLeftRounded />
              <Typography fontSize={"20px"} fontWeight={"600"}>
                {week[+date.getDay()]}
              </Typography>
              <ChevronRightRounded />
            </Box>
            <Typography fontSize={"146px"}>{date.getDate()}</Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#11a8ab",
                p: "0",
                width: "175px",
                height: "50px",
                position: "relative",
                bottom: "42px",
              }}
            >
              Add EVENT
            </Button>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ bgcolor: "#394264", borderRadius: "5px" }}>
            <Box sx={{ position: "relative", right: "10px" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CalendarPicker
                  date={date}
                  onChange={(newDate) => {
                    return setDate(newDate);
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Right;
