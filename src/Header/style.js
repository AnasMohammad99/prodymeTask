import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    margin: "0",
    height: "50px",
    display: "flex",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
    marginLeft: "50%",
  },
  appBar__button: {
    color: "black !important",
    fontSize: "12px !important",
  },
  appBar__iconNote: {
    color: "white",
    backgroundColor: "#ff7a34",
    fontSize: "13px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15px",
    height: "15px",
    borderRadius: "10px",
    position: "relative",
    bottom: "10px",
    right: "25px",
  },
}));
