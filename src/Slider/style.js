import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  main: {
    width: "100%",
    display: "flex",
    backgroundColor: "#f8f8f8",
  },
  slider: {
    height: "350px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  slider__image: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#cccccc",
    borderRadius: "5px",
  },
}));
