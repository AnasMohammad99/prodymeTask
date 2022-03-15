import React from "react";
import "./Left.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Grid, List, Typography } from "@mui/material";
import {
  Add,
  Facebook,
  Google,
  InsertInvitationOutlined,
  Maximize,
  MaximizeRounded,
  MessageOutlined,
  PlayArrow,
  PlayCircle,
  PlayCircleOutline,
  QueryStats,
  SendOutlined,
  Settings,
  Twitter,
  VolumeUp,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Left = () => {
  const data = {
    labels: ["red", "yellow", "blue", "orange"],
    datasets: [
      {
        data: [30, 55, 45, 20],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(232,99,132,1)",
          "rgba(232,211,6,1)",
          "rgba(54,200,235,1)",
          "rgba(255,159,64,1)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };
  const data2 = {
    labels: ["Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [0, 63, 31, 65, 59, 80],
        fill: false,
        borderColor: "rgba(255,255,255,1)",
        backgroundColor: "white",

        tension: 0.1,
      },
    ],
  };
  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Doughnut Chart",
  //       color: "blue",
  //       font: {
  //         size: 34,
  //       },
  //       padding: {
  //         top: 30,
  //         bottom: 30,
  //       },
  //       responsive: true,
  //       animation: {
  //         animateScale: true,
  //       },
  //     },
  //   },
  // };
  return (
    <div className="left">
      <Grid container rowSpacing={3}>
        <Grid item md={12}>
          <Box sx={{ bgcolor: "#394264", borderRadius: "5px" }}>
            <div className="left__menuBox">
              <List
                disablePadding
                sx={{
                  borderRadius: "5px",
                  bgcolor: "#394264",
                  color: "#9099b7",
                }}
              >
                <h2 className="left__menuBoxTitle">MENU BOX</h2>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MessageOutlined
                        sx={{
                          color: "#9099b7",
                          height: "44px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SendOutlined sx={{ color: "#9099b7", height: "44px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Invites" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InsertInvitationOutlined
                        sx={{ color: "#9099b7", height: "44px" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Events" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Settings sx={{ color: "#9099b7", height: "44px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <QueryStats sx={{ color: "#9099b7", height: "44px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Statistics" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Box>
        </Grid>

        <Grid item md={12}>
          <Box
            sx={{
              bgcolor: "#394264",
              height: "348px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Typography
              fontSize={"17px"}
              textAlign={"center"}
              color={"white"}
              fontWeight={"600"}
            >
              OS AUDIENCE STATS
            </Typography>
            <Box height={"250px"} width={"250px"}>
              <Doughnut data={data} />
            </Box>
            <Typography
              sx={{ color: "white", position: "relative", bottom: "120px" }}
            >
              JUNE <span>2013</span>
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#50597b",
              height: "86px",
              display: "flex",
              textAlign: "center",

              borderRadius: "0 0 5px 5px",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid black",
                width: "25%",
                borderTop: "4px solid #e64c65",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <Typography>ios</Typography>
              <Typography>21%</Typography>
            </Box>
            <Box
              sx={{
                borderRight: "1px solid black",
                width: "25%",
                borderTop: "4px solid #11a8ab",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <Typography>Mac</Typography>
              <Typography>84%</Typography>
            </Box>
            <Box
              sx={{
                borderRight: "1px solid black",
                width: "25%",
                borderTop: "4px solid #fcb150",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <Typography>linux</Typography>
              <Typography>9%</Typography>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderTop: "4px solid #4fc4f6",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <Typography>win</Typography>
              <Typography>32%</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item md={12}>
          <Box sx={{ bgcolor: "#11a8ab", color: "white", borderRadius: "5px" }}>
            <Line data={data2} />

            <Box sx={{ bgcolor: "#394264", borderRadius: " 0 0 5px 5px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "10px",
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "#50597b",
                    ":hover": {
                      bgcolor: "#e64c65",
                    },
                  }}
                >
                  Week
                </Button>
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "#50597b",
                    ":hover": {
                      bgcolor: "#e64c65",
                    },
                  }}
                >
                  Month
                </Button>
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "#50597b",
                    ":hover": {
                      bgcolor: "#e64c65",
                    },
                  }}
                >
                  Year
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <Typography>
                  APR <span>2013</span>
                </Typography>
                <Add />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <Typography>
                  MAY <span>2013</span>
                </Typography>
                <Add />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <Typography>
                  JUN <span>2013</span>
                </Typography>
                <Add />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box
            sx={{
              bgcolor: "#787878",
              height: "180px",
              color: "white",
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PlayCircleOutline />
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "#394264",
              height: "30px",
              padding: "0 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              borderRadius: " 0 0 5px 5px",
            }}
          >
            <PlayArrow />
            <Typography>4:15/9:23</Typography>
            <Box>
              <VolumeUp />
              <Maximize />
            </Box>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ display: "flex", borderRadius: "5px" }}>
            <Box
              sx={{
                width: "25%",
                bgcolor: "#3468af",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "5px 0 0 5px",
              }}
            >
              <Facebook sx={{ height: "76px", color: "white" }} />
              <Box
                sx={{
                  width: "100%",
                  height: "34px",
                  color: "white",
                  bgcolor: "#1a4e95",
                  textAlign: "center",
                  borderRadius: "0 0 0 5px",
                }}
              >
                <Typography>248k</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "25%",
                bgcolor: "#4fc4f6",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Twitter sx={{ height: "76px", color: "white" }} />
              <Box
                sx={{
                  width: "100%",
                  height: "34px",
                  color: "white",
                  bgcolor: "#35aadc",
                  textAlign: "center",
                }}
              >
                <Typography>30k</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "25%",
                bgcolor: "#e64c65",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Google sx={{ height: "76px", color: "white" }} />
              <Box
                sx={{
                  width: "100%",
                  height: "34px",
                  color: "white",
                  bgcolor: "#cc324b",
                  textAlign: "center",
                }}
              >
                <Typography>124k</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "25%",
                bgcolor: "#50597b",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0 5px 5px 0",
              }}
            >
              <MessageOutlined sx={{ height: "76px", color: "white" }} />
              <Box
                sx={{
                  width: "100%",
                  height: "34px",
                  color: "white",
                  bgcolor: "#363f61",
                  textAlign: "center",
                  borderRadius: "0 0  5px 0",
                }}
              >
                <Typography>89k</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Left;
