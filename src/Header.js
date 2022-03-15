import React from "react";
import "./Header.css";
import {
  ExpandMore,
  MessageOutlined,
  People,
  Settings,
  StarOutline,
} from "@mui/icons-material/";
import { Button, IconButton, Typography, Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="">
      <div className="head">
        <div className="head__left">
          <Button
            sx={{
              borderRadius: "0",
              color: "white",
              height: "80px",
              p: "0 19px",

              ":hover": {
                borderBottom: " solid 3px #11a8ab",
              },
            }}
            className="header__icon"
            startIcon={
              <Settings
                sx={{
                  color: "#9099b7",
                }}
              />
            }
          >
            Settings
          </Button>
          <Button
            sx={{
              color: "white",
              height: "80px",

              borderRadius: "0",
              p: "0 19px",

              ":hover": {
                borderBottom: " solid 3px #11a8ab",
              },
            }}
            startIcon={
              <People
                sx={{
                  color: "#9099b7",
                }}
              />
            }
          >
            Account
          </Button>
          <Button
            sx={{
              color: "white",
              height: "80px",

              borderRadius: "0",
              p: "0 19px",

              ":hover": {
                borderBottom: " solid 3px #11a8ab",
              },
            }}
            startIcon={
              <MessageOutlined
                sx={{
                  color: "#9099b7",
                }}
              />
            }
          >
            Messages
          </Button>
          <Button
            sx={{
              color: "white",
              height: "80px",

              borderRadius: "0",
              p: "0 19px",

              ":hover": {
                borderBottom: " solid 3px #11a8ab",
              },
            }}
            startIcon={
              <StarOutline
                sx={{
                  color: "#9099b7",
                }}
              />
            }
          >
            Favourite
          </Button>
        </div>

        <div className="head__right">
          <Typography
            sx={{
              color: "white",

              borderRadius: "0",
            }}
            variant=""
          >
            ME
          </Typography>
          <IconButton
            sx={{
              color: "white",

              borderRadius: "0",
            }}
          >
            <ExpandMore />
          </IconButton>
          <Avatar
            alt="Anne Hathaway picture"
            src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
