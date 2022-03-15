import {
  Add,
  ChatOutlined,
  FacebookOutlined,
  Google,
  LocalActivity,
  LocalAirport,
  LocationCity,
  LocationOn,
  MonitorHeartOutlined,
  PanoramaFishEye,
  Twitter,
} from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

import React from "react";
import "./Center.css";

const Center = () => {
  return (
    <div className="center">
      <Grid container p={"0"} rowSpacing={3}>
        <Grid item md={12}>
          <Box
            sx={{
              bgcolor: "#394264",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              height: "410px",
              borderRadius: "5px",
            }}
          >
            <Add sx={{ position: "relative", left: "130px", top: "10px" }} />
            <Avatar
              sx={{
                width: "150px !important",
                height: "150px !important",
                border: "5px solid #9099b7",
              }}
              alt="Anne Hathaway picture"
              src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
            />
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              Anne Hathaway
            </Typography>
            <Typography
              fontSize={"15px"}
              sx={{ opacity: ".5", textAlign: "center" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Box
              sx={{
                color: "white",
              }}
            >
              <Button
                sx={{
                  color: "white",
                  borderTop: "4px solid #fcb150",
                  width: "100px",
                  borderRadius: "0",

                  height: "64px",
                }}
                startIcon={
                  <ChatOutlined
                    sx={{
                      color: "#9099b7",
                      ":hover": {
                        color: "#fcb150",
                      },
                    }}
                  />
                }
              >
                24
              </Button>
              <Button
                sx={{
                  color: "white",
                  borderTop: "4px solid #11a8ab",
                  width: "100px",
                  borderRadius: "0",

                  height: "64px",
                  borderLeft: "1px solid black",
                  borderRight: "1px solid black",
                }}
                startIcon={
                  <PanoramaFishEye
                    sx={{
                      color: "#9099b7",
                      ":hover": {
                        color: "#11a8ab",
                      },
                    }}
                  />
                }
              >
                841
              </Button>
              <Button
                sx={{
                  color: "white",
                  borderTop: "4px solid #e64c65",
                  width: "100px",
                  borderRadius: "0",

                  height: "64px",
                }}
                startIcon={
                  <MonitorHeartOutlined
                    sx={{
                      color: "#9099b7",
                      ":hover": {
                        color: "#e64c65",
                      },
                    }}
                  />
                }
              >
                49
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ bgcolor: "#394264", color: "white", borderRadius: "5px" }}>
            <Box
              sx={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                bgcolor: "#cc324b",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <LocationOn />
              <Typography fontSize={"20px"} fontWeight={"600"}>
                CLUJ-NAPOCA/RO
              </Typography>
            </Box>
            <Box
              sx={{
                paddingLeft: "50px",
                height: "135px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                bgcolor: "#e64c65",
              }}
            >
              <Typography>FRI 29/06</Typography>
              <Typography fontSize={"70px"}>24º</Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 15px",
                  borderRadius: "0",
                  borderBottom: "1px solid black",
                  color: "white",
                }}
              >
                <Typography>Sat 29/06</Typography>
                <Typography>25º</Typography>
              </Button>
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 15px",
                  borderRadius: "0",
                  borderBottom: "1px solid black",
                  color: "white",
                }}
              >
                <Typography>Sat 29/06</Typography>
                <Typography>25º</Typography>
              </Button>
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 15px",
                  borderRadius: "0",
                  borderBottom: "1px solid black",
                  color: "white",
                }}
              >
                <Typography>Sat 29/06</Typography>
                <Typography>25º</Typography>
              </Button>
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 15px",
                  borderRadius: "0",
                  borderBottom: "1px solid black",
                  color: "white",
                }}
              >
                <Typography>Sat 29/06</Typography>
                <Typography>25º</Typography>
              </Button>
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 15px",
                  borderRadius: "0",
                  borderBottom: "1px solid black",
                  color: "white",
                }}
              >
                <Typography>Sat 29/06</Typography>
                <Typography>25º</Typography>
              </Button>
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "18px 15px",
                  borderRadius: "0",
                  color: "white",
                }}
              >
                <Typography>Sat 29/06</Typography>
                <Typography>25º</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ bgcolor: "#394264", borderRadius: "5px" }}>
            <Box
              sx={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                bgcolor: "#35aadc",
                color: "white",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <Twitter />
              <Typography fontSize={"20px"} fontWeight={"600"}>
                Tweetes
              </Typography>
            </Box>
            <Box
              sx={{
                height: "149px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                padding: "0 30px",
                color: "white",
                borderBottom: "1px solid black",
              }}
            >
              <Typography fontSize={"15px"}>
                Ice-cream trucks only play music when out of ice-cream. Well
                played dad. On <span>@Quora</span>
              </Typography>
              <Typography fontSize={"15px"} sx={{ opacity: ".5" }}>
                3 minutes ago
              </Typography>
            </Box>
            <Box
              sx={{
                height: "149px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                padding: "0 30px",
                color: "white",
              }}
            >
              <Typography fontSize={"15px"}>
                We are in the process of pushing out all of the new CC apps! We
                will tweet again once they are live <span>#CreativeCloud</span>
              </Typography>
              <Typography fontSize={"15px"} sx={{ opacity: ".5" }}>
                6 hours ago
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid container item md={12} p={"0"} rowSpacing={1.5}>
          <Grid item md={12}>
            <Box
              sx={{
                bgcolor: "#3468af",
                display: "flex",
                alignItems: "center",

                borderRadius: "5px",
              }}
            >
              <Button sx={{ width: "100%", height: "60px", color: "white" }}>
                <FacebookOutlined
                  sx={{ position: "relative", right: "25px" }}
                />
                <Typography>SHARE TO FACEBOOK</Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ bgcolor: "#394264" }}>
              <Box
                sx={{
                  bgcolor: "#4fc4f6",
                  display: "flex",
                  alignItems: "center",

                  borderRadius: "5px",
                }}
              >
                <Button sx={{ width: "100%", height: "60px", color: "white" }}>
                  <Twitter sx={{ position: "relative", right: "25px" }} />
                  <Typography>SHARE TO TWITTER</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box>
              <Box
                sx={{
                  bgcolor: "#e64c65",
                  display: "flex",
                  alignItems: "center",

                  borderRadius: "5px",
                }}
              >
                <Button sx={{ width: "100%", height: "60px", color: "white" }}>
                  <Google sx={{ position: "relative", right: "25px" }} />
                  <Typography>SHARE TO GOOGLE+</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Center;
