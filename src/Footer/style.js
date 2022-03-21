import { makeStyles } from "@mui/styles";
import Fate from "../items/download.png";
import { alpha } from "@mui/material";

export default makeStyles(() => ({
  footer: {
    backgroundImage: `url(${Fate})`,
    height: "300px",
    padding: "0 !important",
  },
  footer__body: {
    height: "70%",
  },
  footer__bottom: {
    background: alpha("#000", 0.5),
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
