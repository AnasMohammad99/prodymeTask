import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    alignItems: "center",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  card__body: {
    width: "200px",
    margin: "5px",
    display: "flex",
    backgroundColor: "#ffffff",
    padding: "15px",
  },
  card__img: {},
}));
