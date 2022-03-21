import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  body: {
    background: "#f8f8f8",
    padding: "0 !important",
    width: "72.5% !important",
    paddingLeft: "30px !important",
  },
  body__top: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
    marginTop: "5px",
  },
  body__topBtn: {
    border: "0",
    backgroundColor: "transparent",
    color: "black !important",
  },
  body__title: {
    marginTop: "5%",
    width: "85%",
  },
  body__titleInfo: {
    color: "#ff7a34",
    "& span": {
      color: "#d1d1d1",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body__product: {
    margin: "3% 14% 0 20%",
    overflow: "hidden",
    overflowY: "scroll",
    height: "375px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  body__productOptions: {
    margin: "5% 0 8% 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body__productInfo: {},
}));
